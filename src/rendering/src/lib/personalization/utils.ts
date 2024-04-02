export const DEFAULT_PAGE_VARIANT = '_default';
export const PAGE_VARIANT_PREFIX = '_pageVariantId_';

export type PersonalizationRewriteData = {
  pageVariantId: string;
};

/**
 * Get a personalization rewrite path for given pathname
 * @param {string} pathname the pathname
 * @param {PersonalizationRewriteData} data the personalization data to include in the rewrite
 * @returns {string} the rewrite path
 */
export function getPersonalizationRewrite(
  pathname: string,
  data: PersonalizationRewriteData
): string {
  const path = pathname.startsWith('/') ? pathname : '/' + pathname;
  return `/${PAGE_VARIANT_PREFIX}${data.pageVariantId}${path}`;
}

/**
 * Get personalization data from the rewrite path
 * @param {string} pathname the pathname
 * @returns {PersonalizationRewriteData} the personalization data from the rewrite
 */
export function getPersonalizationRewriteData(pathname: string): PersonalizationRewriteData {
  const data: PersonalizationRewriteData = {
    pageVariantId: DEFAULT_PAGE_VARIANT,
  };
  const path = pathname.endsWith('/') ? pathname : pathname + '/';
  const result = path.match(`${PAGE_VARIANT_PREFIX}(.*?)\\/`);
  if (result) {
    data.pageVariantId = result[1];
  }
  return data;
}

/**
 * Normalize a personalization rewrite path (remove personalization data)
 * @param {string} pathname the pathname
 * @returns {string} the pathname with personalization data removed
 */
export function normalizePersonalizationRewrite(pathname: string): string {
  if (!pathname.includes(PAGE_VARIANT_PREFIX)) {
    return pathname;
  }
  const result = pathname.match(`${PAGE_VARIANT_PREFIX}.*?(?:\\/|$)`);
  return result === null ? pathname : pathname.replace(result[0], '');
}
