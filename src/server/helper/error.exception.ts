export class HttpException extends Error {
    constructor(
        public readonly message: string,
        public readonly statusCode: number,
    ) {
        super(message);
    }
}

export class BadRequestException extends HttpException {
    constructor(message = 'Bad Request') {
        super(message, 400);
    }
}

export class NotFoundException extends HttpException {
    constructor(message = 'Not Found') {
        super(message, 404);
    }
}

export class UnauthorizedException extends HttpException {
    constructor(message = 'Unauthorized') {
        super(message, 401);
    }
}
