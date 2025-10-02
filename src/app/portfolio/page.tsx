"use client"

import Navigation from "../components/Navigation"
import { useState, useRef } from "react"
import Image from "next/image"
import PortfolioStaggeredMenu, { PortfolioItem } from "../components/PortfolioStaggeredMenu"

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
      links: [],
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
      company: "Titan Technologies ltd.",
      time: "September - November 2023",
      skillColor: "bg-blue-500/20",
      skills: ["Django", "Node.js"],
      links: [],
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
        { label: "Github", url: "https://github.com/L-alam/amongyall"},
        { label: "Demo", url: "#"},
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
        { label: "Code", url: "https://github.com/Mussie0001/CS501-Final-Project-Momentum"},
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
        { label: "Code", url: "https://github.com/L-alam/Pokemon-bot"},
      ],
      description: `Developed a Pokémon Battle AI Agent in Java that uses a stochastic minimax algorithm with 
      aggressive alpha-beta pruning to efficiently evaluate potential moves and outcomes. Implemented tree traversal 
      infrastructure with MAX, MIN, and CHANCE nodes to model game randomness, including move order, status effects, 
      confusion, Pokemon types, and post-turn conditions. Designed utility heuristics and subtree pruning to handle the large, 
      stochastic game tree, enabling the agent to make optimal decisions under uncertainty. Achieved 90%+ win rates 
      against advanced opponents and was a semi-finalist at BU AI Pokémon Battle competition.`,
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
        { label: "Code", url: "https://github.com/L-alam/3PC-golang"},
      ],
      description: `Implemented distributed systems concepts in Go by recreating the MapReduce programming model for 
      large-scale data processing. Then reverse-engineering the RAFT consensus algorithm to simulate fault-tolerant 
      replication in real-world scenarios. Designed the system to handle node failures gracefully, ensuring consistency and reliability across distributed nodes`,
      photo: "/images/Raft.png",
    },
    {
      id: "project-5",
      title: "",
      company: "Group Trip Planner",
      time: "June 2025",
      skillColor: "bg-purple-500/20",
      skills: ["Django, Javascript, "],
      links: [
        { label: "Code", url: "https://github.com/L-alam/CS-412"},
      ],
      description: `Built a group trip planning page using Django. Implemented proper Django authentication forms to create users.
      Allowing them to build travel portfolios and trip planning dashboards while able interact with the real time changes of other users.
      Uses and displays web scraped flight data from Google flights and hotel data from Google Hotels.`,
      photo: "/images/trip-planner.png",
    },
  ],
}

interface FolderGridProps {
  items: PortfolioItem[];
  onFolderClick: (item: PortfolioItem) => void;
  expandedItem: PortfolioItem | null;
  folderRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
  isMenuOpen: boolean;
}

const FolderGrid: React.FC<FolderGridProps> = ({ 
  items, 
  onFolderClick, 
  expandedItem, 
  folderRefs, 
  isMenuOpen 
}) => {
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
          {row.map((item, itemIndex) => (
            <div key={item.id} className="flex flex-col items-center space-y-3">
              <div
                ref={(el) => { folderRefs.current[item.id] = el }}
                className={`cursor-pointer transform transition-all duration-300 ease-out
                  hover:scale-110 hover:-translate-y-2 hover:rotate-1 hover:drop-shadow-2xl
                  active:scale-95 active:translate-y-0 active:rotate-0
                  ${expandedItem?.id === item.id ? "scale-105 -translate-y-1 drop-shadow-xl" : ""}
                  group relative`}
                onClick={() => onFolderClick(item)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "drop-shadow(0 0 20px rgba(82, 39, 255, 0.3))"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = ""
                }}
                style={{
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: `${itemIndex * 0.2}s`,
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
  const [expandedItem, setExpandedItem] = useState<PortfolioItem | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const folderRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const menuRef = useRef<HTMLDivElement>(null);

  const handleFolderClick = (item: PortfolioItem) => {
    if (expandedItem?.id === item.id) return;
    
    if (expandedItem && expandedItem.id !== item.id) {
      setIsTransitioning(true);
      setTimeout(() => {
        setExpandedItem(item);
        setIsTransitioning(false);
      }, 300);
    } else {
      setExpandedItem(item);
    }
  };

  const handleCloseDetails = () => {
    setExpandedItem(null);
  };

  return (
    <div className="min-h-screen relative">
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
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
      {expandedItem && (
        <div ref={menuRef} className="fixed inset-0 z-40 pointer-events-none">
          <PortfolioStaggeredMenu
            key={expandedItem.id}
            position="right"
            itemData={expandedItem}
            colors={["#CBF7ED", "#174F4F"]}
            accentColor="#174F4F"
            onMenuClose={handleCloseDetails}
            autoOpen={true}
            isTransitioning={isTransitioning}
          />
        </div>
      )}
    </div>
  );
}