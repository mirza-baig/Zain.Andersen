import { OnlineSchedulingMessage } from './OnlineSchedulingTypes';

export const sendMessageToParentPage = (message: OnlineSchedulingMessage) => {
  if ('parentIFrame' in window && !!message) {
    // @ts-ignore https://github.com/davidjbradshaw/iframe-resizer/blob/master/docs/iframed_page/methods.md#iframe-page-methods
    window.parentIFrame.sendMessage(message);
  }
};
