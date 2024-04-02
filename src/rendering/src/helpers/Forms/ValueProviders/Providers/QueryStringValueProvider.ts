type QueryStringValueProviderType = {
  providerFieldsProps: {
    queryStringKey: {
      value: string;
    };
  };
};

export class QueryStringValueProvider {
  private queryStringKey: string;

  constructor(props: QueryStringValueProviderType) {
    this.queryStringKey = props.providerFieldsProps.queryStringKey.value;
  }
  executeProvider(): string | string[] | null {
    if (typeof window !== 'undefined') {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const queryStringValue = urlParams.get(this.queryStringKey);

      if (queryStringValue !== null && queryStringValue !== '') {
        if (queryStringValue.includes('|')) {
          return queryStringValue.split('|').map((value) => value.trim());
        } else {
          return queryStringValue;
        }
      }
    }
    return null;
  }
}

export default QueryStringValueProvider;
