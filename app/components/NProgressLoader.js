'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

// Custom NProgress styles
const NProgressStyles = () => (
  <style jsx global>{`
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: #e1ba4d;
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow:
        0 0 10px #e1ba4d,
        0 0 5px #e1ba4d;
      opacity: 1;
      transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: none;
    }
  `}</style>
);

const NProgressLoader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Configure NProgress
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      minimum: 0.1,
      speed: 200,
      trickleSpeed: 150,
      easing: 'ease-out',
    });
  }, []);

  // Handle route changes for App Router
  useEffect(() => {
    // Start progress on navigation
    NProgress.start();

    // Complete after a short delay
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname, searchParams]);

  // Handle link clicks
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleLinkClick = e => {
      const target = e.currentTarget;
      if (
        target.tagName === 'A' &&
        target.href.startsWith(window.location.origin) &&
        !target.target &&
        !target.download &&
        !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
      ) {
        NProgress.start();
      }
    };

    // Handle all internal links
    const processLinks = () => {
      const links = document.querySelectorAll(
        'a[href^="/"], a[href^="' + window.location.origin + '"]'
      );
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
        link.addEventListener('click', handleLinkClick);
      });
    };

    // Initial setup
    processLinks();

    // Monitor for dynamically added links
    const observer = new MutationObserver(() => {
      processLinks();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      const links = document.querySelectorAll(
        'a[href^="/"], a[href^="' + window.location.origin + '"]'
      );
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
      observer.disconnect();
    };
  }, []);

  return <NProgressStyles />;
};

export default NProgressLoader;
