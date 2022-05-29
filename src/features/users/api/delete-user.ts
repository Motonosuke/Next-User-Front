import { ENV } from 'constants/env';
import { axios } from 'libs/axios';

/**
 * ユーザーを削除
 * @param userId ユーザーID
 */

export const deleteUser = async (userId: number) => {
  const path = `${ENV.API_URL}/users/${userId}`;
  await axios.delete(path);
};
