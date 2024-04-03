import { Component } from 'src/helpers/Component';
import { Headline } from 'src/helpers/Headline';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import RichTextWrapper from 'src/helpers/RichTextWrapper/RichTextWrapper';
import { MediaPrimary, MediaSecondary } from 'src/helpers/Media';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { ContentBlockWithMediaTheme } from './ContentBlockWithMedia.theme';
import { useExperienceEditor } from 'lib/utils';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { getEnum } from 'lib/utils';
import { ButtonVariants, Button } from 'src/helpers/Button';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import classNames from 'classnames';

export type ContentBlockWithMediaProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.ContentBlockWithMedia.ContentBlockWithMedia;

const ContentBlockWithMedia = (props: ContentBlockWithMediaProps): JSX.Element => {
  const isEE = useExperienceEditor();
  const { themeData } = useTheme(
    ContentBlockWithMediaTheme(props, getEnum<ButtonVariants>(props.fields?.cta2Style) || 'link')
  );
  const { currentScreenWidth } = useCurrentScreenType();

  // Fail out if we don't have any fields
  if (!props) {
    return <></>;
  }

  const imageLayoutType =
    props.fields?.primaryImage?.value?.src &&
    !props.fields?.secondaryImage?.value?.src &&
    currentScreenWidth >= getBreakpoint('md')
      ? 'intrinsic'
      : 'responsive';

  const imageContainerWidth =
    imageLayoutType === 'intrinsic'
      ? { maxWidth: `${props.fields?.primaryImage?.value?.width}px` }
      : {};

  const focusArea = 'top center';

  return (
    <Component variant="lg" dataComponent="general/contentblockwithmedia" {...props}>
      <div className="col-span-12 grid grid-cols-12 md:gap-x-s">
        <div className={themeData.classes.headingContainer}>
          <Headline defaultTag="h2" classes={themeData.classes.headlineContainer} {...props} />
          <RichTextWrapper
            field={props.fields?.topCopy}
            className={themeData.classes.topCopyContainer}
          />
        </div>
        <div className={themeData.classes.bodyContainer}>
          <div className={themeData.classes.imageContainer}>
            {(props.fields?.primaryImage?.value?.src || props.fields?.primaryVideo || isEE) && (
              <div className={themeData.classes.imageOuterContainer} style={imageContainerWidth}>
                <MediaPrimary {...props} imageLayout={imageLayoutType} focusArea={focusArea} />
              </div>
            )}
            {(props.fields?.secondaryImage?.value?.src || props.fields?.secondaryVideo || isEE) && (
              <div className={themeData.classes.imageOuterContainer} style={imageContainerWidth}>
                <MediaSecondary {...props} imageLayout={imageLayoutType} focusArea={focusArea} />
              </div>
            )}
          </div>
          <RichTextWrapper
            classes={themeData.classes.bodyContainer}
            field={props.fields?.bottomCopy}
          />
        </div>

        <div className={themeData.classes.contentWrapper}>
          <div
            className={
              props.fields.ctaAlignment?.displayName == 'Stack'
                ? 'flex flex-col items-start md:space-y-4'
                : 'flex flex-col items-start md:flex-row'
            }
          >
            <ButtonGroup
              classes={{
                wrapper: themeData.classes.buttonGroupClass.wrapper,
                cta1Classes: themeData.classes.buttonGroupClass.cta1Classes,
                cta2Classes: themeData.classes.buttonGroupClass.cta2Classes,
                ctaAlignment: props.fields.ctaAlignment?.displayName == 'Stack',
              }}
              {...props}
            />

            {props.fields?.cta2Link && (
              <Button
                field={props.fields?.cta2Link}
                variant={props.fields?.cta2Style}
                icon={props.fields?.cta2Icon}
                classes={classNames(
                  props.classes?.cta2Classes,
                  props.fields.ctaAlignment?.displayName == 'Stack'
                    ? ''
                    : 'mt-2 ml-0 md:ml-10 md:mt-0'
                )}
                ariaLabel={props.fields.cta2AriaLabel}
              />
            )}
          </div>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<ContentBlockWithMediaProps>(ContentBlockWithMedia);
