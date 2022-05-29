import { useEffect } from 'react';

import type { CustomNextPage } from 'next';

import { MainLayout } from 'components/Layout';
import { useGoToPage } from 'hooks/useGoToPage';

const Home: CustomNextPage = () => {
  const [{ goToUsersPage }] = useGoToPage();

  useEffect(() => {
    goToUsersPage();
  }, [goToUsersPage]);

  return null;
};

Home.getLayout = MainLayout;
export default Home;
