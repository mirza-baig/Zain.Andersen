export function getLocalStorageItem(key: string): unknown {
  const data = window.localStorage.getItem(key);
  return data && JSON.parse(data);
}

export function setLocalStorageItem(key: string, data: unknown): void {
  window.localStorage.setItem(key, JSON.stringify(data));
}

export function setCookie(
  cookieName: string,
  cookieValue: unknown,
  expiryTime: string,
  path = '/'
): void {
  document.cookie = `${cookieName}=${cookieValue}; expires=${expiryTime}; path=${path}`;
}

export function getCookie(cookieName: string): unknown {
  const match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
  if (match) {
    return match[2];
  } else {
    console.log(`something went wrong while reading ${cookieName}`);
    return undefined;
  }
}
