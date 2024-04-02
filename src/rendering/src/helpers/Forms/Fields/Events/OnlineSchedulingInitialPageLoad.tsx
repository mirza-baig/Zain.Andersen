import React, { useContext, useEffect, useRef } from 'react';
import { FormFieldExport, FormFieldProps } from 'lib/forms';
import {
  useOnlineScheduling,
  useOnlineSchedulingDispatch,
} from 'lib/forms/OnlineScheduling/OnlineSchedulingContext';
import { FormsContext } from 'lib/forms/FormContext';
import {
  OnlineSchedulingDispatchAction,
  OnlineSchedulingMessage,
} from 'lib/forms/OnlineScheduling/OnlineSchedulingTypes';
import { FormikValues, useFormikContext } from 'formik';
import { formActionFactory } from 'temp/formActionFactory';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { OnlineSchedulingConstants } from 'lib/constants/online-scheduling';

export type OSInitialPageLoadProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Forms.Events.OnlineSchedulingInitialPageLoad &
    FormFieldProps;

const OnlineSchedulingInitialPageLoadComponent = (props: OSInitialPageLoadProps): JSX.Element => {
  const { initialValues, setInitialValues } = useContext(FormsContext);
  const onlineSchedulingDispatch = useOnlineSchedulingDispatch();
  const onlineSchedulingContext = useOnlineScheduling();
  const { formProps, pageIndex, updatePageIndex } = useContext(FormsContext);

  const { validateForm, values } = useFormikContext<FormikValues>();
  const elementRef = useRef<HTMLElement>(null);
  const hasPageBeenRendered = useRef(false);

  function initializeLeadData(leadData: Record<string, string>) {
    // create a type for message data
    if (!!leadData) {
      const dispatchAction: OnlineSchedulingDispatchAction = {
        type: OnlineSchedulingConstants.initialLeadData,
        result: leadData,
      };
      onlineSchedulingDispatch(dispatchAction);
      setInitialValues((prevState) => {
        return {
          ...prevState,
          ...leadData,
        };
      });
    }
  }

  function onlineSchedulingMessageHandler(message: OnlineSchedulingMessage) {
    if (!message?.type) {
      return;
    }
    switch (message.type) {
      case 'initializeLeadData': {
        return initializeLeadData(message.data);
      }
      default: {
        return;
      }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const parameters = new URLSearchParams(window.location.search);
      const isValidData = parameters.get('isValidData');
      if (isValidData !== 'true') {
        onlineSchedulingDispatch({ type: OnlineSchedulingConstants.setIsLoading, result: false });
      }
      // @ts-ignore add iFrameResizer object to window per https://github.com/davidjbradshaw/iframe-resizer/blob/master/docs/iframed_page/options.md#iframe-page-options
      window.iFrameResizer = {
        onMessage: function (message: OnlineSchedulingMessage) {
          onlineSchedulingMessageHandler(message);
        },
        onReady: function () {
          if ('parentIFrame' in window) {
            // @ts-ignore https://github.com/davidjbradshaw/iframe-resizer/blob/master/docs/iframed_page/methods.md#iframe-page-methods
            window.parentIFrame.sendMessage('ready');
          }
        },
      };
    }
    // only run once on initial load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (onlineSchedulingContext.isLoading && hasPageBeenRendered.current) {
      (async () => {
        // validate form
        const errors = await validateForm(initialValues);
        if (Object.keys(errors).length === 0) {
          const submitActions = props.fields?.children;
          if (submitActions?.length > 0) {
            for (let i = 0; i < submitActions.length; i++) {
              const action: FormFieldProps = submitActions[i];
              const actionHandler = formActionFactory(
                action,
                values, // move trimStringValues
                formProps,
                props,
                onlineSchedulingContext
              );
              // add error handling
              const result = await actionHandler?.executeAction();
              if (!!result?.result) {
                onlineSchedulingDispatch(result.result); // after executing the submit action, dispatch an event to the onineSchedulingReducer to update the OnlineSchedulingContext
                if (result.nextPageIndex && result.nextPageIndex > -1) {
                  updatePageIndex(result.nextPageIndex);
                } else {
                  updatePageIndex(pageIndex + 1);
                }
              }
            }
          }
        }
      })().then(() => {
        onlineSchedulingDispatch({ type: OnlineSchedulingConstants.setIsLoading, result: false });
      });
    }
    hasPageBeenRendered.current = true;
    // only run after the formik values have completely updated
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return <span ref={elementRef}></span>;
};

const OnlineSchedulingInitialPageLoad: FormFieldExport = {
  reactComponent: OnlineSchedulingInitialPageLoadComponent,
};

export default OnlineSchedulingInitialPageLoad;
