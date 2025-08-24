import { getTranslations, type Locale } from '../../lib/translations';
import SocialLinks from '../SocialLinks';
import styles from './ComingSoon.module.css';

type Props = {
  locale: Locale;
};

export default function ComingSoon({ locale }: Props) {
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
