import { SitecorePageProps } from 'lib/page-props';
import { RuleContext } from 'lib/rules/rules';
import * as plugins from 'temp/item-personalization-parameters-plugins';

export interface Plugin {
  /**
   * Detect order when the plugin should be called, e.g. 0 - will be called first (can be a plugin which data is required for other plugins)
   */
  order: number;
  /**
   * A function which will be called during personalization parameters generation
   */
  exec(context: RuleContext, props: SitecorePageProps): Promise<RuleContext>;
}

export class ItemPersonalizationParametersFactory {
  /**
   * Create RuleContext for given request
   * @param {RuleContext} context
   * @see SitecorePageProps
   */
  public async extend(
    startingContext: RuleContext,
    props: SitecorePageProps
  ): Promise<RuleContext> {
    const extendedContext = await (Object.values(plugins) as Plugin[])
      .sort((p1, p2) => p1.order - p2.order)
      .reduce(async (result, plugin) => {
        const context = await result;
        const newContext = await plugin.exec(context, props);
        return newContext;
      }, Promise.resolve(startingContext));

    return extendedContext;
  }
}

export const itemPersonalizationParametersFactory = new ItemPersonalizationParametersFactory();
