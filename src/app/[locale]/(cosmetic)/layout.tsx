import { setRequestLocale } from 'next-intl/server';

export default async function CosmeticLayout(props: {
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
