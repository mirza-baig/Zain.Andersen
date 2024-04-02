// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import BazaarvoiceReviewSubmission from './BazaarvoiceReviewSubmission.dynamic';
import defaultData from './BazaarvoiceReviewSubmission.mock-data';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

it('renders correctly', async () => {
  const component = snapshot(BazaarvoiceReviewSubmission, { componentProps: defaultData });
  await hasDataComponent(component, 'general/bazaarvoicereviewsubmission');
});
