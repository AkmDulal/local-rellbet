import Rows from '@/components/Rows';
import {getTranslations} from 'next-intl/server';

export default async function explorePage() {
  const t = await getTranslations('pages.home');
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      <Rows count={3} label={t('rowLabel')} />
    </>
  );
}
