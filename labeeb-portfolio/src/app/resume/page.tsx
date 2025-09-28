// pages/portfolio.tsx (or app/portfolio/page.tsx if using app router)
import DarkVeil from '../components/DarkVeil';
import Navigation from '../components/Navigation';

export default function Resume() {
  return (
    <div className="min-h-screen relative">
      {/* Same background */}
      <div className="fixed inset-0 z-0">
        <DarkVeil 
          hueShift={50}
          noiseIntensity={0.03}
          scanlineIntensity={0.15}
          speed={0.5}
          scanlineFrequency={0.8}
          warpAmount={0.1}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        <main className="container mx-auto px-8 py-20">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-8">Resume</h1>
            {/* Your portfolio content here */}
          </div>
        </main>
      </div>
    </div>
  );
}