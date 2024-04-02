import { ProgramOptIns } from 'lib/affiliate/program-optins';
import { GraphQlLink } from 'lib/affiliate/utils';
import { getCookie } from 'lib/utils/client-storage-utils';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export type Affiliate = Address & {
  affiliateId: string;
  affiliateName: string;
  affiliateSubheading: string;
  administrativeOfficePhoneNumber: string;
  programOptIns: ProgramOptIns;
  affiliatePath: string;
  affiliateLandingPage: GraphQlLink;
  showrooms: Showroom[];
  widgetID: string;
  rl_adid: string;
  rl_key: string;
};

export type Address = {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: {
    abbreviation: string;
    fullName: string;
  };
  postalCode: string;
  latitude?: number;
  longitude?: number;
};

export type Showroom = Address & {
  showroomName: string;
  phoneNumber: string;
  operationHours: string;
  showroomPage: GraphQlLink;
};

type AffiliateContext = {
  userAffiliate: Affiliate;
  setUserAffiliate: Dispatch<SetStateAction<Affiliate>>;
  pageAffiliate: Affiliate | null;
};

const initialAffiliateData = {
  affiliateId: '',
  widgetID: '',
  rl_adid: '',
  rl_key: '',
  affiliateName: '',
  programOptIns: {} as ProgramOptIns,
  affiliatePath: '',
  affiliateSubheading: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: {
    abbreviation: '',
    fullName: '',
  },
  postalCode: '',
  administrativeOfficePhoneNumber: '',
  affiliateLandingPage: {
    anchor: '',
    queryString: '',
    className: '',
    linkType: '',
    text: '',
    url: '',
  },
  showrooms: [
    {
      showroomName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: {
        abbreviation: '',
        fullName: '',
      },
      postalCode: '',
      latitude: 0,
      longitude: 0,
      phoneNumber: '',
      operationHours: '',
      showroomPage: {
        anchor: '',
        queryString: '',
        className: '',
        linkType: '',
        text: '',
        url: '',
      },
    },
  ],
};

export const AffiliateContext = createContext<AffiliateContext>({
  userAffiliate: initialAffiliateData,
  setUserAffiliate: () => '',
  pageAffiliate: null,
});

export const useAffiliate = () => useContext(AffiliateContext);

export const AffiliateContextProvider = ({
  userAffiliate,
  pageAffiliate,
  children,
}: {
  userAffiliate: Affiliate;
  pageAffiliate: Affiliate | null;
  children: ReactNode;
}) => {
  const [affiliateData, setAffiliateData] = useState<Affiliate>(userAffiliate);

  useEffect(() => {
    // If we already have an affiliate or this is not a site with affiliates, nothing to do here.
    if (!userAffiliate || userAffiliate.affiliateId !== null) {
      return;
    }
    // If we don't have an affiliate, fetch it from the zip code.
    // This is needed for 404/500 pages.
    const zipCode = (getCookie('currentZip') as string)?.replaceAll('%20', ' ');
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        zipcode: zipCode,
        language: 'en',
      }),
    };

    fetch('/api/rba/affiliate/get-affiliate-data-by-zipcode/', requestOptions).then(
      async (response) => {
        const { affiliateData } = await response.json();

        setAffiliateData(affiliateData);
      }
    );
    // We can ignore react-hooks/exhaustive-deps for this useEffect as this code needs to be executed if there are no userAffiliate found.
    // Basically this code only needs to be executed on 404/500 pages and useAffiliate will always come from middleware props.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AffiliateContext.Provider
      value={{
        userAffiliate: affiliateData,
        setUserAffiliate: setAffiliateData,
        pageAffiliate: pageAffiliate,
      }}
    >
      {children}
    </AffiliateContext.Provider>
  );
};
