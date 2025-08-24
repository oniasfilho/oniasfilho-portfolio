import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconsRef.current) {
      const icons = iconsRef.current.children;
      
      gsap.fromTo(icons, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.5
      });
    }
  }, []);

  return (
    <div ref={iconsRef} className={styles.socialsWrapper}>
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={24}
        height={24}
        onClick={() => window.open("https://wa.me/5565981522040", "_blank")}
      />
      <Image
        src="/linkedin.svg"
        alt="LinkedIn"
        width={24}
        height={24}
        onClick={() =>
          window.open("https://linkedin.com/in/oniasfilho", "_blank")
        }
      />
      <Image
        src="/email.svg"
        alt="Email"
        width={24}
        height={24}
        onClick={() => window.open("mailto:onias.filho@gmail.com", "_blank")}
      />
      <Image
        src="/github.svg"
        alt="GitHub"
        width={24}
        height={24}
        onClick={() => window.open("https://github.com/oniasfilho", "_blank")}
      />
    </div>
  );
}
