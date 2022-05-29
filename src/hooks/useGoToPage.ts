import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { ROUTE_PATHS } from 'constants/route-paths';

export const useGoToPage = () => {
  const router = useRouter();

  const goToUsersPage = useCallback(() => {
    router.push(ROUTE_PATHS.USERS);
  }, [router]);

  return [{ goToUsersPage }];
};
