import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSEO } from './hooks/useSEO';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Monitor, Cpu, Wifi, Shield, Zap, Star, LayoutTemplate, Server,
    Mic, Camera, ChevronRight, ArrowRight, CheckCircle2, Minus,
    MapPin, Phone, Mail, Play, BookOpen, Users, ShieldCheck, Layers,
    Volume2, MemoryStick, HardDrive, Touchpad, Maximize2, Bot,
    PenTool, MessageSquare, SlidersHorizontal, Subtitles, Search,
    ScreenShare, Lightbulb, Network
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;

// ─── IMAGES ──────────────────────────────────────────────────────────────────
const VALUE_IMAGES = {
    '65"': `${BASE}images/ID.png`,
    '75"': `${BASE}images/ID.png`,
    '86"': `${BASE}images/ID.png`,
};
const CSERIES_IMAGES = {
    '65"': `${BASE}images/ID3.jpg`,
    '75"': `${BASE}images/ID3.jpg`,
    '86"': `${BASE}images/ID3.jpg`,
};
const PRO_IMAGE = `${BASE}images/ID2.png`;


// ═══════════════════════════════════════════════════════════════════════
// SECTION 1 — HERO
// ═══════════════════════════════════════════════════════════════════════
const Hero = ({ onExplore, onCompare }) => {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(['.hero-tag', '.hero-h1', '.hero-body', '.hero-pills', '.hero-btns'], {
                opacity: 0, y: 40, willChange: 'transform, opacity',
            });
            gsap.set('.hero-panel', { opacity: 0, x: 60, scale: 0.95, willChange: 'transform, opacity' });

            const tl = gsap.timeline({ delay: 0.1 });
            tl.to('.hero-tag', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', clearProps: 'willChange' })
                .to('.hero-h1', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', clearProps: 'willChange' }, '-=0.4')
                .to('.hero-body', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', clearProps: 'willChange' }, '-=0.5')
                .to('.hero-btns', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', clearProps: 'willChange' }, '-=0.4')
                .to('.hero-pills', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', clearProps: 'willChange' }, '-=0.3')
                .to('.hero-panel', { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power2.out', clearProps: 'willChange' }, '-=1.1');
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={ref} className="pt-28 pb-16 lg:py-28 bg-background flex items-center px-6 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-11 gap-12 lg:gap-16 items-center">

                {/* Left: Text (55%) */}
                <div className="lg:col-span-6 space-y-8">
                    <span className="hero-tag inline-block text-[#FF9F1B] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                        InfinityX · Products
                    </span>

                    <h1 className="hero-h1 font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-foreground leading-[1.05]">
                        Products.<br />
                        Built for <span className="text-[#FF9F1B]">Classrooms</span> and Collaboration.
                    </h1>

                    <p className="hero-body text-base md:text-xl text-foreground/60 font-medium max-w-lg leading-relaxed">
                        Three interactive display series built for schools, training rooms, meeting spaces, and modern teaching environments across every budget tier.
                    </p>

                    <div className="hero-btns flex flex-wrap gap-4">
                        <button
                            onClick={onExplore}
                            className="bg-[#FF9F1B] text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 hover:bg-[#FF9F1B]/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#FF9F1B]/20"
                        >
                            Explore Series <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={onCompare}
                            className="bg-transparent text-foreground px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 border border-foreground/20 hover:border-[#FF9F1B] hover:text-[#FF9F1B] transition-all"
                        >
                            Compare Panels <ChevronRight size={18} />
                        </button>
                    </div>

                    {/* Size pills — static labels */}
                    <div className="hero-pills flex items-center gap-3">
                        <span className="text-foreground/40 text-sm font-bold uppercase tracking-widest">Available in</span>
                        {['65"', '75"', '86"'].map((s, i) => (
                            <span key={s} className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${i === 1 ? 'bg-[#FF9F1B] text-white' : 'bg-bento text-foreground/60'}`}>
                                {s}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right: Panel image (45%) */}
                <div className="hero-panel relative lg:col-span-5">
                    <div className="absolute inset-0 -m-16 bg-[#FF9F1B]/8 rounded-full blur-3xl pointer-events-none" />
                    <img
                        src={PRO_IMAGE}
                        alt="InfinityX Interactive Display"
                        loading="eager"
                        fetchpriority="high"
                        className="relative w-full max-h-[700px] object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};


// ═══════════════════════════════════════════════════════════════════════
// SECTION 2 — STICKY SERIES NAV
// ═══════════════════════════════════════════════════════════════════════
const SERIES_TABS = [
    { id: 'value', label: 'VALUE SERIES' },
    { id: 'cseries', label: 'C-SERIES' },
    { id: 'pro', label: 'PRO SERIES' },
];

const SeriesNav = ({ activeTab, onTabClick, onCompare }) => {
    return (
        <div className="sticky top-24 z-40 bg-[#F9F9F9] border-b border-bento/50">
            <div className="max-w-screen-2xl mx-auto px-6 h-14 flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-6">
                    {SERIES_TABS.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => onTabClick(tab.id)}
                            className="relative h-14 flex items-center px-2 font-bold text-xs tracking-widest uppercase transition-colors"
                            style={{ color: activeTab === tab.id ? '#1D1D1F' : 'rgba(29,29,31,0.5)' }}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF9F1B] rounded-full" />
                            )}
                        </button>
                    ))}
                </div>
                <button
                    onClick={onCompare}
                    className="hidden md:flex items-center gap-1 text-[#FF9F1B] font-bold text-xs tracking-widest uppercase hover:gap-2 transition-all"
                >
                    Compare All <ChevronRight size={14} />
                </button>
            </div>
        </div>
    );
};


// ═══════════════════════════════════════════════════════════════════════
// SECTION 3 — VALUE SERIES
// ═══════════════════════════════════════════════════════════════════════
const PRODUCT_USE_CASES = [
    {
        icon: Monitor,
        title: 'Interactive flat panels for schools',
        description: 'Touch-enabled digital boards for lessons, annotation, smart classrooms, and daily teaching workflows.',
        linkLabel: 'See classroom-ready models',
        to: '/products#value',
    },
    {
        icon: LayoutTemplate,
        title: 'Displays for training and meeting rooms',
        description: 'Collaboration displays designed for presentations, workshops, wireless sharing, and business communication.',
        linkLabel: 'Explore business-ready options',
        to: '/products#cseries',
    },
    {
        icon: ShieldCheck,
        title: 'Premium panels for large deployments',
        description: 'Advanced display systems for institutions and organizations planning multi-room or high-spec rollouts.',
        linkLabel: 'Compare Pro Series',
        to: '/products#pro',
    },
];

const ProductUseCases = () => (
    <section className="border-b border-bento/50 bg-[#F9F9F9] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-screen-2xl">
            <div className="mb-10 max-w-3xl">
                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#FF9F1B] md:text-sm">Use Cases</span>
                <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground md:text-5xl">Choose the right panel for the way your teams teach, train, and present.</h2>
                <p className="text-base font-medium leading-relaxed text-foreground/60 md:text-lg">
                    This section helps visitors land on the most relevant series faster, while expanding the page around the search intent behind interactive flat panel buying decisions.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {PRODUCT_USE_CASES.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.title}
                            to={item.to}
                            className="group rounded-[28px] border border-foreground/8 bg-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[#FF9F1B]/25 hover:shadow-xl hover:shadow-[#FF9F1B]/5"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF9F1B]/10 text-[#FF9F1B]">
                                <Icon size={24} />
                            </div>
                            <h3 className="mb-3 text-2xl font-display font-bold text-foreground">{item.title}</h3>
                            <p className="mb-6 text-sm font-medium leading-relaxed text-foreground/60 md:text-base">{item.description}</p>
                            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#FF9F1B]">
                                {item.linkLabel}
                                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    </section>
);

const VALUE_SPECS = [
    { icon: <Monitor className="w-6 h-6" />, value: '4K UHD', label: 'Anti-Glare Display' },
    { icon: <Touchpad className="w-6 h-6" />, value: '20-Point', label: 'Multi-Touch Screen' },
    { icon: <Volume2 className="w-6 h-6" />, value: '20W × 2', label: 'Built-in Speakers' },
    { icon: <Cpu className="w-6 h-6" />, value: 'Android 14', label: 'Operating System' },
    { icon: <MemoryStick className="w-6 h-6" />, value: '8GB RAM', label: 'Memory' },
    { icon: <HardDrive className="w-6 h-6" />, value: '128GB', label: 'Internal Storage' },
];

const VALUE_SIZE_DESC = {
    '65"': 'Ideal for classrooms of up to 25 students.',
    '75"': 'Ideal for classrooms of up to 35 students.',
    '86"': 'Ideal for large halls and lecture theatres.',
};

const ValueSeries = () => {
    const [activeSize, setActiveSize] = useState('75"');
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(ref.current.querySelectorAll('.vs-text'), {
                scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
                opacity: 0, y: 40, duration: 0.9, stagger: 0.1, ease: 'power3.out',
            });
            gsap.from(ref.current.querySelectorAll('.vs-img'), {
                scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none none' },
                opacity: 0, x: 60, scale: 0.95, duration: 1.2, ease: 'power2.out',
            });
            gsap.from(ref.current.querySelectorAll('.vs-card'), {
                scrollTrigger: { trigger: ref.current.querySelector('.vs-grid'), start: 'top 85%', toggleActions: 'play none none none' },
                opacity: 0, y: 30, duration: 0.6, stagger: 0.08, ease: 'power3.out',
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section id="value" ref={ref} className="bg-background border-t border-bento/50 py-12 md:py-32 px-6 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-24 items-center">

                {/* Left: Text block */}
                <div className="lg:col-span-2 space-y-8">
                    <span className="vs-text block text-[#FF9F1B] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                        Value Series
                    </span>
                    <h2 className="vs-text font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
                        Smart Learning.<br />Without Compromise.
                    </h2>
                    <p className="vs-text text-lg text-foreground/60 font-medium leading-relaxed max-w-md">
                        Enterprise-grade touch technology and crystal-clear 4K UHD display, engineered to fit every school budget without cutting corners on quality.
                    </p>

                    {/* Interactive size selector */}
                    <div className="vs-text space-y-3">
                        <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Select Size</p>
                        <div className="flex gap-3">
                            {Object.keys(VALUE_SIZE_DESC).map(size => (
                                <button
                                    key={size}
                                    onClick={() => setActiveSize(size)}
                                    className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${activeSize === size
                                        ? 'bg-[#FF9F1B] text-white shadow-md shadow-[#FF9F1B]/20'
                                        : 'bg-bento text-foreground/60 hover:bg-bento/80'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <p className="text-sm font-medium text-foreground/50 transition-all">{VALUE_SIZE_DESC[activeSize]}</p>
                    </div>

                    {/* Spec grid */}
                    <div className="vs-grid grid grid-cols-3 gap-3">
                        {VALUE_SPECS.map((spec, i) => (
                            <div key={i} className="vs-card bg-bento rounded-2xl p-4 flex flex-col gap-2 border border-foreground/5 hover:border-[#FF9F1B]/30 transition-colors shadow-sm">
                                <span className="text-[#FF9F1B]">{spec.icon}</span>
                                <span className="font-bold text-foreground text-sm leading-tight">{spec.value}</span>
                                <span className="text-foreground/50 text-xs font-medium">{spec.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="vs-text">
                        <button
                            onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 bg-[#FF9F1B] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#FF9F1B]/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#FF9F1B]/20"
                        >
                            Enquire About All Series <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Right: Panel image */}
                <div className="vs-img relative lg:col-span-3">
                    <div className="absolute inset-0 -m-12 bg-[#FF9F1B]/6 rounded-3xl blur-3xl pointer-events-none" />
                    <img
                        key={activeSize}
                        src={VALUE_IMAGES[activeSize]}
                        alt="InfinityX Value Series Interactive Display"
                        loading="eager"
                        className="relative w-full max-h-[800px] object-contain drop-shadow-2xl transition-opacity duration-300"
                    />
                </div>
            </div>
        </section>
    );
};


// ═══════════════════════════════════════════════════════════════════════
// SECTION 4 — C-SERIES (CORPORATE) — DARK
// ═══════════════════════════════════════════════════════════════════════
const CSERIES_FEATURES = [
    { icon: <Users className="w-5 h-5" />, title: 'Google Workspace Integration', desc: 'Native access to Docs, Sheets, Meet and Drive from the display.' },
    { icon: <ScreenShare className="w-5 h-5" />, title: 'Wireless Screen Sharing', desc: '4-device simultaneous casting. Zero cables, zero friction.' },
    { icon: <SlidersHorizontal className="w-5 h-5" />, title: 'Remote Control Management', desc: 'Centrally manage every panel in your building from one dashboard.' },
    { icon: <LayoutTemplate className="w-5 h-5" />, title: 'Corporate Dashboard', desc: 'Launch boardroom-ready dashboards, schedules, and KPIs instantly.' },
    { icon: <Wifi className="w-5 h-5" />, title: 'Proximity Sensor', desc: 'Auto-wakes the display when someone enters the room.' },
    { icon: <Network className="w-5 h-5" />, title: 'Enterprise Sync', desc: 'Syncs with Microsoft 365, Teams, Zoom, and enterprise SSO.' },
];

const CSeries = () => {
    const [activeSize, setActiveSize] = useState('75"');
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(ref.current.querySelectorAll('.cs-text'), {
                scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
                opacity: 0, y: 40, duration: 0.9, stagger: 0.1, ease: 'power3.out',
            });
            gsap.from(ref.current.querySelectorAll('.cs-img'), {
                scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none none' },
                opacity: 0, x: -60, scale: 0.95, duration: 1.2, ease: 'power2.out',
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section id="cseries" ref={ref} className="bg-foreground border-t border-[#FF9F1B]/20 py-12 md:py-32 px-6 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-24 items-center">

                {/* Left: Panel image */}
                <div className="cs-img relative lg:col-span-3 order-2 lg:order-1">
                    <div className="absolute inset-0 -m-12 bg-[#FF9F1B]/10 rounded-3xl blur-3xl pointer-events-none" />
                    <img
                        src={CSERIES_IMAGES[activeSize]}
                        alt="InfinityX C-Series Corporate Display"
                        loading="eager"
                        className="relative w-full max-h-[800px] object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Right: Text block */}
                <div className="lg:col-span-2 space-y-8 order-1 lg:order-2">
                    <span className="cs-text inline-flex items-center gap-2 text-white/60 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                        <span className="bg-white/10 px-3 py-1 rounded-full">C-Series · Corporate</span>
                    </span>
                    <h2 className="cs-text font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
                        The Boardroom.<br />The Classroom. <span className="text-[#FF9F1B]">Both.</span>
                    </h2>
                    <p className="cs-text text-lg text-white/60 font-medium leading-relaxed max-w-md">
                        Purpose-built for hybrid environments. The C-Series unifies corporate-grade collaboration tools with classroom-ready interactive technology.
                    </p>

                    {/* Feature list */}
                    <ul className="cs-text space-y-5">
                        {CSERIES_FEATURES.map((f, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <span className="text-[#FF9F1B] shrink-0 mt-0.5">{f.icon}</span>
                                <div>
                                    <span className="font-bold text-white text-sm block">{f.title}</span>
                                    <span className="text-white/50 text-sm font-medium">{f.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Size selector — dark version */}
                    <div className="cs-text space-y-3">
                        <p className="text-sm font-bold text-white/40 uppercase tracking-widest">Select Size</p>
                        <div className="flex gap-3">
                            {['65"', '75"', '86"'].map(size => (
                                <button
                                    key={size}
                                    onClick={() => setActiveSize(size)}
                                    className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${activeSize === size
                                        ? 'bg-[#FF9F1B] text-white shadow-md shadow-[#FF9F1B]/20'
                                        : 'bg-white/10 text-white hover:bg-white/15'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="cs-text">
                        <button
                            onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 bg-[#FF9F1B] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#FF9F1B]/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#FF9F1B]/20"
                        >
                            Enquire About All Series <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};


// ═══════════════════════════════════════════════════════════════════════
// SECTION 5 — PRO SERIES
// ═══════════════════════════════════════════════════════════════════════
const PRO_HARDWARE_STATS = [
    { value: '450', unit: 'nits', label: 'Brightness' },
    { value: '100,000', unit: ':1', label: 'Contrast Ratio' },
    { value: '< 2', unit: 'ms', label: 'Touch Latency' },
    { value: '50', unit: 'MP', label: 'AI Camera' },
    { value: 'Mohs 9', unit: '', label: 'Glass Hardness' },
    { value: '8', unit: 'GB', label: 'RAM' },
];

const PRO_AI_FEATURES = [
    { icon: <PenTool className="w-5 h-5" />, title: 'AI Whiteboard', desc: 'Infinite canvas with AI sketch-to-shape and auto-cleanup.' },
    { icon: <Bot className="w-5 h-5" />, title: 'AI Lesson Planning', desc: '5E-structured lesson plans generated instantly from a topic.' },
    { icon: <MessageSquare className="w-5 h-5" />, title: 'AI Q&A', desc: 'Students ask questions in real-time; AI surfaces context-aware answers.' },
    { icon: <Camera className="w-5 h-5" />, title: 'AI Camera', desc: '50MP with auto-framing, engagement tracking, and behavior AI.' },
    { icon: <Mic className="w-5 h-5" />, title: 'AI Voice Assistant', desc: '8-array mic system with noise cancellation and voice commands.' },
    { icon: <Lightbulb className="w-5 h-5" />, title: 'AI Summarization', desc: 'Condense PDFs (100pg) and videos into key takeaways in seconds.' },
    { icon: <Search className="w-5 h-5" />, title: 'AI Search', desc: 'Context-aware smart search across the lesson board and apps.' },
    { icon: <Maximize2 className="w-5 h-5" />, title: 'AI Screen Adaptation', desc: 'Automatically adjusts layout for most effective viewing.' },
];

const ProSeries = () => {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(ref.current.querySelectorAll('.pro-text'), {
                scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
                opacity: 0, y: 40, duration: 0.9, stagger: 0.08, ease: 'power3.out',
            });
            gsap.from(ref.current.querySelectorAll('.pro-img'), {
                scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none none' },
                opacity: 0, scale: 0.9, duration: 1.2, ease: 'power2.out',
            });
            gsap.from(ref.current.querySelectorAll('.pro-stat'), {
                scrollTrigger: { trigger: ref.current.querySelector('.pro-stats'), start: 'top 85%', toggleActions: 'play none none none' },
                opacity: 0, y: 20, duration: 0.6, stagger: 0.07, ease: 'power3.out',
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section id="pro" ref={ref} className="py-12 md:py-32 px-6 bg-background border-t border-bento/50 overflow-hidden relative">
            {/* Atmospheric orange blurs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF9F1B]/8 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF9F1B]/8 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="max-w-screen-2xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20 space-y-4">
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        <span className="pro-text text-[#FF9F1B] font-bold tracking-[0.2em] uppercase text-xs">PRO SERIES</span>
                        <div className="flex gap-2">
                            {['MOHS 9', '50MP', '4K', 'AI'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-bento rounded-full text-xs font-bold text-foreground/50 tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <h2 className="pro-text font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-foreground leading-[1.05]">
                        The Pro Series.<br /><span className="text-[#FF9F1B]">Nothing</span> Held Back.
                    </h2>
                    <p className="pro-text text-base md:text-xl text-foreground/60 font-medium max-w-2xl mx-auto leading-relaxed">
                        The EyeRIS A10 Pro is the most advanced interactive display we offer — a fully integrated AI teaching engine built for the classrooms of tomorrow.
                    </p>
                </div>

                {/* Triple column: Hardware | Panel | AI */}
                <div className="grid grid-cols-1 lg:grid-cols-11 gap-10 lg:gap-8 items-center">

                    {/* Left: Hardware stats */}
                    <div className="pro-stats lg:col-span-3 space-y-6">
                        <p className="pro-text text-xs font-bold uppercase tracking-widest text-foreground/40 mb-6">Hardware Specs</p>
                        {PRO_HARDWARE_STATS.map((s, i) => (
                            <div key={i} className="pro-stat border-b border-bento/80 pb-5 last:border-0">
                                <div className="flex items-baseline gap-1">
                                    <span className="font-display font-bold text-3xl text-foreground">{s.value}</span>
                                    <span className="font-bold text-[#FF9F1B] text-lg">{s.unit}</span>
                                </div>
                                <span className="text-foreground/50 text-sm font-medium">{s.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Center: Panel image */}
                    <div className="pro-img relative lg:col-span-5 flex flex-col items-center gap-8">
                        <div className="absolute inset-0 bg-[#FF9F1B]/6 rounded-3xl blur-3xl pointer-events-none" />
                        <img
                            src={PRO_IMAGE}
                            alt="EyeRIS A10 Pro Interactive Display"
                            loading="eager"
                            className="relative w-full max-h-[700px] object-contain drop-shadow-2xl"
                        />
                        {/* Size selector below panel */}
                        <div className="relative z-10 flex flex-col items-center gap-3">
                            <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Available Sizes</p>
                            <div className="flex gap-3">
                                {['65"', '75"', '86"'].map((size, i) => (
                                    <span key={size} className={`px-5 py-2 rounded-full font-bold text-sm ${i === 1 ? 'bg-[#FF9F1B] text-white' : 'bg-bento text-foreground/60'}`}>
                                        {size}
                                    </span>
                                ))}
                            </div>
                            <p className="text-foreground/40 text-xs font-medium text-center mt-1">
                                Mohs 9 Glass · Android 14 · 8GB RAM · 128GB + Unlimited Cloud · 3-Year Onsite Warranty
                            </p>
                        </div>
                    </div>

                    {/* Right: AI features */}
                    <div className="lg:col-span-3 space-y-5">
                        <p className="pro-text text-xs font-bold uppercase tracking-widest text-foreground/40 mb-6">AI Features</p>
                        {PRO_AI_FEATURES.map((f, i) => (
                            <div key={i} className="pro-text flex items-start gap-3">
                                <span className="text-[#FF9F1B] shrink-0 mt-0.5">{f.icon}</span>
                                <div>
                                    <span className="font-bold text-foreground text-sm block">{f.title}</span>
                                    <span className="text-foreground/50 text-xs font-medium leading-relaxed">{f.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <button
                        onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 bg-[#FF9F1B] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#FF9F1B]/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#FF9F1B]/20"
                    >
                        Enquire About All Series <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};


// ═══════════════════════════════════════════════════════════════════════
// SECTION 6 — COMPARISON TABLE
// ═══════════════════════════════════════════════════════════════════════
const COMPARISON_ROWS = [
    { feature: 'Operating System', value: 'Android 14', cseries: 'Android 14', pro: 'Android 14' },
    { feature: 'EDLA Certification', value: 'Supported', cseries: 'Supported', pro: 'Supported' },
    { feature: 'RAM', value: '8GB', cseries: '8GB', pro: '8GB' },
    { feature: 'Storage', value: '128GB', cseries: '128GB', pro: '128GB' },
    { feature: 'AI Engine', value: 'Integrated', cseries: 'Integrated', pro: 'Integrated' },
    { feature: 'Camera / Mic', value: 'Optional Add-on', cseries: 'Included (12MP/8-Mic)', pro: 'Included (50MP/8-Mic)' },
    { feature: 'Cloud Storage', value: 'Available', cseries: 'Available', pro: 'Available' },
    { feature: 'Multi-Touch', value: '40-Point', cseries: '40-Point', pro: '40-Point' },
    { feature: 'Display Bonding', value: 'Standard', cseries: 'Standard', pro: 'Zero-Gap Optical' },
];

const ComparisonTable = ({ tableRef }) => {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(ref.current.querySelectorAll('.ct-fade'), {
                scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
                opacity: 0, y: 40, duration: 0.9, stagger: 0.1, ease: 'power3.out',
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section id="compare" ref={(el) => { ref.current = el; if (tableRef) tableRef.current = el; }} className="py-12 md:py-32 px-6 bg-[#F9F9F9] border-t border-bento/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 ct-fade">
                    <span className="text-[#FF9F1B] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Side-by-Side</span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground mb-4">Compare the Series.</h2>
                    <p className="text-base md:text-xl text-foreground/60 font-medium">Find the right panel for your space, side by side.</p>
                </div>

                <div className="ct-fade overflow-x-auto rounded-3xl border border-foreground/10 shadow-xl">
                    <table className="w-full text-left border-collapse min-w-[680px]">
                        <thead>
                            <tr>
                                <th className="p-5 bg-background border-b border-foreground/10 font-bold text-foreground/40 uppercase tracking-widest text-xs w-1/4">Specification</th>
                                <th className="p-5 bg-background border-b border-foreground/10 text-center">
                                    <span className="text-foreground/40 text-xs uppercase tracking-widest block mb-1">Standard</span>
                                    <span className="font-bold text-foreground text-sm">Eco Series</span>
                                </th>
                                <th className="p-5 bg-background border-b border-foreground/10 text-center">
                                    <span className="text-foreground/40 text-xs uppercase tracking-widest block mb-1">Corporate</span>
                                    <span className="font-bold text-foreground text-sm">C-Series</span>
                                </th>
                                {/* Pro column — highlighted */}
                                <th className="p-5 bg-[#FF9F1B]/8 border-b border-[#FF9F1B]/20 text-center relative">

                                    <span className="text-[#FF9F1B] text-xs uppercase tracking-widest block mb-1 mt-2">Flagship</span>
                                    <span className="font-bold text-foreground text-sm">Pro Series</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium">
                            {COMPARISON_ROWS.map((row, i) => (
                                <tr
                                    key={i}
                                    className={`border-b border-foreground/5 last:border-0 group hover:bg-[#FF9F1B]/5 transition-colors ${i % 2 === 0 ? 'bg-background' : 'bg-bento/40'}`}
                                >
                                    <td className="p-5 font-bold text-foreground/50 text-xs uppercase tracking-wide">{row.feature}</td>
                                    <td className="p-5 text-center text-foreground/70">
                                        {row.value ? row.value : <Minus className="w-4 h-4 text-foreground/20 mx-auto" />}
                                    </td>
                                    <td className="p-5 text-center text-foreground/70">
                                        {row.cseries ? row.cseries : <Minus className="w-4 h-4 text-foreground/20 mx-auto" />}
                                    </td>
                                    <td className="p-5 text-center bg-[#FF9F1B]/5 font-semibold text-foreground border-x border-[#FF9F1B]/10">
                                        {row.pro}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Bottom CTA card */}
                <div className="ct-fade mt-8 rounded-3xl bg-bento border border-foreground/5 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                    <div>
                        <p className="font-bold text-foreground text-lg mb-1">Not sure which series fits you?</p>
                        <p className="text-foreground/60 font-medium">Let our team help you pick the right panel for your space.</p>
                    </div>
                    <button
                        onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
                        className="shrink-0 bg-[#FF9F1B] text-white px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#FF9F1B]/90 hover:scale-105 transition-all shadow-lg shadow-[#FF9F1B]/20 whitespace-nowrap"
                    >
                        Get Expert Advice <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
};


// ═══════════════════════════════════════════════════════════════════════
// SECTION 7 — STATS STRIP (DARK)
// ═══════════════════════════════════════════════════════════════════════
const STATS = [
    { target: 500, suffix: '+', label: 'Installations' },
    { target: 200, suffix: '+', label: 'Schools Served' },
    { target: 50000, suffix: '+', label: 'Students Impacted' },
    { target: 3, suffix: ' Year', label: 'Onsite Warranty' },
];

const StatsStrip = () => {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            STATS.forEach((stat, i) => {
                const el = ref.current?.querySelector(`#stat-val-${i}`);
                if (!el) return;
                const counter = { val: 0 };
                gsap.to(counter, {
                    val: stat.target,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { val: 1 },
                    scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
                    onUpdate: () => {
                        el.textContent = counter.val.toLocaleString() + stat.suffix;
                    },
                    onStart: () => { el.textContent = '0' + stat.suffix; }
                });
            });
            gsap.from(ref.current.querySelectorAll('.stat-label'), {
                scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
                opacity: 0, y: 20, duration: 0.7, stagger: 0.1, ease: 'power3.out',
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={ref} className="py-12 md:py-24 bg-foreground border-t border-[#FF9F1B]/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                    {STATS.map((stat, i) => (
                        <div key={i} className={`flex flex-col items-center text-center py-8 px-4 ${i < STATS.length - 1 ? 'border-r border-white/10' : ''}`}>
                            <span
                                id={`stat-val-${i}`}
                                className="font-display font-extrabold text-5xl md:text-6xl text-[#FF9F1B] mb-3"
                            >
                                0{stat.suffix}
                            </span>
                            <span className="stat-label text-white/50 text-xs uppercase tracking-widest font-bold">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// ═══════════════════════════════════════════════════════════════════════
// SECTION 8 — ENQUIRY FORM
// ═══════════════════════════════════════════════════════════════════════
const EnquiryForm = () => {
    const [selectedSeries, setSelectedSeries] = useState('Pro Series');
    const [selectedSize, setSelectedSize] = useState('75"');
    const [status, setStatus] = useState('');
    const ref = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(ref.current.querySelectorAll('.ef-fade'), {
                scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
                opacity: 0, y: 40, duration: 0.9, stagger: 0.1, ease: 'power3.out',
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs.sendForm(
            'service_tfth6kk',
            'template_86frk1m',
            formRef.current,
            'KeWjLxCc4wCu9iMxQ'
        )
            .then(() => {
                setStatus('Request sent! We\'ll contact you shortly.');
                setTimeout(() => {
                    setStatus('');
                    e.target.reset();
                    setSelectedSeries('Pro Series');
                    setSelectedSize('75"');
                }, 3000);
            }, (error) => {
                console.error('EmailJS Error:', error.text);
                setStatus('Failed to send. Please try again.');
                setTimeout(() => setStatus(''), 3000);
            });
    };

    const seriesOptions = ['Value Series', 'C-Series', 'Pro Series'];
    const sizeOptions = ['65"', '75"', '86"'];

    return (
        <section id="enquiry" ref={ref} className="py-16 md:py-32 px-6 bg-background border-t border-bento/50">
            <div className="max-w-6xl mx-auto">
                <div className="ef-fade rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

                    {/* Left: Dark panel */}
                    <div className="lg:w-2/5 bg-foreground p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9F1B]/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10">
                            <span className="text-[#FF9F1B] font-bold tracking-[0.2em] uppercase text-xs block mb-6">Get a Demo</span>
                            <h3 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
                                Get a Demo at<br />Your School.
                            </h3>
                            <p className="text-white/60 font-medium mb-10 leading-relaxed">
                                Our enterprise team will arrange a live demonstration at your institution, tailored to your specific needs.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4 text-[#FF9F1B]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">+91 9292252880<br />+91 9533688751</p>
                                        <p className="text-white/40 text-xs font-medium">Mon–Sat, 9am–6pm IST</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Mail className="w-4 h-4 text-[#FF9F1B]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">contact@infinityxglobal.com</p>
                                        <p className="text-white/40 text-xs font-medium">Response within 4 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin className="w-4 h-4 text-[#FF9F1B]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Vijayawada, Andhra Pradesh</p>
                                        <p className="text-white/40 text-xs font-medium">APIIC Industrial Area, C4/110</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Series tier indicators */}
                        <div className="relative z-10 mt-12 flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF9F1B]" />
                                <span className="text-white/40 text-xs font-bold">Value</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                                <span className="text-white/40 text-xs font-bold">C-Series</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
                                <span className="text-white/40 text-xs font-bold">Pro</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:w-3/5 bg-[#F9F9F9] p-10 md:p-14">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="inquiry_type" value={`Interested Series: ${selectedSeries} | Size: ${selectedSize}`} />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-foreground/60 mb-2 uppercase tracking-wide">First Name</label>
                                    <input type="text" name="first_name" autoComplete="given-name" required placeholder="Jane"
                                        className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-3.5 outline-none focus:border-[#FF9F1B] focus:ring-1 focus:ring-[#FF9F1B]/20 transition-all text-foreground placeholder:text-foreground/30 font-medium text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-foreground/60 mb-2 uppercase tracking-wide">Last Name</label>
                                    <input type="text" name="last_name" autoComplete="family-name" required placeholder="Doe"
                                        className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-3.5 outline-none focus:border-[#FF9F1B] focus:ring-1 focus:ring-[#FF9F1B]/20 transition-all text-foreground placeholder:text-foreground/30 font-medium text-sm" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-foreground/60 mb-2 uppercase tracking-wide">Email Address</label>
                                    <input type="email" name="user_email" autoComplete="email" required placeholder="jane@school.edu"
                                        className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-3.5 outline-none focus:border-[#FF9F1B] focus:ring-1 focus:ring-[#FF9F1B]/20 transition-all text-foreground placeholder:text-foreground/30 font-medium text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-foreground/60 mb-2 uppercase tracking-wide">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone_number"
                                        autoComplete="tel"
                                        required
                                        maxLength={10}
                                        pattern="[0-9]{10}"
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)}
                                        className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-3.5 outline-none focus:border-[#FF9F1B] focus:ring-1 focus:ring-[#FF9F1B]/20 transition-all text-foreground placeholder:text-foreground/30 font-medium text-sm"
                                        placeholder="9292252880"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-foreground/60 mb-2 uppercase tracking-wide">Organization / School Name</label>
                                <input type="text" name="organization" autoComplete="organization" placeholder="Greenfield High School"
                                    className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-3.5 outline-none focus:border-[#FF9F1B] focus:ring-1 focus:ring-[#FF9F1B]/20 transition-all text-foreground placeholder:text-foreground/30 font-medium text-sm" />
                            </div>

                            {/* Series selector */}
                            <div>
                                <label className="block text-xs font-bold text-foreground/60 mb-2 uppercase tracking-wide">Interested Series</label>
                                <div className="flex flex-wrap gap-3">
                                    {seriesOptions.map(s => (
                                        <button
                                            key={s}
                                            type="button"
                                            onClick={() => setSelectedSeries(s)}
                                            className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${selectedSeries === s
                                                ? 'bg-[#FF9F1B] text-white shadow-md shadow-[#FF9F1B]/20'
                                                : 'bg-bento text-foreground/60 hover:bg-bento/60'
                                                }`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Size selector */}
                            <div>
                                <label className="block text-xs font-bold text-foreground/60 mb-2 uppercase tracking-wide">Panel Size</label>
                                <div className="flex gap-3">
                                    {sizeOptions.map(s => (
                                        <button
                                            key={s}
                                            type="button"
                                            onClick={() => setSelectedSize(s)}
                                            className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${selectedSize === s
                                                ? 'bg-[#FF9F1B] text-white shadow-md shadow-[#FF9F1B]/20'
                                                : 'bg-bento text-foreground/60 hover:bg-bento/60'
                                                }`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-foreground/60 mb-2 uppercase tracking-wide">Message (Optional)</label>
                                <textarea
                                    name="message"
                                    rows={3}
                                    placeholder="Any specific requirements or questions?"
                                    className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-3.5 outline-none focus:border-[#FF9F1B] focus:ring-1 focus:ring-[#FF9F1B]/20 transition-all text-foreground placeholder:text-foreground/30 font-medium text-sm resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== ''}
                                className={`w-full font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 text-sm ${status === ''
                                    ? 'bg-[#FF9F1B] text-white hover:bg-[#FF9F1B]/90 hover:scale-[1.02] shadow-[#FF9F1B]/20'
                                    : status.includes('sent')
                                        ? 'bg-green-500 text-white cursor-default'
                                        : 'bg-[#FF9F1B]/50 text-white cursor-wait'
                                    }`}
                            >
                                {status || 'Request a Demo'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


// ═══════════════════════════════════════════════════════════════════════
// ROOT — ProductsPage
// ═══════════════════════════════════════════════════════════════════════
const ProductsPage = () => {
    useSEO({
        title: "Interactive Displays & Smart Boards | InfinityX",
        description: "Compare our Eco Series, C-Series, and Pro Series interactive displays. Engineered for education and corporate environments with 4K UHD, AI features, and multi-touch.",
        keywords: "Interactive displays comparison, smart board specs, EDLA certified displays, InfinityX Pro Series, C-Series",
        path: "/products",
        image: "/images/ID2.png",
        structuredData: {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "InfinityX Interactive Display Series",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "InfinityX Value Series",
                    url: "https://www.infinityxglobal.com/products#value"
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "InfinityX C-Series",
                    url: "https://www.infinityxglobal.com/products#cseries"
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "InfinityX Pro Series",
                    url: "https://www.infinityxglobal.com/products#pro"
                }
            ]
        }
    });
    const [activeTab, setActiveTab] = useState('value');
    const tableRef = useRef(null);
    const valueRef = useRef(null);
    const cseriesRef = useRef(null);
    const proRef = useRef(null);

    // Scroll spy via IntersectionObserver
    useEffect(() => {
        const observers = [];
        [
            ['value', valueRef],
            ['cseries', cseriesRef],
            ['pro', proRef],
        ].forEach(([id, ref]) => {
            if (!ref.current) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveTab(id); },
                { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
            );
            obs.observe(ref.current);
            observers.push(obs);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveTab(id === 'compare' ? activeTab : id);
    };

    const scrollToCompare = () => {
        if (tableRef.current) tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#FF9F1B]/20 selection:text-[#FF9F1B]">
            {/* S1: Hero */}
            <Hero onExplore={() => scrollTo('value')} onCompare={scrollToCompare} />

            {/* S2: Sticky series nav */}
            <SeriesNav
                activeTab={activeTab}
                onTabClick={(id) => scrollTo(id)}
                onCompare={scrollToCompare}
            />

            <ProductUseCases />

            {/* S3: Value Series */}
            <div ref={valueRef}>
                <ValueSeries />
            </div>

            {/* S4: C-Series */}
            <div ref={cseriesRef}>
                <CSeries />
            </div>

            {/* S5: Pro Series */}
            <div ref={proRef}>
                <ProSeries />
            </div>

            {/* S6: Comparison Table */}
            <ComparisonTable tableRef={tableRef} />

            {/* S7: Stats Strip */}
            <StatsStrip />

            {/* S8: Enquiry Form */}
            <EnquiryForm />
        </div>
    );
};

export default ProductsPage;
