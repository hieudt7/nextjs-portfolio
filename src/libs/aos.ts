'use client';

import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 50,
    });
  }, []);
};
