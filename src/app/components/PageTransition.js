'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const wrapper = document.querySelector('.page-transition-wrapper');
    if (wrapper) {
      wrapper.style.animation = 'none';
      wrapper.offsetHeight; // Trigger reflow
      wrapper.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    }
  }, [pathname]);

  return (
    <div className="page-transition-wrapper">
      {children}
    </div>
  );
} 