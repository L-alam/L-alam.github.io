"use client"

import DarkVeil from "../components/DarkVeil"
import Navigation from "../components/Navigation"
import { ExternalLink, Github } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import PortfolioStaggeredMenu from "../components/PortfolioStaggeredMenu"

// Portfolio data structure
const portfolioData = {
  experiences: [
    {
      id: "experience-1",
      title: "SWE Intern",
      company: "Hyundai AutoEver America",
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
      title: "Team Lead",
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
      photo: "/images/hyundai-office.png",
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
      photo: "/images/hyundai-office.png",
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

const FolderGrid = ({ items, onFolderClick, expandedItem, folderRefs, isMenuOpen }) => {
  const itemsPerRow = 5
  const rows = []

  for (let i = 0; i < items.length; i += itemsPerRow) {
    rows.push(items.slice(i, i + itemsPerRow))
  }

  return (
    <div className="space-y-12 transition-all duration-500 ease-out">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid grid-cols-5 mx-8 transition-all duration-500 ease-out ${isMenuOpen ? "gap-2" : "gap-8"}`}
        >
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
                  e.currentTarget.style.filter = "drop-shadow(0 0 20px rgba(82, 39, 255, 0.3))"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = ""
                }}
              >
                <div className="w-20 h-20 relative">
                  <div className="absolute inset-0 bg-[#DEE6DE]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                  <Image
                    src="/images/folder-icon-white.png"
                    alt="Folder"
                    width={80}
                    height={80}
                    className="drop-shadow-lg relative z-10 transition-all duration-300 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-active:opacity-100 group-active:animate-ping" />
                  <div className="absolute inset-0 bg-[#DEE6DE]/30 rounded-lg opacity-0 group-active:opacity-100 group-active:animate-pulse" />
                </div>
              </div>
              <div className="text-center max-w-[160px] transition-all duration-300 group-hover:scale-105">
                <h3 className="text-white font-semibold text-lg leading-tight mb-1 break-words">{item.company}</h3>
                <p className="text-gray-100 text-xs mt-2 text-base leading-tight break-words">{item.time}</p>
              </div>
            </div>
          ))}
          {Array.from({ length: itemsPerRow - row.length }).map((_, index) => (
            <div key={`empty-${index}`} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function Portfolio() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [nextItem, setNextItem] = useState<string | null>(null)
  const folderRefs = useRef({})
  const menuRef = useRef<HTMLDivElement>(null)

  const handleFolderClick = (itemId: string) => {
    if (expandedItem === itemId) return

    if (expandedItem && expandedItem !== itemId) {
      setIsTransitioning(true)
      setNextItem(itemId)
      setTimeout(() => {
        setExpandedItem(itemId)
        setNextItem(null)
        setIsTransitioning(false)
      }, 300)
    } else {
      setExpandedItem(itemId)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (expandedItem && menuRef.current) {
        const clickedFolder = Object.values(folderRefs.current).find(
          (folder) => folder && folder.contains(event.target as Node),
        )

        if (clickedFolder) {
          return
        }

        const menuPanel = menuRef.current.querySelector('[data-menu-panel="true"]')
        if (menuPanel && menuPanel.contains(event.target as Node)) {
          return
        }

        const menuComponent = menuRef.current.querySelector(".staggered-menu-wrapper")
        if (menuComponent) {
          // Trigger the close animation by calling the component's close method
          const closeButton = menuPanel?.querySelector("button")
          if (closeButton) {
            closeButton.click()
          }
        }
      }
    }

    if (expandedItem) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [expandedItem])

  const handleCloseDetails = () => {
    setExpandedItem(null)
    setIsTransitioning(false)
    setNextItem(null)
  }

  const getExpandedItemData = () => {
    if (!expandedItem) return null

    const allItems = [...portfolioData.experiences, ...portfolioData.projects]
    return allItems.find((item) => item.id === expandedItem)
  }

  const expandedItemData = getExpandedItemData()

  return (
    <div className="min-h-screen relative">
      
      <div className="fixed inset-0 z-0 bg-[#297373]"></div>

      <div className="relative z-10">
        <Navigation />

        <main className="max-w-6xl mx-auto px-4 py-12">
          <section className="mb-20">
            <div className="mb-12 mx-8">
              <h2 className="text-3xl font-bold text-white mb-4">Experience:</h2>
            </div>

            <FolderGrid
              items={portfolioData.experiences}
              onFolderClick={handleFolderClick}
              expandedItem={expandedItem}
              folderRefs={folderRefs}
              isMenuOpen={!!expandedItem}
            />
          </section>

          <section className="mb-20">
            <div className="mb-12 mx-8">
              <h2 className="text-3xl font-bold text-white mb-4">Projects:</h2>
            </div>

            <FolderGrid
              items={portfolioData.projects}
              onFolderClick={handleFolderClick}
              expandedItem={expandedItem}
              folderRefs={folderRefs}
              isMenuOpen={!!expandedItem}
            />
          </section>
        </main>
      </div>

      {expandedItemData && (
        <div ref={menuRef} className="fixed inset-0 z-40 pointer-events-none">
          <PortfolioStaggeredMenu
            key={expandedItem}
            position="right"
            itemData={expandedItemData}
            colors={["#CBF7ED", "#174F4F"]}
            accentColor="#174F4F"
            onMenuClose={handleCloseDetails}
            autoOpen={true}
            isTransitioning={isTransitioning}
          />
        </div>
      )}
    </div>
  )
}
