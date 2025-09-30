import { ExternalLink, Github } from "lucide-react"

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
      skills: ["Django", "Node.js"],
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
      links: [{ label: "Code", url: "https://github.com/Mussie0001/CS501-Final-Project-Momentum", icon: Github }],
      description: `Momentum is a productivity-focused Android application built with Kotlin and Room DB that 
      enables users to create, track, and visualize daily habits. The app automates physical activity tracking 
      using Android's Step Counter Sensor, displays motivational quotes via the ZenQuotes API, and provides 
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
      links: [{ label: "Code", url: "https://github.com/L-alam/Pokemon-bot", icon: Github }],
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
      links: [{ label: "Code", url: "https://github.com/L-alam/3PC-golang", icon: Github }],
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
      links: [{ label: "Code", url: "https://github.com/L-alam/CS-412", icon: Github }],
      description: `Built a group trip planning page using Django. Implemented proper Django authentication forms to create users.
      Allowing them to build travel portfolios and trip planning dashboards while able interact with the real time changes of other users.
      Uses and displays web scraped flight data from Google flights and hotel data from Google Hotels.`,
      photo: "/images/trip-planner.png",
    },
  ],
}

export default portfolioData
