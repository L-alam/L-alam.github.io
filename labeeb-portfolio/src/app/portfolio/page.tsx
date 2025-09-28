// pages/portfolio.tsx (or app/portfolio/page.tsx if using app router)
import DarkVeil from '../components/DarkVeil';
import Navigation from '../components/Navigation';
import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
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
        
        <main className="container mx-auto px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-12 text-center">Portfolio</h1>
            
            {/* Experience Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
              
              {/* Hyundai Autoever America */}
              <div className="mb-8 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10">
                <div className="flex">
                  {/* Left side - 40% with grey background blur */}
                  <div className="w-2/5 bg-gray-900/60 backdrop-blur-md p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Software Engineer Intern</h3>
                    <p className="text-gray-300 font-medium">Hyundai Autoever America</p>
                    <p className="text-gray-400 text-sm mt-1">Summer 2024</p>
                  </div>
                  
                  {/* Right side - 60% for description */}
                  <div className="w-3/5 p-8">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Optimized support systems for connected vehicles, improving system performance 
                      and reliability. Worked with distributed systems and real-time data processing 
                      to enhance the user experience for Hyundai's connected car platform.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Java</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Distributed Systems</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Vehicle Connectivity</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Senator Ed Markey */}
              <div className="mb-8 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10">
                <div className="flex">
                  <div className="w-2/5 bg-gray-900/60 backdrop-blur-md p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Data Analyst Intern</h3>
                    <p className="text-gray-300 font-medium">Senator Ed Markey's Office</p>
                    <p className="text-gray-400 text-sm mt-1">2023</p>
                  </div>
                  
                  <div className="w-3/5 p-8">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Analyzed federal budget allocations and policy impacts using data analytics. 
                      Created comprehensive reports and visualizations to support legislative decision-making 
                      and policy development initiatives.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Data Analytics</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Policy Analysis</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Python</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
              
              {/* Mobile Game Backend */}
              <div className="mb-8 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10">
                <div className="flex">
                  <div className="w-2/5 bg-gray-900/60 backdrop-blur-md p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Mobile Game Backend</h3>
                    <p className="text-gray-300 font-medium">Scalable Gaming Infrastructure</p>
                  </div>
                  
                  <div className="w-3/5 p-8">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Built a scalable backend system for mobile games supporting real-time multiplayer 
                      functionality, leaderboards, and user management. Designed for high concurrency 
                      and low-latency gameplay experiences.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">WebSocket</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Redis</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">PostgreSQL</span>
                    </div>
                    <div className="flex space-x-3">
                      <a href="#" className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors">
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a href="#" className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distributed Computing System */}
              <div className="mb-8 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10">
                <div className="flex">
                  <div className="w-2/5 bg-gray-900/60 backdrop-blur-md p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Distributed Computing System</h3>
                    <p className="text-gray-300 font-medium">High-Performance Computing</p>
                  </div>
                  
                  <div className="w-3/5 p-8">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Developed a distributed computing framework for processing large datasets across 
                      multiple nodes. Implemented fault tolerance, load balancing, and automatic scaling 
                      to handle varying computational workloads efficiently.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Go</span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Docker</span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Kubernetes</span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Apache Kafka</span>
                    </div>
                    <div className="flex space-x-3">
                      <a href="#" className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors">
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full-Stack Web Application */}
              <div className="mb-8 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10">
                <div className="flex">
                  <div className="w-2/5 bg-gray-900/60 backdrop-blur-md p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Web App</h3>
                    <p className="text-gray-300 font-medium">Modern Web Development</p>
                  </div>
                  
                  <div className="w-3/5 p-8">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Created a comprehensive web application with user authentication, real-time features, 
                      and responsive design. Implemented modern development practices including TypeScript, 
                      automated testing, and CI/CD pipelines.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Next.js</span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">TypeScript</span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Tailwind CSS</span>
                    </div>
                    <div className="flex space-x-3">
                      <a href="#" className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors">
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a href="#" className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink size={16} />
                        <span className="text-sm">Live Site</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Back to Home Link */}
            <div className="text-center mt-12">
              <a 
                href="/" 
                className="text-gray-400 text-lg font-medium hover:text-gray-300 transition-colors duration-300"
              >
                &lt; Back to Home
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}