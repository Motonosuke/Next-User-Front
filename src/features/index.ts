import { useFetchUsers, deleteUser, postCreateUser, updateUser } from 'features/users';

export const repositories = {
  users: {
    deleteUser,
    postCreateUser,
    updateUser,
    useFetchUsers,
  },
};

export type Repositories = typeof repositories;
