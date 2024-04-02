/* eslint-disable @typescript-eslint/no-explicit-any */

// Global
import { PerfectMatchProps } from 'src/components/tool/PerfectMatch/PerfectMatch';
import {
  GetStepOptions,
  GetUniqueHeightsForResultsAndOptionAndWidth,
  GetUniqueWidthsForResultsAndOption,
  SizeAndPanelSelected,
  SizeAndPanelSetupNext,
  SizeAndPanelsClearOtherSelections,
} from '../perfect-match-mappers';
import { useTheme } from 'lib/context/ThemeContext';
import {
  PerfectMatchTheme,
  PerfectMatchThemeSubType,
} from 'components/tool/PerfectMatch/PerfectMatch.theme';
import { Image, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useRouter } from 'next/router';

const DoorSizeAndPanels = (props: PerfectMatchProps) => {
  const { themeData } = useTheme(PerfectMatchTheme());
  const theme = (themeData as PerfectMatchThemeSubType).classes;
  const options = GetStepOptions(props);
  const router = useRouter();

  function handleWidthChange(e: any, option: any, results: any) {
    const _option = e.target.parentNode.parentNode.parentNode.parentNode;
    SizeAndPanelsClearOtherSelections(_option, theme.panelSelected);
    _option.querySelector('.not-sure-checkbox').checked = false;
    const _height = _option.querySelector('.height-select');
    const selectedHeight = _height.value;
    _height.disabled = 'disabled';
    _height.innerText = null;
    const opt = document.createElement('option');
    opt.innerHTML = 'Select';
    _height.appendChild(opt);
    const selectedWidth = e.target.value;

    if (selectedWidth !== '') {
      if (selectedWidth === 'custom') {
        _option.className += theme.panelSelected;
        SizeAndPanelSetupNext(_option);
        return;
      }

      const heights = GetUniqueHeightsForResultsAndOptionAndWidth(
        results,
        option.id,
        selectedWidth
      );

      heights.map((height: any) => {
        const _opt = document.createElement('option');
        _opt.value = height;
        _opt.innerHTML = height + '"';
        _height.appendChild(_opt);
      });
      _height.removeAttribute('disabled');

      if (heights.indexOf(selectedHeight) !== -1) {
        _height.value = selectedHeight;
        _option.classList.add('selected');
        SizeAndPanelSetupNext(_option);
      }
    }
  }

  function handleHeightChange(e: any) {
    const _option = e.target.parentNode.parentNode.parentNode.parentNode;
    SizeAndPanelsClearOtherSelections(_option, theme.panelSelected);
    const selectedHeight = e.target.value;
    if (selectedHeight !== '') {
      _option.className += theme.panelSelected;
      SizeAndPanelSetupNext(_option);
    }
  }

  function notSureChange(e: any) {
    const _option = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    SizeAndPanelsClearOtherSelections(_option, theme.panelSelected);
    _option.querySelector('.width-select').value = 'Select';
    const _height = _option.querySelector('.height-select');
    _height.value = 'Select';
    _height.disabled = 'disabled';

    if (e.target.checked === true) {
      _option.className += theme.panelSelected;
      SizeAndPanelSetupNext(_option);
    }
  }

  function sizeAndPanelsNextClick(e: any, props: any, router: any) {
    const _option = e.target.parentNode.querySelector('.option.selected');
    const id = _option.dataset.id;
    const selectedOption = props.moduleData.options.filter(function (option: any) {
      return option.id == id;
    })[0];

    if (_option.classList.contains('is-size')) {
      let width = _option.querySelector('.width-select').value;
      let height = _option.querySelector('.height-select').value;
      const notSure = _option.querySelector('.not-sure-checkbox').checked;

      if (notSure) {
        width = 'not-sure';
        height = '';
      }
      SizeAndPanelSelected(props, [selectedOption.id, width + 'x' + height]);
    } else {
      SizeAndPanelSelected(props, [selectedOption.id]);
    }

    let url = router.asPath;
    url += '&s:doorSizeAndPanel=' + props.moduleData.filters.doorSizeAndPanels[0];
    if (props.moduleData.filters.doorSizeAndPanels.length > 1) {
      url += ',' + props.moduleData.filters.doorSizeAndPanels[1];
    }

    router.push(
      url.replace('#cs=doorSizeAndPanels', '#cs=' + props.moduleData.steps[props.step].nextStep)
    );
  }

  function sizeAndPanelsOptionClick(e: any) {
    const _target = e.target.closest('.bouncyCard');

    if (_target.classList.contains('is-size')) {
      return;
    }

    SizeAndPanelsClearOtherSelections(_target, theme.panelSelected);
    _target.className += theme.panelSelected;
    SizeAndPanelSetupNext(_target);
  }

  return (
    <>
      <div className={theme.headingWrapper}>
        <h1 className={theme.stepHeading}>
          <Text field={props.moduleData.steps[props.step].heading}></Text>
        </h1>
        <div className={theme.rteStepCopy}>
          <RichText field={props.moduleData.steps[props.step].copy}></RichText>
        </div>
      </div>
      <div className={theme.contentContainer}>
        <div className={theme.stepSizeAndPanels}>
          <div className={theme.optionContainer}>
            {options.map((_option: any, i: number) => {
              if (
                props.moduleData.filters?.productStyle ===
                  props.moduleData.optionIds.doorStyle.Hinged &&
                props.moduleData.panelOptionHingedIcons[_option.id]
              ) {
                _option.image = props.moduleData.panelOptionHingedIcons[_option.id];
              }

              const widths = GetUniqueWidthsForResultsAndOption(
                props.moduleData.results,
                _option.id
              );
              const hasWidths = widths.length > 1;

              return (
                <div
                  className={
                    hasWidths ? theme.sizeAndPanelsOption : theme.sizeAndPanelsOptionNoSize
                  }
                  key={'door_size_and_panel_option_' + i}
                  data-id={_option.id}
                  onClick={(e) => sizeAndPanelsOptionClick(e)}
                >
                  <div className={theme.top}>
                    <div className={theme.optionImage}>
                      <Image field={_option.image}></Image>
                    </div>
                    <div className={theme.optionHeading}>{_option.heading.value}</div>
                    <div className={hasWidths ? theme.optionSizes : theme.optionSizesDisplayNone}>
                      <div className={theme.widthDropdown}>
                        Width:&nbsp;
                        <select
                          className={theme.widthSelect}
                          onChange={(e) => handleWidthChange(e, _option, props.moduleData.results)}
                        >
                          <option>Select</option>
                          {widths.map((_width: any, x: number) => {
                            if (_width === 'not-sure') {
                              return <></>;
                            } else {
                              return (
                                <option value={_width} key={_option.id + '_option_' + x}>
                                  {_width}
                                </option>
                              );
                            }
                          })}
                        </select>
                      </div>
                      <div className={theme.heightDropdown}>
                        Height:&nbsp;
                        <select
                          className={theme.heightSelect}
                          disabled
                          onChange={(e) => handleHeightChange(e)}
                        >
                          <option>Select</option>
                        </select>
                      </div>
                      <div className="not-sure mt-[15px] text-left">
                        <label className={theme.notSureLabel}>
                          <input
                            type="checkbox"
                            className={theme.notSureCheckbox}
                            onChange={(e) => notSureChange(e)}
                          />
                          &nbsp;I don&apos;t know my size
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className={theme.sizeAndPanelsNext}
            data-action="Size and Panels"
            onClick={(e) => sizeAndPanelsNextClick(e, props, router)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default DoorSizeAndPanels;
