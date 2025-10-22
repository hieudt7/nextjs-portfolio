import { setRequestLocale } from 'next-intl/server';
import '@/styles/home.scss';

export default async function GameLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen w-full">
      {props.children}
    </div>
  );
}
