import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Bombon from '@/pages/bombon/Bombon';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Bombon');

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function BombonPage() {
  return <Bombon />;
}

