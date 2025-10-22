import Garena from '@/pages/garena/Garena';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('Garena');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function GarenaPage() {
  return <Garena />;
}
