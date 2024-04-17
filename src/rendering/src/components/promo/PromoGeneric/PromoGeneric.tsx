import { Component } from 'src/helpers/Component';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { MediaPrimary } from 'src/helpers/Media';
import { Headline } from 'src/helpers/Headline';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'lib/context/ThemeContext';
import { PromoGenericTheme } from './PromoGeneric.theme';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import PriceLevel from 'src/helpers/PriceLevel/PriceLevel';
import { getEnum } from 'lib/utils';
import { ComponentBackgroundVariants } from 'src/helpers/Component/Component';

export type PromoGenericProps =
  Feature.EnterpriseWeb.Enterprise.Components.Promo.PromoGeneric.PromoGeneric;

const PromoGeneric = (props: PromoGenericProps): JSX.Element => {
  console.log('PromoGeneric', props.fields);
  const { themeData } = useTheme(
    PromoGenericTheme(
      props?.fields?.imgPosition,
      props?.fields?.imageRatio,
      props?.fields?.useLegalCopyFont?.value || false
    )
  );
  const priceLevel = parseInt(props.fields?.priceLevel?.fields.priceLevelText?.value || '');
  const CTA2Props = {
    cta1Link: {
      value: {
        href: props?.fields?.cta2Link?.value?.href,
        text: props?.fields?.cta2Link?.value?.text,
        anchor: props?.fields?.cta2Link?.value?.anchor,
        linktype: props?.fields?.cta2Link?.value?.linktype,
        class: props?.fields?.cta2Link?.value?.class,
        title: props?.fields?.cta2Link?.value?.title,
        target: props?.fields?.cta2Link?.value?.target,
        querystring: props?.fields?.cta2Link?.value?.querystring,
        id: props?.fields?.cta2Link?.value?.id,
      },
    },
    cta1ModalLinkText: {
      value: '',
    },
    cta1AriaLabel: {
      value: '',
    },
    cta1Style: {
      id: props?.fields?.cta2Style?.id,
      url: props?.fields?.cta2Style?.url,
      name: props?.fields?.cta2Style?.name,
      displayName: props?.fields?.cta2Style?.displayName,
      fields: {
        Value: {
          value: props?.fields?.cta2Style?.fields?.Value?.value,
        },
      },
      templateId: props?.fields?.cta2Style?.templateId,
      templateName: props?.fields?.cta2Style?.templateName,
    },
    cta1Icon: {
      id: props?.fields?.cta2Icon?.templateId,
      url: props?.fields?.cta2Icon?.url,
      name: props?.fields?.cta2Icon?.name,
      displayName: props?.fields?.cta2Icon?.displayName,
      fields: {
        Value: {
          value: props?.fields?.cta2Icon?.fields?.Value?.value,
        },
      },
      templateId: props?.fields?.cta2Icon?.templateId,
      templateName: props?.fields?.cta2Icon?.templateName,
    },
  };
  const style = getEnum<ComponentBackgroundVariants>(props.fields?.backgroundColor) ?? 'white';

  return (
    <Component
      variant="full"
      gap="gap-x-0"
      padding="px-0"
      backgroundVariant={style}
      dataComponent="general/promogeneric"
      {...props}
    >
      <div className="col-span-12">
        <div className="py-4 md:max-w-screen-lg lg:mx-auto">
          <div className={themeData.classes.wrapperClass}>
            <div className={themeData.classes.txtDivClass}>
              <div>
                <Eyebrow classes={themeData.classes.eyebrowClass} {...props} />
                <Headline classes={themeData.classes.headlineClass} {...props} />
                {priceLevel ? (
                  <div className={themeData.classes.priceLevelWrapper}>
                    <PriceLevel
                      priceLevel={priceLevel}
                      priceClasses={themeData.classes.priceTextClasses}
                      priceLevelClasses={themeData.classes.priceLevelClasses}
                    />
                  </div>
                ) : (
                  <></>
                )}
                <BodyCopy classes={themeData.classes.bodyClass} {...props} />
                <div className="mb-8">
                  <SingleButton classes={themeData.classes.buttonClasses} {...props} />
                  {props?.fields?.cta2Link?.value?.text && (
                    <SingleButton classes={themeData.classes.buttonClasses} fields={CTA2Props} />
                  )}
                </div>
                <div className="items-bottom">
                  <RichTextWrapper
                    classes={themeData.classes.bottomHeadingClass}
                    field={props.fields?.bottomCaptionHeadline}
                  />
                  <RichTextWrapper
                    classes={themeData.classes.bottomDescriptionClass}
                    field={props.fields?.bottomCaptionDescription}
                  />
                </div>
              </div>
            </div>
            <div className={themeData.classes.imageDivClass}>
              <MediaPrimary {...props} imageLayout="intrinsic" maxH={'h-full'} />
            </div>
          </div>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<PromoGenericProps>(PromoGeneric);
