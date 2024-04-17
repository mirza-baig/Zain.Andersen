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
import VideoModal from 'src/components/modal/VideoModal/VideoModal';
export type GenericCardProps = Feature.EnterpriseWeb.Enterprise.Cards.GenericCard & {
  desktopVideoDisplayStyle: DesktopVideoDisplayStyleType;
};

export type TextAlignment = 'left' | 'center';

const GenericCard = (props: GenericCardProps): JSX.Element => {
  // console.log('GenericCard', props);
  console.log('props', props.fields);
  // console.log(
  //   'video modal',
  //   (
  //     props.fields
  //       ?.cta1Modal as unknown as Feature.EnterpriseWeb.Enterprise.Components.Modal.VideoModal.VideoModal
  //   ).fields?.iframeUrl?.value
  // );
  // console.log('generic', props.fields?.cta1Modal);
  const alignment = getEnum<TextAlignment>(props.fields?.alignment) || 'left';
  const { themeData } = useTheme(GenericCardTheme(alignment));
  const test = VideoModal;

  const showVideo = !!props.fields?.primaryVideo;

  const showEyebrowLink = !!props.fields?.eyebrowLink?.value?.href;
  const showIcon = !!props.fields?.icon?.value?.src;
  const showImage = !!props.fields?.image?.value?.src;

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
  const CTAUrlExist = imageCTAObject?.value.href && imageCTAObject.value.href.length > 0;

  return (
    <Card dataComponent="card/generic" {...props}>
      <div className={themeData.classes.cardWrapper}>
        {showVideo && (
          <VideoCard {...props} desktopVideoDisplayStyle={props.desktopVideoDisplayStyle} />
        )}
        {!showVideo && showIcon && (
          <SvgIcon
            image={props.fields.icon}
            className={classNames(
              themeData.classes.iconClass,
              '!h-[80px] !min-h-0 !w-[80px] !min-w-0'
            )}
          />
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

                'test'                // (
                //   props.fields
                //     ?.cta1Modal as unknown as Feature.EnterpriseWeb.Enterprise.Components.Modal.VideoModal.VideoModal
                // ).fields?.iframeUrl.value
                // test
                // console.log(test);
                // (
                //   props.fields
                //     ?.cta1Modal as unknown as Feature.EnterpriseWeb.Enterprise.Components.Modal.VideoModal.VideoModal
                // )?.fields?.value
              }
              modalLinkText={props.fields?.cta1ModalLinkText}
              classes={classNames(props.fields?.cta1Style, 'md:whitespace-pre-wrap	md:w-lg')}
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
