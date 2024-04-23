import { Field, GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import { affiliateBasePath, AffiliateGraphQLQueries } from 'lib/constants/affiliates';

import { Affiliate, Showroom } from 'lib/context/AffiliateContext';
import { ProgramOptIns, ProgramOptInsIds } from './program-optins';

export const AFFILIATE_PREFIX = '_affiliate_';

/**
 * Get a site rewrite path for given pathname
 * @param {string} pathname the pathname
 * @param {string} affiliateId the site data to include in the rewrite
 * @returns {string} the rewrite path
 */
export function getAffiliateRewrite(pathname: string, affiliateId: string): string {
  const path = pathname.startsWith('/') ? pathname : '/' + pathname;

  return `/${AFFILIATE_PREFIX}${affiliateId}${path}`;
}

/**
 * Get site data from the rewrite path
 * @param {string} pathname the pathname
 * @param {string} defaultSiteName the default site name
 * @returns {AffiliateRewriteData} the site data from the rewrite
 */
export function getAffiliateIdFromRewrite(pathname: string): string {
  const path = pathname.endsWith('/') ? pathname : pathname + '/';
  const result = path.match(`${AFFILIATE_PREFIX}(.*?)\\/`);

  if (result && result[1] !== '') {
    return result[1];
  }

  return '';
}

/**
 * Normalize a site rewrite path (remove site data)
 * @param {string} pathname the pathname
 * @returns {string} the pathname with site data removed
 */
export function normalizeAffiliateRewrite(pathname: string): string {
  const result = pathname.match(`${AFFILIATE_PREFIX}.*?(?:\\/|$)`);

  return result === null ? pathname : pathname.replace(result[0], '');
}

export const parseAffiliateURL = (rawURL: GraphQlLink) => {
  return `${rawURL.url}${
    rawURL.queryString //check if querystring available and if its available does it have "?" appended
      ? /^[\s\S]*\?/.test(rawURL.queryString)
        ? rawURL.queryString
        : `?${rawURL.queryString}`
      : ''
  }`;
};

export const getAffiliateData = async (
  graphqlClient: GraphQLRequestClient,
  affiliateid?: string,
  zipCode?: string,
  language?: string
): Promise<Affiliate> => {
  const result = await graphqlClient.request<AffiliateResult>(
    AffiliateGraphQLQueries.affiliateDetailsbyAffiliateIdQuery,
    {
      // The GraphQL query does not like empty string for the condition for some reason
      affiliateId: affiliateid || 'null',
      zipcode: zipCode || 'null',
      language: language || 'en',
    }
  );

  const affiliateResult = result?.affiliate?.results[0];
  const affiliateShowrooms = affiliateResult?.showrooms?.results[0]?.children?.results;

  const affiliateData: Affiliate = {
    affiliateId: affiliateResult?.affiliateId?.value ?? null,
    widgetID: affiliateResult?.widgetID?.value ?? null,
    rl_adid: affiliateResult?.rl_adid?.value ?? null,
    rl_key: affiliateResult?.rl_key?.value ?? null,
    affiliateName: affiliateResult?.affiliateName?.value ?? null,
    programOptIns: getProgramOptIns(affiliateResult),
    affiliatePath: `${affiliateBasePath}/${affiliateResult?.affiliatePath?.value ?? null}`,
    affiliateSubheading: affiliateResult?.affiliateSubheading?.value ?? null,
    addressLine1: affiliateResult?.addressLine1?.value ?? null,
    addressLine2: affiliateResult?.addressLine2?.value ?? null,
    city: affiliateResult?.city?.value ?? null,
    state: {
      abbreviation: affiliateResult?.state?.targetItem?.abbreviation?.value ?? null,
      fullName: affiliateResult?.state?.targetItem?.fullName?.value ?? null,
    },
    postalCode: affiliateResult?.postalCode?.value ?? null,
    administrativeOfficePhoneNumber:
      affiliateResult?.administrativeOfficePhoneNumber?.value ?? null,
    affiliateLandingPage: affiliateResult?.affiliateLandingPage ?? null,
    showrooms:
      affiliateShowrooms?.map(
        (showroom: AffiliateResultShowroom): Showroom =>
          showroom && {
            showroomName: showroom.showroomName?.value ?? null,
            addressLine1: showroom.addressLine1?.value ?? null,
            addressLine2: showroom.addressLine2?.value ?? null,
            city: showroom.city?.value ?? null,
            state: {
              abbreviation: showroom.state?.targetItem?.abbreviation?.value ?? null,
              fullName: showroom.state?.targetItem?.fullName?.value ?? null,
            },
            postalCode: showroom.postalCode?.value ?? null,
            latitude: showroom.latitude?.numberValue ?? null,
            longitude: showroom.longitude?.numberValue ?? null,
            phoneNumber: showroom.locationPhoneNumber?.value ?? null,
            operationHours: showroom.hours?.value ?? null,
            showroomPage: showroom.showroomPage ?? null,
          }
      ) ?? null,
  };

  return affiliateData;
};

type Results<T> = {
  results: T[];
};

type Children<T> = {
  children: Results<T>;
};

type AffiliateResultAddress = {
  addressLine1: Field<string>;
  addressLine2: Field<string>;
  city: Field<string>;
  state: {
    targetItem: {
      id: string;
      abbreviation: Field<string>;
      fullName: Field<string>;
    };
  };
  postalCode: Field<string>;
};

type AffiliateResultAffiliate = AffiliateResultAddress & {
  affiliateId: Field<string>;
  affiliateName: Field<string>;
  optIns: Field<string>;
  affiliatePath: Field<string>;
  affiliateSubheading: Field<string>;
  administrativeOfficePhoneNumber: Field<string>;
  affiliateLandingPage: GraphQlLink;
  showrooms: Results<Children<AffiliateResultShowroom>>;
  widgetID: Field<string>;
  rl_adid: Field<string>;
  rl_key: Field<string>;
};

export type GraphQlLink = {
  anchor: string;
  className: string;
  linkType: string;
  queryString: string;
  text: string;
  url: string;
};

type AffiliateResultShowroom = AffiliateResultAddress & {
  showroomName: Field<string>;
  latitude: {
    numberValue: number;
  };
  longitude: {
    numberValue: number;
  };
  locationPhoneNumber: Field<string>;
  hours: Field<string>;
  showroomPage: GraphQlLink;
};

type AffiliateResult = {
  affiliate: Results<AffiliateResultAffiliate>;
};

const getProgramOptIns = (affiliate: AffiliateResultAffiliate): ProgramOptIns => {
  const programOptIns: ProgramOptIns = Object.keys(ProgramOptInsIds).reduce(
    (prev, curr: keyof ProgramOptIns) => {
      prev[curr] = affiliate?.optIns?.value?.indexOf(ProgramOptInsIds[curr]) >= 0;
      return prev;
    },
    {} as ProgramOptIns
  );
  return programOptIns;
};
