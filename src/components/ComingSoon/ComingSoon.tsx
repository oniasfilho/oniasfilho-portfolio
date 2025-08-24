import { useRouter } from 'next/router';
import { getTranslations, type Locale } from '../../lib/translations';
import SocialLinks from '../SocialLinks';
import styles from './ComingSoon.module.css';

export default function ComingSoon() {
  const router = useRouter();
  const locale = (router.locale as Locale) || 'en';
  const t = getTranslations(locale);

  return (
    <main className={styles.constructionSection}>
      <div className={styles.messageWrapper}>
        {t.underConstruction.message} <br /> {t.underConstruction.messageSecondLine}
        <span className="gradient-txt"> {t.underConstruction.soon}</span>.
      </div>
      <SocialLinks />
    </main>
  );
}
