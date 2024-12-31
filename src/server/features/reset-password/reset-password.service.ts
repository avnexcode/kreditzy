import bcrypt from 'bcrypt';
import type { ResetPasswordRequest } from './reset-password.model';
import type { SafeUserResponse } from '../user/user.model';
import { userService } from '../user/user.service';
import { validateSchema } from '~/server/service/validation.service';
import { resetPasswordRequest } from './reset-password.validation';
import { userRepository } from '../user/user.repository';
import { BadRequestException } from '~/server/helper/error.exception';
import { resetPasswordRepository } from './reset-password.repository';
import { toUserResponse } from '~/server/response/user.response';

export const resetPasswordService = {
    updatePassword: async (
        id: string,
        password: string,
        newPassword: string,
    ): Promise<SafeUserResponse> => {
        await userService.getById(id);

        const validatedRequest: ResetPasswordRequest = validateSchema(
            resetPasswordRequest,
            {
                password,
                new_password: newPassword,
            },
        );

        const existingUser = await userRepository.findUniqueId(id);

        const validatedPassword = existingUser
            ? await bcrypt.compare(
                  validatedRequest.password,
                  existingUser.password!,
              )
            : false;

        if (!validatedPassword) {
            throw new BadRequestException('Invalid password');
        }

        const passwordHashed = await bcrypt.hash(
            validatedRequest.new_password,
            10,
        );
        const user = await resetPasswordRepository.update(id, passwordHashed);

        return toUserResponse(user);
    },
};
