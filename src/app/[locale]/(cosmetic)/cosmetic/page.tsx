import CosmeticPage from '@/pages/cosmetic/Cosmetic';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type ICosmeticProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ICosmeticProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Cosmetic',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Cosmetic(props: ICosmeticProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  return (
    <CosmeticPage />
  );
}
