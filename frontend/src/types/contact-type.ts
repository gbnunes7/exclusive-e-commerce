import { z } from 'zod';
import { contactSchema } from '@/schema/contact-schema';

export type ContactType = z.infer<typeof contactSchema>;
