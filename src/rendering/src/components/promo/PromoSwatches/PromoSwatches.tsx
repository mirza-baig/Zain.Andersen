// Global
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
// Components
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { getEnum } from 'lib/utils';
import { Component } from 'src/helpers/Component';
import { SwatchCollectionTheme } from 'src/helpers/SwatchCollection/SwatchCollection.theme';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { MediaPrimary } from 'src/helpers/Media';
import SwatchCollection, {
  LayoutStyles,
  SwatchCollectionProps,
} from 'src/helpers/SwatchCollection/SwatchCollection';

export type PromoSwatchesProps =
  Feature.EnterpriseWeb.Enterprise.Components.Promo.PromoSwatches.PromoSwatches & {
    fields?: {
      children: SwatchCollectionProps[];
    };
  };

const PromoSwatches = (props: PromoSwatchesProps) => {
  const layoutStyle = getEnum<LayoutStyles>(props.fields?.layoutStyle) || 'side-by-side';
  const { themeData, themeName } = useTheme(SwatchCollectionTheme(layoutStyle));

  let contentColumn;
  let imageColumn;

  switch (layoutStyle) {
    case 'side-by-side':
      contentColumn = 'col-span-12 ml:col-span-6 order-last ml:order-first';
      imageColumn = 'col-span-12 ml:col-span-6';
      break;

    case 'full-width':
      contentColumn = 'col-span-12 order-last';
      imageColumn = 'col-span-12';
      break;
  }

  return (
    <Component
      variant="lg"
      gap={classNames(
        themeName === 'aw' ? 'gap-y-s ml:gap-y-m gap-x-s' : 'gap-y-m ml:gap-y-ml gap-x-s'
      )}
      dataComponent="promo/promoswatches"
      {...props}
    >
      <div className={contentColumn}>
        <Eyebrow {...props} classes={themeData.classes.eyebrow} />
        <Headline {...props} classes={themeData.classes.headline} />
        <BodyCopy {...props} classes={themeData.classes.bodycopy} />
        {props.fields?.children.map((swatchCollection: SwatchCollectionProps, index: number) => {
          return (
            <SwatchCollection
              {...swatchCollection}
              layoutStyle={layoutStyle}
              key={'swatchcollection-' + index}
            />
          );
        })}
      </div>
      <div className={imageColumn}>
        <MediaPrimary {...props} />
      </div>
    </Component>
  );
};

export default withDatasourceCheck()(PromoSwatches);
