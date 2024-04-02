import { getCookie } from 'lib/utils/client-storage-utils';

type CookieValueProviderType = {
  providerFieldsProps: {
    cookieName: {
      value: string;
    };
  };
};
export class CookieValueProvider {
  private cookieName: string;

  constructor(props: CookieValueProviderType) {
    this.cookieName = props.providerFieldsProps.cookieName.value;
  }

  executeProvider(): string | string[] | null {
    if (typeof document !== 'undefined' && this.cookieName) {
      const cookieValue = getCookie(this.cookieName) as string;
      if (cookieValue) {
        const trimmedCookieValue = cookieValue.trim();
        if (trimmedCookieValue.includes('|')) {
          return trimmedCookieValue.split('|').map((value) => value.trim());
        } else {
          return trimmedCookieValue;
        }
      }
    }
    return null;
  }
}

export default CookieValueProvider;
