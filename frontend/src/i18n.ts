import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  // This can be dynamic, e.g. based on a user preference cookie
  if (locale === 'en') {
    return {
      messages: (await import('./messages/en.json')).default
    };
  }
  // Add other locales here
});
