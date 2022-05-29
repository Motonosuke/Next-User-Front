import React from 'react';

import { Button } from 'components/chakra-parts/Forms';
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalBody,
} from 'components/chakra-parts/Overlay';
import { Text } from 'components/chakra-parts/Typography';

interface Props {
  isOpen: boolean;
  selectedUserDataset: { id: number; email: string; name: string } | null;
  onClickRight: () => void;
  onClose: () => void;
}

export const DeleteUserModal = React.memo(({ isOpen, onClickRight, onClose, selectedUserDataset }: Props) => {
  if (!selectedUserDataset) return null;

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="xl">
      <ModalOverlay />
      <ModalContent pt={6}>
        <ModalHeader textAlign="center">ユーザーを削除</ModalHeader>
        <ModalBody px={10}>
          <Text>{`名前: ${selectedUserDataset.name}`}</Text>
          <Text>{`メールアドレス: ${selectedUserDataset.email}`}</Text>
        </ModalBody>
        <ModalFooter mt={4} pr={4}>
          <Button fontSize="sm" mr={3} onClose={onclose} variant="outline">
            閉じる
          </Button>
          <Button
            colorScheme="primary"
            fontSize="sm"
            onClick={() => {
              onClickRight(), onClose();
            }}
          >
            削除
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

DeleteUserModal.displayName = 'DeleteUserModal';
