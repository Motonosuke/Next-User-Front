import * as z from 'zod';

const zBodyUpdateUserScheme = z.object({ name: z.string(), userId: z.number() });

export type BodyUpdateUser = z.infer<typeof zBodyUpdateUserScheme>;
