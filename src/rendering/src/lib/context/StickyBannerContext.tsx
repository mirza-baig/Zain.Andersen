import React, { createContext, useState, useContext, useEffect } from 'react';

export type BANNER_VISIBILITY_SETTING = 'desktop-mobile' | 'desktop' | 'mobile';

// Define the banner type
type BannerType = {
  bannerId: string;
  visibilityType: BANNER_VISIBILITY_SETTING;
};

type BannerList = {
  mobileBannerList: Array<BannerType>;
  desktopBannerList: Array<BannerType>;
};

// Create the StickyBannerContext
interface StickyBannerContextType {
  addBanner: (banner: BannerType) => void;
  removeBanner: (banner: BannerType) => void;
  bannerList: BannerList;
}

const StickyBannerContext = createContext<StickyBannerContextType | undefined>(undefined);

// Create the StickyBannerProvider component
const StickyBannerProvider: React.FC = ({ children }) => {
  const [bannerList, setBannerList] = useState<BannerList>({
    mobileBannerList: [],
    desktopBannerList: [],
  });

  useEffect(() => {
    // Cleanup function when component unmounts
    return () => {
      setBannerList({
        mobileBannerList: [],
        desktopBannerList: [],
      });
    };
  }, []);

  const addBanner = (banner: BannerType) => {
    setBannerList((prevList) => {
      switch (banner.visibilityType) {
        case 'desktop':
          prevList.desktopBannerList.push(banner);
          break;
        case 'mobile':
          prevList.mobileBannerList.push(banner);
          break;
        default:
          prevList.desktopBannerList.push(banner);
          prevList.mobileBannerList.push(banner);
      }
      return { ...prevList };
    });
  };

  const removeBanner = (banner: BannerType) => {
    const filterBanners = (bannerList: Array<BannerType>): Array<BannerType> =>
      bannerList.filter((item) => item.bannerId !== banner.bannerId);

    setBannerList((prevList) => {
      switch (banner.visibilityType) {
        case 'desktop':
          prevList.desktopBannerList = filterBanners(prevList.desktopBannerList);
        case 'mobile':
          prevList.mobileBannerList = filterBanners(prevList.mobileBannerList);
        default:
          prevList.desktopBannerList = filterBanners(prevList.desktopBannerList);
          prevList.mobileBannerList = filterBanners(prevList.mobileBannerList);
      }
      return { ...prevList };
    });
  };

  const contextValue: StickyBannerContextType = {
    addBanner,
    removeBanner,
    bannerList,
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
