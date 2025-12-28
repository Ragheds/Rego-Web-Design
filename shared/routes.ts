import { z } from 'zod';
import { insertRequestSchema, requests } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  requests: {
    create: {
      method: 'POST' as const,
      path: '/api/requests',
      input: insertRequestSchema,
      responses: {
        201: z.custom<typeof requests.$inferSelect>(),
        400: errorSchemas.validation,
        500: errorSchemas.internal,
      },
    },
  },
};

export type RequestInput = z.infer<typeof api.requests.create.input>;
