import { Result } from '@coveo/headless';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getFieldsToInclude, getResultItemIndex } from 'lib/coveo';
import Image from 'next/image';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { getEnum } from 'lib/utils';
import { Headline } from 'src/helpers/Headline';
import { Subheadline } from 'src/helpers/Subheadline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { Eyebrow } from 'src/helpers/Eyebrow';
import classNames from 'classnames';
import { GridStyle } from './Search';
import { getPhotoItemProps } from 'src/helpers/PhotoItemWithDetail/PhotoItemWithDetail.Utils';
import PhotoItemWithDetail, {
  PhotoItemWithDetailProps,
} from 'src/helpers/PhotoItemWithDetail/PhotoItemWithDetail';
import { getVideoItemProps } from 'src/helpers/VideoGalleryHelpers/VideoItemUtils.Helper';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import SearchVideoItem from './Search.VideoItem.helper';
import { useTheme } from 'lib/context/ThemeContext';
import { useRef } from 'react';
import { isSvgUrl } from 'lib/utils/string-utils';

const GridTemplate = (
  resultItems: Feature.EnterpriseWeb.Enterprise.Elements.Search.GridResultItem[],
  // we can ignore below typeerror, as templateClasses can have string or nested themeclasses objects as well
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  templateClasses: { [property: string]: any },
  gridStyle: GridStyle
) => {
  const fieldsToInclude = getFieldsToInclude(resultItems, 'grid');

  const getImageAttributes = (imageField: string | undefined) => {
    if (imageField) {
      fieldsToInclude.push(`${imageField}_width`);
      fieldsToInclude.push(`${imageField}_height`);
      fieldsToInclude.push(`${imageField}_alt`);
    }
  };

  // Get image attributes
  resultItems.forEach((item) => {
    if (item.fields?.thumbnailImageField) {
      getImageAttributes(getEnum<string>(item.fields?.thumbnailImageField));
    }
    if (item.fields?.imageField) {
      getImageAttributes(getEnum<string>(item.fields?.imageField));
    }
  });

  const template = {
    priority: 1,
    conditions: [],
    fields: [
      'sc_templateid',
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
      <GridItemTemplateMarkup
        result={result}
        resultItems={resultItems}
        gridStyle={gridStyle}
        templateClasses={templateClasses}
      />
    ),
  };

  if (gridStyle === 'photo-gallery') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (template.content as any).modalTemplate = (result: Result) => {
      const photoObject = getPhotoItemProps(result, true, resultItems) as PhotoItemWithDetailProps;
      return <PhotoItemWithDetail key={result.uniqueId} {...photoObject} />;
    };
  }

  return template;
};

export default GridTemplate;

type GridItemTemplateMarkupProps = {
  resultItems: Feature.EnterpriseWeb.Enterprise.Elements.Search.GridResultItem[];
  // we can ignore below typeerror, as templateClasses can have string or nested themeclasses objects as well
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  templateClasses: { [property: string]: any };
  gridStyle: GridStyle;
  result: Result;
};

const GridItemTemplateMarkup = ({
  resultItems,
  result,
  gridStyle,
  templateClasses,
}: GridItemTemplateMarkupProps) => {
  const { currentScreenWidth } = useCurrentScreenType();

  const gridItemRef = useRef<HTMLDivElement>(null);
  const { themeName } = useTheme();

  const getRenderingFields = (
    gridStyle: GridStyle,
    _result: Result,
    _resultItemToConsider: Feature.EnterpriseWeb.Enterprise.Elements.Search.GridResultItem
  ) => {
    const getImageFields = () => ({
      thumbnailImage:
        _result.raw[getEnum<string>(_resultItemToConsider.fields?.thumbnailImageField) || ''],
      thumbnailImageWidth:
        _result.raw[
          `${getEnum<string>(_resultItemToConsider.fields?.thumbnailImageField) || ''}_width`
        ],
      thumbnailImageHeight:
        _result.raw[
          `${getEnum<string>(_resultItemToConsider.fields?.thumbnailImageField) || ''}_height`
        ],
      thumbnailImageAlt:
        _result.raw[
          `${getEnum<string>(_resultItemToConsider.fields?.thumbnailImageField) || ''}_alt`
        ],
    });

    const getResultFields = () => {
      const videoItem = getVideoItemProps(_result, _resultItemToConsider);

      return {
        headline: {
          fields: {
            headlineText: {
              value: _result.raw[getEnum<string>(_resultItemToConsider.fields?.headingField) || ''],
            },
          },
        },
        subheadline: {
          fields: {
            subheadlineText: {
              value:
                _result.raw[getEnum<string>(_resultItemToConsider.fields?.subHeadingField) || ''],
            },
          },
        },
        description: {
          fields: {
            body: {
              value:
                _result.raw[getEnum<string>(_resultItemToConsider.fields?.descriptionField) || ''],
            },
          },
        },
        eyebrow: {
          fields: {
            eyebrowText: {
              value: _result.raw[getEnum<string>(_resultItemToConsider.fields?.eyebrowField) || ''],
            },
          },
        },
        cta: {
          fields: {
            cta1Link: {
              value: {
                href: _result.clickUri,
                title: _resultItemToConsider.fields?.ctaText?.value,
                text: _resultItemToConsider.fields?.ctaText?.value,
              },
            },
            cta1Icon: {
              fields: {
                Value: {
                  value: 'arrow',
                },
              },
            },
            cta1Style: {
              fields: {
                Value: {
                  value: 'link',
                },
              },
            },
          },
        },
        videoItem: videoItem,
      };
    };

    switch (gridStyle) {
      case 'photo-gallery':
        return getImageFields();
      case 'result-with-image':
        return { ...getImageFields(), ...getResultFields() };
      case 'result-without-image':
        return getResultFields();
      default:
        return getImageFields();
    }
  };

  const resultItemIndex = getResultItemIndex(resultItems, result.raw.sc_templateid as string);

  const resultItemToConsider = resultItems[resultItemIndex];

  // we can ignore typings for the template renderingFields data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderingFields: any = resultItemToConsider
    ? getRenderingFields(gridStyle, result, resultItemToConsider)
    : {};

  const playIconSize = {
    desktop: {
      aw: '64',
      rba: '80',
    },
    mobile: {
      aw: '48',
      rba: '80',
    },
  };

  return (
    <div
      ref={gridItemRef}
      className={classNames(
        'group relative  w-full ',
        gridStyle !== 'photo-gallery' ? templateClasses?.gridItem : 'cursor-pointer'
      )}
    >
      {!result?.raw['ew_videoid'] && renderingFields.thumbnailImage && (
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
          {gridStyle === 'photo-gallery' && (
            <SvgIcon
              className="-translate-t-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-full bg-black bg-opacity-[.65] p-l text-white opacity-0 transition-all ease-linear group-hover:-translate-y-1/2 group-hover:opacity-100"
              icon="zoom-pinch"
            />
          )}
        </div>
      )}

      {result?.raw['ew_videoid'] && (
        <SearchVideoItem
          result={result}
          videoItem={renderingFields?.videoItem}
          thumbnailImageLayout="responsive"
          videoPlayerClasses={{ ...templateClasses?.videoPlayer }}
          playIconSize={
            currentScreenWidth < getBreakpoint('ml')
              ? playIconSize?.mobile[themeName]
              : playIconSize?.desktop[themeName]
          }
        />
      )}

      {gridStyle !== 'photo-gallery' && (
        <>
          <Eyebrow classes={templateClasses?.eyebrow} {...renderingFields.eyebrow} />
          <Headline classes={templateClasses?.headline} {...renderingFields.headline} />
          <Subheadline classes={templateClasses?.subheadline} {...renderingFields.subheadline} />
          <BodyCopy classes={templateClasses?.body} {...renderingFields.description} />

          {!result?.raw['ew_videoid'] && (
            <ButtonGroup classes={templateClasses?.buttonGroup} {...renderingFields.cta} />
          )}

          {result?.raw['ew_videoid'] && (
            <button
              aria-label="View More"
              title="View More"
              onClick={() => {
                gridItemRef?.current &&
                  (
                    gridItemRef?.current?.querySelector('.videoItemWrapper') as HTMLDivElement
                  )?.click();
              }}
              className={templateClasses?.modalCta?.buttonClasses}
            >
              View More
              <SvgIcon icon={'arrow'} className={templateClasses?.modalCta?.iconClasses} />
            </button>
          )}
        </>
      )}
    </div>
  );
};
