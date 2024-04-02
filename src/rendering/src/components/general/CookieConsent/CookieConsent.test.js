// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import CookieConsent from './CookieConsent.dynamic';
import defaultData from './CookieConsent.mock-data';

it('renders correctly', async () => {
  const component = snapshot(CookieConsent, { componentProps: defaultData });
  await hasDataComponent(component, 'general/cookieconsent');
});
