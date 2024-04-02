import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { SitecorePageProps } from 'lib/page-props';
import { pathExtractor } from 'lib/extract-path';
import { Plugin } from '..';

class RequestedPathPlugin implements Plugin {
  order = 100;

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    if (context.preview) {
      return props;
    }

    // Get normalized Sitecore item path
    props.requestedPath = pathExtractor.extract(context.params);

    return props;
  }
}

export const requestedPathPlugin = new RequestedPathPlugin();
