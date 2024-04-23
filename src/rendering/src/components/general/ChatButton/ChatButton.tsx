// Global imports
import React, { useEffect, useState } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

// Components
import { Component } from 'src/helpers/Component';
import { ComponentProps } from 'lib/types/component-props';
import { Headline } from 'src/helpers/Headline';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { useAffiliate } from 'lib/context/AffiliateContext';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';

export type ChatButtonProps = Feature.EnterpriseWeb.RenewalByAndersen.Data.Chat.ChatButton &
  ComponentProps;

interface RlChatInitFunction {
  (id: string, rl_adid: string, rl_key: string): void;
}
// rl_chatinit globally
declare global {
  interface Window {
    rl_chatinit: RlChatInitFunction;
  }
}

const ChatButton: React.FC<ChatButtonProps> = (props) => {
  const { userAffiliate } = useAffiliate();
  const { currentScreenWidth } = useCurrentScreenType();
  const isDesktop = currentScreenWidth >= getBreakpoint('ml') ? true : false;
  const showChat = userAffiliate.programOptIns?.CorporateChat;
  const [showCollapsedButton, setShowCollapsedButton] = useState(false);
  if (!props.fields || !isDesktop) {
    return <></>;
  }
  const getCurrentDayAndTime = () => {
    const now = new Date();
    const utcDayOfWeek = now.getUTCDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dayOfWeek = daysOfWeek[utcDayOfWeek];
    const currentTime =
      now.getUTCHours() + ':' + (now.getUTCMinutes() < 10 ? '0' : '') + now.getUTCMinutes();

    return { day: dayOfWeek, time: currentTime };
  };

  const isOperatingHours = (onlineHours: string): boolean => {
    const { day, time } = getCurrentDayAndTime();

    const dayTimePairs = onlineHours.split('&');
    for (const pair of dayTimePairs) {
      const [dayOfWeek, timeRange] = pair.split('=');

      if (dayOfWeek === day) {
        const [startTime, endTime] = timeRange.split('-');
        const [startHour, startMinute] = startTime.split('%3A').map(Number);
        const [endHour, endMinute] = endTime.split('%3A').map(Number);
        const startUTC = new Date(Date.UTC(2000, 0, 1, startHour, startMinute));
        const endUTC = new Date(Date.UTC(2000, 0, 1, endHour, endMinute));
        const currentUTC = new Date(
          Date.UTC(2000, 0, 1, parseInt(time.split(':')[0]), parseInt(time.split(':')[1]))
        );

        if (startUTC < endUTC) {
          // Operating hours don't span across midnight
          if (currentUTC >= startUTC && currentUTC <= endUTC) {
            // Current time is within operating hours for this day
            return true;
          }
        } else {
          // Operating hours span across midnight
          if (currentUTC >= startUTC || currentUTC <= endUTC) {
            // Current time is within operating hours for this day
            return true;
          }
        }
      }
    }

    // Current time is not within operating hours for the current day
    return false;
  };

  // Check if current day and time fall within operating hours
  const isOnlineChatEnabled =
    showChat && props.fields?.onlineHours && !userAffiliate.programOptIns.LocaliQChatOnly
      ? isOperatingHours(props.fields.onlineHours.value)
      : false;
  const constructChatUrl = () => {
    // Base URL
    const baseUrl = props.fields?.onlineHoursChatUrl?.value;
    // propertyKeys for query parameters string
    const queryParamsString = props.fields?.propertyKeys?.value;
    // Check if queryParamsString is a valid string
    if (typeof queryParamsString !== 'string' || queryParamsString.trim() === '') {
      return baseUrl; // Return base URL if queryParamsString is invalid
    }
    // Construct and return the final URL
    return `${baseUrl}?${queryParamsString}`;
  };

  const windowWidth = props.fields?.windowWidth?.value || 440;
  const windowHeight = props.fields?.windowHeight?.value || 600;
  const propsWindow = `width=${windowWidth},height=${windowHeight},location=no,menubar=no,resizable=yes,scrollbars=no,status=no,titlebar=no,toolbar=no`;

  const openChatWindow = (url: string) => {
    // Open the URL in a new window with specific width and height
    window.open(url, 'ChatWindow', propsWindow);
  };

  const handleChatButtonClick = () => {
    const dynamicChatUrl = constructChatUrl();
    dynamicChatUrl && openChatWindow(dynamicChatUrl);
  };

  const handleCloseChat = () => {
    setShowCollapsedButton(true);
  };

  const ReachLocalChatWidget = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://widget.rlcdn.net/widget/rl_chatwidget.js';
      script.async = true;

      script.onload = () => {
        const id = userAffiliate.widgetID;
        const rl_adid = userAffiliate.rl_adid;
        const rl_key = userAffiliate.rl_key;

        // Check if rl_chatinit function exists before calling it
        if (typeof window.rl_chatinit === 'function' && id && rl_adid && rl_key && showChat) {
          window.rl_chatinit(id, rl_adid, rl_key);
        } else {
          console.error('rl_chatinit function not found');
        }
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);

    return null;
  };

  return (
    <Component variant="lg" dataComponent="general/chatbutton" {...props}>
      <div className="hidden ml:block">
        {isOnlineChatEnabled ? (
          <div className="fixed bottom-8 right-8 z-[99] col-span-12 flex flex-col justify-end">
            {showCollapsedButton ? (
              <div className="flex justify-end">
                <button
                  className="flex h-[64px] w-[156px] cursor-pointer rounded-[100px] border-[1px] border-primary bg-white py-2 px-[10px]"
                  onClick={handleChatButtonClick}
                >
                  <div className="mr-2 flex h-12 w-12 justify-center self-end rounded-full bg-primary text-center">
                    <SvgIcon
                      className=" -scale-x-100 transform self-center text-white"
                      size="xl"
                      icon="chat"
                    />
                  </div>
                  <Text
                    tag="span"
                    field={{ value: props.fields?.chatButtonText?.value }}
                    className="flex w-auto self-center text-center text-xs font-bold text-black"
                  />
                </button>
              </div>
            ) : (
              <div className="relative w-[250px] rounded-[8px] border-3 border-solid border-primary bg-white p-8 shadow-md max-md:hidden">
                <div className="max-w-[192px]">
                  {props?.fields?.headline && (
                    <Headline
                      useTag="div"
                      fields={{ headlineText: { value: props?.fields?.headline?.value } }}
                      classes="text-xs font-bold mb-s font-serif "
                    />
                  )}

                  <Text
                    tag="div"
                    field={{ value: props?.fields?.subheadline?.value }}
                    className="mb-2 text-body text-dark-gray"
                  />
                  <button
                    className="flex h-[33px] w-full justify-center rounded-[24px] bg-primary p-2 text-center"
                    onClick={handleChatButtonClick}
                  >
                    <Text
                      tag="span"
                      field={{ value: props.fields?.chatButtonText?.value }}
                      className="flex text-center text-button font-bold"
                    />
                  </button>
                </div>
                <span onClick={handleCloseChat}>
                  <SvgIcon
                    icon="close"
                    size="xl"
                    className="absolute top-4 right-4 cursor-pointer"
                  />
                </span>
              </div>
            )}
          </div>
        ) : (
          <ReachLocalChatWidget />
        )}
      </div>
    </Component>
  );
};
export default withDatasourceCheck()<ChatButtonProps>(ChatButton);
