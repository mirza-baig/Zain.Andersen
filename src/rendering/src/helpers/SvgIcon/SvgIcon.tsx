// Global
import useNormalMode from 'lib/utils/use-normal-mode';
import dynamic from 'next/dynamic';
import React, { memo } from 'react';
//  Icon contents should be stored in the icons subdirectory using the naming scheme 'icon--[name].tsx'

export type IconTypes =
  | undefined
  | 'check'
  | 'close'
  | 'cube'
  | 'ellipsis'
  | 'hamburger'
  | 'minus'
  | 'new-tab'
  | 'new-tab-black'
  | 'plus'
  | 'arrow'
  | 'arrow-drop-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'external-link'
  | 'download'
  | 'smallclose'
  | 'smallplus'
  | 'star'
  | 'orange-triangle'
  | 'quote'
  | 'caret'
  | 'facebook'
  | 'instagram'
  | 'pinterest'
  | 'twitter'
  | 'youtube'
  | 'houzz'
  | 'linkedin'
  | 'search'
  | 'chevron-right'
  | 'chevron-left'
  | 'chevron-right-sm'
  | 'chevron-left-sm'
  | 'play'
  | 'pause'
  | 'location-pin'
  | 'favorite'
  | 'pdf'
  | 'pdf-aw'
  | 'zoom-pinch'
  | 'caret-right'
  | 'caret-primary'
  | 'print'
  | 'share'
  | 'reset'
  | 'share'
  | 'pencil'
  | 'dropdown-arrow'
  | 'tooltip'
  | 'chat'
  | 'chat-outline'
  | 'phone';

export interface SvgIconProps {
  className?: string;
  icon: IconTypes;
  defs?: JSX.Element;
  fillId?: string;
  size?: Sizes;
}

export interface IconProps {
  fillId?: string;
  size?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Sizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | any;

const IconSize: Record<Sizes, string> = {
  sm: '8',
  md: '12',
  lg: '16',
  xl: '20',
  xxl: '24',
};

const SvgIcon = ({ icon, className, defs, fillId, size = 'md' }: SvgIconProps): JSX.Element => {
  const isNormalMode = useNormalMode();
  if (!icon) {
    return <></>;
  }

  if (!isNormalMode) {
    // Since icons don't work on CM don't render icon.
    return <></>;
    // We could also render the icon name instead.
    // return <>[{icon}-icon]</>;
  }

  const IconContent = dynamic(() => import(`./icons/icon--${icon}`));

  const props: IconProps = {
    fillId: fillId,
    size: IconSize[size] || size,
  };

  return (
    <span className={className}>
      <IconContent {...props}>{!!defs && defs}</IconContent>
    </span>
  );
};

export default memo(SvgIcon);
