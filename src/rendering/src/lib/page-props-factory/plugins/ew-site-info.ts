import { SitecorePageProps } from 'lib/page-props';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { Plugin } from '..';
import { EwSiteInfo } from 'lib/site/ew-site-info';

class EwSiteInfoPlugin implements Plugin {
  order = 15;

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    if (context.preview) {
      return props;
    }

    if (props.site && props.layoutData?.sitecore?.context) {
      props.layoutData.sitecore.context.ewSiteInfo = props.site as EwSiteInfo;
    }

    return props;
  }
}

export const ewSiteInfoPlugin = new EwSiteInfoPlugin();
