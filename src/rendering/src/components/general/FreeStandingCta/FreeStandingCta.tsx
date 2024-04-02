// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { withDatasourceCheck, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'lib/context/ThemeContext';
// Components
import { Component } from 'src/helpers/Component';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { FreeStandingCtaTheme } from './FreeStandingCta.theme';
import { getEnum } from 'lib/utils';
import { hashCode } from 'src/helpers/Component/Component';

export type FreeStandingCtaProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.General.FreeStandingCta.FreeStandingCta;
export type ComponentAlignment = 'left' | 'center';

const FreeStandingCta = (props: FreeStandingCtaProps): JSX.Element => {
  const linkField = props?.fields.cta1Link as LinkField;
  const alignment = getEnum<ComponentAlignment>(props.fields?.alignment) || 'left';
  const { themeData } = useTheme(FreeStandingCtaTheme(alignment));

  return (
    <Component
      variant="lg"
      dataComponent="general/freestandingcta"
      {...props}
      spacing={props.fields?.spacing}
    >
      <section
        className={themeData.classes.contentWrapper}
        id={props.fields?.sectionId?.value || `id${hashCode(props.rendering?.dataSource)}`}
      >
        <div className="mb-s flex items-start md:flex-row md:items-center md:space-x-4">
          {linkField.value.href && (
            <SingleButton {...props} classes={themeData.classes.sectionCta} />
          )}
        </div>
      </section>
    </Component>
  );
};

export default withDatasourceCheck()<FreeStandingCtaProps>(FreeStandingCta);
