export const publicRoutes = [
    '/',
    '/api',
    '/api/users',
    '/api/customers',
    '/api/customers/stats/length',
    '/api/customers/:id',
    '/api/guarantors',
    '/api/guarantors/stats/length',
    '/api/guarantors/:id',
    '/api/loan-references',
    '/api/loan-references/stats/length',
    '/api/loan-references/:id',
    '/api/credit-worthinesses',
    '/api/credit-worthinesses/stats/length',
    '/api/credit-worthinesses/:id',
    '/api/transactions',
    '/api/transactions/stats/length',
    '/api/transactions/:id',
];

export const authRoutes = ['/login', '/register', '/error'];

export const apiAuthPrefix = '/api/auth';

// export const protectedApiRoutes = ['/api/users'];

export const DEFAULT_LOGIN_REDIRECT = '/login';

export const DEFAULT_AUTH_REDIRECT = '/dashboard';
