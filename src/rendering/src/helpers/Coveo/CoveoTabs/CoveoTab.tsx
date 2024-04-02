import { Tab as HeadlessTab } from '@coveo/headless';
import React, { PropsWithChildren, useEffect, useState } from 'react';

type CoveoTabProps = PropsWithChildren<React.ReactNode | React.ReactNode[]> & {
  controller: HeadlessTab;
  classes: {
    tabButton: string;
  };
};

export const CoveoTab = (props: CoveoTabProps) => {
  const { controller, classes } = props;
  const [state, setState] = useState(controller.state);

  useEffect(() => controller.subscribe(() => setState(controller.state)), [controller]);

  return (
    <button
      className={classes.tabButton}
      disabled={state.isActive}
      onClick={() => controller.select()}
    >
      {props.children}
    </button>
  );
};
