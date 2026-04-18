import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiOpenai, 
  SiFastapi, SiPostgresql, SiJavascript, SiFigma, SiFirebase, 
  SiClerk, SiFramer, SiSanity, SiAuth0, SiNodedotjs, SiVercel, SiGooglecloud 
} from 'react-icons/si';
import { FaHtml5, FaCode, FaServer, FaBrain, FaGithub, FaGitAlt } from 'react-icons/fa';
import { VscCode } from "react-icons/vsc"; // Stable VS Code Icon

export const skillCategories = [
  {
    title: "Frontend Development",
    subtitle: "User Interface & Experience",
    icon: FaCode,
    accent: "#f97316", 
    skills: [
      { name: "Next.js / React.js", level: 92, status: "Expert", icon: SiNextdotjs, iconColor: "#61DAFB" },
      { name: "TypeScript / JS", level: 88, status: "Expert", icon: SiJavascript, iconColor: "#F7DF1E" },
      { name: "Tailwind CSS", level: 95, status: "Expert", icon: SiTailwindcss, iconColor: "#06B6D4" },
      { name: "HTML5 / CSS3", level: 98, status: "Expert", icon: FaHtml5, iconColor: "#E34F26" },
    ]
  },
  {
    title: "Backend & Logic",
    subtitle: "Powering the Application",
    icon: FaServer,
    accent: "#d946ef", 
    skills: [
      { name: "Python", level: 90, status: "Expert", icon: SiPython, iconColor: "#3776AB" },
      { name: "FastAPI", level: 82, status: "Advanced", icon: SiFastapi, iconColor: "#05998B" },
      { name: "API Development", level: 87, status: "Advanced", icon: FaServer, iconColor: "#A8B9CC" },
      { name: "PostgreSQL", level: 75, status: "Familiar", icon: SiPostgresql, iconColor: "#4169E1" },
    ]
  },
  {
    title: "AI & Agentic Systems",
    subtitle: "Your Specialized Edge",
    icon: FaBrain,
    accent: "#10b981", 
    skills: [
      { name: "OpenAI Agents SDK", level: 85, status: "Advanced", icon: SiOpenai, iconColor: "#74aa9c" },
      { name: "Prompt Engineering", level: 95, status: "Expert", icon: FaBrain, iconColor: "#FFD700" },
      { name: "Spec-Driven Dev", level: 90, status: "Advanced", icon: FaCode, iconColor: "#ffffff" },
      { name: "Autonomous Workflows", level: 80, status: "Advanced", icon: SiOpenai, iconColor: "#74aa9c" },
    ]
  }
];

export const toolsMarquee = [
  { name: "Git", icon: FaGitAlt, iconColor: "#F05032" },
  { name: "GitHub", icon: FaGithub, iconColor: "#ffffff" },
  { name: "Vercel", icon: SiVercel, iconColor: "#ffffff" },
  { name: "VS Code", icon: VscCode, iconColor: "#007ACC" },
  { name: "npm", icon: SiNodedotjs, iconColor: "#CB3837" },
  { name: "Framer Motion", icon: SiFramer, iconColor: "#0055FF" },
  { name: "Claude", icon: SiOpenai, iconColor: "#D97706" }, 
  { name: "Gemini", icon: SiGooglecloud, iconColor: "#8E75C2" },
  { name: "Figma", icon: SiFigma, iconColor: "#F24E1E" },
  { name: "Clerk", icon: SiClerk, iconColor: "#ffffff" },
  { name: "Firebase", icon: SiFirebase, iconColor: "#FFCA28" },
  { name: "Sanity", icon: SiSanity, iconColor: "#F03E2F" },
  { name: "NextAuth", icon: SiAuth0, iconColor: "#EB5424" }
];