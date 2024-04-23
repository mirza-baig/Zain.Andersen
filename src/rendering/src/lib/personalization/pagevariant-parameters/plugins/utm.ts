import { NextRequest } from 'next/server';
import { RuleContext } from 'lib/rules/rules';
import { Plugin } from '..';

export type UtmParams = {
  referrer: string;
  utm: {
    [key: string]: string | undefined;
    campaign: string | undefined;
    source: string | undefined;
    medium: string | undefined;
    content: string | undefined;
  };
};

class UtmPlugin implements Plugin {
  order = 10;

  protected getUtmParams(req: NextRequest): UtmParams {
    const utm = {
      campaign: req.nextUrl.searchParams.get('utm_campaign') || undefined,
      content: req.nextUrl.searchParams.get('utm_content') || undefined,
      medium: req.nextUrl.searchParams.get('utm_medium') || undefined,
      source: req.nextUrl.searchParams.get('utm_source') || undefined,
    };

    return {
      // It's expected that the header name "referer" is actually a misspelling of the word "referrer"
      // req.referrer is used during fetching to determine the value of the Referer header of the request being made,
      // used as a fallback
      referrer: req.headers.get('referer') || req.referrer,
      utm: utm,
    };
  }

  async exec(context: RuleContext, req: NextRequest) {
    const utmParams = this.getUtmParams(req);

    // TODO: Make this a constant or a helper
    context.parameters['utm'] = utmParams;
    return context;
  }
}

export const utmPlugin = new UtmPlugin();
