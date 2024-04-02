import { OnlineSchedulingConstants } from 'lib/constants/online-scheduling';
import {
  OnlineSchedulingContextProps,
  OnlineSchedulingDispatchAction,
} from './OnlineSchedulingTypes';

export function onlineSchedulingReducer(
  onlineSchedulingContextProps: OnlineSchedulingContextProps,
  action: OnlineSchedulingDispatchAction
) {
  if (!action?.type) {
    return onlineSchedulingContextProps;
  }

  switch (action.type) {
    case OnlineSchedulingConstants.setIsLoading: {
      return {
        ...onlineSchedulingContextProps,
        isLoading: action.result,
      };
    }
    case OnlineSchedulingConstants.initialLeadData: {
      return {
        ...onlineSchedulingContextProps,
        primarySubmissionData: action.result,
      };
    }
    case OnlineSchedulingConstants.primarySubmission: {
      return {
        ...onlineSchedulingContextProps,
        primarySubmissionResponse: action.result,
      };
    }
    case OnlineSchedulingConstants.secondarySubmission: {
      return {
        ...onlineSchedulingContextProps,
        secondarySubmissionResponse: action.result,
      };
    }
    default: {
      return onlineSchedulingContextProps;
    }
  }
}
