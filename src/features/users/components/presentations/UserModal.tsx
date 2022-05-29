import React from 'react';

import { Portal } from 'components/chakra-parts/Other';
import { DeleteUserModal, UpdateUserModal } from 'features/users';
import { ModalKind } from 'hooks/useModal';

interface Props {
  modal: ModalKind;
  selectedUserDataset: { id: number; email: string; name: string } | null;
  handleDeleteUser: () => void;
  handleUpdateUser: () => void;
  onCloseModal: () => void;
}

export const UserModal = ({ handleDeleteUser, handleUpdateUser, modal, onCloseModal, selectedUserDataset }: Props) => {
  return (
    <Portal>
      <UpdateUserModal
        isOpen={modal === 'updateUser'}
        onClickRight={handleUpdateUser}
        onClose={onCloseModal}
        selectedUserDataset={selectedUserDataset}
      />
      <DeleteUserModal
        isOpen={modal === 'deleteUser'}
        onClickRight={handleDeleteUser}
        onClose={onCloseModal}
        selectedUserDataset={selectedUserDataset}
      />
    </Portal>
  );
};
