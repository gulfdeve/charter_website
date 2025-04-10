'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const TopLoader = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Navigation change detection
  useEffect(() => {
    setLoading(true);
    setProgress(20);
    
    // Simulate progress
    const timer1 = setTimeout(() => setProgress(40), 100);
    const timer2 = setTimeout(() => setProgress(60), 200);
    const timer3 = setTimeout(() => setProgress(80), 300);
    const timer4 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 300);
    }, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [pathname, searchParams]);

  // Add click event handlers to all internal links
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleLinkClick = (e) => {
      // Only trigger for internal links
      const target = e.currentTarget;
      if (
        target.tagName === 'A' &&
        target.href.startsWith(window.location.origin) &&
        !target.target &&
        !target.download &&
        !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
      ) {
        setLoading(true);
        setProgress(10);
      }
    };

    // Add event listeners
    const addLinkListeners = () => {
      const links = document.querySelectorAll('a[href^="/"], a[href^="' + window.location.origin + '"]');
      links.forEach(link => {
        link.addEventListener('click', handleLinkClick);
      });
    };

    // Initial setup
    addLinkListeners();

    // Setup mutation observer to handle dynamically added links
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          addLinkListeners();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      const links = document.querySelectorAll('a[href^="/"], a[href^="' + window.location.origin + '"]');
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
      observer.disconnect();
    };
  }, []);

  // Handle form submissions
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleFormSubmit = () => {
      setLoading(true);
      setProgress(10);
    };

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', handleFormSubmit);
    });

    return () => {
      forms.forEach(form => {
        form.removeEventListener('submit', handleFormSubmit);
      });
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: '#E1BA4D',
          transition: 'width 0.2s ease-in-out',
        }}
      />
    </div>
  );
};

export default TopLoader;