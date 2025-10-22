import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Japan from '@/pages/japan/Japan';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Japan');

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function JapanPage() {
  return <Japan />;
}

