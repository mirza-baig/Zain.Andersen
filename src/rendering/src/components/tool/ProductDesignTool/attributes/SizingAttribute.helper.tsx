// Global
import SvgIcon from 'src/helpers/SvgIcon/SvgIcon';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import { Link as LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { AttributeRendererProps, SizingAttributeViewModel } from 'lib/renoworks';
import { SizingAttributeTheme, SizingAttributeThemeSubType } from './SizingAttribute.theme';

const SizingAttribute = ({
  viewModel,
  onUpdateOption,
  props,
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
    <>
      {(props?.fields?.sizeChartsLink?.value?.href ||
        props?.fields?.customSizesLink?.value?.href) && (
        <ul className={theme.attributes.attributeMenuList}>
          {props?.fields?.sizeChartsLink?.value?.href && (
            <li className={theme.attributes.attributeMenuListItem}>
              <LinkField
                field={props?.fields?.sizeChartsLink}
                className={theme.attributes.attributeMenuLink}
                target="_blank"
              >
                {props?.fields?.sizeChartsLink?.value?.text}{' '}
                <SvgIcon icon="external-link" size="14" className="ml-[1px]"></SvgIcon>
              </LinkField>
            </li>
          )}
          {props?.fields?.customSizesLink?.value?.href && (
            <li className={theme.attributes.attributeMenuListItem}>
              <LinkField
                field={props?.fields?.customSizesLink}
                className={theme.attributes.attributeMenuLink}
                target="_blank"
              >
                {props?.fields?.customSizesLink?.value?.text}{' '}
                <SvgIcon icon="external-link" size="14" className="ml-[1px]"></SvgIcon>
              </LinkField>
            </li>
          )}
        </ul>
      )}
      <div className={theme.attributeOption}>
        {/*<p className={theme.copy}>*/}
        {/*   <Text field={viewModel.sizingText} encode={false}></Text> */}
        {/*</p>*/}
        <div className={theme.sizingSeparator}>
          <p className={`${theme.sizingName} ${theme.earmark}`}>Width</p>
          <div className={theme.dropDownSelectList}>
            <select
              className={theme.dropDownSelect}
              onChange={(event) => valueSelected(viewModel.widths, event.target.value)}
              value={viewModel.widths.findIndex((option) => option.isSelected)}
            >
              {viewModel.widths.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (option: any, index: number) => (
                  <option value={index} key={index}>
                    {option.title}
                  </option>
                )
              )}
            </select>
            <SvgIcon
              icon={'dropdown-arrow'}
              size="20"
              className={theme.dropDownSelectIcon}
            ></SvgIcon>
          </div>
          <ul className={theme.sizingList}>
            {viewModel.widths.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (option: any, index: number) => (
                <li className={theme.sizingListItem} key={index}>
                  <button
                    className={
                      (option.isSelected || option.isClicked ? theme.selected : theme.unselected) +
                      theme.sizingListItemButton
                    }
                    onClick={() => optionClicked(option, viewModel.widths)}
                    dangerouslySetInnerHTML={{ __html: formattedSize(option.title) }}
                  ></button>
                </li>
              )
            )}
          </ul>
        </div>
        <div className={theme.sizingSeparator}>
          <p className={`${theme.sizingName} ${theme.earmark}`}>Height*</p>
          <div className={theme.dropDownSelectList}>
            <select
              className={theme.dropDownSelect}
              onChange={(event) => valueSelected(viewModel.heights, event.target.value)}
              value={viewModel.heights.findIndex((option) => option.isSelected)}
            >
              {viewModel.heights.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (option: any, index: number) => (
                  <option value={index} key={index}>
                    {option.title}
                  </option>
                )
              )}
            </select>
            <SvgIcon
              icon={'dropdown-arrow'}
              size="20"
              className={theme.dropDownSelectIcon}
            ></SvgIcon>
          </div>
          <ul className={theme.sizingList}>
            {viewModel.heights.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (option: any, index: number) => (
                <li className={theme.sizingListItem} key={index}>
                  <button
                    className={
                      (option.isSelected || option.isClicked ? theme.selected : theme.unselected) +
                      theme.sizingListItemButton
                    }
                    onClick={() => optionClicked(option, viewModel.heights)}
                    dangerouslySetInnerHTML={{ __html: formattedSize(option.title) }}
                  ></button>
                </li>
              )
            )}
          </ul>
        </div>
        <p className={theme.disclaimer}>*Showing height options for selected width</p>
        <p className={theme.disclaimer}>{/* <Text field={viewModel.customSizingText}></Text> */}</p>
      </div>
    </>
  );
};

SizingAttribute.nameString = 'SizingAttribute';

export default SizingAttribute;
