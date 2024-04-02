// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import JobDetailsFormContainer from './JobDetailsFormContainer';
import defaultData from './JobDetailsFormContainer.mock-data';

it('renders correctly', async () => {
  const component = snapshot(JobDetailsFormContainer, { componentProps: defaultData });
  await hasDataComponent(component, 'forms/jobdetailsformcontainer');
});
