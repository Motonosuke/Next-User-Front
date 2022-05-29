import { UserState } from 'features/users';

export const UsersActionTypes = {
  RESET_USER_FORM_DATASET: 'RESET_USER_FORM_DATASET',
  SET_EMAIL: 'SET_EMAIL',
  SET_NAME: 'SET_NAME',
  SET_SELECTED_USER: 'SET_SELECTED_USER',
} as const;

const setName = (payload: { name: string }) => ({
  payload,
  type: UsersActionTypes.SET_NAME,
});

const setEmail = (payload: { email: string }) => ({
  payload,
  type: UsersActionTypes.SET_EMAIL,
});

const setSelectedUser = (payload: { selectedUserDataset: UserState['selectedUserDataset'] }) => ({
  payload,
  type: UsersActionTypes.SET_SELECTED_USER,
});

const resetUserFormDataset = () => ({
  type: UsersActionTypes.RESET_USER_FORM_DATASET,
});

export type UsersActions = ReturnType<
  typeof setName | typeof setEmail | typeof resetUserFormDataset | typeof setSelectedUser
>;
