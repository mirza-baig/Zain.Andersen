export interface DesignProps {
  url: string;
  seriesCategory: string;
  interiorImage: InteriorImage;
  exteriorImage: ExteriorImage;
  selections: Selection[];
  shareUrl: string;
  productDetailUrl: string;
  requestAQuoteUrl: string;
  findADealerUrl: string;
  createdDate: string;
  productName?: string;
  productShortDescription: string;
}

export interface InteriorImage {
  src: string;
  alt: string;
}

export interface ExteriorImage {
  src: string;
  alt: string;
}

export interface Selection {
  title: string;
  value: string;
}

declare global {
  interface Window {
    a2a_config?: {
      onclick: number;
      num_services: number;
      exclude_services: Array<string>;
      templates: {
        email: {
          subject: string;
          body: string;
        };
        sms: {
          body: string;
        };
      };
      callbacks: [];
    };
  }
}
