"use client"
import React, { useState, useEffect } from 'react' // useEffect aur useState add kiya
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Project } from '@/data/projects'
import Image from 'next/image'

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const isEven = index % 2 === 0;
  
  // --- Hydration Fix Start ---
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Jab tak browser load na ho, kuch render mat karo takay error na aaye
  }
  // --- Hydration Fix End ---

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-32 last:mb-0`}
    >
      {/* Image Side with Fixed Container */}
      <div className={`w-full lg:w-1/2 flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="flex flex-col items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_12px_#14b8a6]" />
            <div className="w-[1px] h-48 bg-gradient-to-b from-teal via-teal/20 to-transparent" />
        </div>
        
        <div className="flex-1 px-6 group">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-teal/20 bg-slate-900/50 
            shadow-[0_0_40px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_60px_rgba(20,184,166,0.25)] 
            transition-all duration-700">
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10 group-hover:opacity-0 transition-opacity" />
            
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out contrast-110 saturate-125"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 space-y-5">
        <span className="text-teal font-bold text-[10px] uppercase tracking-widest">0{index + 1} / Project</span>
        <h3 className="text-white text-2xl font-bold tracking-tight">{project.title}</h3>
        
        <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2.5 pt-4"> 
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="px-4 py-2 text-[12px] font-semibold tracking-wide bg-white/5 border border-white/10 text-slate-300 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-teal hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:text-white cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-8"> 
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              className="relative flex items-center gap-2 px-5 py-2.5 bg-[#0f172a] border-2 border-teal/40 text-teal rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:border-teal hover:bg-[#020617] group/btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                Live Demo 
                <FaExternalLinkAlt className="text-[10px] group-hover/btn:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          )}

          <a 
            href={project.githubLink} 
            target="_blank" 
            className="relative flex items-center gap-2 px-5 py-2.5 bg-[#0f172a] border-2 border-white/10 text-slate-300 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 hover:border-teal/40 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:text-white group/git"
          >
            <span className="relative z-10 flex items-center gap-2">
              GitHub Repo 
              <FaGithub className="text-base group-hover/git:rotate-12 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard