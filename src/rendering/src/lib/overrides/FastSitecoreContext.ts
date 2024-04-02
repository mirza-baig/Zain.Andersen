import { LayoutServiceData, SitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import fastDeepEqual from 'fast-deep-equal/es6/react';

export class FastSitecoreContext extends SitecoreContext {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentDidUpdate(prevProps: any): void {
    // We are overriding this method to use "fast-deep-equal" library instead of "deep-equal"
    // This is a huge performance gain.
    if (!fastDeepEqual(prevProps.layoutData, this.props.layoutData)) {
      this.setContext(this.props.layoutData as LayoutServiceData);
      return;
    }
  }
}
