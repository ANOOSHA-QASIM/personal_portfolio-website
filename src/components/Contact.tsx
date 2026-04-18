"use client"
import React, { useState } from 'react'
import SectionHeading from './ui/SectionHeading'
import { FaLinkedinIn, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa'
import CollaborationButton from './ui/CollaborationButton'
import ProjectButton from './ui/ProjectButton'

const Contact = () => {
  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/anusha-qasim" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/anooshaqasim/" },
    { icon: <FaTwitter />, url: "https://x.com/anushainnovates" }
  ];

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "66a93ffb-17bd-40b1-b39e-07fa289a9fbe");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! ✅");
        event.target.reset();
      } else {
        setResult("Oops! Try again.");
      }
    } catch (error) {
      setResult("Error! Check connection.");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="mb-20">
          <SectionHeading>
            Let’s Start a <span className="text-teal">Conversation</span>
          </SectionHeading>
          <p className="text-slate-300 text-center mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic opacity-80 px-4">
            "I’m always excited to discuss new ideas, from intelligent automation to high-performance web apps."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Form Container: Added better mobile padding */}
          <div className="lg:col-span-7 bg-slate-800/40 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/20 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative group">
            <h3 className="text-white text-lg md:text-2xl font-bold mb-10 tracking-wide uppercase">
                Send a <span className="text-teal">Message</span>
            </h3>
            
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" name="name" required placeholder="Full Name" 
                  className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal/60 transition-all duration-300 placeholder:text-slate-400 text-sm" 
                />
                <input 
                  type="email" name="email" required placeholder="Email Address" 
                  className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal/60 transition-all duration-300 placeholder:text-slate-400 text-sm" 
                />
              </div>

              <input 
                type="text" name="subject" required placeholder="Project Subject" 
                className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal/60 transition-all duration-300 placeholder:text-slate-400 text-sm" 
              />

              <textarea 
                name="message" required rows={5} placeholder="Your Message" 
                className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal/60 transition-all duration-300 resize-none placeholder:text-slate-400 text-sm"
              />
              
              <div className="pt-4">
                <ProjectButton 
                  text={isSubmitting ? "Sending..." : "Send Message"} 
                  icon={<FaPaperPlane className="text-[10px]" />} 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full justify-center"
                />
                {result && (
                  <p className={`mt-4 text-center font-bold tracking-wide ${result.includes("Successfully") ? "text-teal" : "text-red-400"}`}>
                    {result}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info: Added Hover Effects */}
          <div className="lg:col-span-5 flex flex-col h-full space-y-4">
            
            {/* Email Box */}
            <div className="p-4 rounded-2xl bg-teal/10 border border-teal/20 transition-all duration-300 hover:bg-teal/20 hover:border-teal/40 hover:-translate-y-1 cursor-pointer group/card">
                <div className="flex items-center gap-4">
                  <div className="text-teal text-base bg-teal/10 p-3 rounded-xl group-hover/card:scale-110 transition-transform"><FaEnvelope /></div>
                  <div>
                    <p className="text-[9px] uppercase text-slate-400 font-black tracking-widest mb-0.5">Email Me</p>
                    <p className="text-white text-sm font-bold">anushatech333@gmail.com</p>
                  </div>
                </div>
            </div>

            {/* Location Box */}
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-500/40 hover:-translate-y-1 cursor-pointer group/card">
                <div className="flex items-center gap-4">
                  <div className="text-blue-400 text-base bg-blue-500/10 p-3 rounded-xl group-hover/card:scale-110 transition-transform"><FaMapMarkerAlt /></div>
                  <div>
                    <p className="text-[9px] uppercase text-slate-400 font-black tracking-widest mb-0.5">Location</p>
                    <p className="text-white text-sm font-bold">Karachi, Pakistan</p>
                  </div>
                </div>
            </div>

            {/* Phone Box */}
            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/40 hover:-translate-y-1 cursor-pointer group/card">
                <div className="flex items-center gap-4">
                  <div className="text-purple-400 text-base bg-purple-500/10 p-3 rounded-xl group-hover/card:scale-110 transition-transform"><FaPhoneAlt /></div>
                  <div>
                    <p className="text-[9px] uppercase text-slate-400 font-black tracking-widest mb-0.5">Phone</p>
                    <p className="text-white text-sm font-bold">+92 319 2955162</p>
                  </div>
                </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-teal hover:text-teal hover:bg-teal/5 transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-auto p-8 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-slate-800/50 to-transparent border border-white/10 relative overflow-hidden group shadow-2xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-white text-[13px] font-black uppercase tracking-[3px] mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse shadow-[0_0_12px_#14b8a6]" />
                      Status: Active
                  </div>
                  <h4 className="text-white text-xl font-bold mb-3 tracking-wide">Available for <span className="text-teal">New Projects</span></h4>
                  <p className="text-slate-400 text-[15px] leading-relaxed">
                    "Currently looking for opportunities in Frontend Development and AI Automation."
                  </p>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 md:mt-32 max-w-6xl mx-auto">
            <div className="relative py-12 px-6 rounded-[2.5rem] md:rounded-[3rem] bg-slate-800/30 border border-white/10 backdrop-blur-xl text-center shadow-2xl group">
                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-white text-xl md:text-2xl font-bold tracking-normal uppercase mb-4">
                        Ready to Start Your <span className="text-teal">Project?</span>
                    </h2>
                    <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto mb-10 font-medium italic opacity-80 leading-relaxed px-4">
                        "Let's discuss how I can help bring your vision to life with cutting-edge AI and web solutions."
                    </p>
                    <CollaborationButton 
                      text="Email Me Directly" 
                      icon={<FaEnvelope className="text-xs" />} 
                      link="mailto:anushatech333@gmail.com"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact