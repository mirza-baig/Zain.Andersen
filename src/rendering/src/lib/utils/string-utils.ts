import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { getCookie } from 'cookies-next';

/**
 * Normalizes a guid format so they can be compared as strings.
 */
export const normalizeGuid = (guid?: string): string => {
  return guid?.toLowerCase().replace(/[\{\-\}]/g, '') ?? '';
};

/**
 * Compares two guids regardless of the format
 * @param guid1 The first guid
 * @param guid2 The second guid
 * @returns Whether the two are equal
 */
export const guidEquals = (guid1: string | undefined, guid2: string | undefined) => {
  return normalizeGuid(guid1) === normalizeGuid(guid2);
};

export const normalizeSitecoreDateString = (date: string): string => {
  // For fields that don't contain
  if (date.charAt(15) !== 'Z') {
    date = `${date}Z`;
  }

  const isValid = date.length === 16 && date.charAt(8) === 'T' && date.charAt(15) === 'Z';
  if (!isValid) {
    // If used with new Date, wil get 'Invalid Date'.
    console.warn(`Invalid date provided, ${date}. Valid Sitecore date string: 20211112T203919Z.`);
    return 'Invalid Date';
  }

  return date.replace(/(\w{4})(\w{2})(\w{5})(\w{2})(\w{2})/, '$1-$2-$3:$4:$5');
};

export const normalizeSitecoreDateStringFormatted = (date: string): string => {
  // For fields that don't contain
  if (date.charAt(15) !== 'Z') {
    date = `${date}Z`;
  }

  const isValid = date.length === 16 && date.charAt(8) === 'T' && date.charAt(15) === 'Z';
  if (!isValid) {
    // If used with new Date, wil get 'Invalid Date'.
    console.warn(`Invalid date provided, ${date}. Valid Sitecore date string: 20211112T203919Z.`);
    return 'Invalid Date';
  }
  const regex = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/;
  const match = date.match(regex);
  if (match) {
    // Extract the captured groups
    const [, year, month, day] = match;
    // Create a formatted date string
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }
  return date;
};

export const normalizeSitecoreDateStringFormattedWithTime = (date: string): string => {
  const isValid = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/.test(date);
  if (!isValid) {
    console.warn(
      `Invalid date provided: ${date}. Valid Sitecore date string format: 20211112T203919Z.`
    );
    return 'Invalid Date';
  }

  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);
  const hour = date.slice(9, 11);
  const minute = date.slice(11, 13);
  const second = date.slice(13, 15);

  // Convert the date string into a JavaScript Date object
  const parsedDate = new Date(
    Date.UTC(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hour),
      parseInt(minute),
      parseInt(second)
    )
  );

  // Get the localized date string
  const formattedDate = parsedDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });

  return formattedDate;
};

export const createUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export function convertToSitecoreGuid(input: string) {
  // Add curly braces and hyphens to the input string
  const sitecoreGuid = `${input?.slice(0, 8)}-${input?.slice(8, 12)}-${input?.slice(
    12,
    16
  )}-${input?.slice(16, 20)}-${input?.slice(20)}`;
  return `${sitecoreGuid.toLowerCase()}`;
}

export function isNullOrWhitespace(string: string) {
  if (typeof string === 'undefined' || string == null) {
    return true;
  }
  return string.replace(/\s/g, '').length < 1;
}

// Not sure if this is the best way to do this, but it works
export function decodeHtml(string: string): string {
  const decodeTextArea = document.createElement('textarea');

  decodeTextArea.innerHTML = string;
  return decodeTextArea.value;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertToDate(data: any): string {
  if (typeof data == 'number') {
    const formatted = new Date(data);

    const dd = formatted.getDate();
    const yy = formatted.getFullYear();
    const mm = formatted.getMonth() + 1;
    return `${mm}/${dd}/${yy}`;
  } else {
    return data;
  }
}

export function encodeUrl(string: string) {
  const parts = [];
  for (let i = 0; i < string.length; i++) {
    const ch = string.charAt(i);
    if (isUrlSafeChar(ch)) {
      parts.push(ch);
    } else if (ch === ' ') {
      parts.push('+');
    } else {
      parts.push(encodeURIComponent(ch));
    }
  }
  return parts.join('');
}

export function isUrlSafeChar(ch: string): boolean {
  if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')) {
    return true;
  }

  switch (ch) {
    case '-':
    case '_':
    case '.':
    case '!':
    case '*':
    case '(':
    case ')':
      return true;
  }

  return false;
}

export function toFraction(value: string): string | undefined {
  const parts = value?.split('.');

  if (!parts) {
    return undefined;
  }

  if (parts.length === 1) {
    return parts[0];
  }

  switch (parts[1]) {
    case '0':
      return parts[0];
    case '0625':
      return parts[0] + ' 1/16';
    case '125':
      return parts[0] + ' 1/8';
    case '1875':
      return parts[0] + ' 3/16';
    case '25':
      return parts[0] + ' 1/4';
    case '3125':
      return parts[0] + ' 5/16';
    case '375':
      return parts[0] + ' 3/8';
    case '4375':
      return parts[0] + ' 7/16';
    case '5':
      return parts[0] + ' 1/2';
    case '5625':
      return parts[0] + ' 9/16';
    case '625':
      return parts[0] + ' 5/8';
    case '6875':
      return parts[0] + ' 11/16';
    case '75':
      return parts[0] + ' 3/4';
    case '8125':
      return parts[0] + ' 13/16';
    case '875':
      return parts[0] + ' 7/8';
    case '9375':
      return parts[0] + ' 15/16';
    default:
      return value;
  }
}

export function isSvgUrl(src: string | undefined) {
  if (src == undefined) {
    return false;
  }

  try {
    return new URL(src, 'https://server').pathname.endsWith('.svg');
  } catch (error) {
    console.error('Invalid image src `' + src + '` - ' + error);
    return false;
  }
}

export function convertHexToGUID(guidString: string) {
  return guidString.replace(
    /([0-z]{8})([0-z]{4})([0-z]{4})([0-z]{4})([0-z]{12})/,
    '$1-$2-$3-$4-$5'
  );
}

export const getSiteSwitcherLink = (): LinkField | null => {
  if (typeof window !== 'undefined') {
    const urlObject = new URL(window.location.href);

    urlObject.host = urlObject.host.replace(/\.(com|ca)/g, (_: string, domain: string) =>
      domain === 'com' ? '.ca' : '.com'
    );

    const _currentZip = getCookie('currentZip');

    if (!urlObject.searchParams.has('currentZip') && _currentZip) {
      urlObject.searchParams.append('currentZip', _currentZip.toString());
    }

    const linkField = {
      value: {
        href: urlObject.toString(),
        linktype: 'external',
        url: urlObject.toString(),
      },
    };

    return linkField;
  }

  return null;
};
