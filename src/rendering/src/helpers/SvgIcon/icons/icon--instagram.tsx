import { useTheme } from 'lib/context/ThemeContext';
import { IconProps } from '../SvgIcon';

const IconInstagram = (props: IconProps): JSX.Element => {
  const { themeName } = useTheme();

  return themeName === 'aw' ? (
    <svg
      role="img"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Instagram Icon</title>
      <circle cx="8.20312" cy="8" r="8" fill={props.fillId || 'white'} />
      <path
        d="M8.20205 6.66605C7.46757 6.66605 6.86817 7.26544 6.86817 7.99993C6.86817 8.73441 7.46757 9.3338 8.20205 9.3338C8.93653 9.3338 9.53593 8.73441 9.53593 7.99993C9.53593 7.26544 8.93653 6.66605 8.20205 6.66605ZM12.2027 7.99993C12.2027 7.44756 12.2077 6.9002 12.1767 6.34884C12.1456 5.70842 11.9995 5.14005 11.5312 4.67174C11.0619 4.20243 10.4946 4.05734 9.85414 4.02631C9.30177 3.99529 8.75441 4.0003 8.20305 4.0003C7.65069 4.0003 7.10333 3.99529 6.55197 4.02631C5.91155 4.05734 5.34317 4.20343 4.87486 4.67174C4.40556 5.14105 4.26046 5.70842 4.22944 6.34884C4.19842 6.9012 4.20342 7.44856 4.20342 7.99993C4.20342 8.55129 4.19842 9.09965 4.22944 9.65101C4.26046 10.2914 4.40656 10.8598 4.87486 11.3281C5.34417 11.7974 5.91155 11.9425 6.55197 11.9735C7.10433 12.0046 7.65169 11.9996 8.20305 11.9996C8.75541 11.9996 9.30277 12.0046 9.85414 11.9735C10.4946 11.9425 11.0629 11.7964 11.5312 11.3281C12.0005 10.8588 12.1456 10.2914 12.1767 9.65101C12.2087 9.09965 12.2027 8.55229 12.2027 7.99993V7.99993ZM8.20205 10.0523C7.0663 10.0523 6.1497 9.13567 6.1497 7.99993C6.1497 6.86418 7.0663 5.94758 8.20205 5.94758C9.3378 5.94758 10.2544 6.86418 10.2544 7.99993C10.2544 9.13567 9.3378 10.0523 8.20205 10.0523ZM10.3385 6.34284C10.0733 6.34284 9.85914 6.1287 9.85914 5.86352C9.85914 5.59835 10.0733 5.38421 10.3385 5.38421C10.6036 5.38421 10.8178 5.59835 10.8178 5.86352C10.8178 5.92649 10.8055 5.98885 10.7814 6.04704C10.7574 6.10523 10.7221 6.1581 10.6776 6.20262C10.633 6.24715 10.5802 6.28245 10.522 6.30651C10.4638 6.33057 10.4014 6.34292 10.3385 6.34284V6.34284Z"
        fill={props.fillId ? 'white' : '#001722'}
      />
    </svg>
  ) : (
    <svg
      role="img"
      width="32"
      height="32"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Instagram Icon</title>
      <circle cx="8.20312" cy="8" r="8" fill={props.fillId || 'white'} />
      <path
        d="M8.20205 6.66605C7.46757 6.66605 6.86817 7.26544 6.86817 7.99993C6.86817 8.73441 7.46757 9.3338 8.20205 9.3338C8.93653 9.3338 9.53593 8.73441 9.53593 7.99993C9.53593 7.26544 8.93653 6.66605 8.20205 6.66605ZM12.2027 7.99993C12.2027 7.44756 12.2077 6.9002 12.1767 6.34884C12.1456 5.70842 11.9995 5.14005 11.5312 4.67174C11.0619 4.20243 10.4946 4.05734 9.85414 4.02631C9.30177 3.99529 8.75441 4.0003 8.20305 4.0003C7.65069 4.0003 7.10333 3.99529 6.55197 4.02631C5.91155 4.05734 5.34317 4.20343 4.87486 4.67174C4.40556 5.14105 4.26046 5.70842 4.22944 6.34884C4.19842 6.9012 4.20342 7.44856 4.20342 7.99993C4.20342 8.55129 4.19842 9.09965 4.22944 9.65101C4.26046 10.2914 4.40656 10.8598 4.87486 11.3281C5.34417 11.7974 5.91155 11.9425 6.55197 11.9735C7.10433 12.0046 7.65169 11.9996 8.20305 11.9996C8.75541 11.9996 9.30277 12.0046 9.85414 11.9735C10.4946 11.9425 11.0629 11.7964 11.5312 11.3281C12.0005 10.8588 12.1456 10.2914 12.1767 9.65101C12.2087 9.09965 12.2027 8.55229 12.2027 7.99993V7.99993ZM8.20205 10.0523C7.0663 10.0523 6.1497 9.13567 6.1497 7.99993C6.1497 6.86418 7.0663 5.94758 8.20205 5.94758C9.3378 5.94758 10.2544 6.86418 10.2544 7.99993C10.2544 9.13567 9.3378 10.0523 8.20205 10.0523ZM10.3385 6.34284C10.0733 6.34284 9.85914 6.1287 9.85914 5.86352C9.85914 5.59835 10.0733 5.38421 10.3385 5.38421C10.6036 5.38421 10.8178 5.59835 10.8178 5.86352C10.8178 5.92649 10.8055 5.98885 10.7814 6.04704C10.7574 6.10523 10.7221 6.1581 10.6776 6.20262C10.633 6.24715 10.5802 6.28245 10.522 6.30651C10.4638 6.33057 10.4014 6.34292 10.3385 6.34284V6.34284Z"
        fill={props.fillId ? 'white' : '#001722'}
      />
    </svg>
  );
};

export default IconInstagram;
