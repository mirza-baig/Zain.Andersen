import { getCookie } from 'cookies-next';
import { APIs } from 'lib/constants';

export type AffiliateGeolocationProps = {
  city: string;
  stateOrProvince: string;
  postalCode: string;
  affiliateName: string;
  affiliateId: number;
};

export type AffiliateGeolocationApiResponse = {
  data?: AffiliateGeolocationProps;
  title?: string;
  status?: number;
};

export const defaultAffiliateGeolocationProps: Readonly<AffiliateGeolocationProps> = {
  city: 'Cottage Grove',
  stateOrProvince: 'MN',
  postalCode: '55016',
  affiliateName: 'Renewal by Andersen',
  affiliateId: 0,
};

export const getAffiliateGeolocationData = () => {
  const geo: AffiliateGeolocationProps = JSON.parse(
    getCookie(`${APIs.RBA.Geolocation.Cookie}`)?.toString() || '{}'
  );
  return geo;
};
