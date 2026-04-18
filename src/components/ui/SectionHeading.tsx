"use client"
import React from 'react'

const SectionHeading = ({ children}:{ children: React.ReactNode }) => {
  return (
    <div className='w-full max-w-5xl mx-auto px-4'>  
        <div className='flex items-center gap-3 md:gap-6 mb-12 md:mb-20'>
            {/* Left Line - Mobile par choti ho jayegi */}
            <div className='flex-1 h-[1px] bg-gradient-to-r from-transparent via-teal/50 to-teal flex items-center justify-end'>
                <div className='w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-teal shadow-[0_0_10px_#14b8a6]' />
            </div>
            
            {/* Heading - whitespace-nowrap hata diya takay wrap ho sakay */}
            <h2 className='text-2xl md:text-4xl font-extrabold text-white tracking-tight uppercase text-center'>
                {children}
            </h2>
            
            {/* Right Line */}
            <div className='flex-1 h-[1px] bg-gradient-to-l from-transparent via-teal/50 to-teal flex items-center justify-start'>
                <div className='w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-teal shadow-[0_0_10px_#14b8a6]' />
            </div>
        </div> 
    </div>
  )
}

export default SectionHeading