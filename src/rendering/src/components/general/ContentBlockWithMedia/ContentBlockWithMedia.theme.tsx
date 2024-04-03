import { ThemeFile } from 'lib/context/ThemeContext';
import { ContentBlockWithMediaProps } from './ContentBlockWithMedia';
import classNames from 'classnames';
import { ButtonVariants } from 'src/helpers/Button';

const getImageContainerClasses = (props: ContentBlockWithMediaProps): string => {
  return props.fields?.primaryImage?.value?.src && props.fields?.secondaryImage?.value?.src
    ? classNames('grid grid-cols-1 md:grid-cols-2 md:gap-s')
    : classNames('col-span-12');
};

const getImageOuterContainerClasses = (props: ContentBlockWithMediaProps): string => {
  return props.fields?.primaryImage?.value?.src && !props.fields?.secondaryImage?.value?.src
    ? classNames(`mx-auto text-center`)
    : '';
};

const getSecondCTAPadding = (ctaStyle: ButtonVariants) => {
  return (ctaStyle === 'link' || ctaStyle === 'link-right-icon') && 'ml-xs md:ml-0 px-s';
};

export const ContentBlockWithMediaTheme = (
  props: ContentBlockWithMediaProps,
  cta2Style: ButtonVariants
): ThemeFile => {
  return {
    aw: {
      classes: {
        headingContainer: 'col-span-12',
        headlineContainer: 'text-s md:text-m font-heavy pb-xxs md:pb-s',
        topCopyContainer: 'pb-s font-regular font-serif text-theme-body',
        bodyContainer: 'col-span-12 font-regular font-serif mb-s text-theme-body',
        imageOuterContainer: classNames('mb-m', getImageOuterContainerClasses(props)),
        imageContainer: getImageContainerClasses(props),
        captionContainer: 'mt-xxs italic text-left mb-s font-sans text-sm-xxs md:text-caption',
        contentWrapper: classNames('col-span-12', 'md:w-full', 'md:max-w-screen-lg', 'md:mx-auto'),
        buttonGroupClass: {
          wrapper: 'flex-col',
          cta1Classes: classNames('mb-6 md:mb-0'),
          cta2Classes: classNames(getSecondCTAPadding(cta2Style)),
          cta3Classes: 'mb-m md:mb-0',
        },
      },
    },
    rba: {
      classes: {
        headingContainer: 'col-span-12',
        headlineContainer: 'text-theme-text text-sm-m md:text-m font-medium mb-s',
        topCopyContainer: 'mb-s font-regular font-serif text-theme-body',
        bodyContainer: 'col-span-12 font-regular font-serif mb-s text-theme-body',
        imageOuterContainer: classNames('mb-s', getImageOuterContainerClasses(props)),
        imageContainer: getImageContainerClasses(props),
        captionContainer:
          'mt-xxs md:mt-xxxs border-primary border-l-2 pl-xxs text-left mb-s text-sm-xxs md:text-body',
      },
    },
  };
};
