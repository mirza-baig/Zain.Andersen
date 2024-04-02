// Global
import { Field, Image as JSSImage, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import NextImage from 'next/image';

// Lib
import { getEnum, useExperienceEditor } from 'lib/utils';
import classNames from 'classnames';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { LayoutValue, RatioTypes, maxhTypes, maxwTypes } from '.';
import { Caption } from '../Caption';
import useNormalMode from 'lib/utils/use-normal-mode';
import { isSvgUrl } from 'lib/utils/string-utils';

/**
 * JSS does not yet support Next Image in Exprience Editor
 * This component will switch between the two based on environment
 * which allows us to get the various performance benefits from Next Image
 *
 * Note that the images may display slightly differently in
 * Experience Editor as the JSS Image component doesn't have the same layout options
 */

export type ImageWrapperProps = {
  image?: ImageField;
  mobileImage?: ImageField;
  mobileFocusArea?: Item;
  caption?: Field<string>;
  hideCaption?: boolean;
  imageLayout?: LayoutValue;
  additionalDesktopClasses?: string;
  additionalMobileClasses?: string;
  ratio?: RatioTypes;
  maxH?: maxhTypes;
  maxW?: maxwTypes;
  focusArea?: string;
  priority?: boolean;
};

const ImageWrapper = ({
  image,
  mobileImage,
  mobileFocusArea,
  caption,
  hideCaption = false,
  imageLayout = 'responsive',
  additionalDesktopClasses,
  additionalMobileClasses,
  ratio,
  maxH = '',
  maxW = '',
  focusArea = 'center',
  priority,
}: ImageWrapperProps): JSX.Element => {
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

  if (!ratio) {
    ratio = 'picture';
  }

  if ((maxH || maxW) && !imageLayout) {
    imageLayout = 'responsive';
  }

  let imageCss = imageLayout == 'responsive' ? `aspect-${ratio} ${maxH} ${maxW}` : '';
  imageCss = ratio === 'portrait' ? imageCss + ` ` : imageCss + ` `;
  const mobileObjectPosition = focusArea != '' ? focusArea : getEnum<string>(mobileFocusArea) || '';

  if (imageLayout === 'responsive' || imageLayout === 'intrinsic') {
    return (
      <>
        <div className={classNames('relative hidden md:block', imageCss, additionalDesktopClasses)}>
          {isNormalMode ? (
            <NextImage
              src={`${imageValue?.src}`}
              alt={`${imageValue?.alt}`}
              width={`${imageValue?.width}`}
              height={`${imageValue?.height}`}
              layout={imageLayout}
              priority={priority}
              unoptimized={isSvg}
            />
          ) : (
            <JSSImage field={image} priority={priority} />
          )}
        </div>
        <MobileImage
          image={image}
          mobileImage={mobileImage}
          imageLayout={imageLayout}
          additionalMobileClasses={additionalMobileClasses}
          mobileObjectPosition={mobileObjectPosition}
          priority={priority}
        />
        {!hideCaption && <Caption caption={caption} />}
      </>
    );
  } else {
    const ratioCss = `aspect-${ratio} ${maxH} ${maxW}`;
    return (
      <>
        <div
          className={classNames(
            'relative mx-auto hidden md:block',
            ratioCss,
            additionalDesktopClasses
          )}
        >
          {isNormalMode ? (
            <NextImage
              src={`${imageValue?.src}`}
              alt={`${imageValue?.alt}`}
              layout="fill"
              objectFit={ratio === 'portrait' ? 'contain' : 'cover'}
              priority={priority}
              unoptimized={isSvg}
            />
          ) : (
            <JSSImage
              field={image}
              style={{
                objectFit: ratio === 'portrait' ? 'contain' : 'cover',
              }}
              priority={priority}
            />
          )}
        </div>
        <MobileImage
          image={image}
          mobileImage={mobileImage}
          imageLayout={imageLayout}
          additionalMobileClasses={additionalMobileClasses}
          mobileObjectPosition={mobileObjectPosition}
          priority={priority}
        />
        {!hideCaption && <Caption caption={caption} />}
      </>
    );
  }
};

export default ImageWrapper;

const MobileImage = ({
  image,
  mobileImage,
  imageLayout = 'responsive',
  additionalMobileClasses,
  mobileObjectPosition,
  priority,
}: ImageWrapperProps & { mobileObjectPosition: string }): JSX.Element => {
  const isNormalMode = useNormalMode();

  if (mobileImage?.value?.src) {
    const isSvg = isSvgUrl(mobileImage.value.src);
    return (
      <div className={classNames('relative block w-full md:hidden', additionalMobileClasses)}>
        {isNormalMode ? (
          <NextImage
            src={`${mobileImage.value.src}`}
            alt={`${mobileImage.value.alt}`}
            width={`${mobileImage.value.width}`}
            height={`${mobileImage.value.height}`}
            layout={imageLayout}
            objectPosition="center"
            objectFit={imageLayout === 'responsive' ? 'contain' : 'cover'}
            priority={priority}
            unoptimized={isSvg}
          />
        ) : (
          <JSSImage
            field={image}
            style={{
              objectPosition: 'center',
              objectFit: imageLayout === 'responsive' ? 'contain' : 'cover',
            }}
            priority={priority}
          />
        )}
      </div>
    );
  } else {
    if (image?.value?.src) {
      const isSvg = isSvgUrl(image.value.src);
      return (
        <div className={classNames('relative w-full md:hidden', additionalMobileClasses)}>
          {isNormalMode ? (
            <NextImage
              src={`${image.value.src}`}
              alt={`${image.value.alt}`}
              width={`${image.value.width}`}
              height={`${image.value.height}`}
              layout={imageLayout}
              objectPosition={mobileObjectPosition}
              objectFit="cover"
              priority={priority}
              unoptimized={isSvg}
            />
          ) : (
            <JSSImage
              field={image}
              style={{
                objectPosition: mobileObjectPosition,
                objectFit: 'cover',
              }}
              priority={priority}
            />
          )}
        </div>
      );
    }
  }

  return <></>;
};
