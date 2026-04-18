import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-transparent border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Text Section (Upar) */}
        <div className="mb-8 space-y-2">
          <p className="text-slate-400 font-bold text-[13px] sm:text-[14px] md:text-[16px] tracking-wide leading-relaxed">
            © 2026 <span className="text-slate-300">Anusha Qasim</span> — Architecting the future with <span className="text-teal/80">Agentic AI</span> & Modern Web.
          </p>
          <p className="text-slate-500 text-[11px] sm:text-[12px] md:text-[15px] font-medium opacity-80">
            Delivering scalable, intelligent solutions to a global audience.
          </p>
        </div>

        {/* Icons Section (Neeche) */}
        <div className="flex gap-6 md:gap-8">
          {[
            { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/anusha-qasim" },
            { icon: <FaGithub />, href: "https://github.com/ANOOSHA-QASIM" },
            { icon: <FaSquareXTwitter />, href: "https://x.com/anushainnovates" }
          ].map((social, idx) => (
            <Link 
              key={idx} 
              href={social.href}
              /* Polish: Added smooth transition and precise teal glow */
              className="text-slate-500 text-2xl md:text-3xl transition-all duration-300 
              hover:text-[#14b8a6] hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.6)] 
              hover:-translate-y-1 active:scale-95"
              target="_blank" rel="noopener noreferrer" 
            >
              {social.icon}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  )
}

export default Footer