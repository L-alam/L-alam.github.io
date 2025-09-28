// pages/portfolio.tsx (or app/portfolio/page.tsx if using app router)
"use client"

import DarkVeil from '../components/DarkVeil';
import Navigation from '../components/Navigation';
import { ExternalLink, Github, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

// Portfolio data structure
const portfolioData = {
  experiences: [
    {
      id: 'experience-1',
      title: 'Software Engineer Intern',
      company: 'Hyundai Autoever America',
      time: 'Summer 2024',
      skillColor: "bg-blue-500/20",
      skills: ['Java', 'Distributed Systems', 'Vehicle Connectivity', 'Performance Optimization'],
      links: [
        { label: 'Company Site', url: '#', icon: ExternalLink }
      ],
      description: `Optimized support systems for connected vehicles, improving system performance 
        and reliability by 30%. Worked with distributed systems and real-time data processing 
        to enhance the user experience for Hyundai's connected car platform. Collaborated 
        with cross-functional teams to implement scalable solutions for vehicle telemetry 
        and diagnostics. This role gave me extensive experience with enterprise-level Java applications 
        and real-time data processing at scale.`,
      photo: '/images/hyundai-office.jpg' // optional photo
    },
    {
      id: 'experience-2',
      title: 'Data Analyst Intern',
      company: "Senator Ed Markey's Office",
      time: '2023',
      skillColor: "bg-blue-500/20",
      skills: ['Python', 'Data Analytics', 'Policy Analysis', 'Pandas'],
      links: [
        { label: "Senator's Office", url: '#', icon: ExternalLink }
      ],
      description: `Analyzed federal budget allocations and policy impacts using advanced data analytics. 
        Created comprehensive reports and interactive visualizations to support legislative 
        decision-making and policy development initiatives affecting Massachusetts constituents.
        Worked directly with legislative staff to translate complex data into actionable insights 
        for policy makers.`,
      photo: null // no photo for this one
    }
  ],
  projects: [
    {
      id: 'project-1',
      title: 'Mobile Game Backend',
      company: 'Scalable Gaming Infrastructure',
      time: null,
      skillColor: "bg-purple-500/20",
      skills: ['Node.js', 'WebSocket', 'Redis', 'PostgreSQL'],
      links: [
        { label: 'Code', url: '#', icon: Github },
        { label: 'Demo', url: '#', icon: ExternalLink }
      ],
      description: `Built a scalable backend system for mobile games supporting real-time multiplayer 
        functionality, leaderboards, and user management. Designed for high concurrency 
        and low-latency gameplay experiences with support for 10,000+ concurrent players.
        Implemented sophisticated matchmaking algorithms and real-time synchronization 
        to ensure smooth gameplay across different devices and network conditions.`,
      photo: '/images/game-architecture.png'
    },
    {
      id: 'project-2',
      title: 'Distributed Computing System',
      company: 'High-Performance Computing',
      time: null,
      skillColor: "bg-purple-500/20",
      skills: ['Go', 'Docker', 'Kubernetes', 'Apache Kafka'],
      links: [
        { label: 'Code', url: '#', icon: Github }
      ],
      description: `Developed a distributed computing framework for processing large datasets across 
        multiple nodes. Implemented fault tolerance, load balancing, and automatic scaling 
        to handle varying computational workloads efficiently across cloud infrastructure.
        The system can dynamically allocate resources based on workload demands and 
        automatically recover from node failures without data loss.`,
      photo: null
    },
    {
      id: 'project-3',
      title: 'Full-Stack Web App',
      company: 'Modern Web Development',
      time: null,
      skillColor: "bg-purple-500/20",
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      links: [
        { label: 'Code', url: '#', icon: Github },
        { label: 'Live Site', url: '#', icon: ExternalLink }
      ],
      description: `Created a comprehensive web application with user authentication, real-time features, 
        and responsive design. Implemented modern development practices including TypeScript, 
        automated testing, and CI/CD pipelines for seamless deployment and maintenance.
        The application features a clean, intuitive interface and handles thousands of 
        concurrent users with excellent performance metrics.`,
      photo: '/images/webapp-dashboard.jpg'
    }
  ]
};

// Reusable TimelineItem Component
const TimelineItem = ({ item, isExpanded, onToggle }) => {
  const skillColors = {
    'Java': 'bg-blue-500/20 text-blue-300',
    'Python': 'bg-green-500/20 text-green-300',
    'Node.js': 'bg-purple-500/20 text-purple-300',
    'Go': 'bg-orange-500/20 text-orange-300',
    'React': 'bg-cyan-500/20 text-cyan-300',
    'Next.js': 'bg-cyan-500/20 text-cyan-300',
    'TypeScript': 'bg-cyan-500/20 text-cyan-300',
    'Tailwind CSS': 'bg-cyan-500/20 text-cyan-300',
    // Default fallback
    'default': 'bg-gray-500/20 text-gray-300'
  };

  const getSkillColor = (skill) => {
    return skillColors[skill] || skillColors['default'];
  };


  return (
    <div className="relative mb-12">
      {/* Timeline Dot - White */}
      <div className="absolute left-6 w-4 h-4 bg-white rounded-full"></div>
      
      {/* Card */}
      <div className="ml-20">
        <div className="rounded-xl overflow-hidden bg-gray-700/70 backdrop-blur-md border border-white/10">
          <div className="flex">
            {/* Left side - 40% */}
            <div className="w-2/5 bg-gray-900/70 backdrop-blur-md p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-gray-300 font-medium text-sm">{item.company}</p>
              {item.time && <p className="text-gray-400 text-xs mt-1">{item.time}</p>}
            </div>
            
            {/* Right side - 60% */}
            <div className="w-3/5 p-6 flex items-center justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills.map((skill, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-sm ${item.skillColor}`}>
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {item.links.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <a 
                        key={index}
                        href={link.url} 
                        className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <IconComponent size={16} />
                        <span className="text-sm">{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
              
              {/* Dropdown Arrow - Right side */}
              <div className="ml-4">
                <button 
                  onClick={() => onToggle(item.id)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  {isExpanded ? 
                    <ChevronDown size={20} /> : 
                    <ChevronRight size={20} />
                  }
                </button>
              </div>
            </div>
          </div>
          
          {/* Expandable Content */}
          {isExpanded && (
            <div className="px-6 pb-6 border-t border-white/10">
              <div className="pt-4">
                {item.photo ? (
                  <div className="flex gap-6">
                    {/* Photo - 1/3 of dropdown width */}
                    <div className="w-1/3 flex-shrink-0">
                      <img 
                        src={item.photo} 
                        alt={`${item.title} preview`}
                        className="w-full h-48 object-cover rounded-lg border border-white/10"
                      />
                    </div>
                    {/* Description - 2/3 of dropdown width */}
                    <div className="flex-1">
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* No photo - full width description */
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

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
            
            {/* Experience Container */}
            <div className="relative">
              {/* Vertical Timeline Line - White */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/50"></div>
              
              {/* Experience Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 ml-20">Experience</h2>
                
                {portfolioData.experiences.map((experience) => (
                  <TimelineItem
                    key={experience.id}
                    item={experience}
                    isExpanded={expandedCard === experience.id}
                    onToggle={toggleCard}
                  />
                ))}
              </div>
            </div>

            {/* Projects Container */}
            <div className="relative">
              {/* Vertical Timeline Line - White */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/50"></div>

              {/* Projects Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 ml-20">Projects</h2>
                
                {portfolioData.projects.map((project) => (
                  <TimelineItem
                    key={project.id}
                    item={project}
                    isExpanded={expandedCard === project.id}
                    onToggle={toggleCard}
                  />
                ))}
              </div>
            </div>

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