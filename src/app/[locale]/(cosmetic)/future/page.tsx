import type { Metadata } from 'next';
import Future from '@/pages/future/Future';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Future');

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function FuturePage() {
  return <Future />;
}
