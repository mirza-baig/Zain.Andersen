import { withDatasourceCheck, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import classNames from 'classnames';
import { getEnum } from 'lib/utils';
import { Component } from 'src/helpers/Component';
import { ComponentBackgroundVariants } from 'src/helpers/Component/Component';

export type FormWithContentBlockProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Forms.FormWithContentBlock.FormWithContentBlock;

export type FormWidth = 'one-third' | 'half';
export type FormAlignments = 'left' | 'right';

const FormWithContentBlock = (props: FormWithContentBlockProps) => {
  const { rendering, fields } = props;

  if (!props?.fields) {
    return <></>;
  }

  const isContentBlockPresent = rendering?.placeholders?.contentBlock?.length > 0;
  const containerAlignment = getEnum<FormWidth>(fields?.containerAlignment);
  const formAlignment = getEnum<FormAlignments>(fields?.formAlignment);
  const setBackgroundColor =
    getEnum<ComponentBackgroundVariants>(fields?.backgroundColor) ?? 'white';

  return (
    <Component
      variant="full"
      gap="gap-x-0"
      padding="px-0"
      backgroundVariant={
        isContentBlockPresent && containerAlignment === 'half' && setBackgroundColor === 'gray'
          ? 'gray'
          : !isContentBlockPresent && setBackgroundColor === 'gray'
          ? 'gray'
          : ''
      }
      dataComponent="forms/formwithcontentblock"
      {...props}
    >
      {isContentBlockPresent && (
        <div
          className={classNames(
            'col-span-12 flex py-l ml:grid ml:!py-m',
            containerAlignment === 'one-third' && '-!mx-l md:grid-cols-12 md:gap-s lg:mx-auto',
            containerAlignment === 'one-third' && formAlignment === 'right' && 'flex-col-reverse',
            containerAlignment === 'one-third' && formAlignment === 'left' && 'flex-col',
            containerAlignment === 'half' &&
              '!flex-col gap-x-0 !px-ml max-lg:px-m max-md:px-0 md:max-w-screen-lg ml:grid-cols-12 lg:mx-auto'
          )}
        >
          {/* Left section */}
          <div
            className={classNames(
              'col-span-12',
              containerAlignment === 'one-third' &&
                formAlignment === 'right' &&
                '!py-m ml:col-span-4 ml:px-l',
              containerAlignment === 'one-third' &&
                formAlignment === 'left' &&
                '!px-m !py-ml ml:col-span-6 ml:!col-start-2',
              containerAlignment === 'one-third' &&
                formAlignment === 'right' &&
                setBackgroundColor === 'gray' &&
                'bg-light-gray',
              containerAlignment === 'half' && 'pb-m ml:col-span-5 ml:px-m ml:pb-0',
              containerAlignment === 'half' &&
                isContentBlockPresent &&
                'border-b border-solid border-gray ml:border-none'
            )}
          >
            {/* If containerAlignment === 'half' render form only on left side else render contentBlock */}
            {/* If containerAlignment === 'one-third' => formAlignment === 'left' => render form on left side */}
            <Placeholder
              name={
                containerAlignment === 'one-third' && formAlignment === 'left'
                  ? 'form'
                  : containerAlignment === 'half'
                  ? 'form'
                  : 'contentBlock'
              }
              stepperBackground={setBackgroundColor}
              rendering={rendering}
            />
          </div>

          {/* Right section */}
          <div
            className={classNames(
              'col-span-12',
              containerAlignment === 'one-third' &&
                formAlignment === 'right' &&
                '!px-m py-l ml:col-span-6 ml:!col-start-6 ml:!px-0',
              containerAlignment === 'one-third' &&
                formAlignment === 'left' &&
                'ml:col-span-4 ml:!col-start-9 ml:px-l',
              containerAlignment === 'half' &&
                '-mx-m pt-m md:col-span-6 md:col-start-7 ml:mx-m ml:border-l ml:border-solid ml:border-gray ml:pt-0',
              containerAlignment === 'one-third' &&
                formAlignment === 'left' &&
                setBackgroundColor === 'gray' &&
                'bg-light-gray'
            )}
          >
            {/* If containerAlignment === 'half' render contentBlock only right side else render form */}
            {/* If containerAlignment === 'one-third' => formAlignment === 'right' => render form on right side */}
            <Placeholder
              name={
                containerAlignment === 'one-third' && formAlignment === 'right'
                  ? 'form'
                  : 'contentBlock'
              }
              rendering={rendering}
              stepperBackground={setBackgroundColor}
            />
          </div>
        </div>
      )}
      {/* If isContentBlockPresent is not present, then render form only */}
      {!isContentBlockPresent && (
        <div className={classNames('col-span-12 grid !py-m !px-l ml:mx-auto ml:max-w-screen-md')}>
          <Placeholder
            name={containerAlignment ? 'form' : 'contentBlock'}
            rendering={rendering}
            stepperBackground={setBackgroundColor}
          />
        </div>
      )}
    </Component>
  );
};

export default withDatasourceCheck()<FormWithContentBlockProps>(FormWithContentBlock);
