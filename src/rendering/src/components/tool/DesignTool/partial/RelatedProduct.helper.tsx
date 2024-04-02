// Global
import { Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useContext } from 'react';
import { Image } from 'src/helpers/Media';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { SliderWrapper } from 'src/helpers/SliderWrapper/SliderWrapper';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import NextLink from 'next/link';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { DesignToolProductProps } from '../DesignTool';
import { DesignToolContext } from '../DesignToolContext.helper';
import { RelatedProductTheme, RelatedProductThemeSubType } from './RelatedProduct.theme';

export const RelatedProduct = (props: DesignToolProductProps) => {
  const { themeName, themeData } = useTheme(RelatedProductTheme());
  const theme = (themeData as RelatedProductThemeSubType).classes;

  const { designToolRouter } = useContext(DesignToolContext);

  // Computed
  const cost = props?.cost?.fields?.priceLevelText?.value || 0;
  const costOff = () => {
    return '$ '.repeat(5 - cost);
  };

  const costOn = () => {
    return '$ '.repeat(cost);
  };

  const sliderSettings = {
    infinite: false,
    className: theme.imgSliderContainer,
    prevArrow: undefined,
    nextArrow: undefined,
  };

  return (
    <div className={theme.relatedProduct}>
      <div className={theme.row}>
        <div className={theme.imgSlider}>
          <SliderWrapper sliderSettings={sliderSettings} theme={themeName}>
            {props.image1 && (
              <div className={theme.imgSlide}>
                <ImageWrapper
                  image={props.image1}
                  additionalDesktopClasses={theme.imgSlideImage}
                ></ImageWrapper>
              </div>
            )}
            {props.image2 && (
              <div className={theme.imgSlide}>
                <ImageWrapper
                  image={props.image2}
                  additionalDesktopClasses={theme.imgSlideImage}
                ></ImageWrapper>
              </div>
            )}
            {props.image3 && (
              <div className={theme.imgSlide}>
                <ImageWrapper
                  image={props.image3}
                  additionalDesktopClasses={theme.imgSlideImage}
                ></ImageWrapper>
              </div>
            )}
            {props.image4 && (
              <div className={theme.imgSlide}>
                <ImageWrapper
                  image={props.image4}
                  additionalDesktopClasses={theme.imgSlideImage}
                ></ImageWrapper>
              </div>
            )}
            {props.image5 && (
              <div className={theme.imgSlide}>
                <ImageWrapper
                  image={props.image5}
                  additionalDesktopClasses={theme.imgSlideImage}
                ></ImageWrapper>
              </div>
            )}
          </SliderWrapper>
        </div>
        <div className={theme.details}>
          {(props.feature.image || props.feature.text) && (
            <div className={theme.featureCallout}>
              {props.feature.image && (
                <span className={theme.featureImage}>
                  <Image image={props.feature.image} layout="intrinsic"></Image>
                </span>
              )}
              {props.feature.text && (
                <div className="inline">
                  <RichTextWrapper field={props.feature.text} classes={theme.featureText} />
                </div>
              )}
            </div>
          )}
          <div className={theme.title}>
            <h3 className={theme.series}>
              <Text field={props.series} />
            </h3>
            <div className={theme.category}>
              <Text field={props.category} />
            </div>
            <div className={theme.reviewCost}>
              {props.bazaarvoice.productId && (
                <div
                  className={theme.review}
                  data-bv-show="inline_rating"
                  data-bv-product-id={props.bazaarvoice?.productId}
                  data-bv-seo="false"
                ></div>
              )}
              {props.bazaarvoice.productId && <div className="bullet">&bull;</div>}
              <div className={theme.cost}>
                <span className={theme.costOn}>{costOn()}</span>
                <span className={theme.costOff}>{costOff()}</span>
              </div>
            </div>
          </div>
          <ul className={theme.list}>
            <li className={theme.listItem}>
              <RichTextWrapper field={props.bullet1} refer="" />
            </li>
            <li className={theme.listItem}>
              <RichTextWrapper field={props.bullet2} refer="" />
            </li>
            <li className={theme.listItem}>
              <RichTextWrapper field={props.bullet3} refer="" />
            </li>
          </ul>
        </div>
      </div>
      <div className={theme.buttonContainer}>
        <Link
          field={props.links.detail}
          className={theme.detailsLink + theme.secondaryLink}
          target="_blank"
        ></Link>
        <NextLink href={designToolRouter.getRouteDataForProduct(props)}>
          <a className={theme.designLink}>
            <Text field={props.ctaText}></Text>
          </a>
        </NextLink>
      </div>
    </div>
  );
};
