import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
// import { DictionaryService, LayoutService } from '@sitecore-jss/sitecore-jss-nextjs';
import { dictionaryServiceFactory } from 'lib/dictionary-service-factory';
import { layoutServiceFactory } from 'lib/layout-service-factory';
import { SitecorePageProps } from 'lib/page-props';
import { pathExtractor } from 'lib/extract-path';
import { Plugin, isServerSidePropsContext } from '..';
import { LayoutService } from 'lib/jss21.2.1/layout';
import { DictionaryService } from 'lib/jss21.2.1/i18n';
//import { EwSiteInfo } from 'lib/site/ew-site-info';

class NormalModePlugin implements Plugin {
  private dictionaryServices: Map<string, DictionaryService>;
  private layoutServices: Map<string, LayoutService>;

  order = 10;

  constructor() {
    this.dictionaryServices = new Map<string, DictionaryService>();
    this.layoutServices = new Map<string, LayoutService>();
  }

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    if (context.preview) {
      return props;
    }
    // Get normalized Sitecore item path
    const path = pathExtractor.extract(context.params);

    // Purposefully ignoring the context.locale because it returns
    // an incorrect value when rehydrating, at least in dev mode.
    // We split up the site definition, so we have the correct language from there.
    // props.locale = context.locale ?? props.site.language;
    props.locale = props.site.language;

    // Fetch layout data, passing on req/res for SSR
    const layoutService = this.getLayoutService(props.site.name);

    const req = isServerSidePropsContext(context)
      ? (context as GetServerSidePropsContext).req
      : undefined;

    const res = isServerSidePropsContext(context)
      ? (context as GetServerSidePropsContext).res
      : undefined;

    props.layoutData = await layoutService.fetchLayoutData(path, props.locale, req, res);

    // Page Data and Page Variant folders return undefined for 'sitecore'
    if (!props.layoutData.sitecore || !props.layoutData.sitecore.route) {
      // A missing route value signifies an invalid path, so set notFound.
      // Our page routes will return this in getStatic/ServerSideProps,
      // which will trigger our custom 404 page with proper 404 status code.
      // You could perform additional logging here to track these if desired.
      props.notFound = true;
    }

    if (props.layoutData.sitecore?.route?.templateId === '6d6a6ce5-4e2a-4b04-ba7c-4d765e76c60d') {
      // Page Variants should not render
      props.notFound = true;
    }

    // Fetch dictionary data
    const dictionaryService = this.getDictionaryService(props.site.name);
    props.dictionary = await dictionaryService.fetchDictionaryData(props.locale);

    // Initialize links to be inserted on the page
    props.headLinks = [];

    return props;
  }

  private getDictionaryService(siteName: string): DictionaryService {
    if (this.dictionaryServices.has(siteName)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return this.dictionaryServices.get(siteName)!;
    }

    const dictionaryService = dictionaryServiceFactory.create(siteName);
    this.dictionaryServices.set(siteName, dictionaryService);

    return dictionaryService;
  }

  private getLayoutService(siteName: string): LayoutService {
    if (this.layoutServices.has(siteName)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return this.layoutServices.get(siteName)!;
    }

    const layoutService = layoutServiceFactory.create(siteName);
    this.layoutServices.set(siteName, layoutService);

    return layoutService;
  }
}

export const normalModePlugin = new NormalModePlugin();
