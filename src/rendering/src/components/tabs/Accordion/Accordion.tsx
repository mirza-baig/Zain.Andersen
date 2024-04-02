// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { AccordionTheme } from './Accordion.theme';
import { Headline } from 'src/helpers/Headline';
import AccordionSection from './AccordionSection.helper';
import { RouteData } from '@sitecore-jss/sitecore-jss/layout';
import { ComponentProps } from 'lib/types/component-props';
import { hashCode } from 'src/helpers/Component/Component';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';

export type AccordionProps =
  Feature.EnterpriseWeb.Enterprise.Components.Tabs.Accordion.Accordion & {
    fields: {
      children: AccordionSectionProps[];
    };
  } & ComponentProps;

export type AccordionSectionProps = RouteData &
  Feature.EnterpriseWeb.Enterprise.Components.Tabs.Accordion.AccordionSection;
const Accordion = (props: AccordionProps) => {
  const { themeData } = useTheme(AccordionTheme);

  return (
    <section
      data-component="tabs/accordion"
      id={props.fields?.sectionId?.value || `id${hashCode(props.rendering?.dataSource)}`}
    >
      <div className="theme-white my-8">
        <Headline {...props} classes={themeData.classes.headline} />
        <RichTextWrapper field={props.fields?.body} classes={themeData.classes.bodyCopy} />
        {props?.fields?.children?.map((accordionSection: AccordionSectionProps, index: number) => {
          return <AccordionSection key={index} {...accordionSection} themeData={themeData} />;
        })}
      </div>
    </section>
  );
};

export default withDatasourceCheck()<AccordionProps>(Accordion);
