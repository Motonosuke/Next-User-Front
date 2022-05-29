import useSWR from 'swr';

import { ENV } from 'constants/env';
import { Users, UsersEntity } from 'features/users';
import { axios } from 'libs/axios';

/**
 * ユーザー一覧を取得
 * @returns
 */
export const useFetchUsers = () => {
  return useSWR(`${ENV.API_URL}/users`, (url: string) => getUsers(url), {
    suspense: false,
  });
};

const getUsers = async (url: string): Promise<Users> => {
  const { data } = await axios.get<Users>(url);
  return UsersEntity.new(data);
};
