import { SitecorePageProps } from 'lib/page-props';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
// import { getSiteRewriteData } from '@sitecore-jss/sitecore-jss-nextjs';
import { Plugin } from '..';
import { siteResolver } from 'lib/site-resolver';
import config from 'temp/config';
import { getSiteRewriteData } from 'lib/jss21.2.1/site/utils';

class SitePlugin implements Plugin {
  order = 0;

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    if (context.preview) {
      return props;
    }

    // Get site name (from path)
    const siteData = getSiteRewriteData(props.originalPath, config.jssAppName);

    // Resolve site by name
    props.site = siteResolver.getByName(siteData.siteName);

    return props;
  }
}

export const sitePlugin = new SitePlugin();
