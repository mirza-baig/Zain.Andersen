// Global
import classNames from 'classnames';
import NextImage from 'next/image';
import React, { useEffect, useState } from 'react';
import Spinner from 'src/helpers/Spinner/Spinner';

export type PreviewImageTheme = {
  classes: {
    loaderWrapper: string;
    loader: string;
  };
};

export type PreviewImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  theme: PreviewImageTheme;
};

export const PreviewImage = (props: PreviewImageProps): JSX.Element => {
  const { theme, ...rest } = props;

  const src = rest.src ?? '';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  const onCompleteHandler = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div
        className={classNames('relative aspect-picture', rest.className)}
        style={{ opacity: isLoading ? '0.3' : '1' }}
      >
        <NextImage
          onLoadingComplete={onCompleteHandler}
          src={src}
          alt={rest.alt}
          width={485}
          height={500}
          loading="lazy"
          objectFit="contain"
          layout={'responsive'}
        />
      </div>
      <div className={theme.classes.loaderWrapper}>
        {isLoading && (
          <div className={theme.classes.loader}>
            <Spinner size={56} />
          </div>
        )}
      </div>
    </>
  );
};
