import { userRepository } from '../user/user.repository';
import { validateSchema } from '~/server/service/validation.service';
import { loginRequest, registerRequest } from './auth.validation';
import bcrypt from 'bcryptjs';
import { BadRequestException } from '~/server/helper/error.exception';
import { authRepository } from './auth.repository';
import type { RegisterRequest, LoginRequest } from './auth.model';
import type { SafeUserResponse } from '../user/user.model';
import { toUserResponse } from '~/server/response/user.response';

export const authService = {
    register: async (request: RegisterRequest): Promise<SafeUserResponse> => {
        if (!request.password) {
            throw new BadRequestException('Password is required');
        }

        const validatedRequest: RegisterRequest = validateSchema(
            registerRequest,
            request,
        );

        const existsEmail = await userRepository.countByEmail(
            validatedRequest.email,
        );

        if (existsEmail !== 0) {
            throw new BadRequestException('Email already exists');
        }

        const passwordHashed = await bcrypt.hash(
            validatedRequest.password!,
            10,
        );

        const user = await userRepository.insertOnce({
            ...validatedRequest,
            password: passwordHashed,
        });

        return toUserResponse(user);
    },
    login: async (request: LoginRequest): Promise<SafeUserResponse> => {
        const validatedRequest: LoginRequest = validateSchema(
            loginRequest,
            request,
        );

        let user = await userRepository.findUniqueEmail(validatedRequest.email);

        if (!user) {
            throw new BadRequestException('Email or password is invalid');
        }

        const validatedPassword = await bcrypt.compare(
            validatedRequest.password,
            user.password!,
        );

        if (!validatedPassword) {
            throw new BadRequestException('Email or password is invalid');
        }

        user = await authRepository.setAccessToken(validatedRequest.email);

        return user!;
    },
};
