import { SearchBox as HeadlessSearchBox } from '@coveo/headless';
import { useTheme } from 'lib/context/ThemeContext';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { FunctionComponent, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Spinner } from 'src/helpers/Spinner';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

type SearchBoxProps = {
  controller: HeadlessSearchBox;
  searchBoxClasses?: {
    [property: string]: string;
  };
  placeholderText: Field<string>;
};

export const SearchBox: FunctionComponent<SearchBoxProps> = (props) => {
  const { controller, searchBoxClasses, placeholderText } = props;
  const { currentScreenWidth } = useCurrentScreenType();
  const [state, setState] = useState(controller.state);
  const [focused, setFocused] = useState(false);

  const { themeName } = useTheme();

  useEffect(() => controller.subscribe(() => setState(controller.state)), [controller]);

  return (
    <div className={searchBoxClasses?.searchBoxWrapper}>
      <div
        className={twMerge(
          searchBoxClasses?.searchBoxContainer,
          focused && state.suggestions.length > 0 && searchBoxClasses?.searchBoxContainerFocused
        )}
      >
        <div
          className={twMerge(
            searchBoxClasses?.inputWrapper,
            focused && state.suggestions.length > 0 && searchBoxClasses?.inputWrapperFocused
          )}
        >
          <div className={searchBoxClasses?.searchIconWrapper} onClick={() => controller.submit()}>
            {state.isLoading ? (
              <Spinner
                size={themeName === 'aw' ? 18 : currentScreenWidth <= getBreakpoint('ml') ? 18 : 22}
              />
            ) : (
              // {/* We need to use static svg as using dynamic-import functionality causes flickering issues as coveo updates the state of the searchbox on keydown */}
              <svg
                role="img"
                width={
                  themeName === 'aw'
                    ? '20'
                    : currentScreenWidth <= getBreakpoint('ml')
                    ? '16'
                    : '24'
                }
                height={
                  themeName === 'aw'
                    ? '20'
                    : currentScreenWidth <= getBreakpoint('ml')
                    ? '16'
                    : '24'
                }
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Search Icon</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5274 4.57599C13.7069 6.75552 13.7069 10.2892 11.5274 12.4688C9.34789 14.6483 5.81418 14.6483 3.63465 12.4688C1.45512 10.2892 1.45512 6.75552 3.63465 4.57599C5.81418 2.39646 9.34789 2.39646 11.5274 4.57599ZM13.6019 13.1305C15.8828 10.158 15.6628 5.8829 12.9416 3.16178C9.98106 0.201201 5.18101 0.201201 2.22043 3.16178C-0.740144 6.12236 -0.740144 10.9224 2.22043 13.883C4.94106 16.6036 9.21506 16.8241 12.1875 14.5445L16.7017 19.0587L18.1159 17.6445L13.6019 13.1305Z"
                  fill="currentColor"
                ></path>
              </svg>
            )}
          </div>

          <input
            value={state.value}
            onChange={(e) => controller.updateText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                controller.submit();
              } else if (e.key === 'Escape') {
                (e.target as HTMLInputElement).blur();
              }
            }}
            onFocus={() => setFocused(true)}
            onBlur={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setFocused(false);
            }}
            placeholder={placeholderText.value}
            className={searchBoxClasses?.searchBoxInput}
            aria-label="searchbox"
          />
          {state.value && (
            <div
              className={searchBoxClasses?.closeIconWrapper}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                controller.clear();
                controller.submit();
              }}
            >
              {/* We need to use static svg as using dynamic-import functionality causes flickering issues as coveo updates the state of the searchbox on keydown */}
              <svg
                role="img"
                width={themeName === 'aw' ? '20' : '12'}
                height={themeName === 'aw' ? '20' : '12'}
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Close Icon</title>
                <path
                  d="M12 1.56941L10.7914 0.36084L6 5.15227L1.20857 0.36084L0 1.56941L4.79143 6.36084L0 11.1523L1.20857 12.3608L6 7.56941L10.7914 12.3608L12 11.1523L7.20857 6.36084L12 1.56941Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          )}
        </div>
        {focused && state.suggestions.length > 0 && (
          <ul className={searchBoxClasses?.suggestionsList}>
            {state.suggestions.map((suggestion) => {
              return (
                <li
                  key={suggestion.rawValue}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => controller.selectSuggestion(suggestion.rawValue)}
                  dangerouslySetInnerHTML={{ __html: suggestion.highlightedValue }}
                  className={searchBoxClasses?.suggestionItem}
                ></li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
