import { ComponentRendering, Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Component } from 'src/helpers/Component';
import { Headline } from 'src/helpers/Headline';
import { getEnum } from 'lib/utils';
import classNames from 'classnames';
import { MediaPrimary } from 'src/helpers/Media';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { ComponentWrapperProps } from 'src/helpers/Component/Component';

export type FormContainerProps = Feature.EnterpriseWeb.Enterprise.Components.Forms.FormContainer & {
  rendering: ComponentRendering;
};

export type WidthStatus = 'one-third' | 'half' | '';
export type leftSectionStatus = 'top' | 'bottom' | 'middle';
export type rightSectionStatus = 'middle';
export type MobileWidthStatus = 'top' | 'bottom';

const FormContainer = (props: FormContainerProps): JSX.Element => {
  if (!props.fields) {
    return <></>;
  }

  const containerVariants: Record<ComponentWrapperProps['variant'], string> = {
    full: 'grid grid-cols-12',
    lg: 'grid-rows-auto grid grid-cols-12 gap-y-0 md:max-w-screen-lg md:grid-flow-row-dense md:grid-cols-12 md:gap-s md:px-m lg:mx-auto',
  };

  const leftColSpan: Record<WidthStatus, string> = {
    'one-third': 'col-span-12 ml:col-span-4 ml:-mr-s',
    half: 'col-span-12 ml:col-span-6 ml:-mr-s',
    '': 'col-span-12 ml:col-span-12 px-m',
  };

  const rightColSpan: Record<WidthStatus, string> = {
    'one-third': 'col-span-12 ml:col-span-8 pt-m ml:pt-0 ml:grid ml:grid-cols-6 ml:gap-s',
    half: 'col-span-12 ml:col-span-6 pt-m ml:pt-0 ml:grid ml:grid-cols-6 ml:gap-s',
    '': 'col-span-12 ml:col-span-12 px-m',
  };

  const leftSectionAlignmentMobile: Record<MobileWidthStatus, string> = {
    top: 'order-first ml:order-none',
    bottom: 'order-last ml:order-none',
  };

  const leftSectionAlignment: Record<leftSectionStatus, string> = {
    top: 'flex flex-col justify-start',
    bottom: 'flex flex-col justify-end',
    middle: 'flex flex-col justify-center',
  };

  const rightSectionAlignment: Record<rightSectionStatus, string> = {
    middle: 'flex flex-col justify-center',
  };

  const widthDimension = getEnum<string>(props?.fields?.width);
  const headlineText = props?.fields.headlineText.value;
  const headlineLevel = getEnum<string>(props?.fields.headlineLevel);
  const richTextContent = props?.fields?.body.value;
  const leftSectionBackground = getEnum<string>(props?.fields.leftSectionBackground);
  const rightSectionBackground = getEnum<string>(props?.fields.rightSectionBackground);
  const containerWidth = props?.fields?.edgeToEdgeContainer?.value === true ? 'full' : 'lg';
  const displayImage = props?.fields?.primaryImage?.value?.src;

  return (
    <>
      <Component
        sectionWrapperClasses="-ml-m"
        variant="full"
        backgroundVariant={
          containerWidth !== 'full' &&
          leftSectionBackground === 'gray' &&
          rightSectionBackground === 'gray'
            ? 'gray'
            : ''
        }
        dataComponent="forms/formcontainer"
        {...props}
      >
        <div className="col-span-12 -mr-m">
          <div className={classNames(containerVariants[containerWidth])}>
            {/* Left section */}
            <div
              className={classNames(
                leftColSpan[getEnum<WidthStatus>(props?.fields?.width) || ''],
                leftSectionBackground === 'gray' ? 'bg-light-gray' : 'bg-white',
                leftSectionAlignment[
                  getEnum<leftSectionStatus>(props?.fields?.leftSectionAlignment) || 'top'
                ],
                leftSectionAlignmentMobile[
                  getEnum<MobileWidthStatus>(props?.fields?.leftSectionAlignmentMobile) || 'top'
                ]
              )}
            >
              <div
                className={classNames(
                  richTextContent && 'py-s',
                  containerWidth === 'full' && headlineText && 'px-m',
                  widthDimension === 'half' && headlineText && 'px-m',
                  widthDimension === 'one-third' && headlineText && 'px-m'
                )}
              >
                <Headline defaultTag={headlineLevel} {...props} />
                <RichTextWrapper
                  classes="-mt-xxs mb-s text-body font-regular text-dark-gray"
                  field={props?.fields?.body}
                />
              </div>
              {displayImage && (
                <div className="h-full">
                  <MediaPrimary
                    {...props}
                    imageLayout="responsive"
                    additionalDesktopClasses="w-full h-full"
                    additionalMobileClasses="max-ml:h-[376px]"
                  />
                </div>
              )}
            </div>
            {/* Right section */}
            <div
              className={classNames(
                rightColSpan[getEnum<WidthStatus>(props?.fields?.width) || ''],
                rightSectionAlignment,
                rightSectionBackground === 'gray' ? 'bg-light-gray' : 'bg-white',
                '-mt-s ml:mt-0'
              )}
            >
              <div className="col-span-1"></div>
              <div
                className={
                  props?.fields?.width === null
                    ? `ml:w-full`
                    : `col-span-5 py-s px-s ml:w-[80%] ml:px-0`
                }
              >
                <Placeholder name="form" rendering={props.rendering} />
              </div>
            </div>
          </div>
        </div>
      </Component>
    </>
  );
};
export default FormContainer;
