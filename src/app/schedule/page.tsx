// app/schedule/page.tsx
'use client';

import { useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function SchedulePage() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-expect-error Cal is injected by the embed script at runtime
      if (window.Cal) {
        // @ts-expect-error Cal is injected by the embed script at runtime
        window.Cal('init', { origin: 'https://cal.com' });
        
        // @ts-expect-error Cal is injected by the embed script at runtime
        window.Cal('inline', {
          elementOrSelector: '#cal-inline-embed',
          calLink: 'labeeb_alam/30min',
          layout: 'week_view',
          config: {
            theme: 'light'
          }
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background - fixed and full screen */}
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        
        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8 md:mb-12">
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
                My availability outside of class:
              </p>
            </div>

            {/* Calendar Embed - Using inline embed for better control */}
            <div className="bg-white/95 rounded-2xl shadow-2xl overflow-hidden border-4 border-white/20 p-4">
              <div 
                id="cal-inline-embed" 
                className="w-full"
                style={{ minHeight: '700px' }}
              ></div>
            </div>

            {/* Optional: Info Section Below Calendar */}
            <div className="mt-8 text-center">
              <p className="text-sm sm:text-base text-white/80">
                Having trouble? Email me directly at{' '}
                <a 
                  href="mailto:lalam@bu.edu" 
                  className="text-white font-medium hover:text-gray-300 transition-colors underline"
                >
                  lalam@bu.edu
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}