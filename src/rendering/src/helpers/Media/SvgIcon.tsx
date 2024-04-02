// Global
import { Image as JSSImage, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import NextImage from 'next/image';

// Lib
import { FocusAreaValue, LayoutValue } from '.';
import useNormalMode from 'lib/utils/use-normal-mode';
import { useExperienceEditor } from 'lib/utils';
import { isSvgUrl } from 'lib/utils/string-utils';

/**
 * JSS does not yet support Next Image in Exprience Editor
 * This component will switch between the two based on environment
 * which allows us to get the various performance benefits from Next Image
 *
 * Note that the images may display slightly differently in
 * Experience Editor as the JSS Image component doesn't have the same layout options
 */

export type ImageProps = {
  image?: ImageField;
  layout?: LayoutValue;
  focus?: FocusAreaValue;
  className?: string;
};

const SvgIcon = ({
  image,
  className,
  layout = 'intrinsic',
  focus = 'left',
}: ImageProps): JSX.Element => {
  const isEE = useExperienceEditor();
  const isNormalMode = useNormalMode();

  // If we're in EE, we still want to render the image for editing, even when it's empty.
  if (!image?.value?.src && !isEE) {
    return <></>;
  }

  const imageValue = image?.value;
  const isSvg = !!imageValue && !!imageValue.src && isSvgUrl(imageValue.src);

  // Fix for local docker.
  if (process.env.NEXT_PUBLIC_EW_ENVIRONMENT == 'Local' && imageValue) {
    imageValue.src = imageValue.src?.replace('https://cm/', '/');
  }

  return (
    // If not in normal mode, render the Sitecore JSS image.

    isNormalMode ? (
      <NextImage
        src={`${imageValue?.src}`}
        alt={`${imageValue?.alt}`}
        width={'80px'}
        height={'80px'}
        layout={layout}
        objectPosition={focus}
        className={className}
        unoptimized={isSvg}
      />
    ) : (
      <JSSImage
        field={image}
        style={{
          objectPosition: focus,
        }}
      />
    )
  );
};

export default SvgIcon;
