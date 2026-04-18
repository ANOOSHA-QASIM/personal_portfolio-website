"use client"
import React from 'react'
import ProjectButton from './ui/ProjectButton'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLongArrowAltDown } from 'react-icons/fa'
import CollaborationButton from './ui/CollaborationButton'

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden bg-darkBg pt-32 md:pt-0' id="home">

      {/* --- Background Floating Light Shades --- */}
      <motion.div
        animate={{ x: [-30, 30, -30], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-teal/15 blur-[100px] md:blur-[160px] rounded-full -z-10"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-teal/10 blur-[100px] md:blur-[160px] rounded-full -z-10"
      />

      {/* --- Content Container --- */}
      <div className='max-w-[1400px] w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 z-10'>

        {/* RIGHT SIDE (Image) - Added a simple Fade In */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='flex-1 flex justify-center md:justify-end items-center order-1 md:order-2 mb-4 md:mb-0'
        >
          <div className='relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[420px] md:h-[420px]'>

            <div className='absolute inset-[-15px] bg-teal/20 blur-[60px] md:blur-[100px] rounded-full' />

            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className='absolute inset-[-10px] bg-teal/25 blur-[40px] md:blur-[60px] rounded-full'
            />

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className='relative w-full h-full rounded-full overflow-hidden border-2 border-teal/40 shadow-[0_0_50px_rgba(13,148,136,0.4)]'
            >
              <Image
                src="/anusha-profile.png"
                alt="Anusha Qasim"
                fill
                className='object-cover'
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* LEFT SIDE: Text Content - Added Light Slide Up */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className='flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-5 order-2 md:order-1'
        >
          <div className='inline-block rounded-full px-4 py-1 bg-teal/10 border border-teal/20 text-teal font-bold text-xs md:text-sm w-fit'>
            👋 Hi there! I'm
          </div>

          <h1 className='font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-tighter leading-tight'>
            <span className='bg-gradient-to-r from-teal via-teal to-teal/80 bg-clip-text text-transparent'>
              Anusha
            </span>
            <span className='text-white ml-2 md:ml-3'>Qasim</span>
          </h1>

          <h2 className='text-lg md:text-2xl font-semibold text-slate-300'>
            Frontend Developer & <span className='text-teal'>AI Specialist</span>
          </h2>

          <p className='text-slate-400 tracking-wide leading-relaxed max-w-xl text-sm md:text-lg px-2 md:px-0'>
            Architecting the future of the web by merging scalable Full-Stack development
            with <span className='text-teal font-medium'>Agentic AI</span>.
            Transforming logic into seamless, pixel-perfect interfaces.
          </p>

          <div className='flex flex-wrap justify-center md:justify-start gap-4 md:gap-5 pt-6'>
            <CollaborationButton 
              text="View my work" 
              icon={<FaLongArrowAltDown className="text-base animate-bounce" />} 
              link="#projects"
            />
            <ProjectButton 
              text="Contact Me" 
              link="#contact"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero