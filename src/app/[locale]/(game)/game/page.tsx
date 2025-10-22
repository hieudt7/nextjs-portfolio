import GamePage from '@/pages/game/Game';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IGameProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IGameProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Game',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Game(props: IGameProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  return (
    <GamePage />
  );
}
