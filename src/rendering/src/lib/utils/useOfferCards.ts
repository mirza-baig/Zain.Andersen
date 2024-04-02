import { useAffiliate } from 'lib/context/AffiliateContext';
import { useState, useEffect } from 'react';
import { fetchInternalAPIWithQueryString } from './api-request-utils';

export interface offerProps {
  affiliateSubheading: string | undefined;
  substring(arg0: number, arg1: number): unknown;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  affiliateID: any;
  data: any;
  link: any;
  headlineText: any;
  legalDisclaimer: any;
  offerDetails: any;
  offerEndDate: any;
  subHeadlineText: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

export const useOfferCards = () => {
  const { pageAffiliate, userAffiliate } = useAffiliate();

  const affiliateID = pageAffiliate?.affiliateId || userAffiliate?.affiliateId;
  const [offerData, setOfferData] = useState('' as unknown as offerProps);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetchInternalAPIWithQueryString(
        `/api/rba/offers/get-current-offer-for-affiliate/?storeid=${affiliateID}`
      );
      const responseData = await response.json();
      if (responseData?.results !== undefined) {
        setOfferData(responseData?.results);
      }
      setIsLoading(false);
    })();
    //It is safe to ignore the dependency warnig, as whenever the pageAffiliate or userAffiliate will change, it will refresh the page iteself
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, offerData };
};
