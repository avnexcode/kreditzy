import { creditWorthinessRepository } from './credit-worthiness.repository';

export const creditWorthinessService = {
    countAll: async (): Promise<number> => {
        const creditWorthinessesCount =
            await creditWorthinessRepository.countMany();
        return creditWorthinessesCount;
    },
    create: async request => {
        const creditWorthiness =
            await creditWorthinessRepository.insert(request);
        return creditWorthiness;
    },
    delete: async (id: string) => {
        await creditWorthinessRepository.delete(id);
        return { id };
    },
};
