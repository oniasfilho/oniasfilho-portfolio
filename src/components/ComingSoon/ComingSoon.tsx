import { useEffect, useState } from 'react';
import { getTranslations, type Locale } from '../../lib/translations';
import SocialLinks from '../SocialLinks';
import styles from './ComingSoon.module.css';

export default function ComingSoon() {
  const [locale, setLocale] = useState<Locale>('en');
  
  useEffect(() => {
    fetch('/api/locale')
      .then(res => res.json())
      .then(data => setLocale(data.locale))
      .catch(() => setLocale('en'));
  }, []);
  
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
