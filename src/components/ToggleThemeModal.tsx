import { Modal } from '../UI-kit/Modal/Modal';
import { ShadowButton } from '../UI-kit/ShadowButton/ShadowButton';
import { usePallete } from '../hooks/usePallete';
import { useModalControls } from '../hooks/useModalControls';

export const ToggleThemeModal = () => {
  const { changeThemeHandler } = usePallete();

  const { closeModal, isOpen, openModal } = useModalControls();

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal closeModal={closeModal} isOpen={isOpen} onSubmit={() => {}}>
        <div>Do you want to toggle Theme?</div>
        <ShadowButton onClick={changeThemeHandler}>Toggle</ShadowButton>
      </Modal>
    </div>
  );
};
