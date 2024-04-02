import React, { useRef, useState } from 'react';
import { FormFieldExport } from 'lib/forms';
import { FormikValues, useFormikContext } from 'formik';
import Script from 'next/script';
import ModalWrapper from 'src/helpers/ModalWrapper/ModalWrapper';

const OnlineSchedulingInitIFrameComponent = (): JSX.Element => {
  const { values } = useFormikContext<FormikValues>();
  const elementRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  function initOS() {
    // @ts-ignore This class comes from the osiframe.js external script
    new OnlineSchedulingExperience('os-root', values);
  }

  function closeModal() {
    console.log('closing model');
    setIsModalOpen(false);
  }

  return (
    <span ref={elementRef}>
      <div>
        <Script src="/os/v1/osiframe.js" onLoad={initOS}></Script>
        {isModalOpen && (
          <ModalWrapper size="large" isModalOpen={isModalOpen} handleClose={closeModal}>
            <div id="os-root"></div>
          </ModalWrapper>
        )}
      </div>
    </span>
  );
};

const OnlineSchedulingInitIframe: FormFieldExport = {
  reactComponent: OnlineSchedulingInitIFrameComponent,
};

export default OnlineSchedulingInitIframe;
