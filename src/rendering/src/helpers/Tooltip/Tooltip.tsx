import { useRef, useState } from 'react';
import classNames from 'classnames';
import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { SvgIcon } from '../SvgIcon';
import { ImagePrimary } from '../Media';
import { RichTextWrapper } from '../RichTextWrapper';

interface TooltipProps {
  fields?: {
    tooltipText?: Field<string>;
    tooltipImage?: ImageField;
  };
}

const Tooltip = (props: TooltipProps) => {
  const [tooltipLocation, setTooltipLocation] = useState({ top: '0', bottom: '20px', left: '0' });

  const toolTipRef = useRef<HTMLDivElement>(null);

  if (!props.fields?.tooltipText?.value) {
    return <></>;
  }

  const showTooltip = () => {
    if (toolTipRef.current) {
      const tooltipElement = toolTipRef.current?.lastChild as HTMLDivElement;

      if (tooltipElement.getBoundingClientRect().width === 0) {
        return;
      }

      let _tooltipLocation = tooltipLocation;

      const toolTipTopCoordinate = tooltipElement?.getBoundingClientRect().top;

      const toolTipRightCoordinate = tooltipElement?.getBoundingClientRect().right;

      _tooltipLocation = {
        top: toolTipTopCoordinate <= 0 ? '20px' : '0',
        bottom: toolTipTopCoordinate > 0 ? '20px' : '0',
        left:
          toolTipRightCoordinate > window.outerWidth
            ? `-${Math.abs(window.outerWidth - toolTipRightCoordinate - 12)}px`
            : '0',
      };

      setTooltipLocation({ ..._tooltipLocation });
    }
  };

  const hideTooltip = () => {
    setTooltipLocation({ ...{ top: '0', bottom: '20px', left: '0' } });
  };

  return (
    <div
      ref={toolTipRef}
      className="group relative ml-xxs md:inline-flex"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <SvgIcon icon="tooltip" className="cursor-pointer" />
      <div
        style={{
          top: tooltipLocation.top !== '0' ? tooltipLocation.top : undefined,
          bottom: tooltipLocation.bottom !== '0' ? tooltipLocation.bottom : undefined,
          left: tooltipLocation.left,
        }}
        className={classNames(
          'absolute z-[1000] hidden w-max min-w-[86px] max-w-[288px] break-all rounded-[8px] bg-white p-xxs text-body text-black opacity-0 shadow-[0_2px_5px_0px_rgba(0,0,0,0.25)] group-hover:block group-hover:opacity-100'
        )}
      >
        <RichTextWrapper field={props.fields?.tooltipText} />
        <ImagePrimary
          imageLayout="responsive"
          {...{
            fields: {
              primaryImage: { ...props.fields.tooltipImage },
              primaryImageMobile: { ...props.fields.tooltipImage },
              primaryImageCaption: {
                value: '',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Tooltip;
