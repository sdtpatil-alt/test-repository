export const validators = {
  email: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  password: (password) => {
    return password.length >= 8;
  },

  required: (value) => {
    return value !== null && value !== undefined && value !== '';
  },

  minLength: (value, min) => {
    return value && value.length >= min;
  },

  maxLength: (value, max) => {
    return value && value.length <= max;
  },

  number: (value) => {
    return !isNaN(value) && value !== '';
  },

  positiveNumber: (value) => {
    return validators.number(value) && value > 0;
  }
};
