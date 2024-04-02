// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Placeholder, RouteData, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/types/component-props';
import ModalWrapper, { AnimationStyle, ModalSize } from 'src/helpers/ModalWrapper/ModalWrapper';
import { useEffect, useState } from 'react';
import { useModalIdContext } from 'lib/context/GenericModalIDContext';
import { getEnum } from 'lib/utils';

export type GenericModalProps =
  Feature.EnterpriseWeb.Enterprise.Components.Modal.GenericModal.GenericModal & {
    fields: {
      children: RouteData[];
    };
  } & ComponentProps;
const GenericModal = (props: GenericModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedModalId, setSelectedModalId, prevFocusedElementRef } = useModalIdContext();

  const desktopAnimationStyle =
    getEnum<AnimationStyle>(props.fields?.desktopAnimationStyle) || null;
  const mobileAnimationStyle = getEnum<AnimationStyle>(props.fields?.mobileAnimationStyle) || null;

  const displayCloseBar = props.fields?.displayCloseBar?.value || false;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedModalId('');
    prevFocusedElementRef?.current?.focus();
  };

  const modalSize = getEnum<ModalSize>(props.fields?.modalSize) ?? 'large';

  useEffect(() => {
    if (selectedModalId) {
      selectedModalId === props.fields?.modalId.value && handleOpenModal();
    }
    if (selectedModalId === '') {
      handleCloseModal();
    }
    // "props.fields?.modalId.value" is coming directly from layout service.
    // "handleCloseModal" is a function which is not going to be changed.
    // We can ignore both suggested deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModalId]);

  return (
    <div data-component="modal/genericmodal">
      <ModalWrapper
        size={modalSize}
        handleClose={handleCloseModal}
        modalLabel={props.fields?.modalId.value}
        isModalOpen={isModalOpen}
        desktopAnimationStyle={desktopAnimationStyle}
        mobileAnimationStyle={mobileAnimationStyle}
        displayCloseBar={displayCloseBar}
      >
        <Placeholder
          isGenericModal={isModalOpen}
          name="components"
          rendering={props.rendering}
          render={(components) => {
            return components.map((component, index) => <div key={index}>{component}</div>);
          }}
        />
      </ModalWrapper>
    </div>
  );
};

export default withDatasourceCheck()<GenericModalProps>(GenericModal);
