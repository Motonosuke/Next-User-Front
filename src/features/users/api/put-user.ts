import { ENV } from 'constants/env';
import { User, BodyUpdateUser } from 'features/users';
import { axios } from 'libs/axios';

/**
 * ユーザー情報を更新
 * @param name ユーザー名
 * @param userId ユーザーID
 * @returns
 */

export const updateUser = async ({ name, userId }: BodyUpdateUser): Promise<User> => {
  const path = `${ENV.API_URL}/users/${userId}`;
  const { data } = await axios.put<User>(path, {
    name,
  });
  return data;
};
