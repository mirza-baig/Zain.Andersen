// Global
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'lib/context/ThemeContext';
import { useBVScript } from 'lib/utils/use-bv-script';
import { useEffect, useRef, useState } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';

// Components
import { Component } from 'src/helpers/Component';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { BazaarvoiceQuestionAnswerTheme } from './BazaarvoiceQuestionAnswer.theme';
import { Headline } from 'src/helpers/Headline';

export type BazaarvoiceQuestionAnswerProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.General.BazaarvoiceQuestionAnswer.BazaarvoiceQuestionAnswer;

const BazaarvoiceQuestionAnswer = (props: BazaarvoiceQuestionAnswerProps) => {
  const { themeData } = useTheme(BazaarvoiceQuestionAnswerTheme);
  const productItem = props?.fields?.productItem;
  const bazaarvoiceProductId = productItem?.fields?.bazaarvoiceProductId?.value;
  const componentId = 'bazaarvoice-question-answer-' + bazaarvoiceProductId;

  const [isOpen, setOpen] = useState(false);
  const [questionCount, setCount] = useState('');
  const intervalref = useRef<number | null>(null);

  // Add the bazaarvoice script
  useBVScript();

  useEffect(() => {
    if (intervalref.current !== null) {
      return;
    }

    let i = 0;
    // Start the interval
    // Wait for the element to be added to the page then set the question count
    intervalref.current = window.setInterval(() => {
      i = i + 1;

      const bvContainer = document.querySelector<HTMLElement>('#BVQAContainer');
      const bvContainerInnerText = bvContainer?.innerText || '';

      //The container exists, so try to get the count now
      if (bvContainerInnerText.length > 0) {
        const bvSelector = document.querySelector<HTMLElement>(
          '#BVQAContainer .bv-control-bar .bv-content-pagination-pages-current span'
        );
        const bvSpanInnerText = bvSelector?.innerText || '';

        if (bvSpanInnerText.length > 0) {
          //Get the last number from "1-10 of XX Questions" span tag
          const regex = new RegExp(/(\d+)(?!.*\d)/gm);
          const allMatched = Array.from(bvSpanInnerText?.matchAll(regex));
          const firstMatch = allMatched[0];

          if (firstMatch != undefined) {
            setCount(firstMatch[0]);
          } else {
            setCount('0');
          }
        } else {
          //If there is one or less questions the span tag with the counts does not exist,
          //so instead count how many appear in the list
          const bvQuestionCount = document.querySelectorAll<HTMLElement>(
            '#BVQAContainer .bv-content-list-container > ol > li'
          ).length;

          setCount(bvQuestionCount.toString());
        }
        stopInterval();
      }
    }, 100);
  }, []);

  // Stop the interval
  const stopInterval = () => {
    if (intervalref.current) {
      window.clearInterval(intervalref.current);
      intervalref.current = null;
    }
  };

  // Use the useEffect hook to cleanup the interval when the component unmounts
  useEffect(() => {
    return () => {
      if (intervalref.current !== null) {
        window.clearInterval(intervalref.current);
      }
    };
  }, []);

  return (
    <Component gap="0" variant="lg" dataComponent="general/bazaarvoicequestionanswer" {...props}>
      <Headline classes={themeData.classes.headline} {...props} />
      <div className={themeData.classes.wrapperClass}>
        <a
          className={themeData.classes.accordionToggleContainer}
          data-anchor-name={'#' + componentId}
        >
          <h2 className={themeData.classes.accordionHeadline} onClick={() => setOpen(!isOpen)}>
            <div className={themeData.classes.readQuestion}>Read Questions</div>
            <div className={themeData.classes.readQuestionCount}>({questionCount})</div>
            <div className={themeData.classes.accordionToggleIndicator}>
              <SvgIcon
                icon={isOpen ? 'minus' : 'plus'}
                size="18"
                className={themeData.classes.iconClass}
              />
            </div>
          </h2>
        </a>
        <div
          className={`content-container ${
            isOpen ? themeData.classes.contentOpen : themeData.classes.contentClosed
          }`}
          id={componentId}
        >
          <div className="content">
            <div data-bv-show="questions" data-bv-product-id={bazaarvoiceProductId}></div>
          </div>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<BazaarvoiceQuestionAnswerProps>(BazaarvoiceQuestionAnswer);
