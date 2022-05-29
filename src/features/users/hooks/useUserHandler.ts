import { useCallback, useReducer } from 'react';

import { repositories } from 'features';
import { userInitialState, userReducer } from 'features/users';
import { ModalKind } from 'hooks/useModal';

interface Props {
  onOpen: (modal: ModalKind) => void;
}

export const useUserHandler = ({ onOpen }: Props) => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);
  const email = state.email;
  const name = state.name;
  const selectedUserDataset = state.selectedUserDataset;

  const { users } = repositories;
  const { data: usersData, mutate: mutateFetchUsers } = users.useFetchUsers();

  const handleCreteUser = useCallback(() => {
    users.postCreateUser(state.name, state.email).then(() => {
      mutateFetchUsers();
    });
    dispatch({
      type: 'RESET_USER_FORM_DATASET',
    });
  }, [state.email, state.name, mutateFetchUsers, dispatch, users]);

  const handleSelectUser = useCallback(
    (selectedUserDataset: { id: number; email: string; name: string }, modalKind: ModalKind) => {
      dispatch({
        payload: {
          selectedUserDataset,
        },
        type: 'SET_SELECTED_USER',
      });

      switch (modalKind) {
        case 'updateUser': {
          return onOpen('updateUser');
        }
        case 'deleteUser': {
          return onOpen('deleteUser');
        }
      }
    },
    [onOpen],
  );

  const handleUpdateUser = useCallback(() => {
    if (selectedUserDataset) {
      users.updateUser({ name: selectedUserDataset.name, userId: selectedUserDataset.id }).then(() => {
        mutateFetchUsers();
      });
    }
  }, [mutateFetchUsers, selectedUserDataset, users]);

  const handleDeleteUser = useCallback(() => {
    if (selectedUserDataset) {
      users.deleteUser(selectedUserDataset.id).then(() => {
        mutateFetchUsers();
      });
    }
  }, [mutateFetchUsers, selectedUserDataset, users]);

  return {
    dispatch,
    email,
    handleCreteUser,
    handleDeleteUser,
    handleSelectUser,
    handleUpdateUser,
    name,
    selectedUserDataset,
    usersData,
  };
};
