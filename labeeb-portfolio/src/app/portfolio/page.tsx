// pages/portfolio.tsx (or app/portfolio/page.tsx if using app router)
"use client"

import DarkVeil from '../components/DarkVeil';
import Navigation from '../components/Navigation';
import { ExternalLink, Github, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

// Portfolio data structure
const portfolioData = {
  experiences: [
    {
      id: "experience-1",
      title: "Software Engineer Intern",
      company: "Hyundai Autoever America",
      time: "June 2024 - September 2024",
      skillColor: "bg-blue-500/20",
      skills: ["Django", "Dynatrace", "SQL", "Jira", "Elastic", "Siebel", "Monitoring"],
      links: [{ label: "Company Site", url: "#", icon: ExternalLink }],
      description: `Optimized support systems for connected vehicles, improving system performance 
        and reliability by 30%. Worked with distributed systems and real-time data processing 
        to enhance the user experience for Hyundai's connected car platform. Collaborated 
        with cross-functional teams to implement scalable solutions for vehicle telemetry 
        and diagnostics. This role gave me extensive experience with enterprise-level Java applications 
        and real-time data processing at scale.`,
      photo: "/images/hyundai-office.png",
    },
    {
      id: "experience-2",
      title: "Data Analyst Intern",
      company: "Senator Ed Markey's Office",
      time: "2023",
      skillColor: "bg-blue-500/20",
      skills: ["Python", "Data Analytics", "Policy Analysis", "Pandas"],
      links: [{ label: "Senator's Office", url: "#", icon: ExternalLink }],
      description: `Analyzed federal budget allocations and policy impacts using advanced data analytics. 
        Created comprehensive reports and interactive visualizations to support legislative 
        decision-making and policy development initiatives affecting Massachusetts constituents.
        Worked directly with legislative staff to translate complex data into actionable insights 
        for policy makers.`,
      photo: null,
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "Mobile Game Backend",
      company: "Scalable Gaming Infrastructure",
      time: null,
      skillColor: "bg-purple-500/20",
      skills: ["Node.js", "WebSocket", "Redis", "PostgreSQL"],
      links: [
        { label: "Code", url: "#", icon: Github },
        { label: "Demo", url: "#", icon: ExternalLink },
      ],
      description: `Built a scalable backend system for mobile games supporting real-time multiplayer 
        functionality, leaderboards, and user management. Designed for high concurrency 
        and low-latency gameplay experiences with support for 10,000+ concurrent players.
        Implemented sophisticated matchmaking algorithms and real-time synchronization 
        to ensure smooth gameplay across different devices and network conditions.`,
      photo: "/images/game-architecture.png",
    },
    {
      id: "project-2",
      title: "Distributed Computing System",
      company: "High-Performance Computing",
      time: null,
      skillColor: "bg-purple-500/20",
      skills: ["Go", "Docker", "Kubernetes", "Apache Kafka"],
      links: [{ label: "Code", url: "#", icon: Github }],
      description: `Developed a distributed computing framework for processing large datasets across 
        multiple nodes. Implemented fault tolerance, load balancing, and automatic scaling 
        to handle varying computational workloads efficiently across cloud infrastructure.
        The system can dynamically allocate resources based on workload demands and 
        automatically recover from node failures without data loss.`,
      photo: null,
    },
    {
      id: "project-3",
      title: "Full-Stack Web App",
      company: "Modern Web Development",
      time: null,
      skillColor: "bg-purple-500/20",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        { label: "Code", url: "#", icon: Github },
        { label: "Live Site", url: "#", icon: ExternalLink },
      ],
      description: `Created a comprehensive web application with user authentication, real-time features, 
        and responsive design. Implemented modern development practices including TypeScript, 
        automated testing, and CI/CD pipelines for seamless deployment and maintenance.
        The application features a clean, intuitive interface and handles thousands of 
        concurrent users with excellent performance metrics.`,
      photo: "/images/webapp-dashboard.jpg",
    },
  ],
}

const FolderGrid = ({ items, onFolderClick, expandedItem, folderRefs }) => {
  const itemsPerRow = 5
  const rows = []

  for (let i = 0; i < items.length; i += itemsPerRow) {
    rows.push(items.slice(i, i + itemsPerRow))
  }

  return (
    <div className="space-y-12">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-8 mx-8">
          {row.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-3">
              <div
                ref={(el) => (folderRefs.current[item.id] = el)}
                className={`cursor-pointer transform transition-all duration-300 ease-out
                  hover:scale-110 hover:-translate-y-2 hover:rotate-1 hover:drop-shadow-2xl
                  active:scale-95 active:translate-y-0 active:rotate-0
                  ${expandedItem === item.id ? "scale-105 -translate-y-1 drop-shadow-xl" : ""}
                  group relative`}
                onClick={() => onFolderClick(item.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = ""
                }}
              >
                <div className="w-16 h-16 relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                  <Image
                    src="/images/folder_icon.jpg"
                    alt="Folder"
                    width={64}
                    height={64}
                    className="drop-shadow-lg relative z-10 transition-all duration-300 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-active:opacity-100 group-active:animate-ping" />
                </div>
              </div>
              <div className="text-center max-w-[120px] transition-all duration-300 group-hover:scale-105">
                <h3 className="text-white font-semibold text-sm leading-tight mb-1 truncate">{item.company}</h3>
                <p className="text-gray-300 text-xs leading-tight line-clamp-2">{item.title}</p>
                {item.time && <p className="text-gray-400 text-xs mt-1">{item.time}</p>}
              </div>
            </div>
          ))}
          {/* Fill empty spots to maintain grid alignment */}
          {Array.from({ length: itemsPerRow - row.length }).map((_, index) => (
            <div key={`empty-${index}`} />
          ))}
        </div>
      ))}
    </div>
  )
}

const ItemDetails = ({ item, onClose, isVisible, folderPosition }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setMounted(true)
    }
  }, [isVisible])

  const skillColors = {
    Django: "bg-green-500/20 text-green-300",
    Python: "bg-green-500/20 text-green-300",
    "Node.js": "bg-purple-500/20 text-purple-300",
    Go: "bg-orange-500/20 text-orange-300",
    React: "bg-cyan-500/20 text-cyan-300",
    "Next.js": "bg-cyan-500/20 text-cyan-300",
    TypeScript: "bg-cyan-500/20 text-cyan-300",
    "Tailwind CSS": "bg-cyan-500/20 text-cyan-300",
    Java: "bg-blue-500/20 text-blue-300",
    SQL: "bg-blue-500/20 text-blue-300",
    Docker: "bg-blue-500/20 text-blue-300",
    Kubernetes: "bg-blue-500/20 text-blue-300",
    Dynatrace: "bg-blue-500/20 text-blue-300",
    Jira: "bg-blue-500/20 text-blue-300",
    Elastic: "bg-blue-500/20 text-blue-300",
    Siebel: "bg-blue-500/20 text-blue-300",
    Monitoring: "bg-blue-500/20 text-blue-300",
    "Data Analytics": "bg-green-500/20 text-green-300",
    "Policy Analysis": "bg-green-500/20 text-green-300",
    Pandas: "bg-green-500/20 text-green-300",
    WebSocket: "bg-purple-500/20 text-purple-300",
    Redis: "bg-red-500/20 text-red-300",
    PostgreSQL: "bg-blue-500/20 text-blue-300",
    "Apache Kafka": "bg-orange-500/20 text-orange-300",
    default: "bg-gray-500/20 text-gray-300",
  }

  const getSkillColor = (skill) => {
    return skillColors[skill] || skillColors["default"]
  }

  return (
    <div
      className={`overflow-hidden transition-all duration-700 ease-out ${
        isVisible && mounted
          ? "max-h-[1000px] opacity-100 transform translate-y-0 scale-100"
          : "max-h-0 opacity-0 transform -translate-y-8 scale-95"
      }`}
    >
      {isVisible && folderPosition && (
        <div
          className="absolute w-0.5 bg-gradient-to-b from-blue-400/60 to-transparent animate-pulse"
          style={{
            left: `${folderPosition.x + 32}px`,
            top: `${folderPosition.y + 64}px`,
            height: "60px",
            transformOrigin: "top",
            animation: "drawLine 0.5s ease-out forwards",
          }}
        />
      )}

      <div className="mt-8 mb-12 mx-8">
        <div
          className="rounded-xl overflow-hidden bg-gray-700/70 backdrop-blur-md border border-white/10 
                        transform transition-all duration-500 hover:bg-gray-700/80 hover:border-white/20
                        animate-in slide-in-from-top-4 fade-in"
        >
          {/* Header */}
          <div className="bg-gray-900/70 backdrop-blur-md p-6 flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 animate-in slide-in-from-left-4 fade-in duration-700">
                {item.company}
              </h3>
              <p className="text-gray-300 font-medium text-lg animate-in slide-in-from-left-4 fade-in duration-700 delay-100">
                {item.title}
              </p>
              {item.time && (
                <p className="text-gray-400 text-sm mt-1 animate-in slide-in-from-left-4 fade-in duration-700 delay-200">
                  {item.time}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-all duration-300 p-2 hover:bg-white/10 rounded-lg
                         hover:scale-110 active:scale-95 transform"
            >
              <ChevronDown className="rotate-180 transition-transform duration-300 hover:rotate-[270deg]" size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {item.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:brightness-110 ${getSkillColor(skill)}
                             animate-in slide-in-from-bottom-2 fade-in`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex space-x-4 mb-6">
              {item.links.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-all duration-300 
                               bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-lg hover:scale-105 active:scale-95
                               animate-in slide-in-from-bottom-2 fade-in"
                    style={{ animationDelay: `${(item.skills.length + index) * 50}ms` }}
                  >
                    <IconComponent size={18} className="transition-transform duration-300 hover:rotate-12" />
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </div>

            {/* Description and Photo */}
            {item.photo ? (
              <div className="flex gap-6 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300">
                <div className="w-2/5 flex-shrink-0">
                  <img
                    src={item.photo || "/placeholder.svg"}
                    alt={`${item.title} preview`}
                    className="w-full h-64 object-cover rounded-lg border border-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-300 leading-relaxed text-lg animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [folderPosition, setFolderPosition] = useState<{ x: number; y: number } | null>(null)
  const folderRefs = useRef({})

  const handleFolderClick = (itemId: string) => {
    const folderElement = folderRefs.current[itemId]
    if (folderElement) {
      const rect = folderElement.getBoundingClientRect()
      setFolderPosition({
        x: rect.left,
        y: rect.top,
      })
    }

    setExpandedItem(expandedItem === itemId ? null : itemId)
  }

  const handleCloseDetails = () => {
    setExpandedItem(null)
    setFolderPosition(null)
  }

  const getExpandedItemData = () => {
    if (!expandedItem) return null

    const allItems = [...portfolioData.experiences, ...portfolioData.projects]
    return allItems.find((item) => item.id === expandedItem)
  }

  const expandedItemData = getExpandedItemData()

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

        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* Experience Section */}
          <section className="mb-20">
            <div className="mb-12 mx-8">
              <h2 className="text-3xl font-bold text-white mb-4">Experience:</h2>
            </div>

            <FolderGrid
              items={portfolioData.experiences}
              onFolderClick={handleFolderClick}
              expandedItem={expandedItem}
              folderRefs={folderRefs}
            />

            {/* Expanded Experience Details */}
            {expandedItem && portfolioData.experiences.find((item) => item.id === expandedItem) && (
              <ItemDetails
                item={expandedItemData}
                onClose={handleCloseDetails}
                isVisible={true}
                folderPosition={folderPosition}
              />
            )}
          </section>

          {/* Projects Section */}
          <section className="mb-20">
            <div className="mb-12 mx-8">
              <h2 className="text-3xl font-bold text-white mb-4">Projects:</h2>
            </div>

            <FolderGrid
              items={portfolioData.projects}
              onFolderClick={handleFolderClick}
              expandedItem={expandedItem}
              folderRefs={folderRefs}
            />

            {/* Expanded Project Details */}
            {expandedItem && portfolioData.projects.find((item) => item.id === expandedItem) && (
              <ItemDetails
                item={expandedItemData}
                onClose={handleCloseDetails}
                isVisible={true}
                folderPosition={folderPosition}
              />
            )}
          </section>
        </main>
      </div>

      <style jsx>{`
        @keyframes drawLine {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  )
}
