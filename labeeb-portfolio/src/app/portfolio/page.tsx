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
      time: "June - September 2024",
      skillColor: "bg-blue-500/20",
      skills: ["Django", "Dynatrace", "SQL", "Jira", "Elastic", "Siebel", "Monitoring"],
      links: [],
      description: `I managed and resolved 100+ support tickets for Hyundai BlueLink, Kia Connect,
       and Genesis Intelligent Assistant, leveraging Jira, SQL, Elastic, and Siebel to achieve a 90% resolution 
       rate within 24 hours. To improve visibility into operations, I designed and implemented a dynamic 
       Django-based dashboard using the Jira API, enabling administrators to easily track and address weekly 
       issue resolution rates. Additionally, I reduced manual processing time by 50% by automating a VIN 
       validation system for more than 5,000 vehicles across Canadian markets, while ensuring full compliance 
       with industry standards. I also collaborated with the monitoring team, gaining hands-on experience with 
       Dynatrace and Elastic to assess system health and support proactive issue resolution.`,
      photo: "/images/hyundai-office.png",
    },
    {
      id: "experience-2",
      title: "Team Lead",
      company: "Senator Ed Markey's Office",
      time: "February - June 2024",
      skillColor: "bg-blue-500/20",
      skills: ["Python", "Pandas", "Pygeo", "SQL", "Tableau", "Google Earth API"],
      description: `Led a team of six analyzing $2.5M in federal earmark allocations using Python, 
      SQL, and geospatial analysis to make a plan for equitable distribution of resources for the state of Massachusetts. 
      We developed an automated tracking systems with Pandas, PyGeo, and Google Earth API to 
      process census data, surveys, and 300+ project locations, enabling real-time monitoring and equity 
      impact assessments. I was the primary point of contact and delivered data-driven policy recommendations with 
      an interactive Tableau dashboard for stakeholders.`,
      photo: "/images/spark-expo.png",
    },
    {
      id: "experience-3",
      title: "Student Intern",
      company: "Titan Tech ltd.",
      time: "September - November 2023",
      skillColor: "bg-blue-500/20",
      skills: ["Django, Node.js"],
      description: `Developed a full-stack prototype using Django and Node.js to connect laid-off workers 
      with potential employers. Implemented user authentication workflows and a clean, intuitive UI/UX, 
      establishing a strong technical foundation for future development.`,
      photo: "",
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "Mobile Board Game App",
      company: "Amongyall",
      time: "July - September 2025",
      skillColor: "bg-purple-500/20",
      skills: ["React Native", "Typescript", "Supabase", "OpenAI API", "Stripe API"],
      links: [
        { label: "Github", url: "https://github.com/L-alam/amongyall", icon: Github },
        { label: "Demo", url: "#", icon: ExternalLink },
      ],
      description: `Created a mobile board game app to play with friends. Developed with React Native and Expo, 
      featuring three distinct game modes, dynamic player management, and customizable user elements. Engineered 
      a comprehensive backend with Supabase for real-time database management and user authentication, integrated 
      Stripe for secure payments, Google Auth for smooth onboarding, OpenAI for AI-driven game features, and 
      Google AdMob for optimized ad placement and monetization. Led extensive beta testing with 20+ users to 
      refine gameplay and user experience, and successfully deployed the application to the iOS App Store with 
      a production-ready CI/CD pipeline, ensuring robust performance and maintainability.`,
      photo: "/images/amongyall.png",
    },
    {
      id: "project-2",
      title: "Productivity Mobile App",
      company: "Momentum",
      time: "April - May 2025",
      skillColor: "bg-purple-500/20",
      skills: ["Kotlin", "SQL", "Google Maps/Calendar API", "Exercise DB"],
      links: [
        { label: "Code", url: "https://github.com/Mussie0001/CS501-Final-Project-Momentum", icon: Github },
      ],
      description: `Momentum is a productivity-focused Android application built with Kotlin and Room DB that 
      enables users to create, track, and visualize daily habits. The app automates physical activity tracking 
      using Android’s Step Counter Sensor, displays motivational quotes via the ZenQuotes API, and provides 
      calendar-based progress visualization with daily, weekly, and monthly views. Momentum supports cross-device 
      synchronization between smartphones and Wear OS smartwatches, offering adaptive layouts for different 
      screen orientations and a seamless user experience across devices..`,
      photo: "/images/momentum.png",
    },
    {
      id: "project-3",
      title: "",
      company: "AI Pokemon Bot",
      time: "March 2025",
      skillColor: "bg-purple-500/20",
      skills: ["Java"],
      links: [
        { label: "Code", url: "https://github.com/L-alam/Pokemon-bot", icon: Github },
      ],
      description: `Developed a Pokémon Battle AI Agent in Java that uses a stochastic minimax algorithm with 
      aggressive alpha-beta pruning to efficiently evaluate potential moves and outcomes. Implemented tree traversal 
      infrastructure with MAX, MIN, and CHANCE nodes to model game randomness, including move order, status effects, 
      confusion, Pokemon types, and post-turn conditions. Designed utility heuristics and subtree pruning to handle the large, 
      stochastic game tree, enabling the agent to make optimal decisions under uncertainty. Achieved 90%+ win rates 
      against advanced opponents and was a semi-finalist in the BU AI Pokémon Battle competition.`,
      photo: "/images/pokemonbot.png",
    },
    {
      id: "project-4",
      title: "",
      company: "MapReduce & Raft",
      time: "April 2025",
      skillColor: "bg-purple-500/20",
      skills: ["GoLang"],
      links: [
        { label: "Code", url: "https://github.com/L-alam/3PC-golang", icon: Github },
      ],
      description: `Implemented distributed systems concepts in Go by recreating the MapReduce programming model for 
      large-scale data processing. Then reverse-engineering the RAFT consensus algorithm to simulate fault-tolerant 
      replication in real-world scenarios. Designed the system to handle node failures gracefully, ensuring consistency and reliability across distributed nodes`,
      photo: "/images/raft.png",
    },
    {
      id: "project-5",
      title: "",
      company: "Group Trip Planner",
      time: "June 2025",
      skillColor: "bg-purple-500/20",
      skills: ["Django, Javascript, "],
      links: [
        { label: "Code", url: "https://github.com/L-alam/CS-412", icon: Github },
      ],
      description: `Built a grouptrip planning page using Django. Implemented proper Django authentication forms to create users
      to build travel portfolios and create trip planning dashboards. Allowed users to interact with each others real time changes
      and view flight data from Google flights and hotel data from Google Hotels. `,
      photo: "/images/trip-planner.png",
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
