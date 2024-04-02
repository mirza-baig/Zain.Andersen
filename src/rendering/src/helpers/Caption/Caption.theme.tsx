import classNames from 'classnames';
import { ThemeFile } from 'lib/context/ThemeContext';

export const CaptionTheme = (italic: boolean, isImageCaption: boolean): ThemeFile => {
  return {
    aw: {
      classes: {
        captionContainer: classNames(
          'text-dark-gray mt-xxs text-left mb-s font-regular [&_strong]:text-black ',
          italic ? 'italic' : '',
          isImageCaption
            ? 'font-sans text-sm-xxs md:text-caption'
            : 'font-serif text-sm-xxs text-body'
        ),
      },
    },
    rba: {
      classes: {
        captionContainer:
          'text-dark-gray mt-xxs md:mt-xxxs border-primary border-l-3 pl-xxs text-left mb-s text-sm-xxs md:text-body font-regular [&_strong]:text-black ',
      },
    },
  };
};
