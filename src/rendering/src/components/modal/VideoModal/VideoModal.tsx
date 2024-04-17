import React, { useEffect, useState } from 'react';
import IconClose from 'src/helpers/SvgIcon/icons/icon--close'; // Assuming IconClose component is defined in a separate file

interface VideoModalProps {
  backgroundColor: string | null;
  hideByDefault: boolean;
  iframeAttributes: { [key: string]: string };
  iframeResizerOptions: string;
  iframeTitle: string;
  iframeUrl: string;
  onClose: () => void; // Function to handle closing the modal
}

const VideoModal: React.FC<VideoModalProps> = ({
  hideByDefault,
  iframeAttributes,
  iframeTitle,
  iframeUrl,
  onClose,
}) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const setScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Assuming 1024px as the threshold for desktop screens
    };

    setScreenSize(); // Set initial screen size
    window.addEventListener('resize', setScreenSize); // Add event listener for screen resize

    return () => {
      window.removeEventListener('resize', setScreenSize); // Remove event listener on component unmount
    };
  }, []);

  // Function to handle modal close event
  const handleClose = () => {
    onClose(); // Call the onClose function passed as a prop
  };

  // Ensure that the iframe allows fullscreen mode
  iframeAttributes = {
    ...iframeAttributes,
    allowFullScreen: 'true',
  };

  // Apply inline style to disable scrolling when modal is visible
  useEffect(() => {
    const body = document.body;
    body.style.overflow = hideByDefault ? 'hidden' : 'auto';

    // Reset overflow property when component unmounts
    return () => {
      body.style.overflow = 'auto';
    };
  }, [hideByDefault]);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 ${
          hideByDefault ? 'hidden' : ''
        }`}
      >
        <div
          className={`max-h-3xl relative flex max-w-3xl flex-col overflow-auto bg-white p-8 shadow-lg md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl ${
            // Add margin top 40 on small screens and margin top 10 on medium and larger screens
            'md:mt-30 mt-10'
          }`}
        >
          <div className="relative mb-4 flex justify-end">
            <button onClick={handleClose} className="bg-gray-200 text-gray-800 h-4 w-4">
              <IconClose /> {/* Use the IconClose component here */}
            </button>
          </div>
          <iframe
            title={iframeTitle}
            src={iframeUrl}
            width={isDesktop ? '1099px' : '100%'}
            height={isDesktop ? '523px' : '100%'}
            {...iframeAttributes}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
