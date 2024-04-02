// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { Field, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { bottomStickyTabTheme } from './BottomStickyTab.theme';
import { ComponentProps } from 'lib/types/component-props';
import { getEnum } from 'lib/utils';
import classNames from 'classnames';
import { useModalIdContext } from 'lib/context/GenericModalIDContext';
import IconDropdownArrow from 'src/helpers/SvgIcon/icons/icon--dropdown-arrow';
import { MouseEvent } from 'react';

export type BottomStickyTabProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.BottomStickyTab.BottomStickyTab &
    ComponentProps;

export type tabStyle = 'black' | 'orange' | 'green';

const BottomStickyTab = (props: BottomStickyTabProps) => {
  const { fields } = props;
  const { setSelectedModalId, prevFocusedElementRef, selectedModalId } = useModalIdContext();
  const tabStyle = getEnum<tabStyle>(fields?.tabStyle) || 'black';
  const { themeData } = useTheme(bottomStickyTabTheme(tabStyle));

  if (!fields) {
    return <></>;
  }

  const modalId = (fields.genericModal?.fields.modalId as Field<string>)?.value;

  const handleModalClick = (e: MouseEvent) => {
    if (modalId && selectedModalId != modalId) {
      setSelectedModalId(modalId);
      prevFocusedElementRef &&
        (prevFocusedElementRef.current = e.currentTarget as HTMLButtonElement);
    } else {
      setSelectedModalId('');
    }
  };

  return (
    <Component
      sesectionWrapperClasses="relative"
      variant="lg"
      dataComponent="general/bottomstickytab"
      {...props}
    >
      <div
        className={classNames(
          'fixed bottom-0 left-0 right-0  bg-theme-bg text-theme-text ',
          tabStyle === 'black' ? 'theme-secondary' : 'theme-primary',
          modalId === selectedModalId || selectedModalId === '' ? 'z-[1001]' : 'z-[998]'
        )}
      >
        <div className=" relative h-full w-full md:h-1.5 ">
          <button
            onClick={(e) => handleModalClick(e)}
            className={classNames(themeData.classes.stickyTab, 'max-md:border-x-0')}
          >
            <span
              className={classNames('flex items-center justify-center', themeData.classes.tabText)}
            >
              <span
                className={classNames('duration-500', {
                  'text-[0px] leading-none opacity-0': selectedModalId !== modalId,
                })}
              >
                <Text field={{ value: 'Close' }} tag="" />
              </span>
              <span
                className={classNames('inline-flex duration-500', {
                  'translate-x-full text-[0px] leading-none opacity-0  ease-in-out': !(
                    selectedModalId !== modalId
                  ),
                })}
              >
                <Text field={fields.tabTitle} tag="" />
              </span>
            </span>
            <span
              className={classNames(
                'duration-500',
                selectedModalId == modalId ? 'rotate-0' : 'rotate-180',
                themeData.classes.tabIcon
              )}
            >
              <IconDropdownArrow />
            </span>
          </button>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<BottomStickyTabProps>(BottomStickyTab);
