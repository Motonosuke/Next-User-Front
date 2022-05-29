import { ENV } from 'constants/env';
import { User } from 'features/users';
import { axios } from 'libs/axios';

/**
 * ユーザーを新規作成
 * @param name ユーザー名
 * @param email メールアドレス
 * @returns
 */

export const postCreateUser = async (name: string, email: string): Promise<User> => {
  const path = `${ENV.API_URL}/users`;
  const { data } = await axios.post<User>(path, {
    email,
    name,
  });
  return data;
};
