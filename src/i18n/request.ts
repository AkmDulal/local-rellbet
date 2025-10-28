/* eslint-disable @typescript-eslint/no-explicit-any */
import {getRequestConfig} from 'next-intl/server';
import {routing} from '@/i18n/routing';

export default getRequestConfig(async ({requestLocale}) => {
  const requested:any = await requestLocale;
  const locale =
    requested && routing.locales.includes(requested)
      ? requested
      : routing.defaultLocale;
  const messages = (await import(`../messages/${locale}.json`)).default;

  return {locale, messages};
});
