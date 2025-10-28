import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'bn', 'hi', 'es', 'fr', 'de', 'pt'],
  defaultLocale: 'en',
});
