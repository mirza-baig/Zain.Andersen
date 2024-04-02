import { createContext, Dispatch, useContext, useReducer, ReactNode } from 'react';
import { onlineSchedulingReducer } from './OnlineSchedulingReducer';
import {
  OnlineSchedulingContextProps,
  OnlineSchedulingDispatchAction,
} from './OnlineSchedulingTypes';

const defaultOnlineSchedulingContextProps: OnlineSchedulingContextProps = { isLoading: true };

const OnlineSchedulingContext = createContext<OnlineSchedulingContextProps>(
  defaultOnlineSchedulingContextProps
);

const OnlineSchedulingDispatchContext = createContext<Dispatch<OnlineSchedulingDispatchAction>>(
  () => null
);

export function OnlineSchedulingProvider({ children }: { children: ReactNode }) {
  const [onlineSchedulingContextProps, dispatch] = useReducer(
    onlineSchedulingReducer,
    defaultOnlineSchedulingContextProps
  );

  return (
    <OnlineSchedulingContext.Provider
      value={onlineSchedulingContextProps as OnlineSchedulingContextProps}
    >
      <OnlineSchedulingDispatchContext.Provider value={dispatch}>
        {children}
      </OnlineSchedulingDispatchContext.Provider>
    </OnlineSchedulingContext.Provider>
  );
}

export const useOnlineScheduling = () => useContext(OnlineSchedulingContext);
export const useOnlineSchedulingDispatch = () => useContext(OnlineSchedulingDispatchContext);
