import React, { useEffect, useState } from 'react';
import IconClose from 'src/helpers/SvgIcon/icons/icon--close'; 

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

const VideoModal = (props: VideoModalProps): JSX.Element => {
  const { onClose, hideByDefault, videoHeadline, videoUrl, videoHeight, videoWidth } = props;

  const [isDesktop, setIsDesktop] = useState(false);

  console.log('isDesktop', isDesktop);

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

  return (
    <div>
      <div
        className={`fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 ${
          hideByDefault.value ? 'hidden' : ''
        }`}
      >
        <div
          className={`max-h-3xl relative flex flex-col overflow-auto bg-white p-8 shadow-lg md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl ${
            // Add margin top 40 on small screens and margin top 10 on medium and larger screens
            'md:mt-30 mt-10'
          }`}
        >
          <div className="relative mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">{videoHeadline.value}</h2>
            <button onClick={handleClose} className="bg-gray-200 text-gray-800 h-4 w-4">
              <IconClose /> {/* Use the IconClose component here */}
            </button>
          </div>
          <iframe
            title={videoHeadline.value}
            src={videoUrl.value}
            //width={'800'}  Assuming a default width of 800px for visibilty can be fixed through sitecore
            width={videoWidth.value}
            height={videoHeight.value}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
