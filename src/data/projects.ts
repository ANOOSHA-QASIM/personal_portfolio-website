export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink: string;
  image: string; 
}

export const featuredProjects: Project[] = [
  {
    title: "Autonomous AI Task Manager",
    description: "Built entirely via Claude Code (CLI) using Spec-Driven Development. Features a dual-mode interface for manual task management or interaction via an intelligent chatbot.",
    techStack: ["Next.js", "Claude Code", "Neon DB", "FastAPI"],
    liveLink: "https://phase3-todo-chatbot.vercel.app/",
    githubLink: "https://github.com/ANOOSHA-QASIM/phase3_todo_chatbot",
    image: "/todos.png", 
  },
  {
    title: "24/7 Personal AI Employee",
    description: "An autonomous agent developed with Qwen Code and Playwright that manages social media automation and handles Gmail communications independently.",
    techStack: ["Python", "Qwen", "Playwright", "Automation"],
    githubLink: "https://github.com/ANOOSHA-QASIM/Hackkathon-0-Personal-AI-Employee",
    image: "/AI-employee.png",
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description: "A premium retail solution featuring secure Stripe payments, Clerk authentication, and a dynamic add-to-cart system for a seamless shopping experience.",
    techStack: ["Next.js", "Tailwind CSS", "Stripe", "Clerk"],
    liveLink: "https://e-commerce-aq.vercel.app/",
    githubLink: "https://github.com/ANOOSHA-QASIM/e-commerce",
    image: "/ecommerce.png",
  }
];