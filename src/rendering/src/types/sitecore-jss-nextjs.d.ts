import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import { Rule } from 'src/lib/personalization/personalization-types';
import { BreadcrumbItem } from 'src/components/site/Breadcrumb/Breadcrumb';
import { JobDetails } from 'lib/utils/rba-career-utils';

declare module '@sitecore-jss/sitecore-jss-nextjs' {
  export interface ComponentParams {
    personalizationRules: string;
    parsedPersonalizationRules: Rule[];
  }

  export interface ComponentRendering {
    /** The original datasource, if this component's datasource has been replaced via our custom personalization */
    originalDataSource?: string;
  }

  export interface LayoutServiceContext {
    breadcrumb: BreadcrumbItem[];
    favIcon: { url: string };
    pageAffiliateId: string;
    jobDetails?: JobDetails;
  }

  export interface Item {
    /** The original item id, if this item has been replaced via our custom personalization */
    originalItemId?: string;
    id: string;
    url: string;
    templateId?: string;
    templateName?: string;
  }
}
