import { withDatasourceCheck, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import classNames from 'classnames';
import { getEnum } from 'lib/utils';
import { Component } from 'src/helpers/Component';
import { ComponentBackgroundVariants } from 'src/helpers/Component/Component';

export type FormWithCardPlaceholderProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Forms.FormWithCardPlaceholder.FormWithCardPlaceholder;
const FormWithCardPlaceholder = (props: FormWithCardPlaceholderProps) => {
  const { rendering, fields } = props;
  const style = getEnum<ComponentBackgroundVariants>(fields?.backgroundColor) ?? 'white';
  const isCardPresent = rendering?.placeholders?.card?.length > 0;
  const formColClasses = classNames(
    'col-span-12',
    isCardPresent
      ? ' max-md:border-b max-md:border-solid max-md:border-gray md:col-span-5'
      : ' md:col-span-4 md:col-start-5 '
  );
  return (
    <Component
      variant="full"
      gap="gap-x-0"
      padding="px-0"
      backgroundVariant={style}
      dataComponent="forms/formwithcardplaceholder"
      {...props}
    >
      <div className="col-span-12 py-l">
        <div className="grid grid-cols-2 gap-x-0 max-lg:px-m md:max-w-screen-lg md:grid-cols-12 lg:mx-auto">
          <div className={formColClasses}>
            <Placeholder name="form" rendering={rendering} />
          </div>
          {isCardPresent && (
            <div className="col-span-12  max-md:py-s md:col-span-6 md:col-start-7 md:my-2 md:border-l md:border-solid md:border-gray md:px-s [&>div]:!h-auto">
              <div className="flex">
                <Placeholder name="card" rendering={rendering} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<FormWithCardPlaceholderProps>(FormWithCardPlaceholder);
