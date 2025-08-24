"use client";

import Image from "next/image";
import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  return (
    <div className={styles.socialsWrapper}>
      <Image 
        src="/linkedin.svg" 
        alt="LinkedIn" 
        width={35} 
        height={35}
        onClick={() => window.open('https://linkedin.com/in/oniasfilho', '_blank')}
        style={{ cursor: 'pointer' }}
        title="linkedin.com/in/oniasfilho"
      />
      <Image 
        src="/github.svg" 
        alt="GitHub" 
        width={35} 
        height={35}
        onClick={() => window.open('https://github.com/oniasfilho', '_blank')}
        style={{ cursor: 'pointer' }}
        title="github.com/oniasfilho"
      />
      <Image 
        src="/email.svg" 
        alt="Email" 
        width={35} 
        height={35}
        onClick={() => window.open('mailto:onias.filho@gmail.com', '_blank')}
        style={{ cursor: 'pointer' }}
        title="onias.filho@gmail.com"
      />
    </div>
  );
}
