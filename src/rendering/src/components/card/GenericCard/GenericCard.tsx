// Components
import { Card } from 'src/helpers/Card';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { GenericCardTheme } from './GenericCard.theme';
import { getEnum } from 'lib/utils';
import { Image } from 'src/helpers/Media';
import { useTheme } from 'lib/context/ThemeContext';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { SvgIcon } from 'src/helpers/Media';
import { Button } from 'src/helpers/Button';
import Link from 'next/link';
import { Subheadline } from 'src/helpers/Subheadline';
import classNames from 'classnames';
import VideoCard from './GenericCardVideo.helper';
import { DesktopVideoDisplayStyleType } from 'components/listing/XupCardCollection/XupCardCollection';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
// import VideoModal from 'src/components/modal/VideoModal/VideoModal';
export type GenericCardProps = Feature.EnterpriseWeb.Enterprise.Cards.GenericCard & {
  desktopVideoDisplayStyle: DesktopVideoDisplayStyleType;
};

export type TextAlignment = 'left' | 'center';

const GenericCard = (props: GenericCardProps): JSX.Element => {
  console.log('props for Generic CArd neww', props.fields.cta1Modal?.templateName);
  // let temp = props.fields.cta1Modal;
  // console.log('CTA1 modal',temp);

  // console.log('extracting link', props.fields?.cta1Link.value.href);
  // console.log('modal iframe exist?', props.fields?.cta1Modal?.fields?.name?.value);
  // console.log('modal iframe exist?', props.fields?.cta1Modal?.fields?.name?.value === "Iframe);
  // console.log(
  //   'video modal',
  //   (
  //     props.fields
  //       ?.cta1Modal as unknown as Feature.EnterpriseWeb.Enterprise.Components.Modal.VideoModal.VideoModal
  //   ).fields?.iframeUrl?.value
  // );
  // console.log('generic', props.fields?.cta1Modal);
  //Video Modal
  const alignment = getEnum<TextAlignment>(props.fields?.alignment) || 'left';
  const { themeData } = useTheme(GenericCardTheme(alignment));
  // const test = VideoModal;

  const showVideo = !!props.fields?.primaryVideo;

  const showEyebrowLink = !!props.fields?.eyebrowLink?.value?.href;
  const showIcon = !!props.fields?.icon?.value?.src;
  const showIconImage = props.fields?.icon;
  const showImage = !!props.fields?.image?.value?.src;

  console.log('value for showicon', showIcon);
  console.log('value for showIconImage', showIconImage);
  const getImageCTAObject = (data: GenericCardProps['fields']): LinkField | undefined => {
    const imageCTAMap: Record<'CTA 1' | 'CTA 2', LinkField | undefined> = {
      'CTA 1': data?.cta1Link,
      'CTA 2': data?.cta2Link,
    };
    return (
      imageCTAMap[data?.ImageCTA?.value as unknown as keyof typeof imageCTAMap] || data?.cta1Link
    );
  };
  const imageCTAObject = getImageCTAObject(props.fields);
  console.log('imageCTAObject', imageCTAObject);
  const CTAUrlExist = imageCTAObject?.value.href && imageCTAObject.value.href.length > 0;

  return (
    <Card dataComponent="card/generic" {...props}>
      <div className={themeData.classes.cardWrapper}>
        {showVideo && (
          <VideoCard {...props} desktopVideoDisplayStyle={props.desktopVideoDisplayStyle} />
        )}
        {!showVideo && showIcon && (
          <LinkWrapper
            field={{
              href: props.fields.cta1Link.value?.href || '',
              class: themeData.classes.iconClass,
              // className: ,
            }}
          >
            <SvgIcon
              image={showIconImage}
              className={classNames(
                themeData.classes.iconClass,
                '!min-w- !h-[80px] !min-h-0 !w-[80px]'
              )}
            ></SvgIcon>
          </LinkWrapper>
        )}

        {!showIcon && !showVideo && showImage && imageCTAObject && CTAUrlExist && (
          <LinkWrapper
            field={{
              href: imageCTAObject.value?.href || '',
              title: imageCTAObject.value?.text,
              target: imageCTAObject.value?.target || '_self',
            }}
            ariaLabel={{ value: imageCTAObject.value?.text || 'CTA Image' }}
          >
            <Image image={props.fields?.image} />
          </LinkWrapper>
        )}
        {!showIcon && !showVideo && showImage && !CTAUrlExist && (
          <Image image={props.fields?.image} />
        )}

        <div className="flex grow flex-col">
          <div className={themeData.classes.copyWrapper}>
            {showEyebrowLink && (
              <Link href={props.fields?.eyebrowLink.value.href}>
                <a className={themeData.classes.eyebrowLink}>
                  <Eyebrow classes={themeData.classes.eyebrow} {...props} />
                </a>
              </Link>
            )}
            {!showEyebrowLink && <Eyebrow classes={themeData.classes.eyebrow} {...props} />}
            <Headline defaultTag="h3" classes={themeData.classes.headline} {...props} />
            <Subheadline classes={themeData.classes.subheadline} {...props}></Subheadline>
            <BodyCopy classes={themeData.classes.body} {...props} />
          </div>
          <div className={themeData.classes.buttonGroupClass.wrapper}>
            <Button //this is modal buton component
              field={props.fields?.cta1Link}
              variant={props.fields?.cta1Style}
              icon={props.fields?.cta1Icon}
              modalId={
                (
                  props.fields
                    ?.cta1Modal as unknown as Feature.EnterpriseWeb.Enterprise.Components.Modal.GenericModal.GenericModal
                )?.fields?.modalId?.value
              }
              videoModal={
                props.fields &&
                props.fields.cta1Modal &&
                props.fields.cta1Modal.templateName === 'Video Modal'
                  ? props.fields.cta1Modal
                  : undefined
                // props.fields !== null && props.fields !== undefined && props.fields.cta1Modal !== null && props.fields.cta1Modal !== undefined
                // ? props.fields.cta1Modal
                // : ""
                // // props.fields.cta1Modal
                // props.fields?.cta1Modal
                // ?.fields?.videoModal?.value === 'Iframe';
              }
              modalLinkText={props.fields?.ctaModal1LinkText}
              classes={classNames(props.fields?.cta2Style, 'md:whitespace-pre-wrap	md:w-lg')}
            ></Button>
            <Button
              field={props.fields?.cta2Link}
              variant={props.fields?.cta2Style}
              icon={props.fields?.cta2Icon}
              modalId={
                (
                  props.fields
                    ?.cta2Modal as unknown as Feature.EnterpriseWeb.Enterprise.Components.Modal.GenericModal.GenericModal
                )?.fields?.modalId?.value
              }
              modalLinkText={props.fields?.ctaModal2LinkText}
              classes={classNames(props.fields?.cta2Style, 'md:whitespace-pre-wrap	md:w-lg')}
            ></Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GenericCard;
