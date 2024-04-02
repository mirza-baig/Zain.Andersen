import { NextApiRequest } from 'next';
import { URLSearchParams } from 'url';
import { QueryStringToCookieMapping } from 'lib/sourcing-cookies/plugins/renewal-by-andersen';

export const getHostHeader = (req: NextApiRequest): string => {
  return req.headers['host']?.split(':')[0] || 'localhost';
};

const normalizeQueryParams = (query: URLSearchParams): string => {
  let normalizedQuery = '';
  for (const [key, value] of query) {
    normalizedQuery += `&${key.toLowerCase()}=${value}`;
  }
  return normalizedQuery;
};

const normalizeCookieParams = (
  cookies: URLSearchParams,
  cookieMappings: { [key: string]: string[] }
): string => {
  let normalizedCookies = '';

  Object.keys(cookieMappings).forEach((key) => {
    const prefixList = cookieMappings[key];
    for (const [key, value] of cookies) {
      prefixList.forEach((prefix) => {
        if (key.toLowerCase().startsWith(prefix.toLowerCase())) {
          normalizedCookies += `${key.toLowerCase()}=${value};`;
        }
      });
    }
  });
  return normalizedCookies;
};

export const fetchExternalAPIWithClientData = async (
  clientApiRequest: NextApiRequest,
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any,
  cookieMappings: { [key: string]: string[] } = QueryStringToCookieMapping
): Promise<Response> => {
  // loop trhough query string from clientApiRequest and add to url
  const queryString = normalizeQueryParams(
    new URLSearchParams(clientApiRequest.query as Record<string, string>)
  );
  const urlWithQuery = `${url}?${queryString}`;

  // loop through cookies in clientApiRequest and add to options.headers.cookie
  const cookies = normalizeCookieParams(
    new URLSearchParams(clientApiRequest.cookies as Record<string, string>),
    cookieMappings
  );
  if (!!options.headers) {
    options.headers.cookie = cookies;
  } else {
    options.headers = {
      cookie: cookies,
    };
  }

  return await fetch(urlWithQuery, options);
};

export const fetchInternalAPIWithQueryString = async (
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any = { method: 'GET' }
): Promise<Response> => {
  if (typeof window !== 'undefined' && window.location.search.includes('?')) {
    url +=
      url.indexOf('?') > -1
        ? `&${window.location.search.replace('?', '')}`
        : window.location.search;
  }
  return await fetch(url, options);
};
