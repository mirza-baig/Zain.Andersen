// Global
import { useRouter } from 'next/router';
import { useContext } from 'react';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import { DesignToolDataProps } from '../DesignTool.helper';
import { DesignToolContext } from '../DesignToolContext.helper';
import { MainBackgroundTheme, MainBackgroundThemeSubType } from './MainBackground.theme';

export const MainBackground = (props: DesignToolDataProps) => {
  if (props) {
  }
  const { designToolRouter } = useContext(DesignToolContext);

  const router = useRouter();
  const currentStep = designToolRouter.getStep(router.asPath);

  const { themeData } = useTheme(MainBackgroundTheme(currentStep));
  const theme = themeData as MainBackgroundThemeSubType;

  return (
    <div className={theme.classes.wrapper}>
      <ImageWrapper
        image={props?.backgroundImage}
        additionalDesktopClasses={theme.classes.image}
      ></ImageWrapper>
      <div className={theme.classes.overlay}></div>
    </div>
  );
};
