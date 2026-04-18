"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { featuredProjects } from '@/data/projects'
import ProjectCard from './ui/ProjectCard'
import SectionHeading from './ui/SectionHeading'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import CollaborationButton from './ui/CollaborationButton'
import ProjectButton from './ui/ProjectButton'

const Projects = () => {

  // Card entries ke liye light variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section id='projects' className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-28"
        >
          <SectionHeading>
            Featured <span className="text-teal">Projects</span>
          </SectionHeading>
          <p className="text-slate-300 text-center mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic opacity-80">
            "A showcase of my latest work in AI development, web applications, and automation solutions."
          </p>
        </motion.div>

        {/* Projects List - Har card smooth slide hoga */}
        <div className="space-y-40">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </div>

        {/* GitHub Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-28 text-center"
        >
            <p className="text-slate-400 text-lg mb-8 italic">
                "Curious about my CLI tools or Python games? Check them out on GitHub"
            </p>
            <ProjectButton 
              text="Explore More on GitHub" 
              icon={<FaGithub className="text-xl" />} 
              link="https://github.com/ANOOSHA-QASIM"
            />
        </motion.div>

        {/* --- Ready to Build (Wide & Flat) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 max-w-6xl mx-auto px-6"
        >
            <div className="relative py-10 px-6 rounded-[2.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-xl text-center overflow-hidden group shadow-2xl">
                
                {/* Background Teal Glow */}
                <div className="absolute top-0 left-0 w-40 h-full bg-teal/5 blur-[80px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-40 h-full bg-teal/5 blur-[80px] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-white text-xl md:text-2xl font-bold tracking-normal uppercase mb-3">
                        Ready to Build Something <span className="text-teal">Unique?</span>
                    </h2>
                    
                    <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium italic opacity-80 leading-relaxed">
                        "Whether it's an AI-driven automation or a high-performance web app, I'm here to bring your vision to life with cutting-edge tech."
                    </p>
                    
                    <CollaborationButton text="Lets Collaborate" icon={<FaArrowRight className="text-xs" />} link='#contact' />
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects