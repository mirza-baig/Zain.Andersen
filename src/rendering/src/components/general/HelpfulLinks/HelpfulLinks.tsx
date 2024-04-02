// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { HelpfulLinksTheme } from './HelpfulLinks.theme';
import { Headline } from 'src/helpers/Headline';
import { getHeadingLevel } from 'lib/utils';
import SingleButton from 'src/helpers/SingleButton/SingleButton';

export type HelpfulLinksProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.HelpfulLinks.HelpfulLinks;
const HelpfulLinks = (props: HelpfulLinksProps) => {
  const { themeData } = useTheme(HelpfulLinksTheme);
  const defaultTag = 'h2';
  const tag = getHeadingLevel(defaultTag, props?.fields?.headlineLevel);

  return (
    <Component variant="full" dataComponent="general/helpfullinks" {...props}>
      <div className={themeData.classes.container}>
        <Headline useTag={tag} classes={themeData.classes.headlineClass} {...props} />
        <div className={themeData.classes.wrapper}>
          {props.fields?.children?.map((_item: HelpfulLinksProps, i: number) => {
            return (
              <div key={i} className="mb-xxs md:mb-0">
                <SingleButton
                  classes={
                    (themeData.classes.linkClasses,
                    { cta1Classes: '!whitespace-pre-wrap !leading-ml !text-text-link' })
                  }
                  fields={{
                    cta1Link: _item?.fields?.ctaLink,
                    cta1AriaLabel: {
                      value: '',
                    },
                    cta1ModalLinkText: {
                      value: '',
                    },
                    cta1Style: {
                      id: '',
                      url: '',
                      name: 'Link',
                      displayName: 'Link',
                      fields: {
                        Value: {
                          value: 'link',
                        },
                      },
                      templateId: '',
                      templateName: 'Enum',
                    },
                    cta1Icon: {
                      id: '',
                      url: '',
                      name: 'Arrow',
                      displayName: 'Arrow',
                      fields: {
                        Value: {
                          value: 'arrow',
                        },
                      },
                      templateId: '',
                      templateName: 'Enum',
                    },
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<HelpfulLinksProps>(HelpfulLinks);
