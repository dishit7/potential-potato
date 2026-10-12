import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dishit P. Karia",
  initials: "DK",
  url: "https://dishitkaria.dev", // Update with your actual portfolio URL
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
     "FullStack AI Engineer |0.1x Developer",
  summary: "I am currenly working as an SDE-I at Axentia, I love building things, exploring everything tech, and of course, food 🍜",
  avatarUrl: "/gohan_photo-optimized.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Redis",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Azure",
    "Kafka",
    "Socket.IO",
    "Stripe",
    "LemonSqueezy",
     

    
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hanmadishit74@gmail.com",
    tel: "+919819378129",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dishit7", // Update with your GitHub URL
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dishit-004db86724", // Update with your LinkedIn URL
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/dishit_7", // Update with your X/Twitter URL
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hanmadishit74@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Wednesday Solutions",
      href: "#",
      badges: [],
      location: "",
      title: "Forward Deployed Engineer",
      logoUrl: "/wednesday_logo.png",
      start: "March 2026",
      end: "Present",
      description:
        "Designed and built a cross-platform continuous audio intelligence system for Off Grid, using Android foreground services and iOS background audio sessions, Silero VAD, local Whisper/Parakeet/Nemotron transcription, TitaNet speaker identification, and LLM-powered insights. Maintainer and core contributor to Off Grid, an open-source private AI platform with 100K+ downloads across Android and iOS. Added LiteRT as a second on-device inference engine alongside llama.cpp for faster model execution and improved GPU utilization; implemented local MCP support for tool-enabled AI. Solved model download failures on Samsung and other OEM devices caused by long signed Hugging Face CDN URLs by redesigning Android downloads around WorkManager. Designed a Git submodule architecture to separate proprietary IP from the public open-source codebase.",
    },
    {
      company: "Axentia",
      href: "https://axentia.ai", // Update with actual company URL
      badges: [],
      location: "Pune, India",
      title: "Software Development Engineer-I",
      logoUrl: "/axentiai_logo.jpg", // Add company logo
      start: "June 2025",
      end: "February 2026",
      description:
        "Developed an AI-powered cursor-like tool for policy management, ensuring compliance with US company standards including HIPAA and NIST frameworks. Implemented agentic RAG (Retrieval-Augmented Generation) architecture for intelligent document query and retrieval systems. Built and maintained microservice architecture using Node.js and FastAPI, handling high-throughput document processing workflows. Architected and deployed  Kafka on Azure private servers for scalable document processing pipelines.",
    },
    {
      company: "Axentia",
      href: "https://axentia.ai", // Update with actual company URL
      badges: ["Intern"],
      location: "Pune, India",
      title: "Fullstack AI Developer (Intern)",
      logoUrl: "/axentiai_logo.jpg", // Add company logo
      start: "February 2025",
      end: "May 2025",
      description:
        "Implemented real-time chat streaming using Server-Sent Events (SSE), enhancing user experience for AI-powered applications. Integrated LemonSqueezy payment gateway for SaaS product monetization, handling subscription management and billing workflows. Developed and deployed custom web scraper tool using Docker on Render, enabling headless browser automation for complex page scraping. Established CI/CD pipeline using GitHub Actions, automating deployment processes and reducing manual deployment time by 70%.",
    },
    {
      company: "Self-Employed",
      href: "#",
      badges: ["Freelance"],
      location: "Remote",
      title: "Freelance Developer",
      logoUrl: "/freelance.svg", // Add freelance icon
      start: "2024",
      end: "January 2025",
      description:
        "Built an AI SaaS platform for a US-based client as part of a team, handling full-stack development and AI integration. Contributed to the SuperMemory project, a popular open-source repository with over 8.3k stars on GitHub. Developed internal tools for bulk messaging with multiple API integrations, serving enterprise clients.",
    },
  ],

  education: [
    {
      school: "Bharati Vidyapeeth Institute Of Management and Entrepreneurship Development",
      href: "https://bvimr.com", // Update with actual institute URL
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/bharatividyapeeth_logopng.png", // Add institute logo
      start: "2022",
      end: "2025",
    },
  ],

  projects: [
    {
      title: "TranscriptGenie",
      href: "https://transcriptgenie.com", // update with actual URL
      dates: "Feb 2025-Present", // adjust dates
      tags: ["Collaborative", "B2B", "Active"],
      description: "Collaborated on a B2B SaaS platform that converts international marksheets to US grading scales for educational institutions. Contributed key infrastructure components including Apache Kafka implementation for scalable document processing pipelines and Azure VPS deployment with self-managed Kafka clusters. Built custom grading scales feature and implemented Server-Sent Events (SSE) for real-time batch upload progress tracking.",
      technologies: [
        "Apache Kafka",
        "Azure VPS",
        "Server-Sent Events",
        "Document Processing",
        "Next.js",
        "TypeScript"
      ],
      links: [
        {
          type: "Website",
          href: "https://transcriptgenie.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/transcriptgenie.png",
      video: "",
    },
    {
      title: "MicroQuery",
    
      href: "https://microquery.ai",
      dates:"August 2025-Present",
      description: "MicroQuery AI is a t3 chat alternative that provides u access to multiple different llm model providers in one place and allows u to continue chat thread without switching to different providers and helps u get access to multiple models in one subscription",
      technologies: [
        "TypeScript",
        "Next.js",
        "Vercel AI SDK",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://microquery.ai", // Update with actual URL
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/microquery.png",
      video: "",
    },
    {
      title: "We are not really Strangers",
      href: "https://wrnrs-web.vercel.app/",
      dates:"October 2025 -Present",
      description: "We are not really strangers is a online multiplayer game it is a Web Based version of the real life card game we are not really strangers.",
      technologies: [
        "TypeScript",
        "WebSockets",
        "Turbo Repo",
      ],
      image: "/wrnrs.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://wrnrs-web.vercel.app/", // Update with actual URL
          icon: <Icons.globe className="size-3" />,
        },
      ]
    },
    {
      title: "CommSphere",
      href: "https://commsphere.live", // Update with actual live URL
      dates: "July 2024 - Present",
      active: true,
      description:
        "A Discord-like communication platform . Implemented Socket.IO for real-time chat, supporting over 200 simultaneous users with minimal latency. Designed and built server management features, enabling users to add, edit, and delete servers and channels for text, voice, and video interactions.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Socket.IO",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://team-chat-app-n7l0.onrender.com", // Update with actual URL
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dishit7/team-chat-app", // Update with actual GitHub URL
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/commsphere.png", // Add project image
      video: "", // Add project video if available
    },
    {
      title: "Elytra AI",
      href: "https://elytraai.com", // Update with actual live URL
      dates: "Nov 2024 - Present",
      active: true,
      description:
"A counseling bot that actually talks back with a face. I integrated Heygen for real-time avatars and Groq for advanced conversations, then built the systems to personalize every session through a custom admin dashboard and Pinecone-powered recommendations. The result is a face-to-face counseling experience that feels engaging and adaptive.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Heygen",
        "Groq",
        "Pinecone DB",
      ],
      links: [
        {
          type: "Website",
          href: "https://rishii.dev", // Update with actual URL
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rishipatel9/Elytra", // Update with actual GitHub URL
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/elytra.png", // Add project image
      video: "", // Add project video if available
      ribbon: "Hackathon Project",
    },
  ],

  hackathons: [
    {
      title: "Coding Ninja Competition",
      dates: "2024",
      location: "Pune",
      description:
        "Winner of the intercollegiate Coding Ninja competition, showcasing strong problem-solving and coding abilities.",
      image: "/coding-ninja.jpg", // Add competition image
      win: "1st Place Winner",
      links: [],
    },
    {
      title: "100x Generative AI Buildathon",
      dates: "2024",
      location: "Bangalore",
      description:
        "Finalist in the 100x Generative AI Buildathon hosted by 100x Engineers, competing among top AI developers and engineers.",
      image: "/100xeng_logo.jpg", // Add competition image
      win: "Finalist",
      links: [],
    },
    {
      title: "Nvidia Hacks",
      dates: "2024",
      location: "Mumbai",
      description:
        "Participant in Nvidia Hacks, contributing to a world record for the largest GenAI hackathon with thousands of participants worldwide.",
      image: "/nvidia.png", // Add competition image
      links: [],
    },
  ],
} as const;
