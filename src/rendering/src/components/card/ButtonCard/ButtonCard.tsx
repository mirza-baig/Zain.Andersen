// Global
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import { useRef } from 'react';
// Types
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { ComponentProps } from 'lib/types/component-props';
import { TextAlignment } from '../GenericCard/GenericCard';
// Helper Components
import { Card } from 'src/helpers/Card';
import { Image, SvgIcon } from 'src/helpers/Media';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { Headline } from 'src/helpers/Headline';
import { Subheadline } from 'src/helpers/Subheadline';
import { BodyCopy } from 'src/helpers/BodyCopy';
// utils & other
import { useTheme } from 'lib/context/ThemeContext';
import { GenericCardTheme } from '../GenericCard/GenericCard.theme';
import { getEnum } from 'lib/utils';
import ButtonPrimary from 'src/helpers/Button/buttons/btn--primary';

export type ButtonCardProps = Feature.EnterpriseWeb.Enterprise.Cards.ButtonCard & ComponentProps;

const ButtonCard = (props: ButtonCardProps) => {
  const alignment = getEnum<TextAlignment>(props.fields?.alignment) || 'left';
  const { themeData } = useTheme(GenericCardTheme(alignment));

  const showIcon = !!props.fields?.icon?.value?.src;
  const showImage = !!props.fields?.image?.value?.src;

  const modalId = (
    props?.fields
      ?.cta1Modal as unknown as Feature.EnterpriseWeb.Enterprise.Components.Modal.GenericModal.GenericModal
  )?.fields?.modalId?.value;

  const modalLinkText = props?.fields?.cta1ModalLinkText;

  const CTAWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <Card
      classes={classNames(
        'transition-all duration-200 ease-in-out md:hover:scale-105 !my-s ml-[11px] ml:!mt-25px ml:!ml-[20px] hover:!ml-[20px] md:hover:shadow-xl group !w-[95%] !h-[98%]'
      )}
      dataComponent="card/buttoncard"
      {...props}
    >
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.code === 'Enter' || e.code === 'Space') {
            const buttonCardCta = CTAWrapperRef?.current?.querySelector('.buttonCardCta') as
              | HTMLLinkElement
              | HTMLButtonElement;
            if (buttonCardCta) {
              buttonCardCta.click();
            }
          }
        }}
        onClick={() => {
          const buttonCardCta = CTAWrapperRef?.current?.querySelector('.buttonCardCta') as
            | HTMLLinkElement
            | HTMLButtonElement;
          if (buttonCardCta) {
            buttonCardCta.click();
          }
        }}
        className={classNames(
          themeData.classes.cardWrapper,
          props.fields?.cta1Link?.value?.href === '' ? '!cursor-default' : 'cursor-pointer',
          'md:p-2'
        )}
      >
        {showIcon && (
          <SvgIcon
            image={props.fields?.icon}
            className={classNames(
              themeData.classes.iconClass,
              '!h-[80px] !min-h-0 !w-[80px] !min-w-0'
            )}
          />
        )}

        {!showIcon && showImage && <Image image={props.fields?.image} />}

        {/* buffer */}
        {(props?.fields?.eyebrowText?.value || props?.fields?.headlineText?.value) === '' && (
          <div className="!mb-[16px]"></div>
        )}

        <div className="flex grow flex-col">
          <div className={themeData.classes?.copyWrapper}>
            <Eyebrow classes={themeData.classes?.eyebrow} {...props} />
            <Headline classes={themeData.classes?.headline} {...props} />
            <Subheadline classes={themeData.classes?.subheadline} {...props}></Subheadline>
            <BodyCopy classes={themeData.classes?.body} {...props} />
          </div>

          <div ref={CTAWrapperRef} className={themeData.classes?.buttonGroupClass?.wrapper}>
            <ButtonPrimary
              field={props.fields?.cta1Link}
              variant={props.fields?.cta1Style}
              icon={props.fields?.cta1Icon}
              classes={classNames(
                props.fields?.cta1Style,
                'md:whitespace-pre-wrap	md:w-lg buttonCardCta group-hover:bg-primary group-hover:text-black'
              )}
              modalId={modalId}
              modalLinkText={modalLinkText}
              ariaLabel={props.fields?.cta1AriaLabel}
            ></ButtonPrimary>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default withDatasourceCheck()<ButtonCardProps>(ButtonCard);
