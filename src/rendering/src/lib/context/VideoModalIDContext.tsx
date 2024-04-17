import { createContext, useContext, useState, ReactNode } from 'react';
import VideoModal from 'components/modal/VideoModal/VideoModal';
type VideoModalContextType = {
  openVideoModal: () => void;
};

const VideoModalContext = createContext<VideoModalContextType>({
  openVideoModal: () => {},
});

export const useVideoModalContext = () => useContext(VideoModalContext);

export const VideoModalContextProvider = ({ children }: { children: ReactNode }) => {
  const openVideoModal = () => {
    // Implement logic to open the video modal here
    // For simplicity, let's set a state variable to true
    // You can replace this with your actual logic
    setIsVideoModalOpen(true);
  };

  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  return (
    <VideoModalContext.Provider value={{ openVideoModal }}>
      {/* Pass isVideoModalOpen and setIsVideoModalOpen to the VideoModal component */}
      {children}
      {isVideoModalOpen && <VideoModal onClose={() => setIsVideoModalOpen(false)} />}
    </VideoModalContext.Provider>
  );
};
