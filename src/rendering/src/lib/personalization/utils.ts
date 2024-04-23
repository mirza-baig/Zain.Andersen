export const DEFAULT_PAGE_VARIANT = '_default';
export const PAGE_VARIANT_PREFIX = '_pageVariantId_';

export type PageVariantRewriteData = {
  pageVariantId: string;
};

/**
 * Get a page variant rewrite path for given pathname
 * @param {string} pathname the pathname
 * @param {PageVariantRewriteData} data the page variant data to include in the rewrite
 * @returns {string} the rewrite path
 */
export function getPageVariantRewrite(pathname: string, data: PageVariantRewriteData): string {
  const path = pathname.startsWith('/') ? pathname : '/' + pathname;
  return `/${PAGE_VARIANT_PREFIX}${data.pageVariantId}${path}`;
}

/**
 * Get page variant data from the rewrite path
 * @param {string} pathname the pathname
 * @returns {PageVariantRewriteData} the personalization data from the rewrite
 */
export function getPageVariantRewriteData(pathname: string): PageVariantRewriteData {
  const data: PageVariantRewriteData = {
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
 * Normalize a page varia rewrite path (remove page variant data)
 * @param {string} pathname the pathname
 * @returns {string} the pathname with page variant data removed
 */
export function normalizePageVariantRewrite(pathname: string): string {
  if (!pathname.includes(PAGE_VARIANT_PREFIX)) {
    return pathname;
  }
  const result = pathname.match(`${PAGE_VARIANT_PREFIX}.*?(?:\\/|$)`);
  return result === null ? pathname : pathname.replace(result[0], '');
}
