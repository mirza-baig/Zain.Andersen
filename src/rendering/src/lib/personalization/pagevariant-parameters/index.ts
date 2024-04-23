import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { RuleContext } from 'lib/rules/rules';
import * as plugins from 'temp/pagevariant-parameters-plugins';

export interface Plugin {
  /**
   * Detect order when the plugin should be called, e.g. 0 - will be called first (can be a plugin which data is required for other plugins)
   */
  order: number;
  /**
   * A function which will be called during personalization parameters generation
   */
  exec(
    context: RuleContext,
    req: NextRequest,
    res?: NextResponse,
    ev?: NextFetchEvent
  ): Promise<RuleContext>;
}

export class PageVariantParametersFactory {
  /**
   * Create RuleContext for given request
   * @param {RuleContext} startingContext
   * @param {NextRequest} req
   * @param {NextResponse} res
   * @param {NextFetchEvent} ev
   * @see SitecorePageProps
   */
  public async extend(
    startingContext: RuleContext,
    req: NextRequest,
    res?: NextResponse,
    ev?: NextFetchEvent
  ): Promise<RuleContext> {
    const extendedContext = await (Object.values(plugins) as Plugin[])
      .sort((p1, p2) => p1.order - p2.order)
      .reduce(async (result, plugin) => {
        const context = await result;
        const newContext = await plugin.exec(context, req, res, ev);
        return newContext;
      }, Promise.resolve(startingContext));

    return extendedContext;
  }
}

export const pageVariantParametersFactory = new PageVariantParametersFactory();
