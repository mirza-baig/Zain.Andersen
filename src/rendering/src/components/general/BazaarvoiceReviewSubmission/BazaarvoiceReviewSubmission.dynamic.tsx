// Global
import { useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ThemeFile, ThemeName, useTheme } from 'lib/context/ThemeContext';
import { useBVScript } from 'lib/utils/use-bv-script';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';

// Components
import { Component } from 'src/helpers/Component';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { BazaarvoiceReviewSubmissionTheme } from './BazaarvoiceReviewSubmission.theme';

import { getHeadingLevel } from 'lib/utils';
import { Headline } from 'src/helpers/Headline';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { ProductByBVIdQueryResult } from 'src/pages/api/aw/bazaarvoice-product-by-bvid';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';

export type BazaarvoiceReviewSubmissionProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.General.BazaarvoiceReviewSubmission.BazaarvoiceReviewSubmission;

const RenderReviewButton = (
  props: ProductByBVIdQueryResult,
  themeData: ThemeFile[ThemeName] | undefined
) => {
  if (props === null) {
    return <></>;
  }

  const imageField = {
    value: props?.productImage,
  };

  return (
    <>
      <div className={themeData.classes.bazaarvoiceImageWrapper}>
        <ImageWrapper image={imageField}></ImageWrapper>
      </div>
      <div className={themeData.classes.bazaarvoiceProductContent}>
        <h3 className={themeData.classes.bazaarvoiceProductHeadline}>{props.productName?.value}</h3>
        <button
          onClick={() => SubmitReviewClick(props.bazaarvoiceProductId?.value)}
          className={themeData.classes.buttonClass}
          title="Start Rating"
        >
          Start Rating
        </button>
      </div>
    </>
  );
};

const SubmitReviewClick = (externalId: string) => {
  // @ts-ignore $BV will be available after the page loads.
  $BV.ui('rr', 'submit_review', { productId: externalId });
};

const RenderAllReviewButtons = (
  props: ProductByBVIdQueryResult[],
  themeData: ThemeFile[ThemeName] | undefined
) => {
  if (props === null || props?.length === 0 || !Array.isArray(props)) {
    return <></>;
  }

  return (
    <div className={themeData.classes.bazaarvoiceContainerWrapper}>
      {props.map((_item, _index) => (
        <div key={_index} className={themeData.classes.bazaarvoiceProductWrapper}>
          {RenderReviewButton(_item, themeData)}
        </div>
      ))}
    </div>
  );
};

const BazaarvoiceReviewSubmission = (props: BazaarvoiceReviewSubmissionProps) => {
  const { themeData } = useTheme(BazaarvoiceReviewSubmissionTheme);
  const router = useRouter();
  const sitecoreContext = useSitecoreContext();
  const language = sitecoreContext.sitecoreContext.language;

  const [searchResults, setSearchResults] = useState<ProductByBVIdQueryResult[]>([]);

  // Add the bazaarvoice script
  useBVScript();

  useEffect(() => {
    async function getProductsByBVProductId() {
      const urlSearchParams = new URLSearchParams(router.asPath.split('?')[1]);
      const productIds = urlSearchParams.get('externalIds');
      const sourceIds = props?.fields?.bazaarvoiceProducts?.map((product: Item) => product.id);

      if (sourceIds?.length > 0 && productIds) {
        try {
          const response = await fetch('/api/aw/bazaarvoice-product-by-bvid/', {
            method: 'POST',
            body: JSON.stringify({
              sourceIds: sourceIds,
              productIds: productIds.split(','),
              language: language,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setSearchResults(data.products);
          } else {
            console.error('Error:', response.statusText);
          }
        } catch (error) {
          console.error('Error occurred:', error);
        }
      }
    }
    getProductsByBVProductId();
  }, [router.asPath, router.isReady]);

  return (
    <Component variant="lg" dataComponent="general/bazaarvoicereviewsubmission" {...props}>
      <div className={themeData.classes.componentWrapperClass}>
        <Headline
          useTag={getHeadingLevel('h2', props.fields?.headlineLevel)}
          classes={themeData.classes.headlineContainer}
          {...props}
        />
        <RichTextWrapper
          field={props?.fields?.thankYouMessaging}
          classes={themeData.classes.thankYouMessaging}
        />
        {RenderAllReviewButtons(searchResults, themeData)}
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<BazaarvoiceReviewSubmissionProps>(BazaarvoiceReviewSubmission);
