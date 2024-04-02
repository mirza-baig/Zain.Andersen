// We can ignore explicit any warning for this file, which is containing util functions
/* eslint-disable @typescript-eslint/no-explicit-any */
export const deepSearch = <T>(
  root: any,
  predicate: (obj: T | any) => boolean,
  stopAtFirst = false
) => {
  const processedObjects: any[] = [];
  const matchingObjects: T[] = [];
  (function find(obj) {
    if (predicate(obj) === true) {
      matchingObjects.push(obj);
      if (stopAtFirst) {
        return;
      }
    }
    for (const key of Object.keys(obj)) {
      const o: any = (obj as any)[key] as any;
      if (o && typeof o === 'object') {
        if (!processedObjects.find((obj) => obj === o)) {
          processedObjects.push(o);
          find(o);
        }
      }
    }
  })(root);
  return matchingObjects;
};

export type SearchWithParentResult<T> = {
  result: T;
  parent?: any;
  keyOrIndexAsString?: string;
};
export const deepSearchWithParent = <T>(
  root: any,
  predicate: (obj: T | any) => boolean,
  stopAtFirst = false
) => {
  const processedObjects: any[] = [];
  const matchingObjects: SearchWithParentResult<T>[] = [];
  (function find(obj: any, parent?: any, keyOnParent?: string) {
    if (predicate(obj) === true) {
      matchingObjects.push({ result: obj, parent, keyOrIndexAsString: keyOnParent });
      if (stopAtFirst) {
        return;
      }
    }
    if (Array.isArray(obj)) {
      // Note: We need to iterate backwards for arrays so that we remove later objects first, to keep indexes in tact.
      for (let index = obj.length - 1; index >= 0; index--) {
        // We could refactor this to be more type-safe but we're dealing with dynamic types anyway and it would complicate the code
        const o = obj[index] as any;
        // Arrays are also considered objects
        if (o && typeof o === 'object') {
          const objectAlreadyProcessed = !processedObjects.find((obj) => obj === o);
          // Prevent infinite loop
          if (objectAlreadyProcessed) {
            processedObjects.push(o);
            find(o, obj, index.toString());
          } else if (predicate(o)) {
            // The same object might appear in more than one spot, so for the case of removal
            // we want to still track it separately because we need to remove from different parents
            // This will however not recurse so it won't cause infinite recursion
            matchingObjects.push({ result: o, parent: obj, keyOrIndexAsString: index.toString() });
          }
        }
      }
    } else {
      // Note: This doesn't for arrays, because removing them when going forward causes the index to be off.
      for (const key of Object.keys(obj)) {
        // We could refactor this to be more type-safe but we're dealing with dynamic types anyway and it would complicate the code
        const o = obj[key] as any;
        // Arrays are also considered objects
        if (o && typeof o === 'object') {
          const objectAlreadyProcessed = !processedObjects.find((obj) => obj === o);
          // Prevent infinite loop
          if (objectAlreadyProcessed) {
            processedObjects.push(o);
            find(o, obj, key);
          } else if (predicate(o)) {
            // The same object might appear in more than one spot, so for the case of removal
            // we want to still track it separately because we need to remove from different parents
            // This will however not recurse so it won't cause infinite recursion
            matchingObjects.push({ result: o, parent: obj, keyOrIndexAsString: key });
          }
        }
      }
    }
  })(root);
  return matchingObjects;
};
