import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { Headline } from 'src/helpers/Headline';
import { Component } from 'src/helpers/Component';
import { BodyCopy } from 'src/helpers/BodyCopy';
import OrangeTriangle from 'src/helpers/SvgIcon/icons/icon--orange-triangle';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { Button } from 'src/helpers/Button';
import { ListHighlightAndCtaTheme } from './ListHighlightAndCta.theme';

export type ListHighlightAndCtaProps =
  Feature.EnterpriseWeb.Enterprise.Components.Listing.ListHighlightAndCta.ListHighlightAndCta;
export type ListHighlightAndCtaItemProps =
  Feature.EnterpriseWeb.Enterprise.Components.Listing.ListHighlightAndCta.ListHighlightAndCtaItem;

const ListHighlightAndCta = (props: ListHighlightAndCtaProps): JSX.Element => {
  const { themeData, themeName } = useTheme(ListHighlightAndCtaTheme());
  const sectionHeadline: Foundation.EnterpriseWeb.Enterprise.FieldSets.Headline = {
    fields: {
      headlineText: props.fields?.sectionHeadline,
      headlineLevel: props.fields?.sectionHeadlineLevel,
    },
  };
  const listItemStyle =
    props.fields?.listItemStyle && props.fields?.listItemStyle?.fields?.Value.value;

  return (
    <Component variant="lg" dataComponent="listing/listhighlightandcta" {...props}>
      <div className={themeData.classes.headlineBorder}>
        <div className="mt-4 flex md:mt-2">
          {themeName === 'aw' && (
            <div className="m-1 mt-[1px] flex">
              <OrangeTriangle></OrangeTriangle>
            </div>
          )}
          <Headline classes={themeData.classes.headlineClass} fields={sectionHeadline.fields} />
        </div>
      </div>

      {/* loop through children */}
      <div className="col-span-12 md:col-span-8">
        {props.fields?.children?.map((_item: ListHighlightAndCtaItemProps, i: number) => {
          if (_item.fields && listItemStyle === 'row-list') {
            _item.fields.cta1Link.value.text =
              _item.fields.headlineText.value !== ''
                ? _item.fields.headlineText.value
                : _item.fields.cta1Link.value.text;
          }
          const variantLinkRightIcon = {
            name: 'Link Right Icon',
            fields: {
              Value: {
                value: 'link-right-icon',
              },
            },
            id: '',
            url: '',
          };

          return (
            <div key={i} className={themeData.classes.listItemContainer}>
              <div className={themeData.classes.listItemHeadlineBorder}>
                <div>
                  {listItemStyle !== 'row-list' && (
                    <>
                      <Headline
                        classes={themeData.classes.contentClasses.listItemHeadlineClass}
                        fields={_item.fields}
                      />
                      <BodyCopy
                        fields={_item.fields}
                        classes={themeData.classes.contentClasses.body}
                      />
                    </>
                  )}

                  {listItemStyle === 'row-list' ? (
                    <Button
                      field={_item.fields?.cta1Link}
                      variant={variantLinkRightIcon}
                      icon={_item.fields?.cta1Icon}
                      classes={(themeData.classes.buttonGroupClassRightIcon, 'font-sans text-s')}
                    ></Button>
                  ) : (
                    <ButtonGroup
                      classes={themeData.classes.buttonGroupClass}
                      fields={_item.fields}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Component>
  );
};

export default withDatasourceCheck()(ListHighlightAndCta);
