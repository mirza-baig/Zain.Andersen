import classNames from 'classnames';
import { DynamicXupCardStyle } from '../XupCardCollectionDynamic';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { Headline } from 'src/helpers/Headline';
import { Subheadline } from 'src/helpers/Subheadline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { isSvgUrl } from 'lib/utils/string-utils';

type GenericResultCardMarkupProps = {
  dynamicXupCardStyle: DynamicXupCardStyle;
  templateClasses: { [property: string]: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderingFields: any;
};

const GenericResultCardMarkup = ({
  dynamicXupCardStyle,
  templateClasses,
  renderingFields,
}: GenericResultCardMarkupProps) => {
  // RbA Affiliate Card Award: Read more at the end of the 3rd line of description text
  const [isExpanded, setIsExpanded] = useState(false);
  const [lineCount, setLineCount] = useState(0);
  const textContainerRef = useRef(null);
  const descriptionText = renderingFields.description?.fields?.body?.value;

  useEffect(() => {
    const countLines = () => {
      const textContainer = textContainerRef.current as unknown as HTMLElement;
      if (textContainerRef.current && dynamicXupCardStyle === 'awards') {
        const containerRect = textContainer.getBoundingClientRect();
        const lines = Math.ceil(containerRect.height / 21);
        setLineCount(lines);
      }
    };
    const resizeListener = () => {
      if (window.innerWidth !== previousWidth) {
        countLines();
        previousWidth = window.innerWidth;
      }
    };

    let previousWidth = window.innerWidth;
    setTimeout(countLines, 500);

    if (dynamicXupCardStyle === 'awards') {
      window.addEventListener('resize', resizeListener);
    }

    return () => {
      if (dynamicXupCardStyle === 'awards') {
        window.removeEventListener('resize', resizeListener);
      }
    };
  }, [dynamicXupCardStyle]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={classNames(
        'group relative  w-full ',
        dynamicXupCardStyle !== 'photo-gallery' ? templateClasses?.gridItem : 'cursor-pointer'
      )}
    >
      {renderingFields.thumbnailImage && (
        <div className={templateClasses?.imageWrapper}>
          <Image
            src={`${renderingFields.thumbnailImage}`}
            layout="responsive"
            width={`${renderingFields.thumbnailImageWidth || 300}`}
            height={`${renderingFields.thumbnailImageHeight || 300}`}
            alt={`${renderingFields.thumbnailImageAlt}`}
            objectFit="cover"
            unoptimized={isSvgUrl(renderingFields.thumbnailImage)}
          />
          {/* Render icon if gridLayout is photo-gallery */}
          {dynamicXupCardStyle === 'photo-gallery' && (
            <SvgIcon
              className="-translate-t-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-full bg-black bg-opacity-[.65] p-l text-white opacity-0 transition-all ease-linear group-hover:-translate-y-1/2 group-hover:opacity-100"
              icon="zoom-pinch"
            />
          )}
        </div>
      )}
      {dynamicXupCardStyle !== 'photo-gallery' && (
        <>
          {dynamicXupCardStyle !== 'awards' && (
            <Eyebrow classes={templateClasses?.eyebrow} {...renderingFields.eyebrow} />
          )}
          <Headline classes={templateClasses?.headline} {...renderingFields.headline} />
          {dynamicXupCardStyle !== 'awards' && (
            <Subheadline classes={templateClasses?.subheadline} {...renderingFields.subheadline} />
          )}
          {dynamicXupCardStyle === 'awards' ? (
            <div className="mb-s">
              <div
                ref={textContainerRef}
                className={classNames('mb-0', lineCount > 3 && !isExpanded ? 'line-clamp-3' : '')}
              >
                <BodyCopy
                  fields={{ body: { value: descriptionText } }}
                  classes={(templateClasses?.body, 'mb-0 text-dark-gray')}
                />
              </div>

              {lineCount > 3 && (
                <span
                  className="cursor-pointer text-body text-darkprimary underline"
                  onClick={toggleExpand}
                >
                  {isExpanded ? ' Read less' : ' Read more'}
                </span>
              )}
            </div>
          ) : (
            <BodyCopy classes={templateClasses?.body} {...renderingFields.description} />
          )}

          <ButtonGroup classes={templateClasses?.buttonGroup} {...renderingFields.cta} />
        </>
      )}
    </div>
  );
};

export default GenericResultCardMarkup;
