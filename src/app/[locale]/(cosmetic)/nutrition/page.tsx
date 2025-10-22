import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Nutrition from '@/pages/nutrition/Nutrition';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nutrition');

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function NutritionPage() {
  return <Nutrition />;
}

