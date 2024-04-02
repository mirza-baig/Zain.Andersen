// Global
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import SvgIcon from 'src/helpers/SvgIcon/SvgIcon';
import { useTheme } from 'src/lib/context/ThemeContext';
import { AttributeRendererProps } from 'src/lib/renoworks';

// Components
import { SizingAttributeViewModel } from '../js/designtool';
import { SizingAttributeTheme, SizingAttributeThemeSubType } from './SizingAttribute.theme';

const SizingAttribute = ({
  props,
  onUpdateOption,
}: AttributeRendererProps<SizingAttributeViewModel>): JSX.Element => {
  const { themeData } = useTheme(SizingAttributeTheme());
  const theme = (themeData as SizingAttributeThemeSubType).classes;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formattedSize = (size: any) => {
    const parts = size.split(' ');

    if (parts.length === 1) {
      return size.replace('"', '<sup>"</sup>');
    }

    return parts[0] + ' <sup>' + parts[1] + '</sup>';
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionClicked = (option: any, collection?: any[]) => {
    onUpdateOption && onUpdateOption(option, collection);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const valueSelected = (collection: any, index: any) => {
    optionClicked(collection[index], collection);
  };

  return (
    <div className={theme.attributeOption}>
      <p className={theme.copy}>
        <Text field={props.sizingText} encode={false}></Text>
      </p>
      <div>
        <p className={theme.sizingName}>Width</p>
        <div className={theme.dropDownSelectList}>
          <select
            className={theme.dropDownSelect}
            onChange={(event) => valueSelected(props.widths, event.target.value)}
            value={props.widths.findIndex(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (option: any) => option.isSelected
            )}
          >
            {props.widths.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (option: any, index: number) => (
                <option value={index} key={index}>
                  {option.title}
                </option>
              )
            )}
          </select>
          <SvgIcon icon={'dropdown-arrow'} size="20" className={theme.dropDownSelectIcon}></SvgIcon>
        </div>
        <ul className={theme.sizingList}>
          {props.widths.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (option: any, index: number) => (
              <li className={theme.sizingListItem} key={index}>
                <button
                  className={
                    (option.isSelected || option.isClicked ? theme.selected : '') +
                    theme.sizingListItemButton
                  }
                  onClick={() => optionClicked(option, props.widths)}
                  dangerouslySetInnerHTML={{ __html: formattedSize(option.title) }}
                ></button>
              </li>
            )
          )}
        </ul>
      </div>

      <div>
        <p className={theme.sizingName}>Height*</p>
        <div className={theme.dropDownSelectList}>
          <select
            className={theme.dropDownSelect}
            onChange={(event) => valueSelected(props.heights, event.target.value)}
            value={props.heights.findIndex(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (option: any) => option.isSelected
            )}
          >
            {props.heights.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (option: any, index: number) => (
                <option value={index} key={index}>
                  {option.title}
                </option>
              )
            )}
          </select>
          <SvgIcon icon={'dropdown-arrow'} size="20" className={theme.dropDownSelectIcon}></SvgIcon>
        </div>
        <ul className={theme.sizingList}>
          {props.heights.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (option: any, index: number) => (
              <li className={theme.sizingListItem} key={index}>
                <button
                  className={
                    (option.isSelected || option.isClicked ? theme.selected : '') +
                    theme.sizingListItemButton
                  }
                  onClick={() => optionClicked(option, props.heights)}
                  dangerouslySetInnerHTML={{ __html: formattedSize(option.title) }}
                ></button>
              </li>
            )
          )}
        </ul>
      </div>
      <p className={theme.disclaimer}>*Showing height options for selected width</p>
      <p className={theme.disclaimer}>
        <Text field={props.customSizingText}></Text>
      </p>
    </div>
  );
};

SizingAttribute.nameString = 'SizingAttribute';

export default SizingAttribute;
