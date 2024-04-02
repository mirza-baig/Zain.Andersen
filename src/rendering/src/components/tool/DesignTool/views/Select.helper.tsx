// Global
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { useContext } from 'react';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';

// Components
import { BouncyCard } from 'src/helpers/BouncyCard';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { useTheme } from 'src/lib/context/ThemeContext';
import { DesignToolProductProps, DesignToolProps } from '../DesignTool';
import { DesignToolOptionDataProps } from '../DesignTool.helper';
import { DesignToolContext } from '../DesignToolContext.helper';
import { Product } from '../partial/Product.helper';
import { SelectTheme, SelectThemeSubType } from './Select.theme';

export type DesignToolSelectProps = DesignToolProps;
export const Select = (props: DesignToolOptionDataProps): JSX.Element => {
  const { designToolRouter } = useContext(DesignToolContext);
  const options = designToolRouter?.routeData?.options ?? [];
  const products = designToolRouter?.routeData?.products ?? [];
  const { themeData } = useTheme(SelectTheme());
  const theme = (themeData as SelectThemeSubType).classes;

  if (props == null) {
    return <></>;
  }

  window.scrollTo(0, 0);

  return (
    <div className={theme.stepSelect}>
      <div className={theme.stepContainer}>
        <h2 className={theme.stepHeading}>
          <Text field={props.step.heading} encode={false} />
        </h2>
        <div className={theme.stepCopy}>
          <RichTextWrapper field={props.step.copy} refer="" />
        </div>
        <h3 className={theme.stepSubhead}>
          <Text field={props.step.subhead} encode={false} />
        </h3>
        {options.length > 0 && (
          <div className={theme.stepWrapperOptions}>
            {options.map((option: DesignToolOptionDataProps, index: number) => (
              <BouncyCard
                {...option}
                key={index}
                additionalButtonClassName={theme.bouncyCardShadow}
              />
            ))}
          </div>
        )}
        {products.length > 0 && (
          <div className={theme.stepWrapperProducts}>
            {products.map((product: DesignToolProductProps, index: number) => (
              <Product {...product} key={index} />
            ))}
          </div>
        )}
      </div>

      <Link href="#/" passHref={true}>
        <a
          className={theme.mobileResetBtn}
          onClick={() => designToolRouter.clearRouteData()}
          title="Start Over"
          aria-label="Start Over"
        >
          <SvgIcon icon={'reset'} size="28" className={theme.mobileResetBtnIcon}></SvgIcon>
        </a>
      </Link>
    </div>
  );
};
