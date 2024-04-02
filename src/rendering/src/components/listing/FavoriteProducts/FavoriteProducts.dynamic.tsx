// Global
import { useState, useEffect, MouseEvent } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck, Text, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import classNames from 'classnames';

// Components
import { Component } from 'src/helpers/Component';
import { FavoriteProductsTheme } from './FavoriteProducts.theme';
import { Headline } from 'src/helpers/Headline';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { ImagePrimary, Image } from 'src/helpers/Media';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { NoResults } from './NoResults.helper';
import { Spinner } from 'src/helpers/Spinner';
import { useBVScript } from 'lib/utils/use-bv-script';

type priceLevel = 1 | 2 | 3 | 4 | 5;

export type FavoriteProductsProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.Listing.Favorites.FavoriteProducts;
const FavoriteProducts = (props: FavoriteProductsProps) => {
  const { fields } = props;

  const sitecoreContext = useSitecoreContext();
  const language = sitecoreContext.sitecoreContext.language ?? 'en';

  const { themeData } = useTheme(FavoriteProductsTheme);
  const [favoriteProductDetailsArray, setFavoriteProductDetailsArray] = useState([]);

  // fetcher function for SWR
  const fetcher = async (url: string, favoriteProducts: string[], language: string) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ favoriteProducts, language }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  };

  const [productData] = useState([]);
  const [error, setError] = useState(null);

  const [favProductIds, setFavProductIds] = useState(
    JSON.parse(localStorage.getItem('aw_favorites_products') || '[]')
  );
  const hasFavoriteProduct = favProductIds && favProductIds.length ? true : false;

  useEffect(() => {
    if (favProductIds && favProductIds.length > 0) {
      fetcher('/api/enterprise/favorite-products/', favProductIds, language)
        .then((data) => {
          setFavoriteProductDetailsArray(data.productData);
        })
        .catch((err) => setError(err));
    } else {
      setFavoriteProductDetailsArray([]);
    }
    // "language" is comig from sitecore context which is not going to change without page refreshing.
    // We can ignore the warning for this useEffect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favProductIds]);

  // Add the bazaarvoice script
  useBVScript();

  const handlePrint = () => {
    const printStyles = `
    @media print {
      header,
      footer,
      .react-tabs__tab-list,
      .no-print,
      section[data-component="hero/herotwocolumn"],
      section[data-component="hero/tabsgeneralcontent"] h2 {
        display: none;
      }

      .printSection {
        display: inherit !important;
      }
      .printOnly {
        display: block !important;
      }
    }
  `;

    const style = document.createElement('style');
    style.innerHTML = printStyles;

    document.head.appendChild(style);
    window.print();
    document.head.removeChild(style);
  };

  const priceRange = (priceLevel: priceLevel) => {
    switch (priceLevel) {
      case 1:
        return (
          <>
            <Text
              tag="span"
              className={themeData.classes.priceLevel}
              field={{ editable: '$', value: '$' }}
            />
            <Text
              tag="span"
              className={themeData.classes.priceLevel}
              field={{ editable: '$$$$', value: '$$$$' }}
            />
          </>
        );
      case 2:
        return (
          <>
            <Text
              tag="span"
              className={themeData.classes.priceLevel}
              field={{ editable: '$$', value: '$$' }}
            />
            <Text
              ttag="span"
              className={themeData.classes.priceLevel}
              field={{ editable: '$$$', value: '$$$' }}
            />
          </>
        );
      case 3:
        return (
          <>
            <Text
              tag="span"
              className={themeData.classes.priceLevel}
              field={{ editable: '$$$', value: '$$$' }}
            />
            <Text
              tag="span"
              className={themeData.classes.priceLevel}
              field={{ editable: '$$', value: '$$' }}
            />
          </>
        );
      case 4:
        return (
          <>
            <Text
              tag="span"
              className={themeData.classes.priceLevel}
              field={{ editable: '$$$$', value: '$$$$' }}
            />
            <Text
              ttag="span"
              className={themeData.classes.priceLevel}
              field={{ editable: '$', value: '$' }}
            />
          </>
        );
      case 5:
        return (
          <>
            <Text
              tag="span"
              className={themeData.classes.priceLevel}
              field={{ editable: '$$$$$', value: '$$$$$' }}
            />
          </>
        );
      default:
        return null;
    }
  };

  // As of now, we don't have any type or interface defined for favoriteProductDetailsArray or favProduct
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ColorAndActions = ({ favProduct }: any): JSX.Element => {
    const colorSwatchesAll = favProduct.standardInteriorColors?.targetItem?.swatches?.colors;
    const colorSwatchesTotal = colorSwatchesAll && colorSwatchesAll.length;

    let featuredInteriorColors = favProduct.featuredInteriorColors.colors || [];

    let colorSwatchesCount = 0;

    if (colorSwatchesTotal && featuredInteriorColors?.length > 0) {
      featuredInteriorColors = featuredInteriorColors.slice(0, 3);
      colorSwatchesCount = colorSwatchesTotal - featuredInteriorColors.length;
    }

    return (
      <>
        {featuredInteriorColors?.length > 0 && (
          <div className={themeData.classes.colorSwatchesWrapper}>
            <Text tag={'h4'} field={{ value: 'Colors' }} className={themeData.classes.colorLabel} />
            <Link href={favProduct.productDetailPageLink.url ?? ''}>
              <a>
                <div className={themeData.classes.swatches}>
                  {featuredInteriorColors?.map(
                    // As of now, we don't have any type or interface defined for favoriteProductDetail item and its properties (featuredInteriorColors items in this case)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (color: any, index: number) => {
                      return (
                        <div key={index} className={themeData.classes.colorSwatches}>
                          <Image image={{ value: color.swatchImage }} layout="intrinsic" />
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
        {!!favProduct.productDetailPageLink.text && (
          <div className={themeData.classes.actions}>
            <SingleButton
              classes={
                (themeData.classes.buttonGroupClass,
                { wrapper: 'mb-0 md:mb-0', cta1Classes: 'font-bold' })
              }
              fields={{
                cta1Link: {
                  value: {
                    href: favProduct.productDetailPageLink.url,
                    text: favProduct.productDetailPageLink.text,
                    anchor: favProduct.productDetailPageLink.anchor,
                    target: favProduct.productDetailPageLink.target,
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
                      value: 'primary',
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
          </div>
        )}
      </>
    );
  };

  const handleFavoriteProductClick = (event: MouseEvent) => {
    const target = event.target as Element;
    const link = target && target.closest('.favorite-product-item');
    if (!link) {
      return;
    }

    const productID = link.getAttribute('data-product-id');
    const favoritesProducts = JSON.parse(localStorage.getItem('aw_favorites_products') || '[]');

    const existingProductIndex = favoritesProducts.findIndex(
      (obj: string | null) => obj === productID
    );

    if (existingProductIndex !== -1) {
      favoritesProducts.splice(existingProductIndex, 1);
      link.classList.remove('favorited', 'border-[transparent_#f26924_transparent_transparent]');
    } else {
      favoritesProducts.unshift(productID);
      link.classList.add('favorited', 'border-[transparent_#f26924_transparent_transparent]');
    }

    if (favoritesProducts.length === 0) {
      localStorage.removeItem('aw_favorites_products');
      localStorage.setItem('aw_favorites_products_count', '0');

      const countStorageEvent = new StorageEvent('storage', {
        key: 'aw_favorites_products_count',
        newValue: '0',
      });
      // Dispatch the event
      window.dispatchEvent(countStorageEvent);
    } else {
      localStorage.removeItem('aw_favorites_products_count');
      localStorage.setItem('aw_favorites_products', JSON.stringify(favoritesProducts));

      // Trigger the storage event to update count across tabs/windows
      const storageEvent = new StorageEvent('storage', {
        key: 'aw_favorites_products',
        newValue: JSON.stringify(favoritesProducts),
      });
      window.dispatchEvent(storageEvent);
    }

    const remainingFavoriteItems = JSON.parse(
      localStorage.getItem('aw_favorites_products') || '[]'
    );
    setFavProductIds(remainingFavoriteItems);
  };

  return (
    <Component variant="lg" dataComponent="listing/favoriteproducts" {...props}>
      <div className="printSection col-span-12 flex justify-between">
        <Headline useTag="h4" classes={themeData.classes.mainheadline} {...props} />
        {productData?.length > 0 && hasFavoriteProduct && !error && (
          <div
            onClick={handlePrint}
            className="no-print flex cursor-pointer items-center text-body text-primary max-md:hidden"
          >
            <SvgIcon icon="pdf-aw" className="mr-xxs" />
            Print
          </div>
        )}
      </div>
      <div className="col-span-12">
        {hasFavoriteProduct ? (
          // Favorite Products
          <>
            {!productData && !error && (
              <div className="loader flex min-h-[40vh] w-full items-center justify-center">
                <Spinner size={48} />
              </div>
            )}

            {error && (
              <div className="font-sans text-sm-m font-medium md:text-m">
                {
                  "We're sorry, we couldn't process your request at this time. Please refresh or try again later."
                }
              </div>
            )}
            <div className="printSection grid grid-cols-1 gap-4 ml:grid-cols-3">
              {!error &&
                favoriteProductDetailsArray.length > 0 &&
                favoriteProductDetailsArray.map(
                  // As of now, we don't have any type or interface defined for favoriteProductDetailsArray or its items
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (favProduct: any, index: number) => {
                    const productID = favProduct.productId.value;
                    const isFavorited = favProductIds.includes(productID);
                    const priceLevel =
                      favProduct.priceLevel.targetItem &&
                      favProduct.priceLevel.targetItem.priceLevelText.value &&
                      (+favProduct.priceLevel.targetItem.priceLevelText.value as priceLevel | null);
                    const bazaarvoiceProductId = favProduct?.bazaarvoiceProductId?.value;

                    return (
                      <div key={index} className="mb-m">
                        <div className={themeData.classes.productPreviewCradWrapper}>
                          {/* Favourite */}
                          <div className="absolute top-0 right-0">
                            <div
                              className={classNames(
                                themeData.classes.favoriteProduct,
                                isFavorited
                                  ? ' favorite-product-item favorited border-[transparent_#f26924_transparent_transparent]'
                                  : ''
                              )}
                              data-product-id={favProduct.productId.value}
                              onClick={handleFavoriteProductClick}
                            >
                              <SvgIcon
                                icon="favorite"
                                fillId="white"
                                size="xl"
                                className={themeData.classes.favoriteIcon}
                              />
                            </div>
                          </div>

                          <div className={themeData.classes.headerWrapper}>
                            <Text
                              tag="h4"
                              className={themeData.classes.eyebrow}
                              field={{
                                value: favProduct.productSeries?.targetItem?.productTypeName?.value,
                              }}
                            />
                            <Link href={favProduct.productDetailPageLink.url ?? ''}>
                              <a className={themeData.classes.headlineWrapper}>
                                <Text
                                  useTag="h4"
                                  className={themeData.classes.headline}
                                  field={{ value: favProduct.productName.value }}
                                />
                              </a>
                            </Link>

                            {/* This is a placeholder for the ratings/price API to be configured */}
                            <div className={themeData.classes.ratingsAndPriceWrapper}>
                              {bazaarvoiceProductId && (
                                <div
                                  className="review flex-[0_0_auto]"
                                  data-bv-show="inline_rating"
                                  data-bv-product-id={bazaarvoiceProductId}
                                  data-bv-seo="false"
                                ></div>
                              )}

                              {/* Price Range */}
                              {priceLevel && priceLevel > 0 && (
                                <div
                                  className={
                                    bazaarvoiceProductId ? themeData.classes.priceLevelWrapper : ''
                                  }
                                >
                                  <div className={themeData.classes.priceText}>
                                    {priceRange(priceLevel)}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="order-2 my-xxs self-stretch">
                            <div className="printOnly hidden">
                              <img
                                src={favProduct.productImage?.src}
                                alt={favProduct.productImage?.alt}
                                className="mx-auto h-[350px]"
                              />
                            </div>
                            <Link href={favProduct.productDetailPageLink.url ?? ''}>
                              <a className="no-print">
                                <ImagePrimary
                                  imageLayout={'intrinsic'}
                                  fields={{
                                    primaryImageCaption: {
                                      value: '',
                                    },
                                    primaryImage: { value: favProduct.productImage },
                                    primaryImageMobile: { value: favProduct.productImageMobile },
                                    primaryImageMobileFocusArea:
                                      favProduct.primaryImageMobileFocusArea &&
                                      favProduct.primaryImageMobileFocusArea.targetItem.value.value
                                        ? {
                                            id: '',
                                            url: '',
                                            name: favProduct.primaryImageMobileFocusArea.targetItem
                                              .value.value,
                                            displayName:
                                              favProduct.primaryImageMobileFocusArea.targetItem
                                                .value.value,
                                            fields: {
                                              Value: {
                                                value:
                                                  favProduct.primaryImageMobileFocusArea.targetItem
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
                              </a>
                            </Link>
                          </div>
                          <RichTextWrapper
                            field={{ value: favProduct.productDescription.value }}
                            classes={themeData.classes.body}
                          />
                          <div className={themeData.classes.awColorsandCTA}>
                            <ColorAndActions favProduct={favProduct} />
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
            </div>
          </>
        ) : (
          // No Favorite Product
          <NoResults fields={fields} />
        )}
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<FavoriteProductsProps>(FavoriteProducts);
