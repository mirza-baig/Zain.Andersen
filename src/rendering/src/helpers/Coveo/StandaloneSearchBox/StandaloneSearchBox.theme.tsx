// Lib
import { ThemeFile } from 'lib/context/ThemeContext';

export const StandaloneSearchBoxTheme: ThemeFile = {
  aw: {
    classes: {
      standaloneSearchBoxContainer: 'w-full ml:max-w-[996px] bg-white mx-auto my-xs relative',
      standaloneSearchBoxWrapper:
        'w-full flex ml:flex-row-reverse items-center justify-center p-xxs ml:p-0 border border-gray ml:border-none',
      searchBox: 'flex items-center w-full ml-s ml:ml-0 ml:p-xs  ml:border ml:border-dark-gray',
      searchBoxInput: 'w-full font-sans text-small ml:text-s text-dark-gray outline-0',
      closeIconWrapper: 'text-primary cursor-pointer',
      searchIconWrapper: 'ml:p-[17px] ml:border ml:border-l-0 ml:rounded-[2px] cursor-pointer',
      omniResultsWrapper:
        'bg-white pt-xs pb-s px-xs border border-gray border-t-0 font-sans text-small text-dark-gray absolute w-full',
      suggestionsWrapper: '',
      suggestionItem: 'cursor-pointer py-[2px] break-words',
      instantResultsTitle: 'font-demi text-black mt-xs mb-xxs',
      instantResultsWrapper: '',
    },
  },
  rba: {
    classes: {
      standaloneFocusedClasses: '',
      standaloneSearchBoxContainer:
        'w-full ml:max-w-[996px] mx-auto my-xs bg-white rounded-[20px] relative z-10',
      standaloneSearchBoxWrapper:
        'w-full flex items-center justify-center rounded-[100px] px-xs py-xxs standaloneSearchBoxWrapper z-10',
      searchBox: 'flex items-center w-full ml-xxs z-10',
      searchBoxInput: 'w-full text-xxs outline-0 z-10',
      closeIconWrapper: 'cursor-pointer closeIconWrapper z-10',
      searchIconWrapper: 'cursor-pointer z-10',
      omniResultsWrapper:
        'bg-white pt-xs pb-m px-s text-xxs text-dark-gray absolute w-full omniResultsWrapper left-0 top-0 shadow-[0_4px_14px_3px_rgba(0,0,0,0.1)] rounded-2xl pt-[40px]',
      suggestionsWrapper: '',
      suggestionItem: 'cursor-pointer py-xxxs break-words',
      instantResultsTitle: 'font-bold text-black mt-xs mb-xxs',
      instantResultsWrapper: '',
    },
  },
};
