"use client"
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'

const About = () => {
  return (
    <section id='about' className='relative w-full min-h-screen py-24 px-6 md:px-16 bg-darkBg overflow-hidden flex flex-col items-center justify-center'>
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[50%] left-[20%] w-[500px] h-[500px] bg-teal/5 blur-[150px] rounded-full -z-10" />

      <div className='w-full max-w-5xl mx-auto'>
        
        {/* --- HEADING --- */}
        <SectionHeading>ABOUT <span className='text-teal'>ME</span></SectionHeading>

        {/* --- VERTICAL TIMELINE LAYOUT --- */}
        <div className='relative max-w-3xl mx-auto md:ml-24'>
          
          {/* Left Side Vertical Line */}
          <div className='absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-teal via-teal/20 to-transparent' />

          <div className='flex flex-col gap-14'>
            
            {/* 1. Intro Tagline - Lightened Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} // Reduced distance
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Only animates once
              transition={{ duration: 0.6, ease: "easeOut" }}
              className='relative pl-10'
            >
                <div className='absolute left-[-5.5px] top-2 w-3 h-3 rounded-full bg-darkBg border-2 border-teal shadow-[0_0_8px_#14b8a6] z-10' />
                <p className='text-slate-300 text-xl md:text-xl text-center tracking-normal font-semibold'>
                  A dedicated developer on a mission to bridge the gap between intelligent AI systems and user-centric web solutions.
                </p>
            </motion.div>

            {/* 2. My Journey Detail - Lightened Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className='relative pl-10 space-y-6'
            >
                <div className='absolute left-[-5.5px] top-2 w-3 h-3 rounded-full bg-darkBg border-2 border-teal z-10' />
                
                <div className='inline-block rounded-full px-4 py-1 bg-teal/10 border border-teal/20 text-teal font-bold text-xs md:text-sm uppercase tracking-widest'>
                  My Journey
                </div>

                <div className='space-y-6 text-slate-400 text-base md:text-lg leading-relaxed tracking-wide'>
                    <p>
                      My journey into the world of tech started with a simple question: <span className='text-white font-medium'>How does code actually turn into a working website?</span> What began as a focus on Frontend Development has now grown into a deep expertise in Agentic AI. Currently, as a student at <span className='text-teal'>GIAIC (Quarter 4)</span>, I am focused on building digital tools that use smart technology to solve everyday problems.
                    </p>
                    <p>
                      I specialize in combining Next.js and Python with AI. By using tools like <span className='text-white'>Claude and the OpenAI SDK</span>, I build systems that are more than just static pages—they are intelligent agents that can think and act. For me, every project is a chance to create a smooth experience that saves time and makes work easier through automation.
                    </p>
                </div>
            </motion.div>

            {/* 3. Mission Box - Lightened Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className='relative pl-10'
            >
                <div className='absolute left-[-5.5px] top-2 w-3 h-3 rounded-full bg-darkBg border-2 border-teal z-10' />
                
                <div className='bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-10 transition-all hover:border-teal/20'>
                    <h2 className='font-bold text-xl md:text-2xl text-teal mb-4 uppercase tracking-tighter'>
                        Mission <span className='text-white'>Statement</span>
                    </h2>
                    <p className='text-slate-400 text-lg leading-relaxed italic'>
                      "My mission is to make AI and automation simple and useful for everyone, while making sure technology always feels human and easy to use."
                    </p>
                </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About