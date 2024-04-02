// Global
import { useTheme } from 'src/lib/context/ThemeContext';
import { AttributeRendererProps } from 'src/lib/renoworks';

// Components
import { RadioAttributeViewModel } from '../js/designtool';
import { RadioAttributeTheme, RadioAttributeThemeSubType } from './RadioAttribute.theme';

const RadioAttribute = ({
  props,
  onUpdateOption,
}: AttributeRendererProps<RadioAttributeViewModel>) => {
  const { themeData } = useTheme(RadioAttributeTheme());
  const theme = (themeData as RadioAttributeThemeSubType).classes;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionClicked = (option: any, collection?: any[]) => {
    onUpdateOption && onUpdateOption(option, collection);
  };

  return (
    <div className={theme.attributeOption}>
      {props.description && <p className={theme.copy}>{props.description}</p>}
      <div className={theme.radio}>
        <div className={theme.radioContainer}>
          <ul className={theme.radioList}>
            {props.options.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (option: any, index: number) => (
                <li className={theme.radioListItem} key={index}>
                  <button
                    className={theme.radioListLabel}
                    onClick={() => optionClicked(option, props.options)}
                  >
                    <span
                      className={
                        theme.radioButton +
                        (option.isSelected || option.isClicked
                          ? theme.radioSelected
                          : theme.radioUnselected)
                      }
                    >
                      <small className={theme.radioButtonIcon}></small>
                    </span>
                    <span className={theme.radioText}>
                      <span className={theme.radioName}>{option.title}</span>
                      <span className={theme.radioDesc}>{option.desc}</span>
                    </span>
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      {props.note && <p className={theme.disclaimer}>{props.note}</p>}
    </div>
  );
};

RadioAttribute.nameString = 'RadioAttribute';

export default RadioAttribute;
