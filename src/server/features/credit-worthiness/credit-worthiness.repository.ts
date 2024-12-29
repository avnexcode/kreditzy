import { db } from '~/server/db/prisma';

export const creditWorthinessRepository = {
    countMany: async () => {
        const creditWorthinessesCount = await db.creditWorthiness.count();
        return creditWorthinessesCount;
    },
    insert: async request => {
        const creditWorthiness = await db.creditWorthiness.create({
            data: { ...request },
        });
        return creditWorthiness;
    },
    delete: async (id: string) => {
        const creditWorthiness = await db.creditWorthiness.delete({
            where: { id },
        });
        return creditWorthiness;
    },
};
