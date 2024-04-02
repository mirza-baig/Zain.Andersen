import { getEnum } from 'lib/utils';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Headline } from 'src/helpers/Headline';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { BodyCopy } from 'src/helpers/BodyCopy';
import classNames from 'classnames';
import { useTheme } from 'lib/context/ThemeContext';
import { SwatchCollectionTheme } from './SwatchCollection.theme';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { EnumField } from 'lib/utils/get-enum';

export type SwatchStyles = 'small-circles' | 'large-circles' | 'square';
export type LayoutStyles = 'full-width' | 'side-by-side';

export type SwatchCollectionProps =
  Foundation.EnterpriseWeb.Enterprise.FieldSets.Products.SwatchCollections & {
    fields?: {
      swatchCollection?: Feature.EnterpriseWeb.Enterprise.Elements.Swatches.SwatchCollection & {
        fields?: {
          swatches: Feature.EnterpriseWeb.Enterprise.Elements.Swatches.Swatch[];
        };
      };
      swatchStyle?: EnumField<SwatchStyles>;
    };
    layoutStyle: LayoutStyles;
  };

const SwatchCollection = (props: SwatchCollectionProps) => {
  const swatchStyle = getEnum(props.fields?.swatchStyle) ?? 'large-circles';
  const { themeData, themeName } = useTheme(SwatchCollectionTheme(props.layoutStyle));

  let swatchImgClasses = '';
  let swatchesGap = '';
  let swatchWidth = '';

  switch (swatchStyle) {
    case 'small-circles':
      swatchImgClasses =
        'h-[64px] ml:h-[86px] w-[64px] ml:w-[86px] rounded-full [&_img]:rounded-full';
      swatchWidth = 'w-[82px] ml:w-[86px] ';
      swatchesGap = classNames(
        'gap-y-m gap-x-[25px] ml:gap-x-[62px] ml:justify-start ml:pl-xxs justify-evenly',
        themeName === 'rba' ? 'ml:pl-m mt-m ml:mt-l mb-s ml:gap-y-l' : 'ml:gap-y-m ml:pl-0'
      );
      break;

    case 'large-circles':
      swatchImgClasses = 'h-xxl w-xxl ml:h-[160px] ml:w-[160px] rounded-full [&_img]:rounded-full';
      swatchWidth = 'w-xxl ml:w-[160px] ml:pl-0';
      swatchesGap = classNames(
        'gap-x-[52px] gap-y-m ml:gap-x-[38px] ml:justify-start justify-evenly ml:pl-0',
        themeName === 'rba' ? 'my-s' : ''
      );
      break;

    case 'square':
      swatchImgClasses = 'h-[156px] w-[156px] ml:h-[160px] ml:w-[160px]';
      swatchWidth = 'w-[156px] ml:w-[160px] ';
      swatchesGap = classNames(
        'gap-x-[15px] gap-y-m ml:justify-start justify-evenly',
        themeName === 'rba' ? 'mt-m ml:gap-x-l' : 'ml:gap-x-[43px]'
      );
      break;
  }

  return (
    <div>
      <Headline
        useTag="h3"
        classes={themeData.classes.swatchTitle}
        fields={{
          headlineText: props.fields?.swatchCollection?.fields.swatchCollectionName ?? {
            value: '',
          },
        }}
      />

      <BodyCopy
        classes={themeData.classes.swatchDescription}
        fields={{
          body: props.fields?.swatchCollection?.fields.swatchCollectionDescription ?? { value: '' },
        }}
      />

      <div className={classNames('flex flex-wrap [&>*:last-child]:justify-start', swatchesGap)}>
        {props.fields?.swatchCollection?.fields.swatches.map(
          (swatch: Feature.EnterpriseWeb.Enterprise.Elements.Swatches.Swatch, index: number) => {
            return (
              <div key={index} className={classNames(swatchWidth, 'flex flex-col')}>
                <div className={classNames(swatchImgClasses, 'mx-auto mb-xxs')}>
                  <ImageWrapper imageLayout="responsive" image={swatch.fields.swatchImage} />
                </div>
                <Headline
                  useTag="h4"
                  classes={themeData.classes.swatchLabel}
                  fields={{
                    headlineText: swatch.fields.swatchName ?? {
                      value: '',
                    },
                  }}
                />
              </div>
            );
          }
        )}
      </div>
      <RichTextWrapper
        classes={themeData.classes.swatchFooterCopy}
        field={props.fields?.swatchCollection?.fields.swatchCollectionFooterCopy ?? { value: '' }}
      />
    </div>
  );
};

export default SwatchCollection;
