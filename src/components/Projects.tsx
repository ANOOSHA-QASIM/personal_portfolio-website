"use client"
import React from 'react'
import { featuredProjects } from '@/data/projects'
import ProjectCard from './ui/ProjectCard'
import SectionHeading from './ui/SectionHeading'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import CollaborationButton from './ui/CollaborationButton'
import ProjectButton from './ui/ProjectButton'

const Projects = () => {
  return (
    <section id='projects' className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main Header */}
        <div className="mb-28">
          <SectionHeading>
            Featured <span className="text-teal">Projects</span>
          </SectionHeading>
          <p className="text-slate-300 text-center mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic opacity-80">
            "A showcase of my latest work in AI development, web applications, and automation solutions."
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-40">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

        {/* GitHub Footer (Glow Effect & Darker Hover) */}
        <div className="mt-28 text-center">
            <p className="text-slate-400 text-lg mb-8 italic">
                "Curious about my CLI tools or Python games? Check them out on GitHub"
            </p>
            <ProjectButton 
      text="Explore More on GitHub" 
      icon={<FaGithub className="text-xl" />} 
      link="https://github.com/ANOOSHA-QASIM"
    />
        </div>

        {/* --- Ready to Build (Wide & Flat) --- */}
<div className="mt-28 max-w-6xl mx-auto px-6">
    <div className="relative py-10 px-6 rounded-[2.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-xl text-center overflow-hidden group shadow-2xl">
        
        {/* Subtle Background Teal Glow (Left & Right) */}
        <div className="absolute top-0 left-0 w-40 h-full bg-teal/5 blur-[80px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-40 h-full bg-teal/5 blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
            {/* Minimal Header */}
           

            {/* Heading - One Line (Wide Impact) */}
            <h2 className="text-white text-xl md:text-2xl font-bold tracking-normal uppercase mb-3">
                Ready to Build Something <span className="text-teal">Unique?</span>
            </h2>
            
            {/* Description - Compact */}
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium italic opacity-80 leading-relaxed">
                "Whether it's an AI-driven automation or a high-performance web app, I'm here to bring your vision to life with cutting-edge tech."
            </p>
            
            {/* Button - Final Glow Style */}
            <CollaborationButton text="Lets Collaborate" icon={<FaArrowRight className="text-xs" />} link='#contact' />
        </div>
    </div>
</div>
      </div>
    </section>
  )
}

export default Projects