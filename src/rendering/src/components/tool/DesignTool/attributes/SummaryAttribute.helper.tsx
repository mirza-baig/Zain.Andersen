// Global
import { Link, Placeholder, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { getLocalStorageItem, setLocalStorageItem } from 'lib/utils/client-storage-utils';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent, useContext, useEffect, useRef, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import TagManager from 'react-gtm-module';
import SvgIcon from 'src/helpers/SvgIcon/SvgIcon';
import { useTheme } from 'src/lib/context/ThemeContext';
import { AttributeRendererProps } from 'src/lib/renoworks';
import { shareServicesToExclude, useA2AScript } from 'src/lib/utils/use-a2a-script';
import { useBVScript } from 'src/lib/utils/use-bv-script';
import { DesignToolQueryItem } from 'src/pages/api/aw/design-tool/design-tool-option-by-id';
import { DesignToolProductProps } from '../DesignTool';
import { FilterForProduct, MapProduct, prepareDesignSelectionData } from '../DesignTool.helper';

// Components
import { DesignToolContext } from '../DesignToolContext.helper';
import { SummaryViewModel } from '../js/designtool';
import { shortenUrl } from '../js/utils';
import { RelatedProduct } from '../partial/RelatedProduct.helper';
import { SummaryAttributeTheme, SummaryAttributeThemeSubType } from './SummaryAttribute.theme';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';

const SummaryAttribute = ({ props }: AttributeRendererProps<SummaryViewModel>) => {
  const { themeData } = useTheme(SummaryAttributeTheme());
  const theme = (themeData as SummaryAttributeThemeSubType).classes;
  const { renderingData } = useContext(DesignToolContext);
  const router = useRouter();
  const sitecoreContext = useSitecoreContext();
  const language = sitecoreContext.sitecoreContext.language ?? 'en';

  const $refs = {
    favoritesButton: useRef<HTMLAnchorElement>(null),
    summaryModal: useRef<HTMLDivElement>(null),
  };

  const [shortDesignUrl, setShortDesignUrl] = useState('');
  const [favoriteText, setFavoriteText] = useState(getFavoriteText());
  const [relatedProduct, setRelatedProduct] = useState<DesignToolProductProps>();
  const a2aScriptState = useA2AScript();
  useBVScript();

  useEffect(() => {
    let summaryPageIsActive = true;
    const controller = new AbortController();
    const signal = controller.signal;

    if (router.isReady && window.a2a) {
      shortenUrl(document.location.href, signal).then((response) => {
        if (summaryPageIsActive) {
          setShortDesignUrl(response.shortenedUrl);
          setFavoriteText(getFavoriteText(response.shortenedUrl));

          if (window.a2a) {
            window.a2a.init('page');
          }
        }
      });
    }

    return () => {
      summaryPageIsActive = false;
      controller.abort();
    };
  }, [router.asPath, router.isReady, window.a2a]);

  const productSeriesAndCategory = () => {
    return productSeries() + ' ' + productCategory();
  };

  function productSeries() {
    return props.product?.series?.value;
  }

  function productCategory() {
    return props.product?.category?.value;
  }

  const a2aSubjectText = () => {
    return (
      'Check out this ' + productSeries() + ' ' + productCategory() + ' from Andersen Windows.'
    );
  };

  const a2aBodyText = () => {
    return (
      'Here is a ' +
      productSeries() +
      ' ' +
      productCategory() +
      ' that I designed on AndersenWindows.com.'
    );
  };

  const shouldShowCTA = () => {
    try {
      const regExp = /nocta=([^?&#]*)/g;
      const matches = regExp.exec(location.search);

      if (matches != null && (matches[1].toLowerCase() === 'true' || matches[1] === '1')) {
        return false;
      }
    } catch {}

    return true;
  };

  function getFavoriteText(shortUrl?: string) {
    // Code to return the favorite text depending on if this product has been favorited.
    const favoriteDesigns = getLocalStorageItem('aw_favoritedesigns') as Array<
      Record<string, unknown>
    >;
    if (
      favoriteDesigns?.find((design: Record<string, unknown>) => {
        return design?.shareUrl === (shortUrl || shortDesignUrl || 'zzz');
      })
    ) {
      return 'Remove From My Favorites';
    }
    return 'Add To My Favorites';
  }

  const favoriteDesign = () => {
    const designToFavorite = [
      {
        url: window.location.href,
        seriesCategory: props?._product.series.value,
        interiorImage: props?._interiorImage,
        exteriorImage: props?._exteriorImage,
        selections: props?._selectedOptions,
        shareUrl: shortDesignUrl,
        productDetailUrl: props?._product.links.detail.value.href,
        requestAQuoteUrl: props?._requestAQuote?.value.href,
        findADealerUrl: props?._product?.links?.findADealer?.value.href,
        createdDate: new Date().toISOString(),
      },
    ];

    const favoriteDesigns =
      (getLocalStorageItem('aw_favoritedesigns') as Array<Record<string, unknown>>) || [];

    const existingDesignIndex = favoriteDesigns?.findIndex((design: Record<string, unknown>) => {
      return design?.shareUrl === (shortDesignUrl || 'zzz');
    });
    if (existingDesignIndex >= 0) {
      favoriteDesigns.splice(existingDesignIndex, 1);
      setLocalStorageItem('aw_favoritedesigns', [...favoriteDesigns]);
    } else {
      setLocalStorageItem('aw_favoritedesigns', [...favoriteDesigns, ...designToFavorite]);
    }
    setFavoriteText(getFavoriteText());

    const storageEvent = new StorageEvent('storage', {
      key: 'aw_favoritedesigns',
      newValue: JSON.stringify(favoriteDesigns),
    });
    window.dispatchEvent(storageEvent);
  };

  useEffect(() => {
    if (window.a2a_config) {
      window.a2a_config.onclick = 1;
      window.a2a_config.num_services = 8;
      window.a2a_config.exclude_services = shareServicesToExclude;
      window.a2a_config.templates = window.a2a_config.templates || {};
      window.a2a_config.callbacks = window.a2a_config.callbacks || [];

      window.a2a_config.callbacks.push({
        share: () => prepareDesignSelectionData('Share My Design', props.product, props),
      } as never);

      window.a2a_config.templates = {
        email: {
          subject: a2aSubjectText(),
          body: a2aBodyText() + '\n${link}',
        },
        sms: {
          body: a2aBodyText() + '\n${link}',
        },
      };
    }
  }, [a2aScriptState]);

  useEffect(() => {
    if (router.isReady) {
      async function getProductById() {
        try {
          try {
            const response = await fetch('/api/aw/design-tool/design-tool-product-by-id/', {
              method: 'POST',
              body: JSON.stringify({ itemId: props?.relatedProduct?.id, language }),
              headers: {
                'Content-Type': 'application/json',
              },
            });

            if (response.ok) {
              const queryResultItem = (await response.json()) as Item & DesignToolQueryItem;
              if (FilterForProduct(queryResultItem)) {
                const mappedProduct = MapProduct([], queryResultItem);
                setRelatedProduct(mappedProduct);
              }
            } else {
              console.error('Error:', response.statusText);
            }
          } catch (error) {
            console.error('Error occurred:', error);
          }
        } catch (error) {
          console.error('Error occurred:', error);
        }
      }
      getProductById();
    }
  }, [router.isReady]);

  const handleDesignRequestQuote = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _selections = props?._selectedOptions.reduce((accumulator: any, currentValue: any) => {
      accumulator[currentValue.title] = currentValue.value;
      return accumulator;
    }, {});

    let hostName = '';
    try {
      const requestAQuoteUrl = props.requestAQuote?.value?.url;
      if (requestAQuoteUrl?.indexOf('://') >= 0) {
        hostName = new URL(requestAQuoteUrl).host;
      } else {
        hostName = window.location.hostname;
      }
    } catch {}

    const destinationURL = props.requestAQuote?.value?.url?.split('?')[0];

    TagManager.dataLayer({
      dataLayer: {
        event: 'design_tool_get_quote',
        link_text: props.requestAQuote?.value?.text,
        link_url: destinationURL != 'undefined' ? destinationURL : '',
        link_domain: destinationURL != 'undefined' ? hostName : '',
        product_name: props._product?.name,
        product_id: _selections['Product ID#'] || '',
        interior_color: _selections['Interior Color'] || '',
        exterior_color: _selections['Exterior Color'] || '',
      },
    });
  };

  const handleDesignRequestQuoteModalOpen = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _selections = props?._selectedOptions.reduce((accumulator: any, currentValue: any) => {
      accumulator[currentValue.title] = currentValue.value;
      return accumulator;
    }, {});

    $refs.summaryModal.current?.classList.remove(theme.designSummary.containerHidden);

    TagManager.dataLayer({
      dataLayer: {
        event: 'design_tool_get_quote',
        link_text: props.requestAQuote?.value?.text,
        product_name: props._product?.name,
        product_id: _selections['Product ID#'] || '',
        interior_color: _selections['Interior Color'] || '',
        exterior_color: _selections['Exterior Color'] || '',
      },
    });
  };

  const handleDesignRequestQuoteModalClose = () => {
    $refs.summaryModal.current?.classList.add(theme.designSummary.containerHidden);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addTableToFormContent = (oldRenderingData: any) => {
    const seriesName = productSeriesAndCategory();
    const interiorImageUrl = props.interiorImage;
    const exteriorImageUrl = props.exteriorImage;
    const selections = props.selectedOptions;
    const showDesign = seriesName || interiorImageUrl || exteriorImageUrl || selections.length > 0;
    const returnValue = JSON.parse(JSON.stringify(oldRenderingData));

    if (returnValue.placeholders.requestAQuoteForm[0]) {
      if (returnValue.placeholders.requestAQuoteForm[0]?.placeholders?.form[0]) {
        returnValue.placeholders.requestAQuoteForm[0].placeholders.form[0].fields._injectedFields =
          { DESIGNSPECS: shortDesignUrl, DESIGNTOOLSERIES: props.product.renoworksKey };
      }
      returnValue.placeholders.requestAQuoteForm[0].fields.body.value +=
        ReactDOMServer.renderToStaticMarkup(
          <>
            {showDesign ? (
              <div className={theme.designSummary.content}>
                <h3 className={theme.designSummary.header}>{seriesName}</h3>
                {(interiorImageUrl || exteriorImageUrl) && (
                  <div className={theme.designSummary.imagesOuterContainer}>
                    {interiorImageUrl && (
                      <div className={theme.designSummary.imageWrapper}>
                        <img
                          className={theme.designSummary.image}
                          src={interiorImageUrl.src}
                          alt={interiorImageUrl.alt}
                          loading="lazy"
                        />
                        <p className={theme.designSummary.imageDescription}>Interior</p>
                      </div>
                    )}
                    {exteriorImageUrl && (
                      <div className={theme.designSummary.imageWrapper}>
                        <img
                          className={theme.designSummary.image}
                          src={exteriorImageUrl.src}
                          alt={exteriorImageUrl.alt}
                          loading="lazy"
                        />
                        <p className={theme.designSummary.imageDescription}>Exterior</p>
                      </div>
                    )}
                  </div>
                )}
                {selections.length > 0 && (
                  <div className={theme.designSummary.selections.container}>
                    <table className={theme.designSummary.selections.table}>
                      {selections.map(
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (row: any) => (
                          <tr className={theme.designSummary.selections.tr} key={row.title}>
                            <td className={theme.designSummary.selections.tdAsset}>{row.title}</td>
                            <td className={theme.designSummary.selections.tdAssetValue}>
                              {row.value}
                            </td>
                          </tr>
                        )
                      )}
                    </table>
                  </div>
                )}
              </div>
            ) : (
              <ul>
                <li className="ti-value-prop ti-energy">
                  <p>
                    <strong>Energy Efficient</strong> - Andersen Corporation was awarded the
                    U.S.Environmental Protection Agency&apos;s{' '}
                    <NextLink href="/ideas-and-inspiration/why-andersen/energy-efficiency/energy-star/">
                      ENERGY STAR
                    </NextLink>{' '}
                    Partner of the Year–Sustained Excellence Award in 2023.
                  </p>
                </li>
                <li className="ti-value-prop ti-enviro">
                  <p>
                    <strong>Environmentally Friendly</strong> - Green Builder Media Readers&apos;
                    Choice 2020, Awarded Most Environmentally Friendly 8 of 9 Years
                  </p>
                </li>
                <li className="ti-value-prop ti-peace">
                  <p>
                    <strong>Peace of Mind</strong> - Our longstanding practice of making products
                    that perform year after year allows us to offer some of the best warranties in
                    the industry.
                  </p>
                </li>
                <li className="ti-value-prop ti-design">
                  <p>
                    <strong>We Design with Your Needs In Mind</strong> - With a variety of
                    collections and customization options, we&apos;ve got reliable products that
                    create the style you&apos;re trying to achieve.
                  </p>
                </li>
                <li className="ti-value-prop ti-oblo">
                  <p>
                    <strong>No-Obligation</strong> - A local Andersen Windows representative will
                    provide you with a no-obligation quote.
                  </p>
                </li>
              </ul>
            )}
          </>
        );
    }
    return returnValue;
  };

  return (
    <div className={theme.attributeOption}>
      <div className={theme.tableWrapper}>
        <table className={theme.table}>
          <tbody>
            {props.selectedOptions.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (option: any, index: number) => (
                <tr key={index} className={theme.trow}>
                  <td className={theme.tdAsset}>{option.title}</td>
                  <td className={theme.tdValue}>{option.value}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className={theme.linkContainer}>
        <div className={theme.linkContainerLeft}>
          <ul className={theme.subMenu}>
            <li className={theme.subMenuListItem}>
              {/*<!-- AddToAny BEGIN -->*/}
              <a
                className={theme.subMenuListLink + ' a2a_dd gtm-click '}
                href={`https://www.addtoany.com/share#url=${shortDesignUrl}`}
                data-a2a-url={shortDesignUrl}
              >
                Share My Design
              </a>
              {/*<!-- AddToAny END -->*/}
            </li>
            <li
              className={theme.subMenuListItem}
              onClick={(e) => {
                if (e.target instanceof HTMLAnchorElement) {
                  prepareDesignSelectionData('Product Details', props.product, props);
                }
              }}
            >
              <Link
                field={props?.product?.links?.detail}
                className={theme.subMenuListLink}
                target="_blank"
              ></Link>
            </li>
            <li className={theme.subMenuListItem}>
              <a
                className={theme.subMenuListLink}
                onClick={() => {
                  prepareDesignSelectionData('Print', props.product, props);
                  window.print();
                }}
              >
                Print
              </a>
            </li>
          </ul>
        </div>
        <div className={theme.linkContainerRight}>
          {shouldShowCTA() && props.product.links.findADealer?.value?.url && (
            <Link
              field={props.product.links.findADealer}
              className={theme.subMenuListLink + theme.primaryLink + theme.sectionLink}
              target="_blank"
            ></Link>
          )}
          {renderingData.placeholders?.requestAQuoteForm[0] ? (
            <>
              <button
                onClick={(e) => handleDesignRequestQuoteModalOpen(e)}
                className={theme.subMenuListLink + theme.secondaryLink + theme.sectionLink}
                title={props.requestAQuote?.value?.text}
              >
                {props.requestAQuote?.value?.text ?? 'Request A Quote'}
              </button>
            </>
          ) : (
            shouldShowCTA() &&
            props.requestAQuote?.value?.url && (
              <Link
                onClick={handleDesignRequestQuote}
                field={props.requestAQuote}
                className={theme.subMenuListLink + theme.secondaryLink + theme.sectionLink}
              ></Link>
            )
          )}
        </div>
      </div>
      {shouldShowCTA() && props.favoritesLink && (
        <div className={theme.favoriteContainer}>
          <a
            className={theme.favoriteLink}
            onClick={favoriteDesign}
            ref={$refs.favoritesButton}
            data-product-id={props.product.productId}
          >
            <SvgIcon
              icon={'favorite'}
              size="20"
              fillId="currentColor"
              className={theme.favoriteLinkIcon}
            ></SvgIcon>
            {favoriteText}
          </a>
        </div>
      )}
      {relatedProduct?.id && (
        <div className={theme.relatedContainer}>
          <h3 className={theme.relatedHeader}>You may also like</h3>
          <RelatedProduct {...relatedProduct} />
        </div>
      )}
      <div
        className={theme.designSummary.container + theme.designSummary.containerHidden}
        ref={$refs.summaryModal}
      >
        <div
          className={theme.designSummary.closeButton}
          onClick={handleDesignRequestQuoteModalClose}
        >
          <SvgIcon icon="close" size="24" className={theme.designSummary.closeButtonIcon}></SvgIcon>
        </div>
        <Placeholder name="requestAQuoteForm" rendering={addTableToFormContent(renderingData)} />
      </div>
    </div>
  );
};

SummaryAttribute.nameString = 'SummaryAttribute';

export default SummaryAttribute;
