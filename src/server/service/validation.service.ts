import { type ZodType } from 'zod';

export const validateSchema = <T>(zodType: ZodType<T>, request: T): T => {
    return zodType.parse(request);
};
