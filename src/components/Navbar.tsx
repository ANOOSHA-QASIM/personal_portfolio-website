import React from 'react'

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className='fixed top-0 left-0 w-full h-20 z-50 glass-card border-none rounded-none border-b border-teal/10'>
      <div className='max-w-7xl mx-auto px-6 h-full flex justify-between items-center'>
        
        {/* Logo - Cursor Pointer Added */}
        <div className='flex items-center space-x-2 group cursor-pointer'>
          <div className='w-10 h-10 bg-teal flex items-center justify-center rounded-lg group-hover:shadow-[0_0_15px_rgba(13,148,136,0.5)] transition-all duration-300'>
            <span className='text-white font-black text-2xl'>A</span>
          </div>
          <h2 className='font-bold text-2xl tracking-tighter text-white'>
            ANUSHA<span className='text-teal'>.</span>
          </h2>
        </div>

        {/* Navigation Links - Font Size Increased */}
        <ul className='hidden md:flex items-center space-x-10'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className='text-base font-semibold text-slate-300 hover:text-teal-light cursor-pointer transition-all duration-300 relative group py-2'
              >
                {link.name}
                
                {/* Modern Glowy Underline Hover Effect */}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-teal-light shadow-[0_0_8px_#2dd4bf] transition-all duration-300 group-hover:w-full'></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button - Interactive Hover */}
        <div className='hidden md:block'>
          <a 
            href="#contact" 
            className='px-7 py-2.5 rounded-full border-2 border-teal text-teal text-base font-bold hover:bg-teal hover:text-white hover:shadow-[0_0_20px_rgba(13,148,136,0.4)] cursor-pointer transition-all duration-300 active:scale-95'
          >
            Hire Me
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar