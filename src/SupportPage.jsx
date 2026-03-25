import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { useSEO } from './hooks/useSEO';
import { Shield, BookOpen, Wrench, Headphones, ArrowRight, ChevronRight, FileText, Download, HelpCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SupportPage = () => {
  useSEO({
    title: "Support, Warranty & Service Requests | InfinityX",
    description: "Access InfinityX warranty support, service assistance, and technical help for interactive displays, smart classroom systems, and integrated infrastructure deployments.",
    keywords: "InfinityX support, warranty policy, service request, technical support, interactive display support India",
    path: "/support",
    image: "/images/contact-sales.png"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.from('.support-hero > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.support-card', {
        scrollTrigger: {
          trigger: '.support-grid',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const supportCategories = [
    {
      id: 'warranty',
      title: 'Warranty Policy',
      description: 'Comprehensive coverage and terms for all InfinityX hardware and interactive displays.',
      icon: <Shield className="text-[#FF9F1B]" size={32} />,
      links: ['Standard Warranty', 'Extended Coverage', 'RMA Status']
    },
    {
      id: 'resources',
      title: 'Resource Center',
      description: 'Access user manuals, technical specifications, and AI-Powered SmartClass software guides.',
      icon: <BookOpen className="text-[#FF9F1B]" size={32} />,
      links: ['User Manuals', 'Firmware Updates', 'Installation Guides']
    },
    {
      id: 'request',
      title: 'Service Request',
      description: 'Need technical assistance? Open a ticket or schedule an on-site inspection.',
      icon: <Wrench className="text-[#FF9F1B]" size={32} />,
      links: ['Open Ticket', 'Technical FAQ', 'Video Tutorials']
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      
      {/* ── HERO SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 mb-20 support-hero">
        <div className="bg-[#F9F9F9] rounded-[40px] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF9F1B]/5 to-transparent pointer-events-none" />
          <div className="max-w-2xl relative z-10">
            <span className="inline-block px-4 py-1.5 bg-[#FF9F1B]/10 text-[#FF9F1B] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              InfinityX Support
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-[1.1]">
              How can we <br />
              <span className="text-foreground/40 italic">help you?</span>
            </h1>
            <p className="text-lg text-foreground/60 font-medium mb-10 leading-relaxed">
              From technical documentation to direct service assistance, our dedicated support team is here to ensure your technology performs at its best.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-[#FF9F1B] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#FF9F1B]/90 transition-all hover:scale-105">
                Contact Technical Support <Headphones size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPORT CONTENT ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 support-grid">
          {supportCategories.map((cat) => (
            <div key={cat.id} id={cat.id} className="support-card group bg-white border border-foreground/5 rounded-3xl p-10 hover:border-[#FF9F1B]/20 hover:shadow-2xl hover:shadow-[#FF9F1B]/5 transition-all duration-500">
              <div className="w-16 h-16 bg-[#F9F9F9] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{cat.title}</h3>
              <p className="text-foreground/60 text-sm font-medium leading-relaxed mb-8">
                {cat.description}
              </p>
              <div className="space-y-4">
                {cat.links.map(link => (
                  <button key={link} className="flex items-center justify-between w-full py-3 border-b border-foreground/5 text-sm font-bold text-foreground/80 hover:text-[#FF9F1B] transition-colors group/link">
                    {link} <ChevronRight size={16} className="text-foreground/20 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-foreground text-white rounded-[40px] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
          </div>
          <div className="max-w-xl relative z-10 text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Didn't find what you were looking for?</h2>
            <p className="text-white/60 font-medium mb-10">
              Our enterprise support experts are available Monday to Friday, 9AM - 6PM for technical consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                     <HelpCircle size={24} className="text-[#FF9F1B]" />
                  </div>
                  <div className="text-left">
                     <div className="text-xs text-white/40 font-bold uppercase tracking-widest">Email Support</div>
                     <div className="font-bold">contact@infinityxglobal.com</div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                     <Headphones size={24} className="text-[#FF9F1B]" />
                  </div>
                  <div className="text-left">
                     <div className="text-xs text-white/40 font-bold uppercase tracking-widest">Call Us</div>
                     <div className="font-bold">+91 9292252880</div>
                  </div>
               </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl w-full lg:w-96 relative z-10">
            <h4 className="text-xl font-bold mb-6">Quick Downloads</h4>
            <div className="space-y-6">
               <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#FF9F1B]/20 transition-colors">
                     <Download size={20} className="text-[#FF9F1B]" />
                  </div>
                  <div className="flex-1">
                     <div className="text-sm font-bold">Latest Firmware</div>
                     <div className="text-[11px] text-white/40 uppercase tracking-widest">v2.4.1 (Mar 2024)</div>
                  </div>
               </div>
               <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#FF9F1B]/20 transition-colors">
                     <FileText size={20} className="text-[#FF9F1B]" />
                  </div>
                  <div className="flex-1">
                     <div className="text-sm font-bold">Catalog 2024</div>
                     <div className="text-[11px] text-white/40 uppercase tracking-widest">PDF (12.4 MB)</div>
                  </div>
               </div>
               <Link to="/contact" className="w-full py-4 mt-6 bg-white text-foreground rounded-2xl font-bold hover:bg-[#FF9F1B] hover:text-white transition-all flex items-center justify-center">
                  Visit Download Center
               </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SupportPage;
