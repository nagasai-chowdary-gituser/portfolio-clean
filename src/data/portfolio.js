/**
 * ============================================
 * PORTFOLIO DATA — EDIT YOUR DETAILS HERE
 * ============================================
 * This is the single source of truth for all
 * content displayed on the portfolio website.
 * Modify this file to personalize your site.
 * ============================================
 */

import resumePDF from "./Nagasai's_resume.pdf";

export const personalInfo = {
    name: "The Nagasai Chowdary",
    firstName: "Nagasai",
    title: "AI Engineer & Full-Stack Developer",
    tagline: "Building intelligent systems that transform ideas into production-grade solutions.",
    bio: "I'm a founder-level engineer specializing in AI/ML systems, full-stack development, and scalable architecture. I bridge the gap between cutting-edge research and production-ready products — from LLM-powered applications to real-time intelligent platforms.",
    resumeLink: resumePDF, // Auto-resolved resume path
    email: "jonnalagaddanagasai6@gmail.com",
    github: "https://github.com/nagasai-chowdary-gituser",
    linkedin: "https://www.linkedin.com/in/jonnalagadda-nagasai-2722a6315/",
    phone: "8688180266", // Optional
};

export const aboutText = {
    story: `With a passion for artificial intelligence and a strong engineering foundation, 
I build products that sit at the intersection of AI research and real-world impact. 
My approach combines deep technical expertise with product thinking — ensuring every 
system I build is not just technically sound, but delivers measurable business value.

From architecting LLM-powered interview platforms to building intelligent healthcare 
systems, I focus on solving complex problems with elegant, scalable solutions.`,
    highlights: [
        { label: "Projects Shipped", value: "10+" },
        { label: "AI Models Deployed", value: "5+" },
        { label: "Lines of Production Code", value: "50K+" },
        { label: "Systems Architected", value: "8+" },
    ],
};

export const skills = {
    languages: ["Python", "C++", "Java", "SQL", "Javascript", "HTML/CSS"],
    frameworks: ["React", "Next.js", "FastAPI", "Flask", "Node.js", "Vite", "Streamlit"],
    aiml: ["OpenAI API", "LangChain", "LangGraph", "TensorFlow", "PyTorch", "HuggingFace", "RAG Systems", "ML/DL", "NLP", "Fine Tuning", "Vector DB", "Agents Building", "MCP Servers", "A2A Systems"],
    backend: ["PostgreSQL", "Supabase", "Redis", "MongoDB", "REST APIs", "GraphQL"],
    devops: ["Docker", "AWS", "Azure", "Vercel", "Render", "GitHub Actions", "Nginx", "Linux", "n8n Automation", "System Design"],
};

export const projects = [
    {
        id: 1,
        name: "AI Interviewer",
        subtitle: "LLM-powered mock interview system with adaptive difficulty & real-time evaluation",
        problem: "Job seekers lack access to realistic, high-quality interview practice with personalized feedback and adaptive difficulty.",
        solution: "Built a multi-mode AI interviewer with RAG-based question generation, real-time video intelligence, adaptive difficulty scaling, and comprehensive performance analytics with hiring-grade scoring.",
        stack: ["React", "FastAPI", "OpenAI", "Supabase", "LangChain", "RAG"],
        results: "Supports 3 interview modes with real-time evaluation, personalized roadmaps, and hiring-grade scoring.",
        github: "https://github.com/nagasai/ai-interviewer",
        demo: "https://chowdary1-ai-interviewer-version-2.hf.space/login",
        color: "#4361ee",
    },
    {
        id: 2,
        name: "AI Doctor",
        subtitle: "AI-powered symptom analysis, diagnosis assistance & medicine recognition system",
        problem: "Quick, reliable health assessments are not accessible to everyone, especially in underserved areas with limited medical expertise.",
        solution: "Developed an intelligent health assistant using OpenAI Vision API for medicine scanning via OCR, coupled with symptom analysis using LLM reasoning, structured diagnosis output, and actionable health recommendations.",
        stack: ["Flask", "OpenAI Vision", "Python", "OCR", "REST API", "NLP"],
        results: "Real-time medicine identification with 95%+ accuracy. Multilingual symptom analysis with actionable health insights.",
        github: "https://github.com/nagasai-chowdary-gituser/Ai-Doctor.git",
        demo: "",
        color: "#06d6a0",
    },
    {
        id: 3,
        name: "Stock Price Predictor",
        subtitle: "ML-driven stock market forecasting with real-time data analysis & trend prediction",
        problem: "Retail investors struggle to make data-driven decisions without access to advanced predictive analytics and market intelligence tools.",
        solution: "Built a machine learning pipeline that ingests real-time market data, applies technical indicator analysis, and uses trained models (LSTM, Random Forest) to forecast stock price movements with confidence intervals.",
        stack: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Flask", "Plotly"],
        results: "Achieved 85%+ directional accuracy on test data. Real-time predictions with interactive visualization dashboards.",
        github: "https://github.com/nagasai/stock-predictor",
        demo: "https://naveen-2007-ai-stock-predictor.hf.space/",
        color: "#7209b7",
    },
    {
        id: 4,
        name: "Gen AI Intelligent Studio",
        subtitle: "Multi-modal generative AI platform for content creation, code generation & creative workflows",
        problem: "Creators and developers need a unified platform to leverage multiple AI capabilities — text, image, code — without juggling fragmented tools.",
        solution: "Created a comprehensive Gen AI studio integrating multiple LLM providers, image generation, code assistance, and prompt engineering tools into a single intelligent workspace with conversation memory and export capabilities.",
        stack: ["React", "Node.js", "OpenAI", "LangChain", "Stable Diffusion", "MongoDB"],
        results: "Unified multi-modal AI workspace supporting text, image, and code generation with persistent conversation history.",
        github: "https://github.com/Naveenkumar-2007/-GenAI-Intelligence-Studio",
        demo: "https://naveenkumar-2007--genai-intelligence-studi-streamlit-app-qreybr.streamlit.app/",
        color: "#f72585",
    },
];

export const capabilities = [
    {
        title: "AI/ML System Design",
        description: "End-to-end design and deployment of production ML pipelines, from data ingestion to model serving.",
        icon: "brain",
    },
    {
        title: "Full-Stack Architecture",
        description: "Scalable web applications with modern frameworks, clean APIs, and performant frontends.",
        icon: "layers",
    },
    {
        title: "LLM Integration",
        description: "RAG systems, prompt engineering, fine-tuning, and deploying LLM-powered product features.",
        icon: "sparkles",
    },
    {
        title: "Product Engineering",
        description: "Translating business requirements into technical specifications and shipping production-ready products.",
        icon: "rocket",
    },
    {
        title: "Data Engineering",
        description: "Building real-time data pipelines, ETL workflows, and analytics infrastructure at scale.",
        icon: "database",
    },
    {
        title: "DevOps & Cloud",
        description: "CI/CD pipelines, containerization, cloud deployment, and infrastructure-as-code.",
        icon: "cloud",
    },
];

export const socialLinks = [
    { name: "GitHub", url: personalInfo.github, icon: "github" },
    { name: "LinkedIn", url: personalInfo.linkedin, icon: "linkedin" },
    { name: "Email", url: `mailto:${personalInfo.email}`, icon: "email" },
];
