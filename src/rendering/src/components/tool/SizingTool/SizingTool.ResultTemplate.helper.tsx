import { Result } from '@coveo/headless';
import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import { SizingToolProps } from 'components/tool/SizingTool/SizingTool';
import { extractURLParts } from 'lib/coveo';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { Headline } from 'src/helpers/Headline';
import { ImagePrimary } from 'src/helpers/Media';
import { Subheadline } from 'src/helpers/Subheadline';

interface RenderingFields {
  headline: Foundation.EnterpriseWeb.Enterprise.FieldSets.Headline;
  subheadline: Foundation.EnterpriseWeb.Enterprise.FieldSets.Subheadline;
  eyebrow: Foundation.EnterpriseWeb.Enterprise.FieldSets.Eyebrow;
  cta: Foundation.EnterpriseWeb.Enterprise.FieldSets.Cta1 &
    Foundation.EnterpriseWeb.Enterprise.FieldSets.Cta2;
  productImage: {
    fields: {
      primaryImage: ImageField;
      primaryImageMobile: ImageField;
      primaryImageCaption: Field<string>;
    };
  };
}

const SizingToolTemplate = (props: SizingToolProps) => {
  const fieldsToInclude = [
    'ew_productname',
    'ew_productid',
    'ew_productdimensions',
    'ew_configurationname',
    'ew_productdetailpagelink',
    'ew_sizingdocumentspagelink',
    'ew_productimage',
    'ew_productimage_alt',
    'ew_productimage_height',
    'ew_productimage_width',
    'ew_productseries',
  ];

  const getRenderingFields = (_result: Result, props: SizingToolProps) => {
    const getImageFields = () => ({
      value: {
        src: _result.raw.ew_productimage,
        alt: _result.raw.ew_productimage_alt,
        width: _result.raw.ew_productimage_width || 324,
        height: _result.raw.ew_productimage_height || 201,
      },
    });

    const eyebrowText = Array.isArray(_result.raw.ew_productseries)
      ? _result.raw.ew_productseries[0]
      : '';

    return {
      headline: {
        fields: {
          headlineText: {
            value: _result.raw.ew_productname,
          },
        },
      },
      subheadline: {
        fields: {
          subheadlineText: {
            value: _result.raw.ew_configurationname,
          },
        },
      },
      eyebrow: {
        fields: {
          eyebrowText: {
            value: eyebrowText,
          },
        },
      },
      cta: {
        fields: {
          cta1Link: {
            value:
              _result.raw.ew_productdetailpagelink !== undefined
                ? {
                    ...extractURLParts(_result.raw.ew_productdetailpagelink as string),
                    title: props.fields?.productDetailsPageCTAText.value,
                    text: props.fields?.productDetailsPageCTAText.value,
                  }
                : {},
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
                value: 'primary',
              },
            },
          },
          cta2Link: {
            value:
              _result.raw.ew_sizingdocumentspagelink !== undefined
                ? {
                    ...extractURLParts(_result.raw.ew_sizingdocumentspagelink as string),
                    title: props.fields?.sizingDocumentsCTAText.value,
                    text: props.fields?.sizingDocumentsCTAText.value,
                  }
                : {},
          },
          cta2Icon: {
            fields: {
              Value: {
                value: '',
              },
            },
          },
          cta2Style: {
            fields: {
              Value: {
                value: 'link',
              },
            },
          },
        },
      },
      productImage: {
        fields: {
          primaryImage: getImageFields(),
          primaryImageMobile: getImageFields(),
          primaryImageCaption: {
            value: '',
          },
        },
      },
    };
  };

  return {
    priority: 1,
    conditions: [],
    fields: ['sc_templateid', ...fieldsToInclude],
    content: (result: Result) => {
      const renderingFields = getRenderingFields(result, props) as unknown as RenderingFields;
      return (
        <li
          key={result.uniqueId}
          className={classNames(
            'col-span-12 flex h-full flex-col border border-gray p-s',
            props.fields.facets.length > 0 ? 'ml:col-span-4' : 'ml:col-span-3'
          )}
        >
          <Eyebrow
            classes="font-sans uppercase text-small ml:text-xxs font-heavy text-dark-gray mb-xxs"
            {...renderingFields.eyebrow}
          />
          <Headline
            classes="font-sans font-heavy text-sm-xs ml:text-xs mb-xxs"
            {...renderingFields.headline}
          />
          <Subheadline
            classes="!font-serif text-small font-regular mb-s"
            {...renderingFields.subheadline}
          />

          <ImagePrimary
            additionalDesktopClasses="w-fit mx-auto mb-s"
            additionalMobileClasses="w-fit mx-auto mb-s"
            imageLayout="intrinsic"
            {...renderingFields.productImage}
          />
          <ButtonGroup
            classes={{
              wrapper:
                'flex flex-col md:flex-col items-center justify-center md:space-x-0 md:justify-center mb-0 gap-y-s mt-auto',
              cta1Classes: 'mr-0',
              cta2Classes:
                'ml-0 !font-serif text-small !font-regular text-darkprimary hover:decoration-darkprimary',
            }}
            {...renderingFields.cta}
          />
        </li>
      );
    },
  };
};

export default SizingToolTemplate;
