import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'lib/context/ThemeContext';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { ImagePrimary } from 'src/helpers/Media';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { FavoriteProductsTheme } from './FavoriteProducts.theme';
import { ReactElement } from 'react';

export type FavoriteProductsProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.Listing.Favorites.FavoriteProducts;

export const NoResults = ({ fields }: FavoriteProductsProps): ReactElement => {
  const { themeData } = useTheme(FavoriteProductsTheme);
  return (
    <>
      <div>
        <div>
          {fields?.noResultsHeadline && fields?.noResultsHeadline?.value && (
            <div className="font-sans text-m font-medium">
              <Text field={{ value: fields?.noResultsHeadline?.value }} />
            </div>
          )}
          {fields?.noResultsBodyCopy && fields?.noResultsBodyCopy?.value && (
            <RichTextWrapper
              field={{ value: fields?.noResultsBodyCopy?.value }}
              className="mt-[20px]"
            />
          )}
        </div>
        <div className="mt-m grid grid-cols-1 gap-4 ml:grid-cols-2">
          <div>
            {fields?.primaryImage && fields?.primaryImage?.value && (
              <ImagePrimary
                fields={{
                  primaryImageCaption: {
                    value: '',
                  },
                  primaryImage: { value: fields.primaryImage?.value },
                  primaryImageMobile: { value: fields.primaryImageMobile?.value },
                }}
              />
            )}
            {fields?.card1Headline && fields?.card1Headline?.value && (
              <div className="mt-s font-sans text-s font-heavy">
                <Text
                  classes={themeData.classes.cardHeadline}
                  field={{ value: fields.card1Headline?.value }}
                />
              </div>
            )}
            {fields?.card1Subheadline && fields?.card1Subheadline?.value && (
              <div className="font-sans text-xs font-medium">
                <Text
                  classes={themeData.classes.cardSubheadline}
                  field={{ value: fields.card1Subheadline?.value }}
                />
              </div>
            )}
            {fields?.cta1Link && fields?.cta1Link?.value.href && fields?.cta1Link?.value.text && (
              <SingleButton fields={fields} classes={{ wrapper: 'mt-m' }} />
            )}
          </div>

          <div>
            {fields?.secondaryImage && fields?.secondaryImage?.value && (
              <ImagePrimary
                fields={{
                  primaryImageCaption: {
                    value: '',
                  },
                  primaryImage: { value: fields.secondaryImage?.value },
                  primaryImageMobile: { value: fields.secondaryImageMobile?.value },
                }}
              />
            )}
            {fields?.card2Headline && fields?.card2Headline?.value && (
              <div className="mt-s font-sans text-s font-heavy">
                <Text
                  classes="font-sans text-s font-heavy"
                  field={{ value: fields.card2Headline?.value }}
                />
              </div>
            )}
            {fields?.card2Subheadline && fields?.card2Subheadline?.value && (
              <div className="font-sans text-xs font-medium">
                <Text field={{ value: fields.card2Subheadline?.value }} />
              </div>
            )}
            {fields?.cta2Link && fields?.cta2Link?.value.href && fields?.cta2Link?.value.text && (
              <SingleButton
                classes={{ wrapper: 'mt-m' }}
                fields={{
                  cta1Link: {
                    value: {
                      href: fields.cta2Link?.value?.href,
                      text: fields.cta2Link?.value?.text,
                      anchor: fields.cta2Link?.value?.anchor,
                      linktype: fields.cta2Link?.value?.linktype,
                      class: fields.cta2Link?.value?.class,
                      title: fields.cta2Link?.value?.title,
                      target: fields.cta2Link?.value?.target,
                      querystring: fields.cta2Link?.value?.querystring,
                      id: fields.cta2Link?.value?.id,
                    },
                  },
                  cta1ModalLinkText: {
                    value: '',
                  },
                  cta1AriaLabel: {
                    value: '',
                  },
                  cta1Style: {
                    id: fields.cta2Style?.id,
                    url: fields.cta2Style?.url,
                    name: fields.cta2Style?.name,
                    displayName: fields.cta2Style?.displayName,
                    fields: {
                      Value: {
                        value: fields.cta2Style?.fields?.Value?.value,
                      },
                    },
                    templateId: fields.cta2Style?.templateId,
                    templateName: fields.cta2Style?.templateName,
                  },
                  cta1Icon: {
                    id: fields.cta2Icon?.templateId,
                    url: fields.cta2Icon?.url,
                    name: fields.cta2Icon?.name,
                    displayName: fields.cta2Icon?.displayName,
                    fields: {
                      Value: {
                        value: fields.cta2Icon?.fields?.Value?.value,
                      },
                    },
                    templateId: fields.cta2Icon?.templateId,
                    templateName: fields.cta2Icon?.templateName,
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
