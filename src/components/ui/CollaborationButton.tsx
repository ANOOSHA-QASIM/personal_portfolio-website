import React from 'react'
import Link from 'next/link' // Next.js ka Link sahi scrolling ke liye

interface CollaborationButtonProps {
  text: string;
  icon?: React.ReactNode;
  link?: string;      // link prop add kiya
  className?: string;
}

const CollaborationButton = ({ text, icon, link, className }: CollaborationButtonProps) => {
  return (
    <Link 
      href={link || "#"} 
      target={link?.startsWith('http') ? "_blank" : "_self"}
      className={`
        px-8 py-4 
        /* --- Aapka Finalized Gradient --- */
        bg-gradient-to-r from-[#6ee7d7] via-[#1aa89c] to-[#0c554f] 
        text-black font-black rounded-full text-[14px] uppercase tracking-widest 
        
        /* --- Wazeh Solid Border (Glow Khatam) --- */
        border-2 border-[#042f2e] 
        
        /* --- No Glow Shadow (Sirf Depth ke liye) --- */
        shadow-md
        
        transition-all duration-300 ease-in-out
        flex items-center justify-center gap-3 
        
        /* --- Clean Hover (No Glow) --- */
        hover:scale-105 
        hover:border-[#020617] 
        hover:brightness-110
        
        /* --- Active State --- */
        active:scale-95 
        inline-flex   /* Is se button block nahi rahay ga, content ke mutabiq resize hoga */
        ${className}
      `}
    >
      {text} {icon}
    </Link>
  )
}

export default CollaborationButton