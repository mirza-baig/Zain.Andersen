import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Headline } from '../Headline';
import ImageWrapper, { ImageWrapperProps } from '../Media/ImageWrapper';
import { useTheme } from 'lib/context/ThemeContext';
import classNames from 'classnames';
import { LinkWrapper } from '../LinkWrapper';

export type PhotoItemWithDetailProps = {
  fields: {
    imageWrapper: ImageWrapperProps | string;
    headlineText: Field<string>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    relatedPages?: any;
    photoItemClasses?: '';
  };
};

const PhotoItemWithDetail = (props: PhotoItemWithDetailProps): JSX.Element => {
  const { themeName } = useTheme();

  const { imageWrapper, relatedPages } = props.fields;

  return (
    <div
      className={classNames(
        'flex flex-col px-xxxs md:flex-row',
        relatedPages?.length > 0 ? '' : 'justify-center'
      )}
    >
      <div
        className={classNames(
          'max-h-full overflow-y-hidden md:max-h-screen',
          relatedPages?.length > 0 ? 'basis-3/5' : 'basis-full'
        )}
      >
        <ImageWrapper
          imageLayout="responsive"
          maxH="h-full"
          maxW="max-w-2xl"
          ratio="portrait"
          additionalDesktopClasses="mx-auto"
          {...(imageWrapper as ImageWrapperProps)}
        />
      </div>
      {relatedPages?.length > 0 && (
        <div className="flex basis-2/5 flex-col md:ml-s">
          <Headline
            classes={classNames(
              'mt-s md:mt-xxs',
              themeName === 'aw'
                ? 'font-heavy text-sm-xs md:text-xs mb-s'
                : '!font-serif font-bold text-xs mb-m md:mb-s'
            )}
            useTag="p"
            {...props}
          />

          {relatedPages.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (pageItem: any, index: number) => {
              return (
                <div key={index} className="mb-m flex items-center text-body md:mb-s">
                  <LinkWrapper
                    className="flex items-center justify-start"
                    field={{
                      href: pageItem.url,
                      text:
                        pageItem.fields?.breadcrumbTitle?.value ||
                        pageItem.fields?.pageTitle?.value ||
                        pageItem.pageTitle,
                    }}
                    ariaLabel={{
                      value:
                        pageItem.fields?.breadcrumbTitle?.value ||
                        pageItem.fields?.pageTitle?.value ||
                        pageItem.pageTitle,
                    }}
                  >
                    {/* Added static icon because arrow icon is smaller than given size in styleguide. */}
                    {/* This is the only place where icons differ in compare to the whole site */}
                    <span className="ml-xxxs text-primary">
                      <svg
                        width="13"
                        height="10"
                        viewBox="0 0 13 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.33594 1.37305L11.3359 5.37305L7.33594 9.37305"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path d="M11.3375 5.37305H0.9375" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </LinkWrapper>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};
export default PhotoItemWithDetail;
