import type { Metadata } from 'next';
import Skphoe from '@/pages/skphoe/Skphoe';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Skphoe');

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function SkphoePage() {
  return <Skphoe />;
}
