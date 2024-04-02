/***  Disabling no-explicit-any for whole file as this file is containing a whole lot of them, and to apply proper type,
 we need to understand context of every instance of how and when this helper is being used */

/* eslint-disable @typescript-eslint/no-explicit-any */
// Global
import { ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { useState } from 'react';

// Components
import { LayoutValue } from 'src/helpers/Media';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { useTheme } from 'src/lib/context/ThemeContext';
import { SliderWrapper } from '../SliderWrapper';
import { BouncyCardTheme, BouncyCardThemeSubType } from './BouncyCard.theme';

export type BouncyCardBaseProps = {
  id: any | undefined;
  name: any | undefined;
  ctaText: any | undefined;
  heading: any | undefined;
  image: any | undefined;
  icon: any | undefined;
  property: any | undefined;
  step: {
    heading: any | undefined;
    subhead: any | undefined;
    copy: any | undefined;
  };
  isPerfectMatch: boolean | false;
  help: {
    cta: any | undefined;
    popup: {
      text: any | undefined;
      image1: any | undefined;
      image2: any | undefined;
      image3: any | undefined;
      image4: any | undefined;
      image5: any | undefined;
      mobileImage1: any | undefined;
      mobileImage2: any | undefined;
      mobileImage3: any | undefined;
      mobileImage4: any | undefined;
      mobileImage5: any | undefined;
    };
  } | null;
};

export type BouncyCardProps = {
  children?: React.ReactNode | React.ReactNode[];
  onClick?: (param: any) => void;
  ctaUrl?: string;
  ctaAlwaysVisible?: boolean;
  cardWidth?: string;
  renderAsLink?: boolean;
  onHelpClick?: (param: any) => void;
  helpClickOverride?: boolean;
  mobileFullWidth?: boolean;
  additionalWrapperClassName?: string;
  additionalButtonClassName?: string;
  additionalHeadingClassName?: string;
  additionalCtaClassName?: string;
  bounce?: boolean;
  noBottomCTA?: boolean;
  imageLayout?: LayoutValue;
  defaultImageWidth?: number;
  defaultImageHeight?: number;
} & BouncyCardBaseProps;

const BouncyCard = (props: BouncyCardProps): JSX.Element => {
  const { themeName, themeData } = useTheme(
    BouncyCardTheme(
      props.mobileFullWidth ?? false,
      props.cardWidth ?? '',
      props?.bounce,
      props?.additionalButtonClassName,
      props?.ctaAlwaysVisible,
      props?.noBottomCTA ?? false
    )
  );
  const theme = (themeData as BouncyCardThemeSubType).classes;
  const [showModal, setShowModal] = useState(false);
  const renderAsLink = props.renderAsLink ?? true;

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = (event: React.MouseEvent) => {
    setShowModal(true);
    window.scrollTo(0, 0);
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();
    event.nativeEvent.preventDefault();
    return false;
  };

  const sliderSettings = {
    infinite: false,
    className: `max-w-full [&_.slick-active_button:before]:!text-primary`,
  };

  function HasImageDimensions(image: ImageField) {
    return image?.value?.height && image?.value?.width;
  }

  const option = props;
  const cardImage = option.image;
  if (!cardImage.value.height) {
    cardImage.value.height = props.defaultImageHeight ?? 100;
  }

  if (!cardImage.value.width) {
    cardImage.value.width = props.defaultImageWidth ?? 100;
  }

  const ctaUrl = props?.ctaUrl ?? '#/' + props.id;

  const RenderInnerContent = () => {
    return (
      <>
        <div className={theme.optionTop}>
          <div className={theme.optionImgWrapper}>
            <ImageWrapper
              image={cardImage}
              additionalDesktopClasses={theme.optionImage}
              imageLayout={
                HasImageDimensions(option.image) ? props?.imageLayout ?? 'responsive' : 'fill'
              }
            ></ImageWrapper>
          </div>
          <p className={theme.optionHeading + ' ' + (props?.additionalHeadingClassName ?? '')}>
            <Text field={option.heading}></Text>
          </p>
        </div>
        <div className={theme.optionBottom + ' ' + (props?.additionalCtaClassName ?? '')}>
          {option.help?.cta?.value ? (
            <div
              className={theme.optionHelp}
              onClick={(event) => {
                !props.helpClickOverride && openModal(event);
                props.onHelpClick && props.onHelpClick(event);
              }}
            >
              <Text field={option?.help?.cta}></Text>
            </div>
          ) : (
            <div className={theme.optionHelp}></div>
          )}
          {option.ctaText?.value && (
            <div className={theme.optionCta}>
              <RichTextWrapper field={option.ctaText}></RichTextWrapper>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className={theme.optionMain + ' ' + (props?.additionalWrapperClassName ?? '')}
        onClick={props.onClick}
      >
        {renderAsLink ? (
          <Link href={ctaUrl}>
            <a
              className={theme.optionBtn}
              title={option.heading?.value}
              aria-label={option.heading?.value}
            >
              {RenderInnerContent()}
              {props.children ? props.children : <></>}
            </a>
          </Link>
        ) : (
          <div className={theme.optionBtn}>
            {RenderInnerContent()}
            {props.children ? props.children : <></>}
          </div>
        )}
        {showModal && (
          <div className={theme.help.helpContainer}>
            <div className={theme.help.helpOverlay}>
              <div className={theme.help.helpWrapper}>
                <div className={theme.help.helpContent}>
                  <div className={theme.help.closeWrapper}>
                    <a className={theme.help.closeButton} onClick={closeModal}>
                      <SvgIcon
                        icon={'close'}
                        size={'xl'}
                        className={theme.help.closeButtonIcon}
                      ></SvgIcon>
                    </a>
                  </div>
                  <div className={theme.help.mobileDisplay.mobileDisplay}>
                    <div className={theme.help.mobileDisplay.richTextContent}>
                      <RichTextWrapper field={option?.help?.popup?.text} refer=""></RichTextWrapper>
                    </div>
                    <div className={theme.help.mobileDisplay.carousel}>
                      <SliderWrapper sliderSettings={sliderSettings} theme={themeName}>
                        {
                          <div className={theme.help.mobileDisplay.carouselImage}>
                            <ImageWrapper
                              key={1}
                              image={option?.help?.popup?.image1}
                              imageLayout="intrinsic"
                            ></ImageWrapper>
                          </div>
                        }
                        {option?.help?.popup?.image2 && (
                          <div className={theme.help.mobileDisplay.carouselImage}>
                            <ImageWrapper
                              key={2}
                              image={option?.help?.popup?.image2}
                              imageLayout="intrinsic"
                            ></ImageWrapper>
                          </div>
                        )}
                        {option?.help?.popup?.image3 && (
                          <div className={theme.help.mobileDisplay.carouselImage}>
                            <ImageWrapper
                              key={3}
                              image={option?.help?.popup?.image3}
                              imageLayout="intrinsic"
                            ></ImageWrapper>
                          </div>
                        )}
                        {option?.help?.popup?.image4 && (
                          <div className={theme.help.mobileDisplay.carouselImage}>
                            <ImageWrapper
                              key={4}
                              image={option?.help?.popup?.image4}
                              imageLayout="intrinsic"
                            ></ImageWrapper>
                          </div>
                        )}
                        {option?.help?.popup?.image5 && (
                          <div className={theme.help.mobileDisplay.carouselImage}>
                            <ImageWrapper
                              key={5}
                              image={option?.help?.popup?.image5}
                              imageLayout="intrinsic"
                            ></ImageWrapper>
                          </div>
                        )}
                      </SliderWrapper>
                    </div>
                    <div
                      className={theme.help.mobileDisplay.buttonContainer}
                      onClick={props.onClick}
                    >
                      {renderAsLink ? (
                        <Link href={ctaUrl}>
                          <a
                            className={theme.help.mobileDisplay.button}
                            title={'Choose ' + props.heading?.value}
                            aria-label={'Choose ' + props.heading?.value}
                          >
                            Choose
                          </a>
                        </Link>
                      ) : (
                        <div
                          className={theme.help.mobileDisplay.button}
                          title={'Choose ' + props.heading?.value}
                          aria-label={'Choose ' + props.heading?.value}
                        >
                          Choose
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={theme.help.desktopDisplay.desktopDisplay}>
                    <div className={theme.help.desktopDisplay.row60}>
                      <div className={theme.help.desktopDisplay.column66}>
                        {option?.help?.popup?.image1 && (
                          <div className={theme.help.desktopDisplay.image}>
                            <ImageWrapper image={option?.help?.popup?.image1}></ImageWrapper>
                          </div>
                        )}
                      </div>
                      <div className={theme.help.desktopDisplay.column33}>
                        <div className={theme.help.desktopDisplay.richTextContent}>
                          <RichTextWrapper
                            field={option?.help?.popup?.text}
                            refer=""
                          ></RichTextWrapper>
                        </div>
                        <div
                          className={theme.help.desktopDisplay.buttonContainer}
                          onClick={props.onClick}
                        >
                          {renderAsLink ? (
                            <Link href={ctaUrl}>
                              <a
                                className={theme.help.desktopDisplay.button}
                                title={'Choose ' + option.heading?.value}
                                aria-label={'Choose ' + option.heading?.value}
                              >
                                Choose
                              </a>
                            </Link>
                          ) : (
                            <div
                              className={theme.help.desktopDisplay.button}
                              title={'Choose ' + option.heading?.value}
                              aria-label={'Choose ' + option.heading?.value}
                            >
                              Choose
                            </div>
                          )}
                        </div>
                        <div className={theme.help.desktopDisplay.image}>
                          <ImageWrapper image={option?.help?.popup?.image2}></ImageWrapper>
                        </div>
                      </div>
                    </div>
                    <div className={theme.help.desktopDisplay.row40}>
                      <div className={theme.help.desktopDisplay.column40}>
                        {option?.help?.popup?.image3 && (
                          <div className={theme.help.desktopDisplay.image}>
                            <ImageWrapper image={option?.help?.popup?.image3}></ImageWrapper>
                          </div>
                        )}
                      </div>
                      <div className={theme.help.desktopDisplay.column20}>
                        {option?.help?.popup?.image4 && (
                          <div className={theme.help.desktopDisplay.image}>
                            <ImageWrapper image={option?.help?.popup?.image4}></ImageWrapper>
                          </div>
                        )}
                      </div>
                      <div className={theme.help.desktopDisplay.column40}>
                        {option?.help?.popup?.image5 && (
                          <div className={theme.help.desktopDisplay.image}>
                            <ImageWrapper image={option?.help?.popup?.image5}></ImageWrapper>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BouncyCard;
