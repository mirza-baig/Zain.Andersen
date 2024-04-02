import { useTheme } from 'lib/context/ThemeContext';
import { GlobalMastheadTheme } from './GlobalMasthead.theme';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHouzz,
} from 'react-icons/fa';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getEnum } from 'lib/utils';

const SocialIcons = ({
  icons,
  iconColor,
}: {
  icons: Feature.EnterpriseWeb.Enterprise.Elements.Social.SocialLink[];
  iconColor: string;
}) => {
  const { themeData } = useTheme(GlobalMastheadTheme);

  return (
    <div className={themeData.classes.socialIconsWrapper}>
      <div className={themeData.classes.iconWrapper}>
        {icons &&
          icons.map((icon) => (
            <a
              href={icon?.fields?.link?.value?.href}
              target="_blank"
              key={icon.id}
              rel="noreferrer"
            >
              {getEnum(icon?.fields?.icon) === 'facebook' && (
                <FaFacebook size={20} color={iconColor} />
              )}
              {getEnum(icon?.fields?.icon) === 'twitter' && (
                <FaTwitter size={20} color={iconColor} />
              )}
              {getEnum(icon?.fields?.icon) === 'pinterest' && (
                <FaPinterest size={20} color={iconColor} />
              )}
              {getEnum(icon?.fields?.icon) === 'instagram' && (
                <FaInstagram size={20} color={iconColor} />
              )}
              {getEnum(icon?.fields?.icon) === 'linkedin' && (
                <FaLinkedin size={20} color={iconColor} />
              )}
              {getEnum(icon?.fields?.icon) === 'youtube' && (
                <FaYoutube size={20} color={iconColor} />
              )}
              {getEnum(icon?.fields?.icon) === 'houzz' && <FaHouzz size={20} color={iconColor} />}
            </a>
          ))}
      </div>
    </div>
  );
};

export default SocialIcons;
