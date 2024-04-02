import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import { Plugin } from '..';

import config from 'temp/config';
import { Debug, SitecoreIds } from 'lib/constants';
import { GraphQLClient } from '@sitecore-jss/sitecore-jss';
import { SearchQueryService } from 'lib/graphql';
import { normalizeGuid } from 'lib/utils/string-utils';
import { FeatureToggleIds, FeatureToggles } from 'lib/feature-toggles';
import { SiteInfo } from 'lib/jss21.2.1/site';

export type FeatureState = 'Disabled' | 'All' | 'Selected';

interface Site {
  environment: {
    value: string;
  };
  siteName: {
    value: string;
  };
}

interface SiteGrouping {
  name: string;
  children: {
    results: Site[];
  };
}

interface Settings {
  name: string;
  children: {
    results: SiteGrouping[];
  };
}

type FeatureToggle = {
  id: string;
  name: string;
  featureState: {
    targetItem?: {
      value: {
        value: FeatureState;
      };
    };
  };
  enableForSites: {
    targetItems: {
      name: string;
      children: {
        results: Settings[];
      };
    }[];
  };
};

const getFeatureTogglesQuery = `query getFeatureToggles {
  search(
    first: 50
    where: {
      AND: [
        {
          name: "_path"
          value: "${SitecoreIds.Content.EnterpriseGlobal.Settings.FeatureToggles.ItemId}"
          operator: CONTAINS
        }
        {
          name: "_templates"
          value: "${SitecoreIds.Feature.Data.FeatureToggles.FeatureToggle.TemplateId}"
          operator: CONTAINS
        }
        { name: "_language", value: "en" }
      ]
    }
  ) {
    pageInfo {
      endCursor
      hasNext
    }
    results {
      ... on FeatureToggle {
        id
        name
        featureState {
          targetItem {
            ... on Enum {
              value {
                value
              }
            }
          }
        }
        enableForSites {
          targetItems {
            name
            children(includeTemplateIDs: ["${SitecoreIds.Project.RenewalByAndersen.Common.JSSSettings.TemplateId}"]) {
              results {
                name
                children(
                  includeTemplateIDs: ["${SitecoreIds.Project.RenewalByAndersen.Common.JSSSiteGrouping.TemplateId}"]
                ) {
                  results {
                    name
                    children {
                      results {
                        environment: field(name: "Environment") {
                          value
                        }
                        siteName: field(name: "SiteName") {
                          value
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

class FeatureTogglePlugin implements Plugin {
  order = 5;
  private graphQLClient: GraphQLClient;
  private searchService: SearchQueryService<FeatureToggle>;

  constructor() {
    this.graphQLClient = this.getGraphQLClient();
    this.searchService = new SearchQueryService<FeatureToggle>(this.graphQLClient);
  }

  async exec(props: SitecorePageProps) {
    const allFeatureToggles = await this.searchService.fetch(getFeatureTogglesQuery, {});

    const lookup = this.getFeatureToggleLookup(allFeatureToggles);

    const featureToggles: FeatureToggles = Object.keys(FeatureToggleIds).reduce(
      (prev, curr: keyof FeatureToggles) => {
        prev[curr] = this.toggleIsEnabled(lookup, props.site, FeatureToggleIds[curr]);
        return prev;
      },
      {} as FeatureToggles
    );

    props.featureToggles = featureToggles;

    return props;
  }

  protected getFeatureToggleLookup(allFeatureToggles: FeatureToggle[]) {
    const lookup = allFeatureToggles.reduce((prev, curr) => {
      return {
        ...prev,
        [normalizeGuid(curr.id)]: curr,
      };
    }, {} as Record<string, FeatureToggle | undefined>);

    return lookup;
  }

  protected toggleIsEnabled(
    lookup: Record<string, FeatureToggle | undefined>,
    site: SiteInfo,
    featureToggleId: string
  ) {
    const featureFlag = lookup[normalizeGuid(featureToggleId)];
    const featureState = featureFlag?.featureState.targetItem?.value.value;
    switch (featureState) {
      case 'All':
        return true;

      case 'Selected':
        const enabledForSites: string[] = [];
        featureFlag?.enableForSites?.targetItems?.forEach((x) =>
          x.children?.results?.forEach((x) =>
            x.children?.results?.forEach((x) =>
              x.children?.results?.forEach((x) => {
                const siteName = x.siteName?.value?.toLocaleLowerCase();
                if (siteName && !enabledForSites.includes(siteName)) {
                  enabledForSites.push(siteName);
                }
              })
            )
          )
        );
        return !!enabledForSites?.includes(site?.name?.toLocaleLowerCase());

      case 'Disabled':
      default:
        return false;
    }
  }

  protected getGraphQLClient(): GraphQLClient {
    return new GraphQLRequestClient(config.graphQLEndpoint, {
      apiKey: config.sitecoreApiKey,
      debugger: Debug.featureToggle,
    });
  }
}

export const featureTogglePlugin = new FeatureTogglePlugin();
