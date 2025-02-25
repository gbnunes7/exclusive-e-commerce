import { z } from "zod";
import { loginSchema } from "../schema/login-schema";

export type LoginType = z.infer<typeof loginSchema>;