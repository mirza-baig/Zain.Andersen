// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import RichTextWrapper from 'src/helpers/RichTextWrapper/RichTextWrapper';

// Components
import { Component } from 'src/helpers/Component';
import { ContentBlockWithSidebarTheme } from './ContentBlockWithSidebar.theme';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Headline } from 'src/helpers/Headline';

export type ContentBlockWithSidebarProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.General.ContentBlockWithSidebar.ContentBlockWithSidebar;
const ContentBlockWithSidebar = (props: ContentBlockWithSidebarProps) => {
  const { themeData } = useTheme(ContentBlockWithSidebarTheme);

  return (
    <Component variant="lg" gap=" " dataComponent="general/contentblockwithsidebar" {...props}>
      <div className={themeData.classes.leftColumnClass}>
        <Headline defaultTag="h2" classes={themeData.classes.headlineClass} {...props} />
        <BodyCopy {...props} />
      </div>

      <div className={themeData.classes.rightColumnClass}>
        <Text
          tag={'h3'}
          className={themeData.classes.subheadlineClass}
          field={props.fields?.sideBarSubheading}
        />
        <div>
          <RichTextWrapper
            classes={themeData.classes.subBodyClass}
            field={props.fields?.sideBarBodyCopy}
          />
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<ContentBlockWithSidebarProps>(ContentBlockWithSidebar);
