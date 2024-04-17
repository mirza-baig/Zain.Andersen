import { Result } from '@coveo/headless';
import Image from 'next/image';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { ResultLink } from 'src/helpers/Coveo';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getEnum } from 'lib/utils';
import { getFieldsToInclude, getResultItemIndex } from 'lib/coveo';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { getVideoItemProps } from 'src/helpers/VideoGalleryHelpers/VideoItemUtils.Helper';
import { useRef } from 'react';
import { VideoItemProps } from 'src/helpers/VideoGalleryHelpers/VideoListing';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import SearchVideoItem from './Search.VideoItem.helper';
import { isSvgUrl } from 'lib/utils/string-utils';

const ListTemplate = (
  resultItems: Feature.EnterpriseWeb.Enterprise.Elements.Search.ListResultItem[],
  // we can ignore below typeerror, as templateClasses can have string or nested themeclasses objects as well
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  templateClasses: { [property: string]: any }
) => {
  const fieldsToInclude = getFieldsToInclude(resultItems, 'list');

  return {
    priority: 1,
    conditions: [],
    fields: [
      'sc_templateid',
      'ew_sitesearchtopic',
      'ew_video_youtubeautoloop',
      'ew_video_youtubeclosedcaptions',
      'ew_video_youtubeshowcontrols',
      'ew_video_youtubemute',
      'ew_video_facebookshowcaptions',
      'ew_video_facebookshowtext',
      'ew_videoid',
      'ew_videothumbnail_height',
      'ew_videothumbnail_width',
      'ew_videothumbnail_alt',
      'ew_videothumbnailmobile_height',
      'ew_videothumbnailmobile_width',
      'ew_videothumbnailmobile_alt',
      'ew_videotype',
      ...fieldsToInclude,
    ],
    content: (result: Result) => (
      <ListTemplateMarkup
        result={result}
        resultItems={resultItems}
        templateClasses={templateClasses}
      />
    ),
  };
};

export default ListTemplate;

type ListTemplateMarkup = {
  resultItems: Feature.EnterpriseWeb.Enterprise.Elements.Search.ListResultItem[];
  result: Result;
  // we can ignore below typeerror, as templateClasses can have string or nested themeclasses objects as well
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  templateClasses: { [property: string]: any };
};

const ListTemplateMarkup = ({ result, resultItems, templateClasses }: ListTemplateMarkup) => {
  // console.log('ListTemplateMarkup', resultItems);
  const listItemRef = useRef<HTMLLIElement>(null);
  const { currentScreenWidth } = useCurrentScreenType();

  const resultItemIndex = getResultItemIndex(resultItems, result.raw.sc_templateid as string);

  const resultItemToConsider = resultItems[resultItemIndex];
  console.log('resultItemToConsider', resultItemToConsider);
  // console.log('resultItemToConsider', resultItemToConsider.fields?.descriptionField);

  const videoItem = result?.raw['ew_videoid'] && getVideoItemProps(result, resultItemToConsider);

  const renderingFields = {
    eyebrow:
      result.raw[getEnum<string>(resultItemToConsider.fields?.eyebrowField) || ''] ||
      result.raw.ew_sitesearchtopic,
    headline: result.raw[getEnum<string>(resultItemToConsider.fields?.headingField) || ''],
    description: result.raw[getEnum<string>(resultItemToConsider.fields?.descriptionField) || ''],
    image: result.raw[getEnum<string>(resultItemToConsider.fields?.imageField) || ''],
    icon: resultItemToConsider.fields?.icon?.value?.src || '',
    videoItem,
  };
  console.log('renderingFields', renderingFields);

  return (
    <li
      ref={listItemRef}
      key={result.uniqueId}
      className={twMerge(
        templateClasses?.resultItem,
        result.rankingModifier === 'FeaturedResult' && templateClasses?.featuredResultItem
      )}
      onClick={(e) => {
        if (
          result.rankingModifier === 'FeaturedResult' ||
          (e.target as HTMLElement).classList.contains('result-image')
        ) {
          // Get link element from featured result item
          e.currentTarget.getElementsByTagName('a')[0].click();
        }
      }}
    >
      <article className="flex items-center justify-between">
        <div className="flex-1">
          {renderingFields.eyebrow && (
            <p className={templateClasses?.resultEyebrow}>{`${renderingFields.eyebrow}`}</p>
          )}
          {renderingFields.headline && (
            <h2
              className={classNames(
                'line-clamp-2 md:line-clamp-none',
                templateClasses?.resultHeading,
                { 'cursor-pointer': result?.raw['ew_videoid'] },
                result.rankingModifier === 'FeaturedResult' &&
                  'group-hover:font-heavy group-hover:underline'
              )}
              onClick={() => {
                result?.raw['ew_videoid'] &&
                  listItemRef?.current &&
                  (
                    listItemRef?.current?.querySelector('.videoItemWrapper') as HTMLDivElement
                  )?.click();
              }}
            >
              {result?.raw['ew_videoid'] ? (
                <RichText field={{ value: (renderingFields.headline as string) || '' }} tag="" />
              ) : (
                <ResultLink result={result}>
                  <RichText field={{ value: (renderingFields.headline as string) || '' }} tag="" />
                </ResultLink>
              )}
            </h2>
          )}
          {renderingFields.description && (
            <RichTextWrapper
              classes={classNames(
                'line-clamp-2 md:line-clamp-3',
                templateClasses?.resultDescription
              )}
              field={{ value: renderingFields.description as string }}
            />
          )}
        </div>
        {!result?.raw['ew_videoid'] &&
          ((renderingFields.image && renderingFields.image !== 'null') || renderingFields.icon) && (
            <div
              className={twMerge(
                'relative cursor-pointer',
                renderingFields.image
                  ? 'h-[96px] w-[96px] md:h-[140px] md:w-[140px]'
                  : 'h-[50px] w-[50px]'
              )}
            >
              <Image
                src={`${renderingFields.image || renderingFields.icon}`}
                layout="fill"
                objectFit="cover"
                alt={`${renderingFields.headline}`}
                className="result-image"
                unoptimized={isSvgUrl(
                  (renderingFields.image as string | undefined) ||
                    (renderingFields.icon as string | undefined)
                )}
              />
            </div>
          )}

        {result?.raw['ew_videoid'] && (
          <SearchVideoItem
            result={result}
            videoItem={renderingFields?.videoItem as VideoItemProps}
            videoPlayerClasses={templateClasses?.videoPlayer}
            additionalDesktopClasses={
              renderingFields?.videoItem ? 'h-[140px] w-[140px]' : 'h-[50px] w-[50px]'
            }
            additionalMobileClasses={
              renderingFields?.videoItem ? 'h-[96px] w-[96px]' : 'h-[50px] w-[50px]'
            }
            thumbnailImageLayout={'fill'}
            ratio="square"
            playIconSize={currentScreenWidth < getBreakpoint('ml') ? '32' : '28'}
          />
        )}
      </article>
    </li>
  );
};
