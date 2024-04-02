// Components
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getEnum } from 'lib/utils';
import { ComponentProps } from 'lib/types/component-props';
import { useTheme } from 'lib/context/ThemeContext';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { Component } from 'src/helpers/Component';
import { Headline } from 'src/helpers/Headline';
import { ImagePrimary } from 'src/helpers/Media';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import CalloutItem from './CalloutItem.helper';
import { ListImageWithCalloutsTheme } from './ListImageWithCallouts.theme';

type CalloutItemProp =
  Feature.EnterpriseWeb.Enterprise.Components.Listing.ListImageWithCallouts.ListImageWithCalloutsItem;

export type ListImageWithCalloutsProps = {
  fields: Feature.EnterpriseWeb.Enterprise.Components.Listing.ListImageWithCallouts.ListImageWithCallouts['fields'] & {
    children: Array<CalloutItemProp>;
  };
} & ComponentProps;

const RowPositions: { [callOutIndex: number]: string } = {
  1: 'md:row-start-1',
  2: 'md:row-start-2',
  3: 'md:row-start-3',
};

const ColPositions: { [callOutIndex: number]: string } = {
  1: 'md:col-start-1',
  3: 'md:col-start-10',
};

const ListImageWithCallouts = (props: ListImageWithCalloutsProps): JSX.Element => {
  const { fields } = props;
  const { themeName, themeData } = useTheme(ListImageWithCalloutsTheme);
  const imagePosition = getEnum(fields?.imgPosition) || 'right';

  const { currentScreenWidth } = useCurrentScreenType();

  // We've to use this check in order remove optional chaining
  if (!fields) {
    return <></>;
  }

  // Callout items code
  const calloutItems = fields.children;

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    enableNumberedPagination: themeName === 'rba',
  };

  const renderCallouts = () => {
    if (currentScreenWidth <= getBreakpoint('md')) {
      // Renderings for mobile devices
      return (
        <div
          className={classNames(
            'col-span-12',
            calloutItems.length > 3 ? 'md:col-span-3' : 'md:col-span-5'
          )}
        >
          <SliderWrapper sliderSettings={sliderSettings} theme={themeName}>
            {calloutItems.map((item: CalloutItemProp, index: number) => {
              return (
                <CalloutItem
                  key={index}
                  fields={item.fields}
                  callOutItemClasses={themeData.classes.callOutItemClasses}
                />
              );
            })}
          </SliderWrapper>
        </div>
      );
    } else {
      // Renderings for tablets and large screen devices
      return calloutItems.map(
        (
          item: Feature.EnterpriseWeb.Enterprise.Components.Listing.ListImageWithCallouts.ListImageWithCalloutsItem,
          index: number
        ) => {
          return (
            <div
              key={index}
              className={classNames(
                calloutItems.length > 3 ? 'md:col-span-3' : 'md:col-span-5',
                RowPositions[calloutItems.length === 4 ? (index % 2) + 2 : (index % 3) + 2],

                calloutItems.length > 3
                  ? calloutItems.length === 4
                    ? ColPositions[index > 1 ? 3 : 1]
                    : ColPositions[index > 2 ? 3 : 1]
                  : imagePosition === 'right'
                  ? 'md:col-start-1'
                  : 'md:col-start-7'
              )}
            >
              <CalloutItem
                fields={item.fields}
                callOutItemClasses={themeData.classes.callOutItemClasses}
              />
            </div>
          );
        }
      );
    }
  };

  return (
    <Component
      variant={themeName === 'aw' ? 'full' : 'lg'}
      backgroundVariant={getEnum(fields.backgroundColor)}
      dataComponent="listing/listimagewithcallouts"
      {...props}
    >
      <div className={classNames('col-span-12', themeData.classes.listWrapper)}>
        <div
          className={classNames(
            'grid-rows-auto grid grid-cols-12 gap-y-0 md:max-w-screen-lg md:grid-flow-row-dense md:grid-cols-12 md:gap-s md:px-m lg:mx-auto'
          )}
        >
          <div className="col-span-12">
            <Headline classes={themeData.classes.headline} {...props} />
          </div>
          <div
            className={classNames(
              'col-span-12 row-span-3 md:col-span-6 md:row-start-2',
              calloutItems.length > 3
                ? 'md:col-start-4'
                : imagePosition === 'right'
                ? 'md:col-start-7'
                : 'md:col-start-1',
              themeData.classes.imageContainer
            )}
          >
            <ImagePrimary imageLayout={'intrinsic'} ratio="portrait" focusArea={'top'} {...props} />
          </div>
          {renderCallouts()}
        </div>
      </div>
    </Component>
  );
};
export default withDatasourceCheck()(ListImageWithCallouts);
