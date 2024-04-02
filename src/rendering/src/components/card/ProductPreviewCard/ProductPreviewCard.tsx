// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { ThemeName, useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import classNames from 'classnames';

// Components
import { ProductPreviewCardTheme } from './ProductPreviewCard.theme';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { ImagePrimary, Image } from 'src/helpers/Media';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { EnumField } from 'lib/utils/get-enum';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import PriceLevel from 'src/helpers/PriceLevel/PriceLevel';
import { useBVScript } from 'lib/utils/use-bv-script';

type priceLevel = 1 | 2 | 3 | 4 | 5;

type ProductItem = Feature.EnterpriseWeb.Enterprise.Data.Products.EnterpriseProduct & {
  fields?: {
    standardExteriorColors?: Feature.EnterpriseWeb.Enterprise.Elements.Swatches.SwatchCollection & {
      fields?: {
        swatches: Feature.EnterpriseWeb.Enterprise.Elements.Swatches.Swatch[];
      };
    };
    priceLevel: EnumField<priceLevel>;
    featuredExteriorColors: Feature.EnterpriseWeb.Enterprise.Elements.Swatches.Swatch[];
  };
};

export type ProductPreviewCardProps = Feature.EnterpriseWeb.Enterprise.Cards.ProductPreviewCard & {
  fields?: {
    productItem: ProductItem;
  };
};

const ProductPreviewCard = (props: ProductPreviewCardProps) => {
  const { fields } = props;
  const { themeName, themeData } = useTheme(ProductPreviewCardTheme);
  const favoriteProductsArr = props.favoriteProducts || [];

  // Add the bazaarvoice script
  useBVScript();
  const bazaarvoiceProductId = fields?.productItem?.fields?.bazaarvoiceProductId?.value;
  if (!fields) {
    return null;
  }

  const showFavorite = fields?.favorite?.value;
  const productID = fields.productItem?.fields?.productId?.value;
  const isFavorited = favoriteProductsArr.includes(productID);

  const colorSwatchesAll = fields.productItem?.fields?.standardExteriorColors?.fields?.swatches;
  const colorSwatchesTotal = colorSwatchesAll && colorSwatchesAll.length;

  let featuredExteriorColors = fields?.productItem?.fields?.featuredExteriorColors || [];

  let colorSwatchesCount = 0;

  const MAX_FEATURE_EXTERIOR_COLORS: Record<ThemeName, number> = {
    aw: 3,
    rba: 5,
  };

  if (colorSwatchesTotal && featuredExteriorColors?.length > 0) {
    const maxColors = MAX_FEATURE_EXTERIOR_COLORS[themeName];
    featuredExteriorColors = featuredExteriorColors.slice(0, maxColors);
    colorSwatchesCount = colorSwatchesTotal - featuredExteriorColors.length;
  }

  const priceLevel =
    fields?.productItem?.fields?.priceLevel?.fields?.priceLevelText?.value &&
    (+fields?.productItem?.fields?.priceLevel?.fields?.priceLevelText?.value as priceLevel | null);

  const ColorAndActions = (): JSX.Element => {
    return (
      <>
        {featuredExteriorColors?.length > 0 && (
          <div className={themeData.classes.colorSwatchesWrapper}>
            <Text
              tag={'h4'}
              field={{ value: 'Exterior Colors' }}
              className={themeData.classes.colorLabel}
            />
            <Link
              href={
                fields.cta1Link.value.href ||
                fields.productItem?.fields?.productDetailPageLink?.value?.href ||
                ''
              }
            >
              <a>
                <div className={themeData.classes.swatches}>
                  {featuredExteriorColors?.map(
                    (
                      color: Feature.EnterpriseWeb.Enterprise.Elements.Swatches.Swatch,
                      index: number
                    ) => {
                      return (
                        <div key={index} className={themeData.classes.colorSwatches}>
                          <Image image={color.fields?.swatchImage} />
                        </div>
                      );
                    }
                  )}
                  {colorSwatchesCount > 0 && <div>+{colorSwatchesCount}</div>}
                </div>
              </a>
            </Link>
          </div>
        )}
        <div className={themeData.classes.actions}>
          {fields.cta1Link?.value?.href && fields.cta1Link?.value?.text ? (
            <ButtonGroup classes={themeData.classes.buttonGroupClass} {...props} />
          ) : fields.productItem?.fields.productDetailPageLink?.value?.text ? (
            <SingleButton
              classes={
                (themeData.classes.buttonGroupClass,
                { wrapper: 'mb-0 md:mb-s cursor-pointer', cta1Classes: 'font-bold' })
              }
              fields={{
                cta1Link: {
                  value: {
                    href: fields.productItem.fields.productDetailPageLink.value.href,
                    text: fields.productItem.fields.productDetailPageLink.value.text,
                    anchor: fields.productItem.fields.productDetailPageLink.value.anchor,
                    target: fields.productItem.fields.productDetailPageLink.value.target,
                  },
                },
                cta1AriaLabel: {
                  value: '',
                },
                cta1ModalLinkText: {
                  value: '',
                },
                cta1Style: {
                  id: '',
                  url: '',
                  name: 'Primary',
                  displayName: 'Primary',
                  fields: {
                    Value: {
                      value: fields.cta1Style?.fields?.Value?.value || 'primary',
                    },
                  },
                  templateId: '',
                  templateName: 'Enum',
                },
                cta1Icon: {
                  id: '',
                  url: '',
                  name: 'Arrow',
                  displayName: 'Arrow',
                  fields: {
                    Value: {
                      value: 'arrow',
                    },
                  },
                  templateId: '',
                  templateName: 'Enum',
                },
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </>
    );
  };

  let primaryImageVal = {};
  let primaryImageMobileVal = {};

  const primaryImage = fields.primaryImage?.value?.src && fields.primaryImage.value;
  const primaryImageMobile =
    fields.primaryImageMobile?.value?.src && fields.primaryImageMobile?.value;
  const productImage = fields.productItem?.fields?.productImage?.value;
  const productImageMobile = fields.productItem?.fields?.productImageMobile?.value;

  primaryImageVal = primaryImage || productImage || {};
  primaryImageMobileVal = primaryImageMobile || productImageMobile || primaryImageVal;

  return (
    <div
      className={themeData.classes.productPreviewCradWrapper}
      data-component="card/productpreview"
    >
      {/* Favourite */}
      {showFavorite && productID && (
        <div className="absolute top-0 right-0">
          <div
            className={classNames(
              themeData.classes.favoriteProduct,
              isFavorited ? 'favorited border-[transparent_#f26924_transparent_transparent]' : ''
            )}
            data-product-id={productID}
          >
            <SvgIcon
              icon="favorite"
              fillId="white"
              size="xl"
              className={themeData.classes.favoriteIcon}
            />
          </div>
        </div>
      )}

      <div className={themeData.classes.headerWrapper}>
        {fields.eyebrowText?.value ? (
          <Eyebrow classes={themeData.classes.eyebrow} {...props} />
        ) : fields.productItem?.fields.productSeries &&
          fields.productItem?.fields?.productSeries?.fields?.productTypeName?.value ? (
          <Text
            tag="h4"
            className={themeData.classes.eyebrow}
            field={{ value: fields.productItem.fields.productSeries.fields.productTypeName.value }}
          />
        ) : (
          <></>
        )}

        <Link
          href={
            fields.cta1Link.value.href ||
            fields.productItem?.fields?.productDetailPageLink?.value?.href ||
            ''
          }
        >
          <a className={themeData.classes.headlineWrapper}>
            {fields.headlineText?.value ? (
              <Headline useTag="h4" classes={themeData.classes.headline} {...props} />
            ) : fields.productItem?.fields.productName ? (
              <Text
                useTag="h4"
                className={themeData.classes.headline}
                field={{ value: fields.productItem.fields.productName.value }}
              />
            ) : (
              <></>
            )}
          </a>
        </Link>

        {/* ratings */}
        <div className={themeData.classes.ratingsAndPriceWrapper}>
          {bazaarvoiceProductId && (
            <div
              className="review flex-[0_0_auto]"
              data-bv-show="inline_rating"
              data-bv-product-id={bazaarvoiceProductId}
              data-bv-seo="false"
            ></div>
          )}
          {/* Price Level */}
          {priceLevel && priceLevel > 0 && (
            <div className={bazaarvoiceProductId ? themeData.classes.priceLevelWrapper : ''}>
              <PriceLevel
                priceLevel={priceLevel}
                priceClasses={themeData.classes.priceTextClasses}
                priceLevelClasses={themeData.classes.priceLevelClasses}
              />
            </div>
          )}
        </div>
      </div>
      <div className="order-2 my-xxs self-stretch">
        <Link
          href={
            fields.cta1Link.value.href ||
            fields.productItem?.fields?.productDetailPageLink?.value?.href ||
            ''
          }
        >
          <a>
            {fields.primaryImage?.value?.src && fields.primaryImageMobile?.value?.src ? (
              <ImagePrimary {...props} />
            ) : primaryImageVal || primaryImageMobileVal ? (
              <ImagePrimary
                imageLayout={'intrinsic'}
                fields={{
                  primaryImageCaption: {
                    value: '',
                  },
                  primaryImage: { value: primaryImageVal },
                  primaryImageMobile: { value: primaryImageMobileVal },
                  primaryImageMobileFocusArea:
                    fields.productItem?.fields?.primaryImageMobileFocusArea &&
                    fields.productItem?.fields?.primaryImageMobileFocusArea?.targetItem?.value.value
                      ? {
                          id: '',
                          url: '',
                          name: fields.productItem.fields.primaryImageMobileFocusArea.targetItem
                            .value.value,
                          displayName:
                            fields.productItem.fields.primaryImageMobileFocusArea.targetItem.value
                              .value,
                          fields: {
                            Value: {
                              value:
                                fields.productItem.fields.primaryImageMobileFocusArea.targetItem
                                  .value.value,
                            },
                          },
                        }
                      : {
                          id: '',
                          url: '',
                          name: 'Center',
                          displayName: 'Center',
                          fields: {
                            Value: {
                              value: 'center',
                            },
                          },
                          templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                          templateName: 'Enum',
                        },
                }}
              />
            ) : (
              <></>
            )}
          </a>
        </Link>
      </div>
      {fields.body?.value ? (
        <BodyCopy classes={themeData.classes.body} {...props} />
      ) : fields.productItem?.fields.productDescription ? (
        <RichTextWrapper
          field={{ value: fields.productItem.fields.productDescription.value }}
          classes={themeData.classes.body}
        />
      ) : (
        <></>
      )}

      {themeName === 'aw' ? (
        <div className={themeData.classes.awColorsandCTA}>
          <ColorAndActions />
        </div>
      ) : (
        <ColorAndActions />
      )}
    </div>
  );
};

export default withDatasourceCheck()<ProductPreviewCardProps>(ProductPreviewCard);
