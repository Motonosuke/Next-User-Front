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
  bodyText: string;
  headerText: string;
  isCloseOnEsc?: boolean;
  isCloseOnOverlayClick?: boolean;
  isOpen: boolean;
  leftButtonText?: string;
  rightButtonText: string;
  onClickLeft?: () => void;
  onClickRight: () => void;
  onClose: () => void;
}

export const CommonModal = React.memo(
  ({
    bodyText,
    headerText,
    isCloseOnEsc = true,
    isCloseOnOverlayClick = true,
    isOpen,
    leftButtonText,
    onClickLeft,
    onClickRight,
    onClose,
    rightButtonText,
  }: Props) => {
    return (
      <Modal
        closeOnEsc={isCloseOnEsc}
        closeOnOverlayClick={isCloseOnOverlayClick}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent pt={6}>
          <ModalHeader textAlign="center">{headerText}</ModalHeader>
          <ModalBody px={10}>
            <Text>{bodyText}</Text>
          </ModalBody>
          <ModalFooter mt={4} pr={4}>
            {leftButtonText && (
              <Button
                fontSize="sm"
                mr={3}
                onClick={onClickLeft ? () => onClickLeft() : () => onclose}
                variant="outline"
              >
                {leftButtonText}
              </Button>
            )}
            <Button colorScheme="primary" fontSize="sm" onClick={onClickRight}>
              {rightButtonText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
);

CommonModal.displayName = 'CommonModal';
