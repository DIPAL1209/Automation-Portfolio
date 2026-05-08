export const portfolio = {
    name: "DIPAL PATEL",
    role: "Full-Stack Developer",
    email: "dipal.optimitylogics@gmail.com",
    location: "Ahmedabad,Gujarat,India",
    resumeUrl: "/resume.pdf",
    photo: "/profile-img.jpg",
    available: true,
    tagline:
        "I design and develop end-to-end web experiences — blending intuitive UI, scalable backend architecture, cloud infrastructure, and AI integrations using MERN, Next.js, and modern technologies",
    socials: {
        github: "https://github.com/Dipalpatel-12",
        linkedin: "https://www.linkedin.com/in/dipal-patel-p12092003",
    },
    roles: ["Full-Stack Developer", "MERN Stack Engineer", "Next.JS Developer"],
    about: {
        story:
            "I'm a passionate Full-Stack Developer based in Ahmedabad, India, with over 4 years of experience building modern, scalable web applications. I specialize in the MERN stack and modern frontend frameworks like Next.js, focusing on creating fast, responsive, and user-centric digital experiences.\n" +
            "My approach to development goes beyond simply writing code — From designing efficient REST APIs and implementing real-time features to crafting intuitive and responsive user interfaces.\n" +
            "\n" +
            "What Defines My Work\n" +
            "\n" +
            "• I think in systems and architecture, not just individual features\n" +
            "• I prioritize clean, maintainable, and scalable code\n" +
            "• I focus on user experience alongside technical performance\n" +
            "• I enjoy building full-stack solutions from backend to UI",
        experience: "4+ Year Experience",
        highlights: [
            {
                title: "Clean Code",
                description: "Readable, testable, and maintainable code is non-negotiable in every line I write.",
                icon: "Code2",
            },
            {
                title: "Scalable Systems",
                description: "I architect systems that grow gracefully — from a hundred users to a million.",
                icon: "Layers",
            },
            {
                title: "Continuous Learning",
                description: "Tech evolves every day, and so do I — always exploring what's next.",
                icon: "GraduationCap",
            },
        ],
        funFacts: [
            { label: "Ahmedabad, India", icon: "MapPin" },
            { label: "Open-source contributor", icon: "Github" },
        ],
    },
    skills: [
        {
            category: "Frontend",
            icon: "Monitor",
            items: [
                { name: "React", color: "#61dafb" },
                { name: "Next.js", color: "#880000" },
                { name: "HTML", color: "#e34f26" },
                { name: "CSS", color: "#1572b6" },
                { name: "TypeScript", color: "#339933" },
                { name: "Tailwind CSS", color: "#38bdf8" },
                { name: "Material UI", color: "#007fff" },
            ],
        },
        {
            category: "Backend",
            icon: "Server",
            items: [
                { name: "Node.js", color: "#339933" },
                { name: "Supabase", color: "#880000" },
                { name: "Express.js", color: "#FF9933" },
                { name: "REST API Development", color: "#22c55e" },
                { name: "Socket.IO", color: "#25c2a0" },
                { name: "Middleware & API Handling", color: "#6366f1" },
            ],
        },
        {
            category: "Database",
            icon: "Database",
            items: [
                { name: "MongoDB", color: "#47a248" },
                { name: "Mongoose", color: "#880000" },
                { name: "SQL", color: "#f29111" },
                { name: "PostgreSQL", color: "#6366f1" },
                { name: "Redis", color: "#38bdf8" },
            ],
        },
        {
            category: "Integrations & DevOps",
            icon: "Brain",
            items: [
                { name: "OpenAI API", color: "#880000" },
                { name: "AI Implementation", color: "#22c55e" },
                { name: "Chatbot Development", color: "#0ea5e9" },
                { name: "Strapi", color: "#8E75FF" },
                { name: "AWS / Cloud Deployment", color: "#FF9900" },
            ],
        },
    ],
    projects: [
        {
            title: "AI Marketplace Platform",
            description:
                "Built a modern AI marketplace platform enabling creators to showcase and sell tools through live demos, real-time interaction, and a responsive UI.",
            image: "reup.png",
            tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "WebSockets", "MongoDB", "Framer Motion"],
            live: "https://reup.live/",
        },
        {
            title: "Fractional Real Estate Investment Platform",
            description:
                "Developed a modern proptech platform enabling users to invest in real estate through fractional ownership, powered by AI insights, blockchain-based transparency, and a secure investment ecosystem.",
            image: "propftx-img.jpg",
            tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "Blockchain", "Web3", "MongoDB", "AWS"],
            live: "https://www.propftx.com/",
        },
        {
            title: "Beach Rental Platform",
            description:
                "Built a high-performance full-stack system for rental bookings with real-time data handling, secure payments, and cloud-scalable architecture.",
            image: "Beach-rentals-img.jpg",
            tech: ["Next.js", "Node.js", "Express", "MongoDB", "AWS", "Stripe", "Tailwind CSS"],
            live: "https://www.waterboyrentals.com/",
        },
        {
            title: "Real-Time Chat Application",
            description:
                "A scalable chat system with instant messaging, typing indicators, and seamless communication.",
            image: "chatApp-img.jpg",
            tech: ["Socket.IO", "Node.js", "React", "MongoDB", "Express"],
            live: "https://chat-app-main-seven.vercel.app",
        },
        {
            title: "Eyevestor Platform",
            description:
                "A clean and responsive investor platform UI built with Next.js and Tailwind CSS.",
            image: "Eyevestor-img.jpg",
            tech: ["Next.js", "Tailwind", "JavaScript"],
            live: "https://eyevestor-website.vercel.app",
        },
        {
            title: "AI-Powered Event Management Platform",
            description:
                "Developed a full-stack AI-powered platform for corporate event sourcing, contract management, and payments, featuring automated workflows, real-time analytics, and a global vendor network for seamless event execution.",
            image: "Planned-img.jpg",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "AI Automation", "PostgreSQL", "AWS"],
            live: "https://planned.com/",
        },
    ],
    stats: [
        { label: "Projects Built", value: 10, suffix: "+" },
        { label: "Years Experience", value: 4, suffix: "+" },
        { label: "GitHub Commits", value: 500, suffix: "+" },
        { label: "Happy Clients", value: 5, suffix: "+" },
    ],
    timeline: [
        {
            year: "2024 – Present",
            title: "Senior Full-Stack Developer",
            description:
                "Building full-stack applications at Optimity Logics with scalable backend and modern frontend. Designing APIs, integrating AI features, and optimizing performance.",
        },
        {
            year: "2022 – 2024",
            title: "Web Developer",
            description:
                "Worked at Thinknovus building responsive web applications and improving UI performance using modern frontend technologies.",
        },
    ],

    // ─── AI Tools ─────────────────────────────────────────────────────────────
    aiTools: {
        heroes: [
            {
                id: "claude",
                name: "Claude by Anthropic",
                tag: "Architecture",
                accent: "#f97316",
                logoBg: "rgba(249,115,22,0.12)",
                tagBg: "rgba(249,115,22,0.12)",
                tagColor: "#fb923c",
                description:
                    "My primary thinking partner — architecting complex features, writing detailed proposals, debugging tricky logic. Its context window handles entire codebases without losing thread.",
                sparks: ["Architecture", "Proposals", "Debugging", "Code Review"],
            },
            {
                id: "chatgpt",
                name: "ChatGPT",
                tag: "Brainstorm",
                accent: "#10a37f",
                logoBg: "rgba(16,163,127,0.12)",
                tagBg: "rgba(16,163,127,0.12)",
                tagColor: "#10a37f",
                description:
                    "Quick idea bouncing, content drafts, and exploring alternative approaches when weighing architecture decisions. Great for fast exploration without any context setup.",
                sparks: ["Brainstorming", "Drafting", "Exploration"],
            },
        ],
        tools: [
            {
                id: "lovable",
                name: "Lovable",
                tag: "Prototyping",
                accent: "#ff6b6b",
                logoBg: "rgba(255,107,107,0.1)",
                tagBg: "rgba(255,107,107,0.1)",
                tagColor: "#ff6b6b",
                description:
                    "Full-stack prototyping at speed. I validate UI ideas quickly before committing to production-level polish.",
            },
            {
                id: "v0",
                name: "v0 by Vercel",
                tag: "UI Gen",
                accent: "#94a3b8",
                logoBg: "rgba(148,163,184,0.08)",
                tagBg: "rgba(148,163,184,0.08)",
                tagColor: "#94a3b8",
                description:
                    "Generate polished Tailwind + shadcn components from plain descriptions. Massively speeds up UI scaffolding.",
            },
            {
                id: "bolt",
                name: "Bolt",
                tag: "Full-stack",
                accent: "#facc15",
                logoBg: "rgba(250,204,21,0.1)",
                tagBg: "rgba(250,204,21,0.1)",
                tagColor: "#ca8a04",
                description:
                    "Full-stack projects in the browser. Perfect for spinning up interactive demos clients can explore instantly.",
            },
            {
                id: "builder",
                name: "Builder.io",
                tag: "Visual CMS",
                accent: "#6366f1",
                logoBg: "rgba(99,102,241,0.1)",
                tagBg: "rgba(99,102,241,0.1)",
                tagColor: "#818cf8",
                description:
                    "Visual CMS integrated into Next.js — clients manage content without touching code. Zero dev overhead post-launch.",
            },
            {
                id: "cursor",
                name: "Cursor",
                tag: "Coding",
                accent: "#a78bfa",
                logoBg: "rgba(167,139,250,0.1)",
                tagBg: "rgba(167,139,250,0.1)",
                tagColor: "#a78bfa",
                description:
                    "AI-native editor that reads intent, not just syntax. Pair programming that actually keeps pace with how I think.",
            },
            {
                id: "perplexity",
                name: "Perplexity",
                tag: "Research",
                accent: "#34d399",
                logoBg: "rgba(52,211,153,0.1)",
                tagBg: "rgba(52,211,153,0.1)",
                tagColor: "#059669",
                description:
                    "Real-time search with citations. Go-to for library deep-dives, security patches, and client industry context.",
            },
            {
                id: "emergent",
                name: "Emergent",
                tag: "Automation",
                accent: "#22d3ee",
                logoBg: "rgba(34,211,238,0.1)",
                tagBg: "rgba(34,211,238,0.1)",
                tagColor: "#22d3ee",
                description:
                    "AI-driven research and automation. Tracks tech papers and emerging tools that actually matter to my stack.",
            },
            {
                id: "framer",
                name: "Framer",
                tag: "No-Code UI",
                accent: "#2563eb",
                logoBg: "rgba(37,99,235,0.1)",
                tagBg: "rgba(37,99,235,0.1)",
                tagColor: "#60a5fa",
                description:
                    "Rapidly designing high-converting modern websites and interactive SaaS landing pages with polished animations and production-ready responsiveness.",
            },
        ],
    },
}

export type Portfolio = typeof portfolio