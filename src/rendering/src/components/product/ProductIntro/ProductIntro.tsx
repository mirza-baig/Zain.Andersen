// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { ImageField, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { ProductIntroTheme } from './ProductIntro.theme';
import { Headline } from 'src/helpers/Headline';
import { ImageToggleWrapper } from 'src/helpers/ImageToggleWrapper';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { SvgIcon } from 'src/helpers/SvgIcon';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { Subheadline } from 'src/helpers/Subheadline';
import { ImagePrimary, maxhTypes, maxwTypes } from 'src/helpers/Media';
import classNames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import { ComponentProps } from 'lib/types/component-props';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { Button } from 'src/helpers/Button';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import PriceLevel from 'src/helpers/PriceLevel/PriceLevel';
import CallToActionAR from 'src/helpers/CallToActionAR/CallToActionAR';
import { useBVScript } from 'lib/utils/use-bv-script';

export type ProductSwatch = Feature.EnterpriseWeb.Enterprise.Components.Product.ProductSwatch & {
  fields?: {
    productImageSwatch?: Feature.EnterpriseWeb.Enterprise.Elements.Swatches.Swatch;
  };
};

export type ProductIntroProps = Feature.EnterpriseWeb.Enterprise.Components.Product.ProductIntro & {
  fields?: {
    children?: ProductSwatch[];
    tabLinkToSelect: Foundation.EnterpriseWeb.Enterprise.FieldSets.ContentAnchor;
  };
} & ComponentProps;

const ProductIntro = (props: ProductIntroProps) => {
  const { fields } = props;
  const { themeName, themeData } = useTheme(ProductIntroTheme);
  const favoriteProductsArr = props.favoriteProducts || [];
  const showFavorite = fields?.productFavorite.value;
  const productID = fields?.productItem?.fields?.productId?.value;
  const isFavorited = favoriteProductsArr.includes(productID);

  const [isInterior, setIsInterior] = useState<boolean>(true);

  const [selectedSwatchColor, setSelectedSwatchColor] = useState<number | undefined>();
  const [colorSwatches, setColorSwatches] = useState<ProductSwatch[] | undefined>();

  const { currentScreenWidth } = useCurrentScreenType();

  // Add the bazaarvoice script
  useBVScript();
  const bazaarvoiceProductId = fields?.productItem?.fields?.bazaarvoiceProductId?.value;

  function updateToggleState(state: boolean) {
    setIsInterior(state);
  }

  let rbaPrimaryImage = {};
  let primaryImageVal = {};
  let primaryImageMobileVal = {};
  if (themeName === 'rba') {
    rbaPrimaryImage =
      !!fields?.primaryImage &&
      !!fields?.primaryImage?.value?.src &&
      !!fields?.primaryImageMobile?.value?.src
        ? {
            image: fields?.primaryImage,
            mobileImage: fields?.primaryImageMobile,
            mobileFocusArea: fields?.primaryImageMobileFocusArea,
            additionalDesktopClasses: 'p-m h-fit w-full',
            maxH: 'max-h-[543px]' as maxhTypes,
            maxW: 'max-w-[543px]' as maxwTypes,
            additionalMobileClasses: 'p-s h-full w-full max-w-[343px]',
          }
        : false;

    const primaryImage =
      fields.primaryImage && fields.primaryImage?.value?.src && fields.primaryImage.value;
    const primaryImageMobile =
      fields.primaryImageMobile &&
      fields.primaryImageMobile?.value?.src &&
      fields.primaryImageMobile?.value;
    const productImage =
      (fields.productItem && fields.productItem?.fields?.productImage?.value) || {};
    const productImageMobile =
      (fields.productItem && fields.productItem?.fields?.productImageMobile?.value) || {};

    primaryImageVal = primaryImage || productImage || {};
    primaryImageMobileVal = primaryImageMobile || productImageMobile || primaryImageVal;
  }

  const swatchHeading =
    themeName === 'rba'
      ? fields?.interiorSwatchesHeadline
      : isInterior
      ? fields?.interiorSwatchesHeadline
      : fields?.exteriorSwatchesHeadline;

  const interiorColorSwatches = useMemo(() => {
    return fields?.children?.filter((_childItem: ProductSwatch) => {
      return _childItem?.fields?.interior.value;
    });
  }, [fields]);

  const exteriorColorSwatches = useMemo(() => {
    return fields?.children?.filter((_childItem: ProductSwatch) => {
      return !_childItem?.fields?.interior.value;
    });
  }, [fields]);

  const [tabUrl, setTabUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const tabId =
      fields?.tabLinkToSelect?.fields?.contentId?.value || props?.fields?.tabLinkToSelect?.id;
    const newUrl = new URL(`${window.location.pathname}#${tabId}`, window.location.href);
    setTabUrl(tabId ? newUrl.href : undefined);
    // we can ignore suggested deps as they are directly coming from layout and can be ommited here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isInterior ? setColorSwatches(interiorColorSwatches) : setColorSwatches(exteriorColorSwatches);
    if (themeName === 'aw' && fields?.children?.length) {
      setSelectedSwatchColor(0);
    }
  }, [
    exteriorColorSwatches,
    fields?.children?.length,
    interiorColorSwatches,
    isInterior,
    themeName,
  ]);

  if (!fields) {
    return null;
  }

  const priceLevel = parseInt(
    (
      (fields.productItem as Foundation.EnterpriseWeb.Enterprise.FieldSets.Products.PriceLevelField)
        ?.fields?.priceLevel as unknown as Feature.EnterpriseWeb.Enterprise.Data.Products.PriceLevel
    )?.fields?.priceLevelText?.value || ''
  );

  function renderColorSwatches(): JSX.Element {
    if (colorSwatches?.length) {
      return (
        <>
          <Subheadline
            useTag="div"
            classes={themeData.classes.swatchHeadline}
            fields={{
              subheadlineText: swatchHeading || { value: '' },
            }}
          />

          <ul className="mb-m flex gap-m">
            {colorSwatches?.map((_childItem, index: number) => {
              return (
                <li key={`colorswatch-${index}`} className="flex flex-col items-center">
                  <span
                    tabIndex={themeName === 'aw' ? 0 : -1}
                    onClick={() => {
                      if (themeName === 'aw') {
                        setSelectedSwatchColor(index);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (themeName === 'aw' && (e.code === 'Enter' || e.code === 'Space')) {
                        setSelectedSwatchColor(index);
                      }
                    }}
                    className={classNames(
                      'block h-[46px] w-[46px]  rounded-full p-[2px]',
                      selectedSwatchColor === index && themeName === 'aw' ? 'border-2' : '',
                      themeName === 'aw' ? 'cursor-pointer' : ''
                    )}
                  >
                    <span className="mx-auto block h-[38px] w-[38px] rounded-full  [&_img]:rounded-full">
                      <ImagePrimary
                        imageLayout="responsive"
                        fields={{
                          primaryImage: _childItem?.fields?.productImageSwatch?.fields
                            ?.swatchImage as ImageField,
                          primaryImageMobile: _childItem?.fields?.productImageSwatch?.fields
                            ?.swatchImage as ImageField,
                          primaryImageCaption: {
                            value: '',
                          },
                        }}
                      />
                    </span>
                  </span>

                  <Subheadline
                    useTag="span"
                    fields={{
                      subheadlineText: _childItem?.fields?.productImageSwatch?.fields
                        ?.swatchName || {
                        value: '',
                      },
                    }}
                    classes={themeData.classes.swatchTitle}
                  />
                </li>
              );
            })}
          </ul>
        </>
      );
    } else {
      return <></>;
    }
  }

  return (
    <Component variant="lg" dataComponent="product/productintro" {...props}>
      {/* Favourite */}
      {showFavorite && (
        <div className="absolute -top-[16px] right-0 max-md:hidden">
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
      <div className={themeData.classes.imageColClasses}>
        {themeName === 'aw' ? (
          <ImageToggleWrapper
            fields={{
              primaryImage: fields.primaryImage,
              secondaryImage: fields.secondaryImage,
              primaryImageMobile: fields?.primaryImageMobile,
              secondaryImageMobile: fields?.secondaryImageMobile,
              primaryImageMobileFocusArea: fields?.primaryImageMobileFocusArea,
              secondaryImageMobileFocusArea: fields?.secondaryImageMobileFocusArea,
            }}
            colorSwatches={{
              interiorColorSwatches: interiorColorSwatches,
              exteriorColorSwatches: exteriorColorSwatches,
            }}
            selectedSwatchIndex={selectedSwatchColor}
            updateToggleState={updateToggleState}
            ratio={'square'}
          />
        ) : (
          <>
            {rbaPrimaryImage ? (
              <ImageWrapper {...rbaPrimaryImage} imageLayout="responsive" ratio="square" />
            ) : primaryImageVal || primaryImageMobileVal ? (
              <ImagePrimary
                additionalDesktopClasses="p-m h-fit w-fit"
                additionalMobileClasses="p-s h-full w-fit max-w-[343px]"
                maxH="max-h-[543px]"
                maxW="max-w-[543px]"
                imageLayout="intrinsic"
                ratio="square"
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
                          name: fields.productItem?.fields.primaryImageMobileFocusArea.targetItem
                            .value.value,
                          displayName:
                            fields.productItem?.fields.primaryImageMobileFocusArea.targetItem.value
                              .value,
                          fields: {
                            Value: {
                              value:
                                fields.productItem?.fields.primaryImageMobileFocusArea.targetItem
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
            {/* RBA Desktop custom CTA for tab switch */}
            {currentScreenWidth > getBreakpoint('md') && tabUrl && (
              <SingleButton
                fields={{
                  cta1Icon: {
                    id: 'f8ad4587-51a4-4e66-8eec-b448f78b4cb2',
                    url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/Icons/Augmented-Reality',
                    name: 'Augmented Reality',
                    displayName: 'Augmented Reality',
                    fields: {
                      Value: {
                        value: 'arrow',
                      },
                    },
                    templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                    templateName: 'Enum',
                  },
                  cta1Link: {
                    value: {
                      href: tabUrl,
                      text: fields?.tabLinkText?.value,
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      title: '',
                      target: '',
                      querystring: '',
                      id: '{BD66C47E-42B0-4EDD-BAD3-4BC981C05E5D}',
                    },
                  },
                  cta1Style: {
                    id: '8aedd89c-e161-41d4-b773-6a6097a19372',
                    url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Secondary',
                    name: 'Secondary',
                    displayName: 'Secondary',
                    fields: {
                      Value: {
                        value: 'secondary',
                      },
                    },
                    templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                    templateName: 'Enum',
                  },
                  cta1ModalLinkText: {
                    value: '',
                  },
                  cta1AriaLabel: {
                    value: '',
                  },
                }}
              />
            )}
          </>
        )}
      </div>
      <div className={themeData.classes.descriptionColClasses}>
        {currentScreenWidth < getBreakpoint('md') && themeName === 'rba' && (
          <>
            <div
              className={classNames(
                themeData.classes.buttonGroupClass?.wrapper,
                'mb-s flex items-start space-y-s md:flex-row md:items-center md:space-x-4 md:space-y-0'
              )}
            >
              {fields?.cta1Link && (
                <Button
                  field={fields?.cta1Link}
                  variant={fields?.cta1Style}
                  icon={fields?.cta1Icon}
                  modalId={
                    (
                      fields?.cta1Modal as unknown as Feature.EnterpriseWeb.Enterprise.Components.Modal.GenericModal.GenericModal
                    )?.fields?.modalId?.value
                  }
                  modalLinkText={fields?.cta1ModalLinkText}
                  classes={classNames(themeData.classes.buttonGroupClass?.cta1Classes, 'mr-m')}
                />
              )}

              {currentScreenWidth < getBreakpoint('md') && tabUrl && (
                <SingleButton
                  classes={{ wrapper: 'w-full', cta1Classes: '!w-full md:!w-fit justify-center' }}
                  fields={{
                    cta1Icon: {
                      id: 'f8ad4587-51a4-4e66-8eec-b448f78b4cb2',
                      url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/Icons/Augmented-Reality',
                      name: 'Augmented Reality',
                      displayName: 'Augmented Reality',
                      fields: {
                        Value: {
                          value: 'arrow',
                        },
                      },
                      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                      templateName: 'Enum',
                    },
                    cta1Link: {
                      value: {
                        href: tabUrl,
                        text: fields?.tabLinkText?.value,
                        anchor: '',
                        linktype: 'internal',
                        class: '',
                        title: '',
                        target: '',
                        querystring: '',
                        id: '{BD66C47E-42B0-4EDD-BAD3-4BC981C05E5D}',
                      },
                    },
                    cta1Style: {
                      id: '8aedd89c-e161-41d4-b773-6a6097a19372',
                      url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Secondary',
                      name: 'Secondary',
                      displayName: 'Secondary',
                      fields: {
                        Value: {
                          value: 'secondary',
                        },
                      },
                      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                      templateName: 'Enum',
                    },
                    cta1ModalLinkText: {
                      value: '',
                    },
                    cta1AriaLabel: {
                      value: '',
                    },
                  }}
                />
              )}

              {fields?.cta2Link && (
                <Button
                  field={fields?.cta2Link}
                  variant={fields?.cta2Style}
                  icon={fields?.cta2Icon}
                  modalId={
                    (
                      fields?.cta2Modal as unknown as Feature.EnterpriseWeb.Enterprise.Components.Modal.GenericModal.GenericModal
                    )?.fields?.modalId?.value
                  }
                  modalLinkText={fields?.cta2ModalLinkText}
                  classes={themeData.classes.buttonGroupClass?.cta2Classes}
                />
              )}
            </div>
          </>
        )}
        {/* Favourite */}
        {showFavorite && (
          <div className={classNames(themeData.classes.favoriteProductWrapper)}>
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
        {fields.eyebrowText?.value ? (
          <Eyebrow classes={themeData.classes.eyebrow} {...props} />
        ) : fields.productItem?.fields.productSeries &&
          fields.productItem?.fields?.productSeries?.fields?.productTypeName?.value ? (
          <Text
            tag="h4"
            className={themeData.classes.eyebrow}
            field={{
              value: fields.productItem?.fields?.productSeries?.fields?.productTypeName?.value,
            }}
          />
        ) : (
          <></>
        )}

        {fields.headlineText?.value ? (
          <Headline classes={themeData.classes.headline} {...props} />
        ) : fields.productItem?.fields.productName ? (
          <div className={themeData.classes.headlineWrapper}>
            <Text
              useTag="h4"
              className={themeData.classes.headline}
              field={{ value: fields.productItem.fields.productName.value }}
            />
          </div>
        ) : (
          <></>
        )}

        {fields.body?.value ? (
          <BodyCopy classes={themeData.classes.bodyClass} {...props} />
        ) : fields.productItem?.fields.productDescription ? (
          <RichTextWrapper
            field={{ value: fields.productItem.fields.productDescription.value }}
            classes={themeData.classes.bodyClass}
          />
        ) : (
          <></>
        )}

        {themeName === 'rba' && renderColorSwatches()}
        {/* ratings */}
        <div className={themeData.classes.ratingsAndPriceWrapper}>
          <div className={themeData.classes.ratingsWrapper}>
            {bazaarvoiceProductId && (
              <div
                className="review flex-[0_0_auto]"
                data-bv-show="rating_summary"
                data-bv-product-id={bazaarvoiceProductId}
              ></div>
            )}
          </div>
          {/* Placeholder for price */}
          {priceLevel ? (
            <div className={bazaarvoiceProductId ? themeData.classes.priceLevelWrapper : ''}>
              <PriceLevel
                priceLevel={priceLevel}
                priceClasses={themeData.classes.priceTextClasses}
                priceLevelClasses={themeData.classes.priceLevelClasses}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        {themeName === 'aw' ? (
          <div className="flex-none md:flex md:flex-wrap">
            <ButtonGroup classes={themeData.classes.buttonGroupClass} {...props} />
            {fields?.AR?.fields && (
              <CallToActionAR
                classes={{
                  wrapper: '',
                  buttonClasses:
                    'my-s flex w-fit items-center whitespace-nowrap rounded-lg border-4 border-black px-m py-[9px] font-sans text-button font-heavy hover:bg-black hover:text-white disabled:border-gray disabled:text-gray md:my-0',
                }}
                {...fields?.AR}
              />
            )}
          </div>
        ) : (
          <>
            {currentScreenWidth > getBreakpoint('md') && (
              <>
                {currentScreenWidth < getBreakpoint('md') && tabUrl && (
                  <SingleButton
                    fields={{
                      cta1Icon: {
                        id: 'f8ad4587-51a4-4e66-8eec-b448f78b4cb2',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/Icons/Augmented-Reality',
                        name: 'Augmented Reality',
                        displayName: 'Augmented Reality',
                        fields: {
                          Value: {
                            value: 'arrow',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                      cta1Link: {
                        value: {
                          href: tabUrl,
                          text: fields?.tabLinkText?.value,
                          anchor: '',
                          linktype: 'internal',
                          class: '',
                          title: '',
                          target: '',
                          querystring: '',
                          id: '{BD66C47E-42B0-4EDD-BAD3-4BC981C05E5D}',
                        },
                      },
                      cta1Style: {
                        id: '8aedd89c-e161-41d4-b773-6a6097a19372',
                        url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Secondary',
                        name: 'Secondary',
                        displayName: 'Secondary',
                        fields: {
                          Value: {
                            value: 'secondary',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      },
                      cta1ModalLinkText: {
                        value: '',
                      },
                      cta1AriaLabel: {
                        value: '',
                      },
                    }}
                  />
                )}
                <ButtonGroup classes={themeData.classes.buttonGroupClass} {...props} />
              </>
            )}
          </>
        )}

        {themeName === 'aw' && (
          <>
            {renderColorSwatches()}
            {/* AW custom cta for tab switch */}
            {tabUrl && (
              <SingleButton
                fields={{
                  cta1Icon: {
                    id: 'f8ad4587-51a4-4e66-8eec-b448f78b4cb2',
                    url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/Icons/Augmented-Reality',
                    name: 'Augmented Reality',
                    displayName: 'Augmented Reality',
                    fields: {
                      Value: {
                        value: 'arrow',
                      },
                    },
                    templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                    templateName: 'Enum',
                  },
                  cta1Link: {
                    value: {
                      href: tabUrl,
                      text: fields?.tabLinkText?.value,
                      anchor: '',
                      linktype: 'internal',
                      class: '',
                      title: '',
                      target: '',
                      querystring: '',
                      id: '{BD66C47E-42B0-4EDD-BAD3-4BC981C05E5D}',
                    },
                  },
                  cta1Style: {
                    id: '8aedd89c-e161-41d4-b773-6a6097a19372',
                    url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/CTA-Styles/Secondary',
                    name: 'Secondary',
                    displayName: 'Secondary',
                    fields: {
                      Value: {
                        value: 'tertiary',
                      },
                    },
                    templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                    templateName: 'Enum',
                  },
                  cta1ModalLinkText: {
                    value: '',
                  },
                  cta1AriaLabel: {
                    value: '',
                  },
                }}
              />
            )}
          </>
        )}
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<ProductIntroProps>(ProductIntro);
