import { ComponentPropsService } from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { componentModule } from 'temp/componentFactory';
import { Plugin, isServerSidePropsContext } from '..';

class ComponentPropsPlugin implements Plugin {
  private componentPropsService: ComponentPropsService;

  order = 30;

  constructor() {
    this.componentPropsService = new ComponentPropsService();
  }

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    // Page Data and Page Variant folders return undefined for 'sitecore'
    if (!props.layoutData.sitecore || !props.layoutData.sitecore.route) {
      return props;
    }

    // Retrieve component props using side-effects defined on components level
    if (isServerSidePropsContext(context)) {
      props.componentProps = await this.componentPropsService.fetchServerSideComponentProps({
        layoutData: props.layoutData,
        context,
        componentModule,
      });
    } else {
      props.componentProps = await this.componentPropsService.fetchStaticComponentProps({
        layoutData: props.layoutData,
        context,
        componentModule,
      });
    }

    return props;
  }
}

export const componentPropsPlugin = new ComponentPropsPlugin();
