import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss/layout';

/**
 * Shape of component props storage
 */
export type ComponentPropsCollection = {
  [componentUid: string]: unknown;
};

/**
 * Type of side effect function which could be invoked on component level (getStaticProps/getServerSideProps)
 */
export type ComponentPropsFetchFunction<NextContext, FetchedProps = unknown> = {
  (
    rendering: ComponentRendering,
    layoutData: LayoutServiceData,
    context: NextContext
  ): Promise<FetchedProps>;
};

/**
 * Shape of getServerSideProps function on component level
 */
export type GetServerSideComponentProps = ComponentPropsFetchFunction<GetServerSidePropsContext>;

/**
 * Shape of getStaticProps function on component level
 */
export type GetStaticComponentProps = ComponentPropsFetchFunction<GetStaticPropsContext>;
