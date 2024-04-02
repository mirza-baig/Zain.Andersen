// Global
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import { DesignToolContext } from '../DesignToolContext.helper';
import { HeaderNavTheme, HeaderNavThemeSubType } from './HeaderNav.theme';

export const HeaderNav = () => {
  const { designToolRouter } = useContext(DesignToolContext);
  const { themeData } = useTheme(HeaderNavTheme());
  const theme = themeData as HeaderNavThemeSubType;
  const router = useRouter();

  return (
    <ul className={theme.classes.nav}>
      <li className={theme.classes.navBack}>
        <Link href={designToolRouter.getBackRoute(router.asPath) ?? '#/'}>
          <a
            className={theme.classes.navBackLink}
            aria-label="Go to previous step"
            title="Go to previous step"
          >
            <SvgIcon icon={'arrow-left'} className={theme.classes.navBackLinkIcon}></SvgIcon>
            Previous
          </a>
        </Link>
      </li>
      <li className={theme.classes.navReset}>
        <Link href="#/">
          <a className={theme.classes.navResetLink} aria-label="Start over" title="Start over">
            <SvgIcon icon={'reset'} className={theme.classes.navResetLinkIcon}></SvgIcon>Start Over
          </a>
        </Link>
      </li>
    </ul>
  );
};
