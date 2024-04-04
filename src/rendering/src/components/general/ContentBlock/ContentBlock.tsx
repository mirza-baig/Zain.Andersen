// Components
import { BodyCopy } from 'src/helpers/BodyCopy';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { Component } from 'src/helpers/Component';
import { ContentBlockTheme } from './ContentBlock.theme';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getEnum } from 'lib/utils';
import { Headline } from 'src/helpers/Headline';
import { useTheme } from 'lib/context/ThemeContext';
import classNames from 'classnames';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ButtonVariants } from 'src/helpers/Button';

export type ContentBlockProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.ContentBlock.ContentBlock;

export type BackgroundColor = 'black' | 'gray' | 'white';

const ContentBlock = (props: ContentBlockProps): JSX.Element => {
  console.log('ContentBlock', props);
  const backgroundColor = getEnum<BackgroundColor>(props.fields?.backgroundColor) || 'white';
  const legalCopyFont = props?.fields?.useLegalCopyFont?.value || false;
  const { themeData } = useTheme(
    ContentBlockTheme(backgroundColor, getEnum<ButtonVariants>(props.fields?.cta2Style) || 'link')
  );

  return (
    <Component
      variant="full"
      gap="gap-x-0"
      padding="px-0"
      backgroundVariant={getEnum(props.fields?.backgroundColor)}
      dataComponent="general/contentblock"
      {...props}
    >
      <div className={themeData.classes.contentWrapper}>
        <Headline defaultTag="h2" classes={themeData.classes.headlineClass} {...props} />
        <BodyCopy
          classes={classNames(themeData.classes.bodyClass)}
          refer={legalCopyFont ? 'legal-copy' : 'body-copy'}
          {...props}
        />
        <ButtonGroup
          classes={{
            wrapper: themeData.classes.buttonGroupClass.wrapper,
            cta1Classes: themeData.classes.buttonGroupClass.cta1Classes,
            cta2Classes: themeData.classes.buttonGroupClass.cta2Classes,
            cta3Classes: themeData.classes.buttonGroupClass.cta3Classes,
            ctaAlignment: props.fields?.ctaAlignment?.displayName == 'Stack',
          }}
          {...props}
        />
      </div>
    </Component>
  );
};

export default withDatasourceCheck()(ContentBlock);
