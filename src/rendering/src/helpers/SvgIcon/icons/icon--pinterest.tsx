import { useTheme } from 'lib/context/ThemeContext';

const IconPinterest = (): JSX.Element => {
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
      <title>Pinterest Icon</title>
      <path
        d="M0.203125 8C0.203125 11.4153 2.34379 14.3313 5.35646 15.4787C5.28313 14.854 5.20513 13.824 5.37313 13.1013C5.51779 12.48 6.30713 9.14267 6.30713 9.14267C6.30713 9.14267 6.06913 8.666 6.06913 7.96C6.06913 6.85333 6.71046 6.02667 7.50979 6.02667C8.18979 6.02667 8.51779 6.53667 8.51779 7.148C8.51779 7.83133 8.08246 8.85267 7.85779 9.8C7.67046 10.5927 8.25579 11.2393 9.03713 11.2393C10.4525 11.2393 11.5411 9.74667 11.5411 7.592C11.5411 5.68467 10.1705 4.352 8.21379 4.352C5.94846 4.352 4.61846 6.05133 4.61846 7.808C4.61846 8.49267 4.88179 9.226 5.21113 9.62533C5.2392 9.65549 5.25904 9.69237 5.26873 9.73242C5.27842 9.77247 5.27764 9.81434 5.26646 9.854C5.20579 10.106 5.07113 10.6467 5.04513 10.7573C5.00979 10.9027 4.92979 10.934 4.77846 10.8633C3.78379 10.4007 3.16246 8.94667 3.16246 7.77867C3.16246 5.266 4.98713 2.95933 8.42379 2.95933C11.1865 2.95933 13.3338 4.928 13.3338 7.55867C13.3338 10.3033 11.6038 12.5127 9.20113 12.5127C8.39379 12.5127 7.63579 12.0927 7.37579 11.5973C7.37579 11.5973 6.97646 13.1187 6.87979 13.4907C6.69179 14.2133 6.17046 15.128 5.84713 15.6473C6.59246 15.8767 7.38313 16 8.20312 16C12.6211 16 16.2031 12.418 16.2031 8C16.2031 3.582 12.6211 0 8.20312 0C3.78513 0 0.203125 3.582 0.203125 8Z"
        fill="currentColor"
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
      <title>Pinterest Icon</title>
      <path
        d="M0.203125 8C0.203125 11.4153 2.34379 14.3313 5.35646 15.4787C5.28313 14.854 5.20513 13.824 5.37313 13.1013C5.51779 12.48 6.30713 9.14267 6.30713 9.14267C6.30713 9.14267 6.06913 8.666 6.06913 7.96C6.06913 6.85333 6.71046 6.02667 7.50979 6.02667C8.18979 6.02667 8.51779 6.53667 8.51779 7.148C8.51779 7.83133 8.08246 8.85267 7.85779 9.8C7.67046 10.5927 8.25579 11.2393 9.03713 11.2393C10.4525 11.2393 11.5411 9.74667 11.5411 7.592C11.5411 5.68467 10.1705 4.352 8.21379 4.352C5.94846 4.352 4.61846 6.05133 4.61846 7.808C4.61846 8.49267 4.88179 9.226 5.21113 9.62533C5.2392 9.65549 5.25904 9.69237 5.26873 9.73242C5.27842 9.77247 5.27764 9.81434 5.26646 9.854C5.20579 10.106 5.07113 10.6467 5.04513 10.7573C5.00979 10.9027 4.92979 10.934 4.77846 10.8633C3.78379 10.4007 3.16246 8.94667 3.16246 7.77867C3.16246 5.266 4.98713 2.95933 8.42379 2.95933C11.1865 2.95933 13.3338 4.928 13.3338 7.55867C13.3338 10.3033 11.6038 12.5127 9.20113 12.5127C8.39379 12.5127 7.63579 12.0927 7.37579 11.5973C7.37579 11.5973 6.97646 13.1187 6.87979 13.4907C6.69179 14.2133 6.17046 15.128 5.84713 15.6473C6.59246 15.8767 7.38313 16 8.20312 16C12.6211 16 16.2031 12.418 16.2031 8C16.2031 3.582 12.6211 0 8.20312 0C3.78513 0 0.203125 3.582 0.203125 8Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconPinterest;
