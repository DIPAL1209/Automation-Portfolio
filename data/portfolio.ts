export const portfolio = {
    name: "DIPAL PATEL",
    initials: "DP",
    role: "Full-Stack Developer",
    // email: "Dipalpatel",
    location: "Ahmedabad, I ndia",
    resumeUrl: "/resume.pdf",
    photo: "./profile-img.jpg",
    available: true,
    tagline:
        "I craft blazing-fast, scalable web experiences with the MERN stack and Next.js — from pixel-perfect UIs to resilient APIs.",
    socials: {
        github: "https://github.com/yourname",
        linkedin: "https://www.linkedin.com/in/dipal-patel-p12092003",
        twitter: "https://twitter.com/yourname",
    },
    roles: ["Full-Stack Developer", "MERN Stack Engineer", "Node.JS Developer"],
    about: {
        story:
            "I’m a passionate Full-Stack Developer based in Ahmedabad, India, with over 4 years of experience building modern, scalable web applications. I specialize in the MERN stack and modern frontend frameworks like Next.js, focusing on creating fast, responsive, and user-centric digital experiences.\n" +
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
            // { label: "Powered by coffee", icon: "Coffee" },
            { label: "Open-source contributor", icon: "Github" },
        ],
    },
    skills: [
        {
            category: "Backend",
            icon: "Server",
            items: [
                { name: "Node.js", color: "#339933" },
                { name: "Express.js", color: "#FF9933" },
                { name: "Socket.IO", color: "#25c2a0" },
            ],
        },
        {
            category: "Frontend",
            icon: "Monitor",
            items: [
                { name: "React", color: "#61dafb" },
                { name: "Next.js", color: "#880000" },
                { name: "HTML", color: "#e34f26" },
                { name: "CSS", color: "#1572b6" },
                { name: "Tailwind CSS", color: "#38bdf8" },
                { name: "Material UI", color: "#007fff" },
            ],
        },
        {
            category: "Database",
            icon: "Database",
            items: [
                { name: "MongoDB", color: "#47a248" },
                { name: "SQL", color: "#f29111" },
                { name: "Mongoose", color: "#880000" },
            ],
        },
    ],
    projects: [
        {
            title: "Real-Time Chat Application",
            description:
                "A scalable chat system with instant messaging, typing indicators, and seamless communication.",
            image:
                "/Chat-img.png",
            tech: ["Socket.IO", "Node.js", "React", "MongoDB", "Express"],
            github: "https://github.com/Dipalpatel-12/ChatApp-Main",
            live: "https://chat-app-main-seven.vercel.app",
        },
        {
            title: "Eyevestor Platform",
            description:
                "A clean and responsive investor platform UI built with Next.js and Tailwind CSS.",
            image:
                "Eyevestor-img.jpg",
            tech: ["Next.js", "Tailwind", "JavaScript"],
            github: "https://github.com/shreyaoptimitylogics-ai/eyevestor-website",
            live: "https://eyevestor-website.vercel.app",
        },
        {
            title: "Rick’s Beach Rental Platform",
            description:
                "Built a high-performance full-stack system for rental bookings with real-time data handling, secure payments, and cloud-scalable architecture.",
            image:
                "Beach-rentals-img.jpg",
            tech:["Next.js", "Node.js", "Express", "MongoDB", "AWS", "Stripe", "Tailwind CSS"],
            github: "https://github.com/Dipalpatel-12",
            live: "https://www.waterboyrentals.com/",
        },
        {
            title: "Rick’s Beach Rental Platform",
            description:
                "Built a high-performance full-stack system for rental bookings with real-time data handling, secure payments, and cloud-scalable architecture.",
            image:
                "Beach-rentals-img.jpg",
            tech:["Next.js", "Node.js", "Express", "MongoDB", "AWS", "Stripe", "Tailwind CSS"],
            github: "https://github.com/Dipalpatel-12",
            live: "https://www.waterboyrentals.com/",
        },

        {
            title: "Rick’s Beach Rental Platform",
            description:
                "Built a high-performance full-stack system for rental bookings with real-time data handling, secure payments, and cloud-scalable architecture.",
            image:
                "Beach-rentals-img.jpg",
            tech:["Next.js", "Node.js", "Express", "MongoDB", "AWS", "Stripe", "Tailwind CSS"],
            github: "https://github.com/Dipalpatel-12",
            live: "https://www.waterboyrentals.com/",
        },
        {
            title: "Eyevestor Platform",
            description:
                "A clean and responsive investor platform UI built with Next.js and Tailwind CSS.",
            image:
                "Eyevestor-img.jpg",
            tech: ["Next.js", "Tailwind", "JavaScript"],
            github: "https://github.com/shreyaoptimitylogics-ai/eyevestor-website",
            live: "https://eyevestor-website.vercel.app",
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
            year: "2022 – 2024",
            title: "Web Developer",
            description: "Worked at Thinknovus building responsive web applications and improving UI performance using modern frontend technologies."
        },
        {
            year: "2024 – 2025",
            title: "Full-Stack Developer",
            description: "At Optimity Logics, developed full-stack applications with scalable backend systems, APIs, and modern frontend architecture."
        },
        {
            year: "2025 – 2026",
            title: "Senior Full-Stack Developer",
            description: "Leading development of high-performance applications at Optimity Logics, focusing on scalable architecture, and optimized user experience."
        }
    ],
    emailjs: {
        serviceId: "YOUR_SERVICE_ID",
        templateId: "YOUR_TEMPLATE_ID",
        publicKey: "YOUR_PUBLIC_KEY",
    },
};

export type Portfolio = typeof portfolio;
