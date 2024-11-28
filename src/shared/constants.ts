export const SUPPORT_MAIL_ADDRESS = '';
export const CONTACT_MAIL_ADDRESS = '';

export const environment = {
  NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV || 'development',
  API: process.env.NEXT_PUBLIC_API || 'http://localhost:8080/v2',
  STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY || '',
  STRIPE_KEY_TEST: process.env.NEXT_PUBLIC_STRIPE_KEY_TEST || '',
  ORIGIN: process.env.NEXT_PUBLIC_ORIGIN || 'http://localhost:3000',
  WORDPRES_URL: process.env.NEXT_PUBLIC_WORDPRES_URL || '',
};

export const BASE_URL: string = environment.ORIGIN;
export const WP_POST_PATH = '/posts';

// export const MIXPANEL_LIB_NAME = 'sinaglife';
// MIXPANEL_TOKEN: /* ENV.REACT_APP_MIXPANEL_TOKEN ??  */ 'debd1ecb3ca715dea6ecb505a3c477d8',
