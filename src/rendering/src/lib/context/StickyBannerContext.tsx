import React, { createContext, useState, useContext, useEffect } from 'react';

// Define the banner type
type BannerType = string;

// Create the StickyBannerContext
interface StickyBannerContextType {
  addBanner: (banner: BannerType) => void;
  removeBanner: (banner: BannerType) => void;
  closeCurrentBanner: () => void;
  bannerList: BannerType[];
}

const StickyBannerContext = createContext<StickyBannerContextType | undefined>(undefined);

// Create the StickyBannerProvider component
const StickyBannerProvider: React.FC = ({ children }) => {
  const [bannerList, setBannerList] = useState<BannerType[]>([]);

  useEffect(() => {
    // Cleanup function when component unmounts
    return () => {
      setBannerList([]);
    };
  }, []);

  const addBanner = (banner: BannerType) => {
    setBannerList((prevList) => [...prevList, banner]);
  };

  const removeBanner = (banner: BannerType) => {
    setBannerList((prevList) => prevList.filter((item) => item !== banner));
  };

  const closeCurrentBanner = () => {
    if (bannerList.length > 0) {
      const currentBanner = bannerList[0];
      removeBanner(currentBanner);
    }
  };

  const contextValue: StickyBannerContextType = {
    addBanner,
    removeBanner,
    bannerList,
    closeCurrentBanner,
  };

  return (
    <StickyBannerContext.Provider value={contextValue}>{children}</StickyBannerContext.Provider>
  );
};

// Custom hook to access the StickyBannerContext
const useStickyBanner = (): StickyBannerContextType | undefined => {
  const context = useContext(StickyBannerContext);

  if (context) {
    return context;
  }
  return undefined;
};

export { StickyBannerProvider, useStickyBanner };
