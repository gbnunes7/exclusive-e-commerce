import { z } from 'zod';
import { signUpSchema } from '../schema/sign-up-schema';

export type SignUpType = z.infer<typeof signUpSchema>;
