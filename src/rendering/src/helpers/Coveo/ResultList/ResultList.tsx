import { Result, ResultList as HeadlessResultList, ResultTemplatesManager } from '@coveo/headless';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import ModalWrapper from 'src/helpers/ModalWrapper/ModalWrapper';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { LayoutType } from 'lib/coveo';
import { SliderRefType, SliderType } from 'src/helpers/SliderWrapper/SliderWrapper';

interface ResultListProps {
  controller: HeadlessResultList;
  resultTemplatesManager: ResultTemplatesManager<(result: Result) => JSX.Element>;
  display?: LayoutType | 'raw';
  columnTitles?: string[];
  columnClasses?: string;
  gridLightbox: boolean;
  hasFacets: boolean;
}

export const ResultList: FunctionComponent<ResultListProps> = (props) => {
  const { display = 'list', controller, resultTemplatesManager } = props;
  const [state, setState] = useState(controller.state);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);

  const sliderRef = useRef<SliderType>();

  const sliderSettings = {
    initialSlide: state.results.length > 1 ? currentSlideIndex : 0,
    arrows: false,
    dots: false,
  };

  const openModal = (index: number) => {
    setIsLightboxVisible(true);
    setCurrentSlideIndex(index);
  };

  useEffect(
    () =>
      controller.subscribe(() => {
        setState(controller.state);
      }),
    [controller]
  );

  const renderResult = (result: Result) => {
    const template = resultTemplatesManager.selectTemplate(result);

    // We don't want to throwing error, as we already verifying null check. That's why commented it out
    // if (!template) throw new Error(`No result template provided for ${result.title}.`);

    return template && template(result);
  };

  const renderModalResult = (result: Result) => {
    const template = resultTemplatesManager.selectTemplate(result);

    if (!template) {
      throw new Error(`No result template provided for ${result.title}.`);
    }

    return (template as any).modalTemplate // eslint-disable-line @typescript-eslint/no-explicit-any
      ? (template as any).modalTemplate(result) // eslint-disable-line @typescript-eslint/no-explicit-any
      : template(result);
  };

  return display === 'raw' ? (
    <>{state.results.length > 0 && state.results.map((result) => renderResult(result))}</>
  ) : (
    <div>
      {/* Render columns if current layout is table. p.s. Document list has the table layout */}
      {display === 'table' && (
        <ul className="hidden ml:flex">
          {props.columnTitles?.map((title, index) => {
            return (
              <li
                key={index}
                className={classNames(index === 0 ? 'basis-4/5' : 'basis-1/5', props.columnClasses)}
              >
                {title}
              </li>
            );
          })}
        </ul>
      )}
      {display === 'grid' && (
        <>
          <div className="grid gap-s md:grid-cols-12 md:gap-s">
            {state.results.map((result, index) => {
              if (props.gridLightbox) {
                return (
                  <div
                    tabIndex={0}
                    key={result.uniqueId}
                    className={classNames(
                      'col-span-12 h-full',
                      props.hasFacets ? 'md:col-span-4' : 'md:col-span-3'
                    )}
                    onClick={() => {
                      openModal(index);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        openModal(index);
                      }
                    }}
                  >
                    {renderResult(result)}
                  </div>
                );
              } else {
                return (
                  <div
                    key={result.uniqueId}
                    className={classNames(
                      'col-span-12 h-full',
                      props.hasFacets ? 'md:col-span-4' : 'md:col-span-3'
                    )}
                  >
                    {renderResult(result)}
                  </div>
                );
              }
            })}
          </div>
          {props.gridLightbox && isLightboxVisible && (
            <ModalWrapper
              isModalOpen={isLightboxVisible}
              size="fluid"
              handleClose={() => setIsLightboxVisible(false)}
            >
              <div className="px-ml pb-ml pt-s">
                {state.results.length > 1 && (
                  <>
                    <SliderWrapper
                      sliderSettings={sliderSettings}
                      sliderRef={sliderRef as SliderRefType}
                    >
                      {state.results.map((result) => renderModalResult(result))}
                    </SliderWrapper>
                    <div className="mt-m flex items-center justify-between text-xxs md:justify-center">
                      <div
                        role="button"
                        className="ml-xxxs flex cursor-pointer items-center font-bold md:mr-xs"
                        onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
                      >
                        <SvgIcon className="mr-xs" icon="arrow-left" />
                        <span>Previous</span>
                      </div>
                      <div
                        role="button"
                        className="mr-xxxs flex cursor-pointer items-center font-bold md:ml-xs"
                        onClick={() => {
                          sliderRef.current && sliderRef.current.slickNext();
                        }}
                      >
                        <span>Next</span>
                        <SvgIcon className="ml-xs" icon="arrow-right" />
                      </div>
                    </div>
                  </>
                )}
                {state.results.length == 1 && <>{renderModalResult(state.results[0])}</>}
              </div>
            </ModalWrapper>
          )}
        </>
      )}
      {(display === 'list' || display === 'table') && (
        <ul>{state.results.length > 0 && state.results.map((result) => renderResult(result))}</ul>
      )}
    </div>
  );
};
