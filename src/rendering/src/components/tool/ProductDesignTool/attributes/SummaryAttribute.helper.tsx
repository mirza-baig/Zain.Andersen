// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { AttributeRendererProps, shortenUrl, SummaryViewModel } from 'lib/renoworks';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import SvgIcon from 'src/helpers/SvgIcon/SvgIcon';
import { useTheme } from 'src/lib/context/ThemeContext';
import { getLocalStorageItem, setLocalStorageItem } from 'src/lib/utils/client-storage-utils';
import { shareServicesToExclude, useA2AScript } from 'src/lib/utils/use-a2a-script';
import { useBVScript } from 'src/lib/utils/use-bv-script';
import { SummaryAttributeTheme, SummaryAttributeThemeSubType } from './SummaryAttribute.theme';

const SummaryAttribute = ({
  viewModel,
  selectedOptions,
  props,
  modalRef,
}: AttributeRendererProps<SummaryViewModel>) => {
  const { themeData } = useTheme(SummaryAttributeTheme());
  const theme = (themeData as SummaryAttributeThemeSubType).classes;
  const router = useRouter();

  const $refs = {
    favoritesButton: useRef<HTMLAnchorElement>(null),
    favoritesButtonMobile: useRef<HTMLAnchorElement>(null),
  };

  const [shortDesignUrl, setShortDesignUrl] = useState('');
  const [favoriteText, setFavoriteText] = useState(getFavoriteText());
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

  useEffect(() => {
    if (window.a2a_config) {
      window.a2a_config.onclick = 1;
      window.a2a_config.num_services = 8;
      window.a2a_config.exclude_services = shareServicesToExclude;
      window.a2a_config.templates = window.a2a_config.templates || {};
      window.a2a_config.callbacks = window.a2a_config.callbacks || [];

      // window.a2a_config.callbacks.push({
      //   share: () => prepareDesignSelectionData('Share My Design', viewModel.product, viewModel),
      // } as never);

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

  const productSeriesAndCategory = () => {
    const seriesName = productSeries();
    const categoryName = productCategory();
    return `${seriesName} ${categoryName}`;
  };

  function productSeries() {
    return props.fields?.product?.fields?.productSeries?.fields?.productTypeName?.value;
  }

  function productCategory() {
    return props.fields?.product?.fields?.productName?.value;
  }

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
        seriesCategory: productCategory(),
        interiorImage: viewModel?._interiorImage,
        exteriorImage: viewModel?._exteriorImage,
        selections: viewModel?._selectedOptions,
        shareUrl: shortDesignUrl,
        productDetailUrl: props.fields?.productDetailLink?.value.href,
        findADealerUrl: props.fields?.findADealerLink?.value.href,
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

  const handleDesignRequestQuoteModalClose = () => {
    modalRef?.current?.classList.add(theme.designSummary.containerHidden);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addTableToFormContent = (oldRenderingData: any) => {
    const seriesName = productSeriesAndCategory();
    const interiorImageUrl = viewModel.interiorImage;
    const exteriorImageUrl = viewModel.exteriorImage;
    const selections = viewModel.selectedOptions;
    const showDesign = seriesName || interiorImageUrl || exteriorImageUrl || selections.length > 0;
    const returnValue = JSON.parse(JSON.stringify(oldRenderingData));

    if (returnValue.placeholders.requestAQuoteForm[0]) {
      if (returnValue.placeholders.requestAQuoteForm[0]?.placeholders?.form[0]) {
        returnValue.placeholders.requestAQuoteForm[0].placeholders.form[0].fields._injectedFields =
          {
            DESIGNSPECS: shortDesignUrl,
            DESIGNTOOLSERIES: props.fields?.product?.fields?.renoworksKey?.value,
          };
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
    <>
      {props.fields?.favoritesLink && (
        <div className={theme.favoriteContainer}>
          <a
            className={theme.favoriteLink}
            onClick={favoriteDesign}
            ref={$refs.favoritesButton}
            data-product-id={viewModel?.product?.productId}
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
      <div className={theme.attributeOption}>
        <div className={theme.tableWrapper}>
          <div className={theme.headerWrapper}>
            <p className={`${theme.summaryHeader} ${theme.earmark}`}>All of your window details</p>
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
                      <SvgIcon icon="share" className="mr-[2px]"></SvgIcon> Share My Design
                    </a>
                    {/*<!-- AddToAny END -->*/}
                  </li>
                  <li className={theme.subMenuListItem}>
                    <a
                      className={theme.subMenuListLink}
                      onClick={() => {
                        //prepareDesignSelectionData('Print', viewModel.product, viewModel);
                        window.print();
                      }}
                    >
                      Print
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <table className={theme.table}>
            <tbody>
              {selectedOptions?.map(
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
        {props?.rendering?.placeholders?.requestAQuoteForm[0] && (
          <div
            className={theme.designSummary.container + theme.designSummary.containerHidden}
            ref={modalRef}
          >
            <div
              className={theme.designSummary.closeButton}
              onClick={handleDesignRequestQuoteModalClose}
            >
              <SvgIcon
                icon="close"
                size="24"
                className={theme.designSummary.closeButtonIcon}
              ></SvgIcon>
            </div>
            <Placeholder
              name="requestAQuoteForm"
              rendering={addTableToFormContent(props.rendering)}
            />
          </div>
        )}
      </div>
    </>
  );
};

SummaryAttribute.nameString = 'SummaryAttribute';

export default SummaryAttribute;
