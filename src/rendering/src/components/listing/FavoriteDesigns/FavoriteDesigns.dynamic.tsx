// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { withDatasourceCheck, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import useSWR from 'swr';
import ReactToPrint from 'react-to-print';
// Components
import { Component } from 'src/helpers/Component';
import { getLocalStorageItem } from 'lib/utils/client-storage-utils';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Headline } from 'src/helpers/Headline';
import FavoriteDesignCard from './FavoriteDesignCard.helper';
import { useExternalScript } from 'lib/utils/use-external-script';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { DesignProps } from './FavoriteDesignsTypes.helper';
import { Spinner } from 'src/helpers/Spinner';
import { NoResults } from '../FavoriteProducts/NoResults.helper';
import { shareServicesToExclude } from './FavoriteDesigns.helper';

export type FavoriteDesignsProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.Listing.Favorites.FavoriteDesigns;

const FavoriteDesigns = (props: FavoriteDesignsProps) => {
  const [designs, setDesigns] = useState<Array<DesignProps>>([]);
  const componentRef = useRef<HTMLDivElement>(null);

  const externalScript = 'https://static.addtoany.com/menu/page.js';
  const state = useExternalScript(externalScript);

  const { fields } = props;

  const sitecoreContext = useSitecoreContext();

  const _designs = useMemo(
    () => (getLocalStorageItem('aw_favoritedesigns') as Array<DesignProps>) || [],
    []
  );

  const getProductIds = (): Array<string> => {
    const productIds: Array<string> = [];

    _designs.forEach((design) => {
      for (let i = 0; i < design.selections.length; i++) {
        if (design.selections[i].title === 'Product ID#') {
          productIds.push(design.selections[i].value);
          break;
        }
      }
    });
    return productIds;
  };

  // Define the fetcher function for SWR
  const fetcher = async (url: string, productIds: string[], language: string) => {
    if (productIds.length > 0) {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ favoriteProducts: productIds, language }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    }
    return [];
  };

  // Use SWR to fetch the favorite products data
  const { data: productsData, error } = useSWR(
    ['/api/enterprise/favorite-products/'],
    (url: string) =>
      fetcher(url, getProductIds(), sitecoreContext.sitecoreContext.language ?? 'en'),
    { shouldRetryOnError: false }
  );

  useEffect(() => {
    if (productsData) {
      const updatedDesigns = [..._designs];

      _designs.forEach((design) => {
        for (let i = 0; i < design.selections.length; i++) {
          if (design.selections[i].title === 'Product ID#') {
            for (let j = 0; j < productsData.length; j++) {
              if (design.selections[i].value === productsData[j].productId.value) {
                design.productName = productsData[j].productName.value;
                design.productShortDescription = productsData[j].productShortDescription.value;
                break;
              }
            }
          }
        }
      });

      setDesigns(updatedDesigns);
    }
  }, [_designs, productsData]);

  useEffect(() => {
    if (window.a2a_config) {
      window.a2a_config.onclick = 1;
      window.a2a_config.num_services = 8;
      window.a2a_config.exclude_services = shareServicesToExclude;
      window.a2a_config.templates = window.a2a_config.templates || {};
      window.a2a_config.callbacks = window.a2a_config.callbacks || [];
      window.a2a_config.templates = {
        email: {
          subject: 'Check out my Favorites from Andersen Windows',
          body: 'Link to my Favorites on AndersenWindows.com ${link}',
        },
        sms: {
          body: 'Link to my Favorites on AndersenWindows.com ${link}',
        },
      };
    }
  }, [state]);

  const getCreatedAtDate = (dateString: string): string => {
    const date = new Date(dateString);
    const locale = 'en-us';
    const weekday = date.toLocaleDateString(locale, { weekday: 'long' });
    const month = date.toLocaleDateString(locale, { month: 'long' });
    const day = date.toLocaleDateString(locale, { day: '2-digit' });
    const year = date.toLocaleDateString(locale, { year: 'numeric' });

    return `Created ${weekday} ${month}, ${day} ${year}`;
  };

  if (!fields) {
    return null;
  }

  return (
    <Component variant="lg" dataComponent="general/favoritedesigns" {...props}>
      <div className="col-span-12">
        <div className="flex justify-between">
          <Headline {...props} />
          {designs.length > 0 && !error && (
            <ReactToPrint
              trigger={() => {
                return (
                  <button
                    id="print-icon"
                    className="hidden cursor-pointer items-center justify-center text-darkprimary ml:flex"
                  >
                    <SvgIcon icon="print" />
                    <span className="ml-xxs">Print</span>
                  </button>
                );
              }}
              content={() => {
                return componentRef.current;
              }}
              documentTitle="Favorite Designs"
              removeAfterPrint
              copyStyles
              bodyClass="aw"
            />
          )}
        </div>
      </div>
      <div className="col-span-12" ref={componentRef}>
        {(!designs || designs.length === 0) && !error && <NoResults fields={fields} />}
        {error && (
          <div className="font-sans text-sm-m font-medium ml:text-m">
            {
              "We're sorry, we couldn't process your request at this time. Please refresh or try again later."
            }
          </div>
        )}
        {!productsData && !error && (
          <div className="loader flex min-h-[40vh] w-full items-center justify-center">
            <Spinner size={48} />
          </div>
        )}
        {designs &&
          designs.length > 0 &&
          designs.map((designData) => {
            return (
              <>
                <span className="font-serif text-small print:hidden">
                  {getCreatedAtDate(designData.createdDate)}
                </span>
                <div className="relative border border-gray">
                  <FavoriteDesignCard {...designData} />
                </div>
              </>
            );
          })}
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<FavoriteDesignsProps>(FavoriteDesigns);
