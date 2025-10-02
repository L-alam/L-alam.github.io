// In your page.tsx file
import Navigation from './components/Navigation';
import Image from 'next/image';
import TextType from './components/TextType';
import { Github, Linkedin, FileText } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Background - fixed and full screen */}
      <div className="fixed inset-0 z-0 bg-[#297373]"></div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <main className="container mx-auto px-4 sm:px-8 py-12">
          <div className="flex flex-col items-center justify-center min-h-[80vh] max-w-4xl mx-auto">
            {/* Profile and Name Section - Responsive Layout */}
            <div className="flex justify-center w-full mb-12 md:mb-16 ">
              <div className="flex flex-col md:flex-row items-center md:space-x-16">
                {/* Text Content - Shows first on mobile, second on desktop */}
                <div className="text-white text-center md:text-left order-1 md:order-2 mb-8 md:mb-0">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Labeeb Alam</h1>
                  <TextType 
                    text={["Welcome to my portfolio!", "Student at Boston University", "Upcoming SWE!"]}
                    typingSpeed={30}
                    pauseDuration={1300}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-lg sm:text-xl text-gray-300"
                  />
                </div>

                {/* Profile Image - Shows second on mobile, first on desktop */}
                <div className="flex-shrink-0 order-2 md:order-1 mb-6 md:mb-0 md:pr-16">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <Image
                      src="/images/profile.png"
                      alt="Labeeb Alam"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                      style={{ 
                        transform: 'scale(1.3) translate(0, 20px)' 
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons - Centered on mobile, aligned with content on desktop */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16 w-full">
              {/* Resume Button */}
              <a 
                href="/assets/resume.pdf" 
                target="_blank"
                className="bg-blue-500 hover:bg-blue-800 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center space-x-2 transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                <FileText size={18} className="sm:w-5 sm:h-5" />
                <span>Resume / CV</span>
              </a>
              
              {/* GitHub Icon */}
              <a 
                href="https://github.com/L-alam" 
                target="_blank"
                className="bg-blue-500 hover:bg-blue-800 p-2.5 sm:p-3 rounded-lg transition-colors duration-300"
              >
                <Github size={18} className="sm:w-5 sm:h-5 text-white" fill="white" />
              </a>
              
              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/in/labeeb-alam-7baa3b277" 
                target="_blank"
                className="bg-blue-500 hover:bg-blue-800 p-2.5 sm:p-3 rounded-lg transition-colors duration-300"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5 text-white" fill="white"/>
              </a>
            </div>

            {/* About Me Section - Responsive margins */}
            <div className="w-full px-2 sm:px-4 md:px-0">
              <h2 className="text-xl font-bold text-gray-300 mb-4 inline-block border-b-2 border-white/30 pb-2">About Me</h2>
              <div className="bg-transparent">
                <p className="text-sm sm:text-base md:text-md text-white leading-relaxed pb-10">
                  Hey, I&apos;m Labeeb! I&apos;m a computer science student at Boston University with experience 
                  across full-stack development, mobile applications, and distributed systems. I&apos;ve had the opportunity to work 
                  at Hyundai Autoever America optimizing support systems for connected vehicles, and with Senator Ed Markey&apos;s 
                  office analyzing federal budget allocations. I&apos;m passionate about building scalable solutions for mobile games, 
                  distributed computing systems, solving complex problems and creating impactful solutions.
                </p>
              </div>
            </div>

            {/* Portfolio Link - centered on desktop */}
            <div className="mt-8 text-center w-full">
              <Link 
                href="/portfolio" 
                className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300"
              >
                Portfolio &gt;
              </Link>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}