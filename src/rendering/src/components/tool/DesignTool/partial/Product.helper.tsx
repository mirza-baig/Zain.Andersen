// Global
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { Image } from 'src/helpers/Media';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import { useTheme } from 'src/lib/context/ThemeContext';
import { useBVScript } from 'src/lib/utils/use-bv-script';

// Components
import { DesignToolProductProps } from '../DesignTool';
import { ProductTheme, ProductThemeSubType } from './Product.theme';

export const Product = (props: DesignToolProductProps) => {
  const { themeName, themeData } = useTheme(ProductTheme());
  const theme = themeData as ProductThemeSubType;
  useBVScript();

  if (!props) {
    return <></>;
  }

  const product = props;
  const cost = product?.cost?.fields?.priceLevelText?.value || 0;

  // Computed
  const costOff = () => {
    return '$ '.repeat(5 - cost);
  };

  const costOn = () => {
    return '$ '.repeat(cost);
  };

  const routeTo = () => {
    return '#/' + props.id + '/0';
  };

  const sliderSettings = {
    infinite: false,
    className: theme.classes.imgSliderContainer,
    prevArrow: undefined,
    nextArrow: undefined,
  };

  return (
    <div className={theme.classes.product}>
      <div className={theme.classes.row}>
        <div className={theme.classes.imgSlider}>
          <SliderWrapper sliderSettings={sliderSettings} theme={themeName}>
            {product.image1 && (
              <div className={theme.classes.imgSlide}>
                <ImageWrapper
                  image={product.image1}
                  additionalDesktopClasses={theme.classes.imgSlideImage}
                ></ImageWrapper>
              </div>
            )}
            {product.image2 && (
              <div className={theme.classes.imgSlide}>
                <ImageWrapper
                  image={product.image2}
                  additionalDesktopClasses={theme.classes.imgSlideImage}
                ></ImageWrapper>
              </div>
            )}
            {product.image3 && (
              <div className={theme.classes.imgSlide}>
                <ImageWrapper
                  image={product.image3}
                  additionalDesktopClasses={theme.classes.imgSlideImage}
                ></ImageWrapper>
              </div>
            )}
            {product.image4 && (
              <div className={theme.classes.imgSlide}>
                <ImageWrapper
                  image={product.image4}
                  additionalDesktopClasses={theme.classes.imgSlideImage}
                ></ImageWrapper>
              </div>
            )}
            {product.image5 && (
              <div className={theme.classes.imgSlide}>
                <ImageWrapper
                  image={product.image5}
                  additionalDesktopClasses={theme.classes.imgSlideImage}
                ></ImageWrapper>
              </div>
            )}
          </SliderWrapper>
        </div>
        <div className={theme.classes.details}>
          {(product.feature.image || product.feature.text) && (
            <div className={theme.classes.featureCallout}>
              {product.feature.image && (
                <span className={theme.classes.featureImage}>
                  <Image image={product.feature.image} layout="intrinsic"></Image>
                </span>
              )}
              {product.feature.text && (
                <div className="inline">
                  <RichTextWrapper
                    field={product.feature.text}
                    classes={theme.classes.featureText}
                  />
                </div>
              )}
            </div>
          )}
          <div className={theme.classes.title}>
            <h3 className={theme.classes.series}>
              <Text field={product.series} />
            </h3>
            <div className={theme.classes.category}>
              <Text field={product.category} />
            </div>
            <div className={theme.classes.reviewCost}>
              {product.bazaarvoice.productId && (
                <div
                  className={theme.classes.review}
                  data-bv-show="inline_rating"
                  data-bv-product-id={product.bazaarvoice?.productId}
                  data-bv-seo="false"
                ></div>
              )}
              {product.bazaarvoice.productId && <div className="bullet">&bull;</div>}
              <div className={theme.classes.cost}>
                <span className={theme.classes.costOn}>{costOn()}</span>
                <span className={theme.classes.costOff}>{costOff()}</span>
              </div>
            </div>
          </div>
          <ul className={theme.classes.list}>
            <li className={theme.classes.listItem}>
              <RichTextWrapper field={product.bullet1} refer="" />
            </li>
            <li className={theme.classes.listItem}>
              <RichTextWrapper field={product.bullet2} refer="" />
            </li>
            <li className={theme.classes.listItem}>
              <RichTextWrapper field={product.bullet3} refer="" />
            </li>
          </ul>
        </div>
      </div>
      <Link href={routeTo()}>
        <a
          className={theme.classes.routerLink}
          title={product.ctaText?.value}
          aria-label={product.ctaText?.value}
        >
          <Text field={product.ctaText} />
        </a>
      </Link>
    </div>
  );
};
