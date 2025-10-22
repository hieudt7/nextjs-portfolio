import type { Metadata } from 'next';
import Dengi from '@/pages/dengi/Dengi';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Dengi');

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function DengiPage() {
  return <Dengi />;
}
