"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { skillCategories, toolsMarquee } from "@/data/skills"
import SkillsBadge from "./ui/SkillsBadge"
import SectionHeading from "./ui/SectionHeading"


const Skills = () => {
  const half = Math.ceil(toolsMarquee.length / 2);
  const firstRow = toolsMarquee.slice(0, half);
  const secondRow = toolsMarquee.slice(half);

  return (
    <section id="skills" className="py-28 bg-[#020617] relative overflow-hidden">
      {/* Teal Glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-teal/10 blur-[120px] rounded-full opacity-60" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-teal/5 blur-[120px] rounded-full opacity-40" />

      {/* Main Section Heading */}
      <div className="mb-20">
        <SectionHeading>
           Technical <span className="text-teal">Expertise</span>
        </SectionHeading>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Skills Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-900/20 border border-white/5 backdrop-blur-md transition-all duration-500 hover:border-teal/30 shadow-2xl"
              style={{ borderTop: `4px solid ${idx === 0 ? '#14b8a6' : category.accent}` }} 
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-xl bg-white/5 text-3xl" style={{ color: idx === 0 ? '#14b8a6' : category.accent }}>
                   <category.icon />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold leading-tight">{category.title}</h3>
                  <p className="text-slate-500 text-xs mt-1 font-medium">{category.subtitle}</p>
                </div>
              </div>

              <div className="space-y-1">
                {category.skills.map((skill, sIdx) => (
                  <SkillsBadge 
                    key={sIdx} 
                    {...skill} 
                    color={idx === 0 ? '#14b8a6' : category.accent} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

{/* --- Re-styled Marquee Section --- */}
<div className="mt-10 space-y-8"> {/* Margin-top kam kar di yahan */}
  
  {/* Balanced Heading with Lines (Like About Section) */}
  <div className="flex items-center justify-center gap-4 mb-10">
    <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-teal/50" />
    <h3 className="text-white text-lg md:text-xl font-bold tracking-tight uppercase opacity-90 whitespace-nowrap">
      Tech Stack <span className="text-teal">& Tools</span>
    </h3>
    <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-teal/50" />
  </div>
  
 {/* Row 1: Left to Right (Slow & Bold) */}
<div className="relative overflow-hidden py-4 w-full">
  <motion.div 
    animate={{ x: ["0%", "-50%"] }} 
    transition={{ 
      duration: 60, // Speed slow karne ke liye duration barha di
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="flex whitespace-nowrap gap-6 items-center w-max" // Gap 4 se 6 kar diya
  >
    {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map((tool, tIdx) => (
      <div 
        key={tIdx} 
        className="flex items-center gap-3 bg-slate-900/40 border border-white/10 px-6 py-3 rounded-xl hover:bg-teal/10 hover:border-teal/30 transition-all duration-300"
      >
        <tool.icon className="text-xl" style={{ color: tool.iconColor }} />
        <span className="text-slate-200 text-sm font-bold uppercase tracking-wider">
          {tool.name}
        </span>
      </div>
    ))}
  </motion.div>
</div>

{/* Row 2: Right to Left (Slightly Different Speed for depth) */}
<div className="relative overflow-hidden py-4 w-full">
  <motion.div 
    animate={{ x: ["-50%", "0%"] }} 
    transition={{ 
      duration: 70, // Isay thora aur slow rakha hai natural look ke liye
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="flex whitespace-nowrap gap-6 items-center w-max"
  >
    {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map((tool, tIdx) => (
      <div 
        key={tIdx} 
        className="flex items-center gap-3 bg-slate-900/40 border border-white/10 px-6 py-3 rounded-xl hover:bg-teal/10 hover:border-teal/30 transition-all duration-300"
      >
        <tool.icon className="text-xl" style={{ color: tool.iconColor }} />
        <span className="text-slate-200 text-sm font-bold uppercase tracking-wider">
          {tool.name}
        </span>
      </div>
    ))}
  </motion.div>
</div>
</div>

      </div>
    </section>
  )
}

export default Skills