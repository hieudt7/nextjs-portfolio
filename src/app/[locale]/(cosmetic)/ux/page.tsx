import type { Metadata } from 'next';
import Ux from '@/pages/ux/Ux';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Ux');

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function UxPage() {
  return <Ux />;
}
