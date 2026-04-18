import React from 'react'
import Link from 'next/link' 

interface ProjectButtonProps {
  text: string;
  icon?: React.ReactNode;
  link?: string;
  className?: string;
  type?: "button" | "submit"; // Naya prop
  disabled?: boolean;         // Naya prop
}

const ProjectButton = ({ text, icon, link, className, type = "button", disabled }: ProjectButtonProps) => {
  const commonStyles = `inline-flex items-center gap-3 px-8 py-4 bg-[#091122] border-2 border-teal/40 text-teal 
      hover:bg-[#020617] hover:border-teal transition-all duration-300 rounded-full 
      font-black uppercase text-sm tracking-widest 
      shadow-[0_0_20px_rgba(20,184,166,0.15)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] 
      cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  // Agar link prop hai, to Link (anchor) return karo
  if (link) {
    return (
      <Link
        href={link} 
        target={link?.startsWith('http') ? "_blank" : "_self"}
        className={commonStyles}
      >
        {text} {icon}
      </Link>
    )
  }

  // Agar link nahi hai, to asli Button return karo (Form submit ke liye)
  return (
    <button type={type} disabled={disabled} className={commonStyles}>
      {text} {icon}
    </button>
  )
}

export default ProjectButton