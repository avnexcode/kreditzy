import { userRepository } from './user.repository';
import { NotFoundException } from '~/server/helper/error.exception';
import type { SafeUserResponse } from './user.model';
import { toUserResponse } from '../../response/user.response';

export const userService = {
    getAll: async (): Promise<SafeUserResponse[]> => {
        const response = await userRepository.findMany();

        const users = response.map(user => toUserResponse(user));

        return users;
    },

    getById: async (id: string): Promise<SafeUserResponse> => {
        const user = await userRepository.findUniqueById(id);

        if (!user) {
            throw new NotFoundException('User with id not found');
        }

        return toUserResponse(user);
    },

    getByEmail: async (email: string): Promise<SafeUserResponse> => {
        const user = await userRepository.findUniqueByEmail(email);

        if (!user) {
            throw new NotFoundException('User with email not found');
        }

        return toUserResponse(user);
    },

    update: async (
        id: string,
        userData: Partial<SafeUserResponse>,
    ): Promise<SafeUserResponse> => {
        await userService.getById(id);
        const user = await userRepository.updateOnce(id, userData);
        return toUserResponse(user);
    },

    deleteOnce: async (id: string): Promise<{ id: string }> => {
        await userService.getById(id);
        await userRepository.deleteOnce(id);
        return { id };
    },
};
