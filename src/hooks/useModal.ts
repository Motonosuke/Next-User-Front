import { useState, useCallback } from 'react';

export type ModalKind = 'updateUser' | 'deleteUser' | '';

interface Modal {
  modal: ModalKind;
  onCloseModal: () => void;
  onOpen: (modal: ModalKind) => void;
}

export const useModal: () => Modal = () => {
  const [modal, setModal] = useState<ModalKind>('');

  const onOpen = useCallback((modal: ModalKind) => {
    setModal(modal);
  }, []);

  const onCloseModal = useCallback(() => {
    setModal('');
  }, []);

  return {
    modal,
    onCloseModal,
    onOpen,
  };
};
