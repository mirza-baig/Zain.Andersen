import { LayoutService } from '@sitecore-jss/sitecore-jss-nextjs';
import { layoutServiceFactory } from 'lib/layout-service-factory';
import { SitecorePageProps } from 'lib/page-props';
import { GetServerSidePropsContext, GetStaticPropsContext, Redirect } from 'next';
import { Plugin, isServerSidePropsContext } from '..';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import { graphQLJobDetailsByJobIdService } from 'lib/utils/rba-career-utils';
import config from 'temp/config';
import { convertToSitecoreGuid } from 'lib/utils/string-utils';
import { SITE_NAMES } from 'lib/constants/sitenames';

class RbACareerWildcardPlugin implements Plugin {
  // Need to run after the normal processing but before the component props
  order = 25;
  _graphqlClient: GraphQLRequestClient;
  private layoutService!: LayoutService;

  constructor() {
    this._graphqlClient = new GraphQLRequestClient(config.graphQLEndpoint, {
      apiKey: config.sitecoreApiKey,
    });
  }

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    // If the Site is AW then skip the flow.
    const siteNameArray = Object.values(SITE_NAMES);
    if (!siteNameArray.includes(props?.site?.name) || !props.notFound) {
      return props;
    }
    // Regex to find the RbA job details wild card page format - http://localhost:3000/careers/{Job_GUID}}/{Job_Item_Name}}/
    const regexGUID =
      /\/careers\/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/gi;

    const paramsPath = Array.isArray(context.params?.path)
      ? context.params?.path.join('/')
      : context.params?.path ?? '/';
    const extractedPathIndex = (paramsPath ?? '').indexOf('/careers') ?? -1;
    const originalPath =
      extractedPathIndex != -1 ? (paramsPath ?? '').substring(extractedPathIndex) : '';
    // find the job details page format.
    if (originalPath === '' || !originalPath.match(regexGUID)) {
      return props;
    }
    // Parse the Job Id
    const jobIdRegEx = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/gi;
    const jobId = jobIdRegEx.exec(originalPath)?.[0] ?? '';
    // Fetch the GraphQL Item query for RbA Job Id
    const jobDetails = await graphQLJobDetailsByJobIdService.fetch(jobId, props.site.language);

    // Skip the flow if it is not a valid RbA Job Item
    if (!jobDetails || !jobDetails?.id) {
      return props;
    }
    this.layoutService = layoutServiceFactory.create(props?.site?.name);
    /// Props redirect URL in the format /careers/{Job_GUID}}/{Job_Item_Name}}/
    /// Get item name from job detail results
    const sitecoreGuid = convertToSitecoreGuid(jobDetails?.id);
    let jobDetailUrl = '';
    if (originalPath.includes('?')) {
      const queryParametersIndex = originalPath.indexOf('?');
      const queryParameters = originalPath.substring(queryParametersIndex);
      jobDetailUrl = `/careers/${sitecoreGuid}/${jobDetails?.name
        .replace(/\s/g, '-')
        .toLowerCase()}/${queryParameters}`;
    } else {
      jobDetailUrl = `/careers/${sitecoreGuid}/${jobDetails?.name
        .replace(/\s/g, '-')
        .toLowerCase()}`;
    }
    // Job Details wild card path format in Experience Edge
    const path = '/careers/,-w-,/';
    // Fetch layout data for job details wild card pages
    const wildLayout = await this.layoutService.fetchLayoutData(
      path,
      props.site.language,
      isServerSidePropsContext(context) ? (context as GetServerSidePropsContext).req : undefined,
      isServerSidePropsContext(context) ? (context as GetServerSidePropsContext).res : undefined
    );
    props.layoutData = wildLayout;

    // Update the page title as the job title for the SEO optimization and user experience
    if (props.layoutData.sitecore.route?.fields && jobDetails?.jobTitle) {
      props.layoutData.sitecore.route.fields.pageTitle.value = jobDetails?.jobTitle;
    }

    // Set job details to sitecore context
    props.layoutData.sitecore.context.jobDetails = jobDetails;

    if (props.layoutData.sitecore.route) {
      // If we found the job details wildcard page, set notFound back to false
      props.notFound = false;
    }
    if (originalPath !== jobDetailUrl) {
      const url: Redirect = {
        statusCode: 301,
        destination: `${jobDetailUrl.includes('?') ? jobDetailUrl : jobDetailUrl + '/'}`,
      };
      props.redirect = url;
    }
    return props;
  }
}

export const rbaCareerWildcardPlugin = new RbACareerWildcardPlugin();
