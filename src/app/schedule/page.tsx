// app/schedule/page.tsx
import Navigation from '../components/Navigation';
import { Calendar } from 'lucide-react';

export default function SchedulePage() {
  return (
    <div className="min-h-screen relative">
      {/* Background - fixed and full screen */}
      <div className="fixed inset-0 z-0 bg-[#297373]"></div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        
        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8 md:mb-12">
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
                Thanks for accepting my invite to chat, pick a time that works best for you.
              </p>
            </div>

            {/* Calendar Embed Container */}
            <div className="bg-white/95 rounded-2xl shadow-2xl overflow-hidden border-4 border-white/20">
              <div className="w-full" style={{ minHeight: '600px' }}>
                <iframe 
                  src="https://cal.com/labeeb_alam/30min?layout=week_view" 
                  width="100%" 
                  height="700px" 
                  frameBorder="0"
                  style={{ border: 0 }}
                  title="Schedule a meeting with Labeeb Alam"
                />
              </div>
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