"use client"
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react' // X icon close ke liye
import ProjectButton from './ui/ProjectButton'
import Link from 'next/link'

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  if (!mounted) return null;

  return (
    <nav className='fixed top-0 left-0 w-full h-20 z-50 glass-card border-none rounded-none border-b border-teal/10'>
      <div className='max-w-7xl mx-auto px-6 h-full flex justify-between items-center'>
        
        {/* Logo - Ab pure area par click kaam karega */}
        <Link href="/" className='flex items-center space-x-2 group cursor-pointer'>
          <div className='w-10 h-10 bg-teal flex items-center justify-center rounded-lg group-hover:shadow-[0_0_15px_rgba(13,148,136,0.5)] transition-all duration-300'>
            <span className='text-white font-black text-2xl'>A</span>
          </div>
          <span className='font-bold text-2xl tracking-tighter text-white'>
            ANUSHA
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className='hidden md:flex items-center space-x-10'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className='text-base font-semibold text-slate-300 hover:text-teal-light cursor-pointer transition-all duration-300 relative group py-2'
              >
                {link.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-teal-light shadow-[0_0_8px_#2dd4bf] transition-all duration-300 group-hover:w-full'></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className='hidden md:block'>
          <ProjectButton text="Hire Me" link="#contact" />
        </div>

        {/* --- MOBILE HAMBURGER ICON --- */}
        <div className='md:hidden flex items-center'>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='p-2 text-teal hover:bg-teal/10 rounded-md transition-colors'
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className='absolute top-20 left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-teal/20 flex flex-col p-6 space-y-6 md:hidden animate-in fade-in slide-in-from-top-5 duration-300'>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)} // Click par menu close
              className='text-xl font-semibold text-slate-300 hover:text-teal-light transition-all border-b border-teal/5 pb-2'
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className='text-center px-7 py-3 rounded-xl bg-teal text-white text-lg font-bold shadow-[0_0_15px_rgba(13,148,136,0.3)]'
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar;