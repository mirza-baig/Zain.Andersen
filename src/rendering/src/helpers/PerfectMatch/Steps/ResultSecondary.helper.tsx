// Global
import { Image, Link, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { RenderStepsProps } from './PerfectMatchStep.helper';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import { ResultSecondaryTheme, ResultSecondaryThemeSubType } from './ResultSecondary.theme';

const RenderRelatedProduct = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any & { theme: ResultSecondaryThemeSubType; themeName: string }
) => {
  const theme = props?.theme?.classes?.productDetails;
  const themeName = props?.themeName;
  const cost = props?.cost?.value || 0;
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
    <>
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
            {(props.feature?.image || props.feature?.text) && (
              <div className={theme.featureCallout}>
                {props.feature.image && (
                  <span className={theme.featureImage}>
                    <Image image={props.feature.image} layout="intrinsic"></Image>
                  </span>
                )}
                {props.feature?.text && (
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
                {props.bazaarvoice?.productId && (
                  <div
                    className={theme.review}
                    data-bv-show="inline_rating"
                    data-bv-product-id={props.bazaarvoice?.productId}
                    data-bv-seo="false"
                  ></div>
                )}
                {props.bazaarvoice?.productId && <div className="bullet">&bull;</div>}
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
          {props.viewDetailsLink?.value && (
            <Link
              field={props.viewDetailsLink}
              className={theme.detailsLink + theme.secondaryLink}
              target="_blank"
            ></Link>
          )}
          {props.designLink?.value && (
            <Link field={props.designLink} className={theme.designLink} target="_blank"></Link>
          )}
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ResultSecondary = (props: RenderStepsProps & { secondaryResults: any[] }) => {
  const { themeData, themeName } = useTheme(ResultSecondaryTheme());
  const theme = (themeData as ResultSecondaryThemeSubType).classes;

  return (
    <div className={theme.resultSecondaryContainer}>
      <div className="secondary-intro ">
        <h3 className={theme.relatedHeader}>
          <Text field={props.props.fields.resultsSecondaryHeading} encode={false}></Text>
        </h3>
        <div className={theme.relatedBodyCopy}>
          <RichText field={props.props.fields.resultsSecondaryCopy}></RichText>
        </div>
      </div>
      <div className={theme.relatedContainer}>
        {props?.secondaryResults.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (rankedResult: any, index: number) =>
            rankedResult && (
              <RenderRelatedProduct
                {...rankedResult.result?.productDetails}
                theme={themeData}
                themeName={themeName}
                key={index}
              ></RenderRelatedProduct>
            )
        )}
      </div>
    </div>
  );
};

export default ResultSecondary;
