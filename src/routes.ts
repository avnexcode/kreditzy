/**
 * publicRoutes: Array of routes that can be accessed without logging in
 * - ['/']: Main/landing page
 */
export const publicRoutes = [
    '/',
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
];

/**
 * authRoutes: Array of routes related to authentication
 * - '/login': User login page
 * - '/register': User registration page
 * - '/error': Error page
 */
export const authRoutes = ['/login', '/register', '/error'];

/**
 * apiAuthPrefix: Prefix for authentication APIs
 * - '/api/auth': Base URL for authentication endpoints
 */
export const apiAuthPrefix = '/api/auth';

/**
 * protectedApiRoutes: Array of API routes that require token authorization
 * - '/users': Users API endpoint
 */
export const protectedApiRoutes = ['/api/users'];

/**
 * DEFAULT_LOGIN_REDIRECT: Default page to redirect to after a successful login
 * - '/dashboard': Redirect to the dashboard after login
 */
export const DEFAULT_LOGIN_REDIRECT = '/login';

/**
 * DEFAULT_AUTH_REDIRECT: Default page to redirect to for authentication
 * - '/login': Redirect to the login page
 */
export const DEFAULT_AUTH_REDIRECT = '/dashboard';
