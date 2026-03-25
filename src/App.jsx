import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Monitor, Shield, Network, Mail, ArrowRight, Video, Server, Play, Cpu, PenTool, LayoutTemplate, Wifi, Menu, X } from 'lucide-react';
import ProductsPage from './ProductsPage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ClientsPage from './ClientsPage';
import ContactPage from './ContactPage';
import SupportPage from './SupportPage';
import ResourcesPage from './ResourcesPage';
import IndiaSolutionsPage from './IndiaSolutionsPage';
import { useSEO } from './hooks/useSEO';

gsap.registerPlugin(ScrollTrigger);



// ─── NAV DATA ────────────────────────────────────────────────────────────────
// ─── NAV DATA ────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  {
    label: 'Products',
    to: '/products',
    children: {
      categories: [
        { 
          label: 'Products', 
          items: [
            { label: 'Interactive Flat Panel', to: '/products#value', series: ['Value Series', 'C-Series', 'Pro Series'] },
            { label: 'Commercial Display', to: '/products#commercial' },
            { label: 'LED Display', to: '/products#led' },
            { label: 'Unified Communication', to: '/products#uc' },
            { label: 'Accessories', to: '/products#accessories' },
            { label: 'All Products', to: '/products' },
          ]
        }
      ],
      featured: [
        { label: 'New Arrivals', to: '/products' }
      ]
    }
  },
  {
    label: 'Solutions',
    to: '/services',
    children: [
      { label: 'AI-Powered SmartClass', to: '/services#smartclass' },
      { label: 'Networking Solutions', to: '/services#networking' },
      { label: 'Campus Surveillance', to: '/services#surveillance' },
      { label: 'Solutions in India', to: '/smart-classroom-solutions-india' },
    ],
  },
  {
    label: 'Support',
    to: '/support',
    children: [
      { label: 'Warranty Policy', to: '/support#warranty' },
      { label: 'Resource Center', to: '/resources' },
      { label: 'Service Request', to: '/support#request' },
      { label: 'All Support', to: '/support' },
    ],
  },
  {
    label: 'Our Clients',
    to: '/clients',
    children: [
      { label: 'Educational Institutions', to: '/clients#education' },
      { label: 'Corporate Partners', to: '/clients#corporate' },
      { label: 'Government Projects', to: '/clients#government' },
      { label: 'Success Metrics', to: '/clients#metrics' },
      { label: 'All Case Studies', to: '/clients' },
    ],
  },
  {
    label: 'Company',
    to: '/about',
    children: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
];

// ─── DESKTOP MEGA MENU ────────────────────────────────────────────────────────
const DesktopMegaMenu = ({ item, isOpen, onClose }) => {
  if (!item?.children) return null;

  const isProducts = item.label === 'Products';
  const isSupport = item.label === 'Support';

  const categoryImage = 
    item.label === 'Products' ? `${import.meta.env.BASE_URL}images/ID2.png` :
    item.label === 'Solutions' ? `${import.meta.env.BASE_URL}images/Network.png` :
    item.label === 'Support' ? `${import.meta.env.BASE_URL}images/INFINITYX.png` :
    item.label === 'Our Clients' ? `${import.meta.env.BASE_URL}images/ID3.jpg` :
    `${import.meta.env.BASE_URL}images/home_page_final.jpeg`;

  return (
    <div
      className={`fixed top-20 left-0 w-full bg-white shadow-2xl border-b border-foreground/5 shadow-black/5 overflow-hidden transition-all duration-300 origin-top cursor-default h-[70vh] ${
        isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-0 h-full">
        
        {/* Case 1: Products (Multi-column) */}
        {isProducts ? (
          <>
            {/* Left Sidebar: Categories */}
            <div className="w-[280px] border-r border-foreground/5 pr-8 space-y-10">
              {item.children.featured && (
                <div>
                  <h3 className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-4">Featured</h3>
                  {item.children.featured.map(f => (
                    <Link key={f.label} to={f.to} onClick={onClose} className="block text-sm font-bold text-foreground/80 hover:text-[#FF9F1B] py-2 transition-colors">{f.label}</Link>
                  ))}
                </div>
              )}
              {item.children.categories.map(cat => (
                <div key={cat.label}>
                  <h3 className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-4">{cat.label}</h3>
                  <div className="space-y-1">
                    {cat.items.map(sub => (
                      <Link 
                        key={sub.label} 
                        to={sub.to} 
                        onClick={onClose} 
                        className="flex items-center justify-between group py-2.5 px-3 rounded-lg hover:bg-[#FF9F1B]/5 transition-all"
                      >
                        <span className="text-[13px] font-bold text-foreground/70 group-hover:text-[#FF9F1B]">{sub.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Middle: Series Grid */}
            <div className="flex-1 px-12 grid grid-cols-2 gap-x-8 gap-y-4 items-start">
               {/* Show specific series for the primary category */}
               <div className="col-span-2 mb-6">
                  <h3 className="text-sm font-bold text-[#FF9F1B] border-b border-[#FF9F1B]/10 pb-2">Interactive Flat Panels</h3>
               </div>
               {['Value Series', 'C-Series', 'Pro Series', 'Smart Blackboard', 'U4 Series', 'U3 Series', 'E3 Series', 'E2 Series', 'V Series', 'T Series'].map(series => (
                 <Link 
                  key={series} 
                  to={series === 'Value Series' ? '/products#value' : series === 'C-Series' ? '/products#cseries' : series === 'Pro Series' ? '/products#pro' : '/products'}
                  onClick={onClose}
                  className="group flex items-center justify-between py-3 border-b border-foreground/5 hover:border-[#FF9F1B]/20 transition-all"
                 >
                   <span className="text-sm font-semibold text-foreground/60 group-hover:text-foreground transition-colors">{series}</span>

                 </Link>
               ))}
            </div>

            {/* Right: Featured Panel */}
            <div className="w-[320px] bg-[#F9F9F9] rounded-2xl p-8 flex flex-col items-center justify-center text-center group">
               <img src={categoryImage} alt="Products" className="w-full h-40 object-contain drop-shadow-xl mb-6 group-hover:scale-105 transition-transform duration-500" />
               <Link to="/products" onClick={onClose} className="text-sm font-bold text-foreground hover:text-[#FF9F1B] flex items-center gap-2 group/link">
                 All Interactive Flat Panels <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
               </Link>
            </div>
          </>
        ) : isSupport ? (
          <>
            {/* Support Layout */}
            <div className="w-[280px] border-r border-foreground/5 pr-8">
               <h3 className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-6">Support</h3>
               <div className="space-y-1">
                 {Array.isArray(item.children) && item.children.map(sub => (
                   <Link 
                    key={sub.label} 
                    to={sub.to} 
                    onClick={onClose} 
                    className="flex items-center justify-between group py-3 px-3 rounded-lg hover:bg-[#FF9F1B]/5 transition-all"
                   >
                     <span className="text-[13px] font-bold text-foreground/70 group-hover:text-[#FF9F1B]">{sub.label}</span>

                   </Link>
                 ))}
               </div>
            </div>
            <div className="flex-1 flex items-center justify-center p-12 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#FF9F1B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="z-10 text-center space-y-6">
                  <img src={categoryImage} alt="Support" className="h-32 object-contain mx-auto drop-shadow-lg mb-4" />
                  <Link to="/contact" onClick={onClose} className="text-sm font-bold text-foreground hover:text-[#FF9F1B] flex items-center gap-2 justify-center group/link">
                    All Support <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
          </>
        ) : (
          /* Default Case (Solutions, Company) */
          <>
            <div className="w-1/3 lg:w-1/4 border-r border-foreground/10 pr-8">
              <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-6">{item.label}</h3>
              <div className="space-y-2">
                {Array.isArray(item.children) && item.children.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    onClick={onClose}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-bold text-foreground/80 hover:bg-[#FF9F1B]/5 hover:text-[#FF9F1B] transition-colors group"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-8 bg-[#F9F9F9] rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FF9F1B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-8 lg:gap-16 z-10 w-full max-w-3xl">
                    <div className="flex-1 space-y-4">
                       <span className="px-3 py-1 bg-[#FF9F1B]/10 text-[#FF9F1B] text-xs font-bold rounded-full uppercase tracking-widest">
                         {item.label === 'Our Clients' ? 'Trusted by Leaders' : 'Featured Explore'}
                       </span>
                       <h4 className="text-2xl font-display font-bold text-foreground">
                         {item.label === 'Our Clients' ? 'Our Success Stories' : `Discover ${item.label}`}
                       </h4>
                       <p className="text-sm text-foreground/60 font-medium leading-relaxed">
                         {item.label === 'Our Clients' 
                           ? 'InfinityX is proud to partner with leading educational institutions and enterprises to deliver transformative technology infrastructure.'
                           : 'Explore our premium range of advanced hardware and enterprise-grade integrations designed to transform your operations.'}
                       </p>
                    </div>
                   <img src={categoryImage} alt={item.label} className="w-48 lg:w-64 h-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500" />
                </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // expandedItems tracks which mobile accordion menus are open
  const [expandedItems, setExpandedItems] = useState({});
  const [desktopHover, setDesktopHover] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close everything on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setExpandedItems({});
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleMobileAccordion = (label) => {
    setExpandedItems(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const handleMobileLeafClick = (to) => {
    setMobileOpen(false);
    // hash navigation requires manual scroll after route change
    const [path, hash] = to.split('#');
    navigate(path);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  // Helper to get mobile structure from children (which can be array or object)
  const getMobileChildren = (item) => {
    if (!item.children) return [];
    if (Array.isArray(item.children)) return item.children;
    // For Products object structure
    const all = [];
    if (item.children.featured) all.push(...item.children.featured);
    if (item.children.categories) {
      item.children.categories.forEach(cat => all.push(...cat.items));
    }
    return all;
  };

  return (
    <>
      {/* ── Desktop & Mobile Navbar Container ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9] border-b border-bento/50">

        {/* ── DESKTOP NAV (hidden on mobile) ── */}
        <div className="hidden md:flex max-w-7xl mx-auto px-6 h-20 items-center justify-between gap-8">
          <Link to="/" className="flex items-center shrink-0">
            <img src={`${import.meta.env.BASE_URL}images/INFINITYX.png`} alt="InfinityX" className="h-16" />
          </Link>

          <div className="flex items-center gap-1 text-sm font-semibold text-foreground/70 h-full">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => setDesktopHover(item.label)}
                onMouseLeave={() => setDesktopHover(null)}
              >
                  <Link
                    to={item.to}
                    className="flex items-center gap-1 px-4 py-2 rounded-xl hover:text-[#FF9F1B] hover:bg-[#FF9F1B]/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                <DesktopMegaMenu
                  item={item}
                  isOpen={desktopHover === item.label}
                  onClose={() => setDesktopHover(null)}
                />
              </div>
            ))}
          </div>

          <div className="flex shrink-0">
            <Link
              to="/contact"
              className="bg-[#FF9F1B] text-white px-5 py-2.5 rounded-full text-sm flex items-center gap-2 hover:bg-[#FF9F1B]/90 transition-all hover:scale-105 active:scale-95 font-bold shadow-md shadow-[#FF9F1B]/20"
            >
              Contact Sales <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* ── MOBILE NAV (hidden on desktop) ── */}
        <div className="md:hidden relative flex items-center justify-between px-4 h-16">
          {/* Hamburger toggle — top left */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 -ml-1 text-foreground z-10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo — absolutely centered */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/INFINITYX.png`}
              alt="InfinityX"
              className="h-9 object-contain"
            />
          </Link>

          {/* Empty spacer to keep logo truly centered */}
          <div className="w-10" />
        </div>


        {/* ── Mobile Expandable Accordion Menu ── */}
        <div 
          className={`md:hidden overflow-y-auto bg-white border-b border-foreground/5 shadow-2xl transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-[calc(100vh-5rem)] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 flex flex-col pt-2 pb-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-foreground/5 last:border-0">
                <button
                  onClick={() => item.children ? toggleMobileAccordion(item.label) : handleMobileLeafClick(item.to)}
                  className="w-full flex items-center justify-between py-5 text-[15px] font-bold text-foreground hover:text-[#FF9F1B] transition-colors"
                >
                  <span className="">{item.label}</span>
                  {item.children && (
                    <ChevronRight 
                      size={18} 
                      className={`text-foreground/30 transition-transform duration-200 ${expandedItems[item.label] ? 'rotate-90' : ''}`} 
                    />
                  )}
                </button>
                {/* Accordion content */}
                {item.children && (
                  <div
                    className={`transition-all duration-300 ease-in-out pl-4 ${
                      expandedItems[item.label] ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                     <button
                        onClick={() => handleMobileLeafClick(item.to)}
                        className="w-full text-left py-2 text-[11px] uppercase tracking-[0.15em] font-bold text-[#FF9F1B]/70 block mb-2"
                      >
                        Explore Overview &rarr;
                      </button>
                    {getMobileChildren(item).map((child) => (
                      <button
                        key={child.to}
                        onClick={() => handleMobileLeafClick(child.to)}
                        className="w-full text-left py-3 text-[14px] font-semibold text-foreground/70 hover:text-[#FF9F1B] transition-colors flex items-center gap-3 before:w-1 before:h-1 before:bg-foreground/20 before:rounded-full"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <div className="mt-6">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#FF9F1B]/5 border border-[#FF9F1B]/20 text-sm font-bold text-[#FF9F1B] group active:scale-95 transition-all"
              >
                Schedule an Enterprise Demo 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pre-hide before first paint to prevent flash
      gsap.set('.hero-word', { y: 60, opacity: 0, willChange: 'transform, opacity' });
      gsap.set('.hero-sub', { y: 20, opacity: 0, willChange: 'opacity' });

      gsap.to('.hero-word', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.1,
        clearProps: 'willChange'
      });
      gsap.to('.hero-sub', {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.6,
        clearProps: 'willChange'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-28 pb-16 lg:py-28 flex flex-col items-center justify-center text-center overflow-hidden relative z-10 px-6">
      <div className="max-w-5xl mx-auto z-10">
        <h1 className="text-dynamic-hero text-foreground mb-6 font-display font-bold flex flex-col items-center leading-[1.1] md:leading-[1.1]">
          <span className="hero-word block">Infrastructure.</span>
          <span className="hero-word block">Integrated. Intelligent.</span>
          <span className="hero-word block text-[#FF9F1B]">InfinityX.</span>
        </h1>
        <p className="hero-sub text-lg md:text-2xl text-foreground/60 max-w-3xl mx-auto mb-10 md:mb-12 font-medium tracking-tight px-4 shadow-sm md:shadow-none bg-background/50 md:bg-transparent rounded-2xl md:rounded-none py-2 md:py-0">
          Premier system integration partner delivering high-performance<br className="hidden md:block" /> IT infrastructure and intelligent display solutions.
        </p>
        <div className="hero-sub flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/products" className="w-full sm:w-auto bg-[#FF9F1B] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#FF9F1B]/90 transition-colors shadow-lg shadow-[#FF9F1B]/20 flex items-center justify-center gap-2">
            Explore Products <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Reusable full-screen scroll section with alternating image placement
const ScrollSection = ({ image, imageAlt, badge, title, description, ctaLabel, ctaTo, imageOnRight = true }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      // Entrance animation for text elements — fires once, never reverses
      gsap.from(el.querySelectorAll('.ss-text'), {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: imageOnRight ? -60 : 60,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Entrance animation for image — fires once, never reverses
      gsap.from(el.querySelectorAll('.ss-img'), {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: imageOnRight ? 60 : -60,
        scale: 0.95,
        duration: 1,
        ease: 'power2.out',
      });
    }, el);
    return () => ctx.revert();
  }, [imageOnRight]);

  return (
    <section ref={ref} className="py-16 px-6 lg:py-24 flex items-center bg-background border-t border-bento/50 overflow-hidden">
      <div className={`max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center ${!imageOnRight ? 'lg:[direction:rtl]' : ''}`}>
        {/* Text block — always LTR internally */}
        <div className="lg:[direction:ltr] lg:col-span-2 space-y-6">
          <span className="ss-text block text-[#FF9F1B] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">{badge}</span>
          <h2 className="ss-text text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.15]">{title}</h2>
          <p className="ss-text text-base md:text-xl text-foreground/60 font-medium max-w-xl leading-relaxed">{description}</p>
          <div className="ss-text pt-2">
            <Link
              to={ctaTo}
              className="inline-flex items-center gap-3 bg-[#FF9F1B] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#FF9F1B]/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#FF9F1B]/20"
            >
              {ctaLabel} <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Image block */}
        <div className="ss-img relative lg:[direction:ltr] lg:col-span-3">
          <div className="absolute inset-0 -m-12 bg-[#FF9F1B]/5 rounded-3xl blur-3xl pointer-events-none" />
          <img
            src={image}
            alt={imageAlt}
            loading="eager"
            fetchpriority="high"
            className="relative w-full max-h-[800px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};



const ClientMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.marquee-track', {
        xPercent: -50,
        repeat: -1,
        duration: 45,
        ease: "none",
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  const clients = [
    "Screenshot 2026-02-22 111241.png", "Screenshot 2026-02-22 111247.png", "Screenshot 2026-02-22 111255.png",
    "Screenshot 2026-02-22 111304.png", "Screenshot 2026-02-22 111311.png", "Screenshot 2026-02-22 111321.png",
    "Screenshot 2026-02-22 111330.png", "Screenshot 2026-02-22 111339.png", "Screenshot 2026-02-22 111349.png",
    "Screenshot 2026-02-22 111357.png", "Screenshot 2026-02-22 111407.png", "Screenshot 2026-02-22 111417.png",
    "Screenshot 2026-02-22 111425.png", "Screenshot 2026-02-22 111435.png", "Screenshot 2026-02-22 111440.png",
    "Screenshot 2026-02-22 111448.png", "Screenshot 2026-02-22 111453.png", "Screenshot 2026-02-22 111501.png",
    "Screenshot 2026-02-22 111509.png", "Screenshot 2026-02-22 111520.png", "Screenshot 2026-02-22 111528.png",
    "Screenshot 2026-02-22 111534.png", "Screenshot 2026-02-22 111539.png", "Screenshot 2026-02-22 111546.png",
    "Screenshot 2026-02-22 111559.png", "Screenshot 2026-02-22 111613.png", "Screenshot 2026-02-22 111621.png",
    "Screenshot 2026-02-22 111628.png", "Screenshot 2026-02-22 111634.png", "Screenshot 2026-02-22 111640.png",
    "Screenshot 2026-02-22 111648.png", "Screenshot 2026-02-22 111655.png"
  ];

  return (
    <section id="clients" className="py-12 md:py-20 border-y border-bento/50 bg-background overflow-hidden flex flex-col items-center">
      <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest mb-10 text-center px-4">Trusted Integrations & Ecosystem Partners</p>
      <div ref={marqueeRef} className="w-full relative flex whitespace-nowrap overflow-hidden group">
        <div className="marquee-track flex gap-12 md:gap-16 px-8 items-center">
          {clients.concat(clients).map((client, i) => (
            <div key={i} className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 hover:scale-105 transition-transform duration-300">
              <img src={`${import.meta.env.BASE_URL}scroll/${encodeURIComponent(client)}`} alt={`Ecosystem Partner ${i}`} className="w-full h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HOME_STATS = [
  { value: '13+', label: 'Years of Excellence' },
  { value: '2000+', label: 'Happy Customers' },
  { value: '150+', label: 'Distributors' },
  { value: '25+', label: 'Government Projects' },
];

const HOME_SOLUTIONS = [
  {
    title: 'Interactive Display Systems',
    description: 'Interactive flat panels, smart boards, and classroom-ready display solutions designed for teaching, training, and collaboration.',
    to: '/products',
    icon: Monitor,
  },
  {
    title: 'Campus & Enterprise Networking',
    description: 'LAN, WAN, Wi-Fi, server, and infrastructure integration for schools, institutions, and modern enterprise environments.',
    to: '/services#networking',
    icon: Network,
  },
  {
    title: 'Surveillance & Security',
    description: 'CCTV architecture, command centers, access control, and monitored security deployments built for operational visibility.',
    to: '/services#surveillance',
    icon: Shield,
  },
];

const HOME_FAQS = [
  {
    question: 'What solutions does InfinityX provide?',
    answer: 'InfinityX delivers interactive flat panels, AI-powered smart classroom setups, networking infrastructure, campus surveillance, digital signage, and supporting IT integration services.',
  },
  {
    question: 'Who are InfinityX solutions designed for?',
    answer: 'The current site content is aimed at educational institutions, training environments, government projects, and enterprise teams that need reliable display and infrastructure systems.',
  },
  {
    question: 'Can InfinityX help with deployment and post-sales support?',
    answer: 'Yes. The site already positions InfinityX as an end-to-end integration partner for solution design, installation, deployment, and ongoing support through its contact and support flows.',
  },
  {
    question: 'Which interactive panel sizes are available?',
    answer: 'The product range showcased in this repo includes 65-inch, 75-inch, and 86-inch panel sizes across the Value Series, C-Series, and Pro Series.',
  },
];

const HomepageStats = () => (
  <section className="border-y border-bento/50 bg-[#F9F9F9] px-6 py-10 md:py-16">
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {HOME_STATS.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-foreground/5 bg-white p-6 shadow-sm">
          <p className="mb-2 text-3xl font-display font-bold text-foreground md:text-5xl">{stat.value}</p>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/50 md:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

const HomepageIntentGrid = () => (
  <section className="border-b border-bento/50 bg-background px-6 py-16 md:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 max-w-3xl">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#FF9F1B] md:text-sm">Built Around Buying Intent</span>
        <h2 className="mb-4 text-4xl font-display font-bold tracking-tight text-foreground md:text-5xl">Solutions for schools, campuses, and enterprise teams.</h2>
        <p className="text-base font-medium leading-relaxed text-foreground/60 md:text-lg">
          Explore the core categories buyers search for most often when planning classroom technology, enterprise integration, or campus-wide infrastructure upgrades.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {HOME_SOLUTIONS.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              to={item.to}
              className="group rounded-[28px] border border-foreground/8 bg-[#F9F9F9] p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[#FF9F1B]/25 hover:shadow-xl hover:shadow-[#FF9F1B]/5"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#FF9F1B] shadow-sm">
                <Icon size={24} />
              </div>
              <h3 className="mb-3 text-2xl font-display font-bold text-foreground">{item.title}</h3>
              <p className="mb-6 text-sm font-medium leading-relaxed text-foreground/60 md:text-base">{item.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#FF9F1B]">
                Explore Solution <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

const HomepageFaq = () => (
  <section className="bg-background px-6 py-16 md:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
      <div>
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#FF9F1B] md:text-sm">FAQ</span>
        <h2 className="mb-4 text-4xl font-display font-bold tracking-tight text-foreground md:text-5xl">Questions decision-makers ask before booking a demo.</h2>
        <p className="max-w-2xl text-base font-medium leading-relaxed text-foreground/60 md:text-lg">
          These answers strengthen topical coverage and give visitors quick clarity on deployment fit, service scope, and product availability before they reach out.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#FF9F1B] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#FF9F1B]/20 transition-all hover:scale-105 hover:bg-[#FF9F1B]/90 active:scale-95"
          >
            Talk to Sales <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {HOME_FAQS.map((item) => (
          <div key={item.question} className="rounded-3xl border border-foreground/8 bg-[#F9F9F9] p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-foreground md:text-xl">{item.question}</h3>
            <p className="text-sm font-medium leading-relaxed text-foreground/60 md:text-base">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);



const Footer = () => {
  return (
    <footer className="bg-[#1D1D1F] text-white pt-16 md:pt-24 pb-8 md:pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={`${import.meta.env.BASE_URL}images/INTERACTIVE SMART BOARD.png`} alt="InfinityX" className="h-16" />
            </Link>
            <p className="text-white/60 font-medium max-w-sm mb-6">
              Premier system integration partner delivering high-performance IT infrastructure and intelligent display solutions.
            </p>
            <div className="text-white/70 text-sm font-medium mb-8 space-y-2">
              <p>APIIC Industrial area C4/110, 100 Feet Rd</p>
              <p>Vijayawada-520007</p>
              <p>Mobile: +91 9292252880 / +91 9533688751</p>
              <p>Email: <a href="mailto:contact@infinityxglobal.com" className="hover:text-white transition-colors">contact@infinityxglobal.com</a></p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-[#FF9F1B]">Products</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><Link to="/products#value" className="hover:text-white transition-colors">Value Series IFPD</Link></li>
              <li><Link to="/products#cseries" className="hover:text-white transition-colors">C-Series IFPD</Link></li>
              <li><Link to="/products#pro" className="hover:text-white transition-colors">Pro Series IFPD</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Digital Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-[#FF9F1B]">Support</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><Link to="/support#warranty" className="hover:text-white transition-colors">Warranty Policy</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Resource Center</Link></li>
              <li><Link to="/support#request" className="hover:text-white transition-colors">Service Request</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Technical Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-[#FF9F1B]">Company</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/clients" className="hover:text-white transition-colors">Our Clients</Link></li>
              <li><Link to="/smart-classroom-solutions-india" className="hover:text-white transition-colors">Solutions in India</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm font-medium">
          <p>© 2026 InfinityX. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>A Matrix Edge Initiative</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

const LandingPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  useSEO({
    title: "InfinityX | Interactive Displays, Smart Classrooms & IT Integration",
    description: "InfinityX provides interactive flat panels, smart classroom systems, campus networking, surveillance, and end-to-end IT integration for schools, institutions, and enterprise teams across India.",
    keywords: "interactive flat panel India, smart classroom solutions, digital boards for schools, enterprise IT integration, campus networking, CCTV surveillance solutions",
    path: '/',
    image: '/images/home_page_final.jpeg',
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "InfinityX",
        url: "https://www.infinityxglobal.com/",
        logo: "https://www.infinityxglobal.com/images/INFINITYX.png",
        email: "contact@infinityxglobal.com",
        telephone: "+91 9292252880",
        address: {
          "@type": "PostalAddress",
          streetAddress: "APIIC Industrial Area C4/110, 100 Feet Rd",
          addressLocality: "Vijayawada",
          addressRegion: "Andhra Pradesh",
          postalCode: "520007",
          addressCountry: "IN",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "InfinityX",
        url: "https://www.infinityxglobal.com/",
      },
      faqSchema,
    ],
  });

  return (
  <>
    {/* Scroll-1: Hero — text only, fullscreen */}
    <Hero />

    {/* Scroll-2: Products */}
    <ScrollSection
      image={`${import.meta.env.BASE_URL}images/home_page_final.jpeg`}
      imageAlt="InfinityX Products"
      badge="Flagship Product"
      title="Products. Built for Learning & Business."
      description="InfinityX smart boards deliver 4K UHD visuals, 64-point multi-touch, built-in AI cameras, and an 8-array microphone system — engineered for education and enterprise collaboration."
      ctaLabel="Explore All Products"
      ctaTo="/products"
      imageOnRight={true}
    />

    {/* Scroll-3: Holistic Integration */}
    <ScrollSection
      image={`${import.meta.env.BASE_URL}images/Network.png`}
      imageAlt="Holistic Network Integration"
      badge="End-to-End Integration"
      title="Holistic Integration. Connecting Every Layer."
      description="From campus-wide LAN/WAN and wireless networks to advanced storage and server deployments — InfinityX architects the complete technology backbone your organization needs to scale."
      ctaLabel="Explore Digital Solutions"
      ctaTo="/services"
      imageOnRight={false}
    />

    {/* Scroll-4: Intelligent Surveillance */}
    <ScrollSection
      image={`${import.meta.env.BASE_URL}images/ccCamera.png`}
      imageAlt="Intelligent Surveillance Systems"
      badge="Security & Surveillance"
      title="Intelligent Surveillance. Total Control."
      description="Multi-camera CCTV architectures, command control room deployments, access control, and boom barrier solutions — comprehensive security intelligence for campuses and enterprises."
      ctaLabel="Explore Security Solutions"
      ctaTo="/services"
      imageOnRight={true}
    />

    <HomepageStats />
    <HomepageIntentGrid />
    <ClientMarquee />
    <HomepageFaq />
  </>
  );
};

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top on page change
    if (!hash) {
      window.scrollTo(0, 0);
    }
    // Scroll to section on hash match with slight delay to ensure render
    else {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <div className="bg-background min-h-screen text-foreground selection:bg-[#FF9F1B]/20 selection:text-[#FF9F1B] scroll-smooth flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/smart-classroom-solutions-india" element={<IndiaSolutionsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
