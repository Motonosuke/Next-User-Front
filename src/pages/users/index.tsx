import { CustomNextPage } from 'next';
import React from 'react';

import { MainLayout } from 'components/Layout';
import { UsersContainer } from 'features/users/components/containers/UsersContainer';

export const Users: CustomNextPage = () => {
  return <UsersContainer />;
};

Users.getLayout = MainLayout;
export default Users;
