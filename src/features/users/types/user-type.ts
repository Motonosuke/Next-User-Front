import * as z from 'zod';

const zUserScheme = z.object({
  email: z.string(),
  id: z.number(),
  name: z.string(),
});
const zUsersScheme = z.array(zUserScheme);

export type User = z.infer<typeof zUserScheme>;
export type Users = z.infer<typeof zUsersScheme>;

export class UsersEntity {
  readonly zUsersScheme!: Users;

  static new(res: Users) {
    try {
      zUsersScheme.parse(res);
    } catch (error) {
      console.error(error, 'UsersEntity');
    }
    return res;
  }
}
