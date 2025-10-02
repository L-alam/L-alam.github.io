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
        <main className="container mx-auto px-8 py-12">
          <div className="flex flex-col items-center justify-center min-h-[80vh] max-w-4xl mx-auto">
            {/* Profile and Name Section */}
            <div className="flex items-center space-x-12 mb-16">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Image
                    src="/images/profile.jpg"
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
              
              {/* Text Content */}
              <div className="text-white">
                <h1 className="text-6xl font-bold mb-4">Labeeb Alam</h1>
                <TextType 
                  text={["Welcome to my portfolio!", "Student at Boston University", "Upcoming SWE!"]}
                  typingSpeed={30}
                  pauseDuration={1300}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-xl text-gray-300"
                />

                
                {/* Social Icons */}
                <div className="flex items-center space-x-4 mt-8">
                  {/* Resume Button - Largest */}
                  <a 
                    href="/assets/resume.pdf" 
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors duration-300 font-medium"
                  >
                    <FileText size={20} />
                    <span>Resume / CV</span>
                  </a>
                  
                  {/* GitHub Icon */}
                  <a 
                    href="https://github.com/L-alam" 
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-800 p-3 rounded-lg transition-colors duration-300"
                  >
                    <Github size={20} className="text-white" fill="white" />
                  </a>
                  
                  {/* LinkedIn Icon */}
                  <a 
                    href="https://www.linkedin.com/in/labeeb-alam-7baa3b277" 
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-800 p-3 rounded-lg transition-colors duration-300"
                  >
                    <Linkedin size={20} className="text-white" fill="white"/>
                  </a>
                </div>
              </div>
            </div>

            {/* About Me Section - Constrained to same width as above content */}
            <div className="flex items-start space-x-12">
              {/* Left spacer to align with image */}
              <div className="w-8 md:w-10 flex-shrink-0"></div>
              
              {/* About Me Content - aligned with name section */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-300 mb-4 inline-block border-b-2 border-white/30 pb-2">About Me</h2>
                <div className="bg-transparent">
                  <p className="text-md text-white-400 leading-relaxed pb-10">
                    Hey, I&apos;m Labeeb! I&apos;m a computer science student at Boston University with experience 
                    across full-stack development, mobile applications, and distributed systems. I&apos;ve had the opportunity to work 
                    at Hyundai Autoever America optimizing support systems for connected vehicles, and with Senator Ed Markey&apos;s 
                    office analyzing federal budget allocations. I&apos;m passionate about building scalable solutions for mobile games, 
                   distributed computing systems, solving complex problems and creating impactful solutions.
                  </p>
                </div>
              </div>
              
              {/* Right spacer */}
              <div className="w-1 md:w-2 flex-shrink-0"></div>
            </div>

            <div className="mt-8">
              <Link 
                href="/portfolio" 
                className="text-white-400 text-lg font-medium hover:text-gray-300 transition-colors duration-300 "
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