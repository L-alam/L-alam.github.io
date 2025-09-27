import Image from "next/image";
import DarkVeil from './components/DarkVeil';
import Navigation from "./components/Navigation";


export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Background - fixed and full screen */}
      <div className="fixed inset-0 z-0">
        <DarkVeil 
          hueShift={0}
          noiseIntensity={0.02}
          scanlineIntensity={0.1}
          speed={0.3}
          scanlineFrequency={0.5}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        <main>
          {/* Your page content here */}
        </main>
      </div>
    </div>
  );
}