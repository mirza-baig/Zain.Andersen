// Global
import Image, { StaticImageData } from 'next/image';
import empty from 'src/assets/img/empty.png';
import SvgIcon from 'src/helpers/SvgIcon/SvgIcon';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { AttributeRendererProps } from 'src/lib/renoworks';
import { HardwareAttributeViewModel } from '../js/designtool';
import { singleOrDefault } from '../js/utils';
import { HardwareAttributeTheme, HardwareAttributeThemeSubType } from './HardwareAttribute.theme';

const HardwareAttribute = ({
  props,
  onUpdateOption,
  onUpdateOptionGroup,
}: AttributeRendererProps<HardwareAttributeViewModel>) => {
  const { themeData } = useTheme(HardwareAttributeTheme());
  const theme = (themeData as HardwareAttributeThemeSubType).classes;

  const finishOptions = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const hardware = singleOrDefault(props.groups, (_: any) => _.isSelected);
    return hardware === null ? [] : hardware.options;
  };

  const selectedGroup = (): { image: StaticImageData | string; title: string } => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const hardware = props.groups?.find((_: any) => _.isSelected);
    return hardware === null ? { image: empty, title: '' } : hardware;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionClicked = (option: any, collection?: any[]) => {
    onUpdateOption && onUpdateOption(option, collection);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionGroupClicked = (optionGroup: any, collection?: any[]) => {
    onUpdateOptionGroup && onUpdateOptionGroup(optionGroup, collection);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const optionGroupSelected = (collection: any, index: string) => {
    optionGroupClicked(collection[index], collection);
  };

  return (
    <div className={theme.attributeOption}>
      <p className={theme.titleMobile}>Hardware</p>
      {props.description && <p className={theme.copy}>{props.description}</p>}
      <div className={theme.container}>
        {props.groups.length > 0 && (
          <div className={theme.containerHardware}>
            <div className={theme.containerTypeDesktop}>
              <ul className={theme.listBordered}>
                {props.groups.map(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (group: any, index: number) => (
                    <li className={theme.hardwareTypeListItem} key={index}>
                      <button
                        className={theme.listItemButton}
                        onClick={() => optionGroupClicked(group, props.groups)}
                      >
                        {group.image && (
                          <span className={theme.listItemImageWrapper}>
                            <ImageWrapper
                              additionalDesktopClasses={theme.listItemImage}
                              additionalMobileClasses={theme.listItemImage}
                              imageLayout="responsive"
                              image={{
                                value: {
                                  src: group.image,
                                  alt: group.title,
                                  /* image will be responsive to parent div,
                                 using intrinsic width and height from actual example image */
                                  width: 300,
                                  height: 300,
                                },
                              }}
                            />

                            {(group.isSelected || group.isClicked) && (
                              <SvgIcon
                                icon={'check'}
                                size="16"
                                className={
                                  theme.listItemImageSelected + theme.listItemImageSelectedBg
                                }
                              ></SvgIcon>
                            )}
                          </span>
                        )}
                        <span className={theme.listItemButtonText}>{group.title}</span>
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={theme.dropDownSelectList}>
              <select
                id="dropdown-list"
                onChange={(event) => optionGroupSelected(props.groups, event.target.value)}
                value={props.groups.findIndex(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (group: any) => group.isSelected
                )}
                className={theme.dropDownSelect}
              >
                {props.groups.map(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (group: any, index: number) => (
                    <option value={index} key={index}>
                      {group.title}
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
            <div className={theme.containerTypeMobile}>
              <Image
                src={selectedGroup().image}
                alt={selectedGroup().title}
                height="250px"
                width="250px"
              ></Image>
            </div>
            {finishOptions().length > 0 && (
              <div className={theme.containerFinish}>
                <p className={theme.containerFinishTitleMobile}>Select Finish</p>
                <ul className={theme.containerlist}>
                  {finishOptions().map(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (option: any, index: number) => (
                      <li className={theme.listItem} key={index}>
                        <button
                          className={theme.listItemButton}
                          onClick={() => optionClicked(option, finishOptions())}
                        >
                          {option.image && (
                            <span className={theme.listItemImageWrapper}>
                              {option.image != 'empty' ? (
                                <div style={{ background: '#' + option.colorRgb }}>
                                  <ImageWrapper
                                    additionalDesktopClasses={theme.listItemImage}
                                    additionalMobileClasses={theme.listItemImage}
                                    imageLayout="responsive"
                                    image={{
                                      value: {
                                        src: option.image,
                                        alt: option.title,
                                        /* image will be responsive to parent div,
                                 using intrinsic width and height from actual example image */
                                        width: 76,
                                        height: 76,
                                      },
                                    }}
                                  />
                                </div>
                              ) : (
                                <Image
                                  className={theme.listItemImage}
                                  src={empty}
                                  alt={option.title}
                                  style={{ background: '#' + option.colorRgb }}
                                  layout="responsive"
                                ></Image>
                              )}
                              {(option.isSelected || option.isClicked) && (
                                <SvgIcon
                                  icon={'check'}
                                  size="16"
                                  className={
                                    theme.listItemImageSelected + theme.listItemImageSelectedBg
                                  }
                                ></SvgIcon>
                              )}
                            </span>
                          )}
                          <span className={theme.listItemButtonText}>{option.title}</span>
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        )}
        {props.optional.length > 0 && (
          <div className={theme.containerOptional}>
            <p className={theme.title}>Optional Lift Hardware</p>
            <ul className={theme.listBordered}>
              {props.optional.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (option: any, index: number) => (
                  <li className={theme.listItem} key={index}>
                    <button
                      className={theme.listItemButton}
                      onClick={() => optionClicked(option, props.optional)}
                    >
                      {option.image && (
                        <span className={theme.listItemImageWrapper}>
                          <div style={{ background: '#' + option.colorRgb }}>
                            <ImageWrapper
                              additionalDesktopClasses={theme.listItemImage}
                              additionalMobileClasses={theme.listItemImage}
                              imageLayout="responsive"
                              image={{
                                value: {
                                  src: option.image,
                                  alt: option.title,
                                  /* image will be responsive to parent div,
                                 using intrinsic width and height from actual example image */
                                  width: 76,
                                  height: 76,
                                },
                              }}
                            />
                          </div>
                          {(option.isSelected || option.isClicked) && (
                            <SvgIcon
                              icon={'check'}
                              size="16"
                              className={
                                theme.listItemImageSelected + theme.listItemImageSelectedBg
                              }
                            ></SvgIcon>
                          )}
                        </span>
                      )}
                      <span className={theme.listItemButtonText}>{option.title}</span>
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
      {props.note && <p className={theme.disclaimer}>{props.note}</p>}
    </div>
  );
};

HardwareAttribute.nameString = 'HardwareAttribute';

export default HardwareAttribute;
