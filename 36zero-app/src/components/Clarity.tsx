'use client';

import { useEffect } from 'react';

interface ClarityProps {
  projectId: string;
}

export default function Clarity({ projectId }: ClarityProps) {
  useEffect(() => {
    // Only load Clarity in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Check if Clarity is already loaded
    if (typeof window !== 'undefined' && (window as any).clarity) {
      return;
    }

    // Load Clarity script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${projectId}");
    `;
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [projectId]);

  return null; // This component doesn't render anything
}

// Clarity utility functions
export const clarity = {
  // Track custom events
  event: (eventName: string) => {
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('event', eventName);
    }
  },

  // Set user ID
  setUserId: (userId: string) => {
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('identify', userId);
    }
  },

  // Set custom tags
  set: (key: string, value: string) => {
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('set', key, value);
    }
  },

  // Track page views (usually automatic, but can be used for SPA navigation)
  page: () => {
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('page');
    }
  }
};
