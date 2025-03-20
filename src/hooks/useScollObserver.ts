'use client';

import { useEffect, useState } from "react";

const REQUIRED_HEIGHT = 15

const useScrollObserver = (): boolean => {
  
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(()=>{
    const handleScroll = () => {
      const show: boolean = window.scrollY > REQUIRED_HEIGHT;
      setIsScrolled(show);
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isScrolled
}

export default useScrollObserver;