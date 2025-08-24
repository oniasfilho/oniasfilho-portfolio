import { GetServerSideProps } from 'next';
import ComingSoon from '../components/ComingSoon';
import { type Locale } from '../lib/translations';

type Props = {
  locale: Locale;
};

export default function Home({ locale }: Props) {
  return <ComingSoon locale={locale} />;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const country = req.headers['x-vercel-ip-country'] as string;
  const locale = country === 'BR' ? 'pt-BR' : 'en';

  return {
    props: {
      locale,
    },
  };
};
