export const APP_NAME = 'Webhook Test Application';
export const APP_VERSION = '1.0.0';
export const API_TIMEOUT = 10000;
export const MAX_RETRIES = 3;
export const DEBOUNCE_DELAY = 300;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error occurred. Please check your connection.',
  SERVER_ERROR: 'Server error occurred. Please try again later.',
  UNAUTHORIZED: 'Unauthorized access. Please login.',
  NOT_FOUND: 'Resource not found.',
  VALIDATION_ERROR: 'Invalid input data.',
};

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful!',
  LOGOUT_SUCCESS: 'Logout successful!',
  SAVE_SUCCESS: 'Data saved successfully!',
  DELETE_SUCCESS: 'Data deleted successfully!',
};
