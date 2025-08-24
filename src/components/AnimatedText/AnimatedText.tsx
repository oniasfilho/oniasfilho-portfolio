'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedText({ children, className }: Props) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2
      });
    }
  }, []);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}
