import { Component } from 'src/helpers/Component';
import { getEnum, useExperienceEditor } from 'lib/utils';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { MediaPrimary } from 'src/helpers/Media';
import { Headline } from 'src/helpers/Headline';
import { withDatasourceCheck, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'lib/context/ThemeContext';
import { PromoFeaturedMediaTheme } from './PromoFeaturedMedia.theme';
import { Subheadline } from 'src/helpers/Subheadline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { ComponentBackgroundVariants } from 'src/helpers/Component/Component';

export type PromoFeaturedMediaProps =
  Feature.EnterpriseWeb.Enterprise.Components.Promo.PromoFeaturedMedia.PromoFeaturedMedia;

const PromoFeaturedMedia = (props: PromoFeaturedMediaProps): JSX.Element => {
  const { themeData } = useTheme(PromoFeaturedMediaTheme);
  const style = getEnum<ComponentBackgroundVariants>(props.fields?.backgroundColor) ?? 'white';
  const isEE = useExperienceEditor();

  const hasValue =
    props.fields?.headlineText?.value ||
    props.fields?.subheadlineText?.value ||
    props.fields?.body?.value ||
    props.fields?.cta1Link.value?.href ||
    props.fields?.highlightTitle1?.value ||
    props.fields?.highlightDescription1?.value ||
    props.fields?.highlightTitle2?.value ||
    props.fields?.highlightDescription2?.value ||
    props.fields?.highlightTitle3?.value ||
    props.fields?.highlightDescription3?.value ||
    props.fields?.primaryImageCaption.value;

  return (
    <Component
      variant={props.fields?.primaryVideo ? 'lg' : 'full'}
      gap="gap-x-0"
      padding={'px-0'}
      backgroundVariant={style}
      dataComponent="promo/promofeaturedmedia"
      {...props}
    >
      <div className={themeData.classes.imageDivClass}>
        <MediaPrimary imageLayout="responsive" ratio="hero" hideCaption={true} {...props} />
      </div>
      {hasValue && (
        <div className={themeData.classes.containerClass}>
          <div className={themeData.classes.leftContainerClass}>
            <div className={themeData.classes.subheadlineContainerClass}>
              <Subheadline classes={themeData.classes.subheadlineClass} {...props} />
              <div className={themeData.classes.captionClass}>
                <RichTextWrapper field={props.fields?.primaryImageCaption} />
              </div>
            </div>
            {(isEE ||
              (props.fields?.headlineText?.value &&
                props.fields?.body?.value &&
                props.fields?.cta1Link?.value?.text)) && (
              <div>
                <Headline classes={themeData.classes.headlineClass} {...props} />
                <BodyCopy classes={themeData.classes.bodyClass} {...props} />
                <ButtonGroup classes={themeData.classes.buttonGroupClass} {...props} />
              </div>
            )}
          </div>
          <div className={themeData.classes.rightContainerClass}>
            {(isEE ||
              (props.fields?.headlineText?.value &&
                props.fields?.body?.value &&
                props.fields?.cta1Link?.value?.text)) && (
              <div className={themeData.classes.rightPaddingClass} />
            )}
            <div className={themeData.classes.highlightGroupClass}>
              {(isEE ||
                (props.fields?.highlightTitle1?.value &&
                  props.fields?.highlightDescription1?.value)) && (
                <div className={themeData.classes.highlightContainerClass}>
                  <div className={themeData.classes.highlightTitleClass}>
                    <Text tag={'h3'} field={props.fields?.highlightTitle1} />
                  </div>
                  <RichTextWrapper
                    field={props.fields?.highlightDescription1}
                    className={themeData.classes.highlightDescriptionClass}
                  />
                </div>
              )}
              {(isEE ||
                (props.fields?.highlightTitle2?.value &&
                  props.fields?.highlightDescription2?.value)) && (
                <div className={themeData.classes.highlightContainerClass}>
                  <div className={themeData.classes.highlightTitleClass}>
                    <Text tag={'h3'} field={props.fields?.highlightTitle2} />
                  </div>
                  <RichTextWrapper
                    field={props.fields?.highlightDescription2}
                    className={themeData.classes.highlightDescriptionClass}
                  />
                </div>
              )}
              {(isEE ||
                (props.fields?.highlightTitle3?.value &&
                  props.fields?.highlightDescription3?.value)) && (
                <div className={themeData.classes.highlightContainerClass}>
                  <div className={themeData.classes.highlightTitleClass}>
                    <Text tag={'h3'} field={props.fields?.highlightTitle3} />
                  </div>
                  <RichTextWrapper
                    field={props.fields?.highlightDescription3}
                    className={themeData.classes.highlightDescriptionClass}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Component>
  );
};

export default withDatasourceCheck()<PromoFeaturedMediaProps>(PromoFeaturedMedia);
