// Global
import type { LinkProps } from '@sitecore-jss/sitecore-jss-react';
import { Link, LinkField, Field } from '@sitecore-jss/sitecore-jss-nextjs';
// Lib
import useExperienceEditor from 'lib/utils/use-experience-editor';
import { useModalIdContext } from 'lib/context/GenericModalIDContext';
import { Children, MouseEvent } from 'react';
import VideoModal from 'components/modal/VideoModal/VideoModal';
import { useState } from 'react';

/**
 * This component adds some needed accessibility
 * updates to the JSS Link component
 */
export type CTASection = 'header' | 'footer' | 'utility' | 'mobile';
// import { VideoModalProps } from 'path/to/VideoModalProps'; // Replace 'path/to/VideoModalProps' with the actual path to the VideoModalProps type

export type VideoModalProps = {
  onClose: () => void;
  hideByDefault: { value: boolean };
  videoHeadline: { value: string };
  videoUrl: { value: string };
  videoDescription: { value: string };
  videoHeight: { value: number };
  videoId: { value: string };
  videoLazyLoad: { value: boolean };
  videoName: { value: string };
  videoWidth: { value: number };
};

export interface LinkWrapperProps extends LinkProps {
  srOnlyText?: string;
  suppressLinkText?: boolean;
  suppressNewTabIcon?: boolean;
  modalId?: string;
  modalLinkText?: Field<string>;
  ariaLabel?: Field<string>;
  ctaSection?: CTASection;
  videoModal?: { fields: VideoModalProps };
}

const INTERNAL_LINK_REGEX = /^\//g;

const LinkWrapper = ({
  children,
  field,
  srOnlyText,
  suppressLinkText,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  suppressNewTabIcon,
  modalId,
  videoModal,
  modalLinkText,
  ariaLabel,
  ctaSection,
  ...props
}: LinkWrapperProps): JSX.Element => {
  console.log('linkwrapper new props', props);
  console.log('children', children);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  // Format field as LinkField for consistency
  const asLinkField = !field?.value ? { value: { ...field } } : (field as LinkField);
  // Sitecore doesn't do tel: links correctly, it appends http to it.  Remove that.
  asLinkField.value.href = asLinkField.value.href?.replace('http://tel:', 'tel:');

  // Fix anchor being rendered twice for anchor linktypes in general link.  Fixed in Sitecore JSS v21, not fixed in v20.
  // Remove once on SitecoreJSS v21
  if (
    asLinkField.value.linktype === 'anchor' &&
    asLinkField.value.anchor &&
    (asLinkField.value.href?.indexOf(asLinkField.value.anchor) || -1) >= 0
  ) {
    asLinkField.value.anchor = '';
  }

  const text = suppressLinkText ? '' : asLinkField?.value?.text;
  const target = asLinkField?.value?.target;
  const { setSelectedModalId, prevFocusedElementRef } = useModalIdContext();

  const handleModalClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (modalId) {
      setSelectedModalId(modalId);
      prevFocusedElementRef && (prevFocusedElementRef.current = e.currentTarget);
    }
  };

  const handleVideoModalClick = () => {
    setIsVideoModalOpen(true);
  };

  const gtmProps = ((): Record<string, string | null> => {
    if (asLinkField.value.href?.includes('tel:')) {
      return {
        'data-gtm-click': '',
        'data-gtm-dl-event': 'click_to_call',
      };
    }
    if (ctaSection) {
      return {
        'data-gtm-click': '',
        'data-gtm-dl-event': 'nav_click',
        'data-gtm-dl-nav-section': ctaSection,
      };
    }

    return { 'data-gtm-click': '', 'data-gtm-dl-event': 'cta_click' };
  })();

  const isEE = useExperienceEditor();

  // if modalId is provided, then act as ModalCta
  if (modalId) {
    return (
      <button onClick={handleModalClick} className={props.className}>
        {modalLinkText?.value} {children}
      </button>
    );
  }

  if (videoModal) {
    return (
      <>
        <button onClick={handleVideoModalClick} className={props.className}>
          {modalLinkText?.value}
          {children}
        </button>
        {isVideoModalOpen && (
          <VideoModal
            onClose={() => setIsVideoModalOpen(false)}
            hideByDefault={videoModal.fields.hideByDefault}
            videoHeadline={videoModal.fields.videoHeadline}
            videoUrl={videoModal.fields.videoUrl}
            videoDescription={videoModal.fields.videoDescription}
            videoHeight={videoModal.fields.videoHeight}
            videoId={videoModal.fields.videoId}
            videoLazyLoad={videoModal.fields.videoLazyLoad}
            videoName={videoModal.fields.videoName}
            videoWidth={videoModal.fields.videoWidth}
          />
        )}
      </>
    );
  }

  // In experience editor, do not pass any children but retain basic styling
  // so that double components do not appear when using <Link>
  if (isEE) {
    const ctaIcon = Children.toArray(children)?.[0];
    const ctaEEClassess = props.className;
    delete props.className;
    return (
      <div className={ctaEEClassess}>
        <Link
          field={asLinkField}
          {...props}
          showLinkTextWithChildrenPresent={false}
          internalLinkMatcher={INTERNAL_LINK_REGEX}
        />
        {ctaIcon && ctaIcon}
      </div>
    );
  }

  // If no content is present, don't print
  if (!suppressLinkText && !asLinkField.value.text && !asLinkField.value.href) {
    return <></>;
  }

  return (
    <Link
      field={asLinkField}
      {...props}
      {...gtmProps}
      showLinkTextWithChildrenPresent={false}
      internalLinkMatcher={INTERNAL_LINK_REGEX}
      tabIndex={0}
      role="link"
      aria-label={`${ariaLabel?.value || text || ''}${
        target === '_blank' ? ' (Opens in a new tab)' : ''
      }`}
    >
      {text}
      {children}
      {(target === '_blank' || srOnlyText) && (
        <>
          <span className="sr-only">
            {srOnlyText && srOnlyText}
            {/* Preserve a single space character before SR Tab Text */}
            {target === '_blank' && ' (Opens in a new tab)'}
          </span>
          {/* {!suppressNewTabIcon && target === '_blank' && (
            <SvgIcon icon="new-tab" size="em" className="ml-2" />
          )} */}
        </>
      )}
    </Link>
  );
};

export default LinkWrapper;
