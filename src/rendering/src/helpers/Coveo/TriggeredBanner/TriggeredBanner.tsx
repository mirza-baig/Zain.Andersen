import { NotifyTrigger as HeadlessNotifyTrigger } from '@coveo/headless';
import { useEffect, useState, FunctionComponent, useCallback } from 'react';
import { BodyCopy } from 'src/helpers/BodyCopy';

interface TriggeredBannerProps {
  controller: HeadlessNotifyTrigger;
  triggeredBannerClasses?: string;
}

export const TriggeredBanner: FunctionComponent<TriggeredBannerProps> = (props) => {
  const updateState = useCallback(() => {
    setState(props.controller.state);
    // Suggested dependency "props.controller.state" is coming from props.
    // We can ignore react-hooks/exhaustive-deps warning for this useCallback as we only need to define this function once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { controller } = props;
  const [state, setState] = useState(controller.state);

  // Suggested dependency "updateState" will only defined once. So, We can ignore react-hooks/exhaustive-deps warning.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => controller.subscribe(() => updateState()), [controller]);

  return (
    <>
      {state.notifications.map((notification, index) => (
        <BodyCopy
          key={index}
          classes={props.triggeredBannerClasses}
          fields={{ body: { value: notification } }}
        />
      ))}
    </>
  );
};
