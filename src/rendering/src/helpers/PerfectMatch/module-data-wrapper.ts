import { URLSearchParams } from 'url';
import { PerfectMatchFilters } from './Store/filters-slice';
import { PerfectMatchModuleData, PerfectMatchProperties, PerfectMatchSteps } from './types';

export class ModuleDataWrapper {
  data: PerfectMatchModuleData;

  constructor(data: PerfectMatchModuleData) {
    this.data = data;
  }

  findValuesForResults(filters: PerfectMatchFilters, propertyName: PerfectMatchProperties) {
    const results = this.findResultsForFilters(filters);
    return results.reduce(
      (found, currentResult) =>
        currentResult.options[propertyName]
          ? found.concat(currentResult.options[propertyName] ?? [])
          : found,
      [] as string[]
    );
  }

  findOptionsForResults(filters: PerfectMatchFilters, propertyName: PerfectMatchProperties) {
    // Build the list of all available options
    const matchingOptionIds = this.findValuesForResults(filters, propertyName);

    // We could have duplicates, so filter them out
    const options = this.data.options.filter((option) => matchingOptionIds.indexOf(option.id) > -1);

    // Sort the options
    options.sort((a, b) => a.sortOrder - b.sortOrder);

    return options;
  }

  getUniqueWidthsAndHeightsForResultsAndOption(filters: PerfectMatchFilters, optionId: string) {
    const widths = [] as string[];
    const heights = [] as string[];

    const sizes = this.findValuesForResults(
      filters,
      ('productSize:' + optionId) as PerfectMatchProperties
    );

    if (sizes.length > 0) {
      sizes.forEach((size) => {
        const parts = size.split('x');

        if (widths.indexOf(parts[0]) === -1) {
          widths.push(parts[0]);
        }

        if (heights.indexOf(parts[1]) === -1) {
          heights.push(parts[1]);
        }
      });

      widths.sort();
      heights.sort();
    }

    return { widths, heights };
  }

  findResultsForFilters(filters: PerfectMatchFilters) {
    let results = this.data.results;

    for (const property in filters) {
      results = results.filter(function (result) {
        const options = result.options[property]?.filter(function (id) {
          const filter = filters[property as PerfectMatchProperties];
          return filter && filter.indexOf(id) > -1;
        });
        return options && options.length > 0;
      });
    }
    return results;
  }

  getIsWindow(typeId: string) {
    return typeId === this.data.optionIds.type.window;
  }
  getIsPatioDoor(typeId: string) {
    return typeId === this.data.optionIds.type.patioDoor;
  }

  getCurrentStepObject(stepName: PerfectMatchSteps | string) {
    return this.data.steps[stepName];
  }
}

export const SetFilters = (parsedHash: URLSearchParams, moduleData: PerfectMatchModuleData) => {
  const productType = parsedHash.get('s:type') as string;
  const doorStyle = parsedHash.get('s:doorStyle') as string;
  const windowStyle = parsedHash.get('s:windowStyle') as string;
  if (productType) {
    moduleData.filters.productType = productType;
  }
  if (doorStyle) {
    moduleData.filters.productStyle = doorStyle;
  }
  if (windowStyle) {
    moduleData.filters.productStyle = windowStyle;
  }
};
