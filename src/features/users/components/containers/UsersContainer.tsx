import React from 'react';

import { Center, VStack } from 'components/chakra-parts/Layout';
import { Heading } from 'components/chakra-parts/Typography';
import { UserForm, UserModal } from 'features/users';
import { useUserHandler } from 'features/users/hooks';
import { useModal } from 'hooks/useModal';

export const UsersContainer = () => {
  const { modal, onCloseModal, onOpen } = useModal();

  const {
    dispatch,
    email,
    handleCreteUser,
    handleDeleteUser,
    handleSelectUser,
    handleUpdateUser,
    name,
    selectedUserDataset,
    usersData,
  } = useUserHandler({
    onOpen,
  });

  return (
    <>
      <UserModal
        handleDeleteUser={handleDeleteUser}
        handleUpdateUser={handleUpdateUser}
        modal={modal}
        onCloseModal={onCloseModal}
        selectedUserDataset={selectedUserDataset}
      />
      <Center flexDirection="column">
        <VStack spacing={10}>
          <Heading as="h1" fontSize="lg">
            USER LIST
          </Heading>
          <UserForm
            dispatch={dispatch}
            email={email}
            handleCreteUser={handleCreteUser}
            handleSelectUser={handleSelectUser}
            name={name}
            usersData={usersData}
          />
        </VStack>
      </Center>
    </>
  );
};
