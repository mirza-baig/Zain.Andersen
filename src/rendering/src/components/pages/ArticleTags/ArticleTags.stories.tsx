// Global
import { Story, Meta } from '@storybook/react';
// Local
import ArticleTags, { ArticleTagsProps } from './ArticleTags';
import defaultData from './ArticleTags.mock-data';

export default {
  title: 'Pages/ArticleTags',
  component: ArticleTags,
} as Meta;
const Template: Story<ArticleTagsProps> = (props) => <ArticleTags {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
