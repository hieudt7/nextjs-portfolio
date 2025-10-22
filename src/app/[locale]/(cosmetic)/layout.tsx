import { setRequestLocale } from 'next-intl/server';
import BackToHomeButton from '@/components/BackToHomeButton';
import OpenInNewTabButton from '@/components/OpenInNewTabButton';

export default async function CosmeticLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen w-full">
      {props.children}

      {/* Open in New Tab Button */}
      <OpenInNewTabButton />

      {/* Back to Home Button with Ring Animation */}
      <BackToHomeButton locale={locale} />
    </div>
  );
}
