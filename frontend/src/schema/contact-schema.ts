import { z } from 'zod';

export const contactSchema = z.object({
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone is required'),
  message: z.string().min(1, 'Message is required'),
});
