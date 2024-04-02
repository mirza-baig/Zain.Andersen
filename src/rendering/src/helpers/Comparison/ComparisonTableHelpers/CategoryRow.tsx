import React from 'react';
import { CategoryDataItem, CategoryDataProps } from './ComparisonTable.Types';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { Swatches } from './Swatches';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';
import PriceLevel from 'src/helpers/PriceLevel/PriceLevel';
import { isSvgUrl } from 'lib/utils/string-utils';

export const CategoryRow = (
  props: { data: CategoryDataProps } & { totalNumberOfSeries: number }
) => {
  const renderData = (data: CategoryDataItem) => {
    if (!data) {
      return <div className="flex min-h-[48px] items-center justify-center">-</div>;
    }

    return (
      <div>
        {data.hasOwnProperty('priceLevel') ? (
          data.priceLevel ? (
            <PriceLevel
              priceLevel={parseInt(data.priceLevel)}
              priceClasses="text-gray text-sm-xxs font-medium !font-sans"
              priceLevelClasses="text-black font-heavy"
            />
          ) : (
            '-'
          )
        ) : Array.isArray(data) ? (
          data.length > 0 ? (
            data.map((item, index) => (
              <div className="py-xxxs" key={index}>
                {/* There can be array of items or item as a string */}
                {Array.isArray(item) ? (
                  item.map(
                    // ignoring this due to complext and unexpected nature of proxy data schema from comparison tables
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (_item: any, _itemIndex: number) =>
                      typeof _item === 'string' ? (
                        <RichTextWrapper
                          key={_itemIndex}
                          classes="!text-small"
                          field={{ value: (_item as string) || '' }}
                        />
                      ) : (
                        'src' in _item && (
                          <Image
                            key={_itemIndex}
                            src={_item.src}
                            width={_item.width}
                            height={_item.height}
                            unoptimized={isSvgUrl(_item.src)}
                          />
                        )
                      )
                  )
                ) : item?.href ? (
                  // Render array of links
                  <div className="text-primary">
                    <Link field={item} />
                  </div>
                ) : (
                  <RichTextWrapper
                    classes="!text-small"
                    field={{ value: (item as string) || '-' }}
                  />
                )}
              </div>
            ))
          ) : (
            '-'
          )
        ) : typeof data !== 'string' && 'swatches' in data ? (
          <div className="flex flex-col items-center justify-center">
            <Swatches swatchesCollection={data} />
            {data.swatchCollectionComments && (
              <RichTextWrapper
                classes="!text-small mt-xxs"
                field={{ value: data.swatchCollectionComments }}
              />
            )}
          </div>
        ) : typeof data !== 'string' && 'href' in data && 'text' in data ? (
          <div className="text-primary">
            <Link field={data} />
          </div>
        ) : (
          typeof data === 'string' && (
            <RichTextWrapper classes="!text-small" field={{ value: data || '-' }} />
          )
        )}
      </div>
    );
  };

  return (
    <>
      <div className="flex w-full">
        {props.data?.length > 0 &&
          props.data.map((_data, index) => (
            <div
              className="relative my-xxs flex min-w-[50.1%] items-center justify-center border-r border-gray p-xs text-center text-small last:border-none ml:w-full ml:min-w-0"
              key={index}
            >
              {renderData(_data)}
              {props.data?.length < props.totalNumberOfSeries &&
                index === props.data?.length - 1 && (
                  <div className="absolute left-full top-0 w-full pl-xxs pr-xs">&nbsp;</div>
                )}
            </div>
          ))}
      </div>
    </>
  );
};
