"use client"
import React from 'react'
import { motion } from 'framer-motion'

const SkillsBadge = ({ name, level, color, icon: Icon, iconColor }: any) => {
  return (
    <div className="w-full mb-5">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2.5">
          {/* Icon with its forced Brand Color */}
          <Icon style={{ color: iconColor }} className="text-lg" /> 
          <span className="text-slate-300 text-[15px] font-medium tracking-tight">{name}</span>
        </div>
        {/* Percentage in Orange as requested */}
        <span className="text-[#f97316] font-bold text-xs">{level}%</span>
      </div>

      <div className="h-[3px] w-full bg-slate-800/40 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ 
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}44` 
          }}
        />
      </div>
    </div>
  )
}
export default SkillsBadge;