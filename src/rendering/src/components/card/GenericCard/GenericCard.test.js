// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import GenericCard from './GenericCard';
import defaultData from './GenericCard.mock-data';
import withIconData from './GenericCard.mock-data-icon';
import withImageData from './GenericCard.mock-data-image';
import withVideoData from './GenericCard.mock-data-video';

it('renders correctly', async () => {
  const card = snapshot(GenericCard, { cardProps: defaultData});
  await hasDataComponent(card, 'card/generic');
});

// it('with icon renders correctly', () => {
//   const card = snapshot(GenericCard, { cardProps: withIconData});
//   await hasDataComponent(card, 'card/genericcard');
// });

// it('with image renders correctly', () => {
//   const card = snapshot(GenericCard, { cardProps: withImageData});
//   await hasDataComponent(card, 'card/genericcard');
// });

// it('with video renders correctly', () => {
//   const card = snapshot(GenericCard, { cardProps: withVideoData});
//   await hasDataComponent(card, 'card/genericcard');
// });
