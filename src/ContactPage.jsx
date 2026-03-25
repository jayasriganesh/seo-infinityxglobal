import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSEO } from './hooks/useSEO';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const ContactPage = () => {
    useSEO({
        title: "Contact Sales & Support | InfinityX",
        description: "Get in touch with our enterprise team to construct bespoke IT and interactive display solutions for your organization. Dedicated support and sales contact.",
        keywords: "Contact InfinityX, Matrix Edge Contact, IT Infrastructure Sales, Interactive Display Quote",
        path: "/contact",
        image: "/images/contact-sales.png",
        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "InfinityX",
                url: "https://www.infinityxglobal.com/contact",
                image: "https://www.infinityxglobal.com/images/contact-sales.png",
                telephone: "+91 9292252880",
                email: "contact@infinityxglobal.com",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "APIIC Industrial area C4/110, 100 Feet Rd",
                    addressLocality: "Vijayawada",
                    addressRegion: "Andhra Pradesh",
                    postalCode: "520007",
                    addressCountry: "IN"
                }
            },
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://www.infinityxglobal.com/"
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Contact",
                        item: "https://www.infinityxglobal.com/contact"
                    }
                ]
            }
        ]
    });
    const [status, setStatus] = useState('');
    const [inquiryType, setInquiryType] = useState('Interactive Displays');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const formRef = useRef(null);
    const actualFormRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.from('.anim-up', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            });
            gsap.from(formRef.current, {
                x: 40,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.3
            });
        });
        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs.sendForm(
            'service_tfth6kk',
            'template_86frk1m',
            actualFormRef.current,
            'KeWjLxCc4wCu9iMxQ'
        )
            .then(() => {
                setStatus('Success! We will contact you soon.');
                setTimeout(() => {
                    setStatus('');
                    e.target.reset();
                    setInquiryType('Interactive Displays');
                }, 3000);
            }, (error) => {
                console.error('EmailJS Error:', error.text);
                setStatus('Failed to send. Please try again.');
                setTimeout(() => setStatus(''), 3000);
            });
    };

    const options = ['Interactive Displays', 'Campus Infrastructure', 'Digital Signage', 'Other Services'];

    return (
        <div className="pt-28 pb-16 lg:pt-32 lg:pb-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header Sequence */}
                <div className="text-center mb-16">
                    <span className="anim-up inline-block text-[#FF9F1B] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">Get In Touch</span>
                    <h1 className="anim-up text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-foreground">Contact Sales.</h1>
                    <p className="anim-up text-xl text-foreground/60 max-w-2xl mx-auto font-medium leading-relaxed">
                        Ready to elevate your infrastructure? Our enterprise team is here to construct bespoke solutions for your organization.
                    </p>
                </div>

                {/* Products Visual Banner */}
                <div className="anim-up mb-10 md:mb-20 relative flex items-center justify-center">
                    <img
                        src={`${import.meta.env.BASE_URL}images/contact-sales.png`}
                        alt="InfinityX Product Solutions"
                        className="relative z-10 w-full max-w-6xl h-auto object-contain select-none"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-24">
                    {/* Contact Details (Left side) */}
                    <div ref={textRef} className="lg:col-span-2 space-y-12 h-full flex flex-col justify-center relative">
                        {/* Decorative blur */}
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 w-64 h-64 bg-[#FF9F1B]/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="anim-up relative z-10">
                            <h3 className="text-2xl font-bold font-display mb-8 text-foreground">Headquarters</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-bento flex items-center justify-center shrink-0 border border-foreground/5 shadow-sm">
                                        <MapPin className="text-[#FF9F1B] w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Office Location</h4>
                                        <p className="text-foreground/70 font-medium leading-relaxed text-sm">
                                            APIIC Industrial area<br />
                                            C4/110, 100 Feet Rd<br />
                                            Vijayawada-520007
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-bento flex items-center justify-center shrink-0 border border-foreground/5 shadow-sm">
                                        <Phone className="text-[#FF9F1B] w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Phone</h4>
                                        <p className="text-foreground/70 font-medium leading-relaxed text-sm">+91 9292252880<br />+91 9533688751</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-bento flex items-center justify-center shrink-0 border border-foreground/5 shadow-sm">
                                        <Mail className="text-[#FF9F1B] w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Email</h4>
                                        <p className="text-foreground/70 font-medium leading-relaxed text-sm">
                                            <a href="mailto:contact@infinityxglobal.com" className="hover:text-[#FF9F1B] transition-colors">contact@infinityxglobal.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="anim-up relative z-10 bg-bento border border-foreground/5 rounded-3xl p-8 shadow-sm">
                            <h4 className="font-bold text-foreground mb-2">Dedicated Support</h4>
                            <p className="text-foreground/60 text-sm font-medium leading-relaxed mb-4">
                                Existing customers can directly access our dedicated technical support portal for rapid resolution.
                            </p>
                            <Link to="/support" className="text-[#FF9F1B] font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                                Go to Support Portal <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Form Area (Right side) */}
                    <div ref={formRef} className="lg:col-span-3">
                        <div className="bg-bento border border-foreground/10 rounded-3xl p-6 md:p-12 shadow-xl relative overflow-hidden">
                            {/* Inner decorative blur */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-background rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <form ref={actualFormRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <input type="hidden" name="inquiry_type" value={inquiryType} />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wide">First Name</label>
                                        <input type="text" name="first_name" autoComplete="given-name" required className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-4 outline-none focus:border-[#FF9F1B] focus:ring-1 focus:ring-[#FF9F1B]/20 transition-all text-foreground placeholder:text-foreground/30 font-medium" placeholder="Jane" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wide">Last Name</label>
                                        <input type="text" name="last_name" autoComplete="family-name" required className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-4 outline-none focus:border-[#FF9F1B] focus:ring-1 focus:ring-[#FF9F1B]/20 transition-all text-foreground placeholder:text-foreground/30 font-medium" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wide">Email Address</label>
                                    <input type="email" name="user_email" autoComplete="email" required className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-4 outline-none focus:border-[#FF9F1B] focus:ring-1 focus:ring-[#FF9F1B]/20 transition-all text-foreground placeholder:text-foreground/30 font-medium" placeholder="jane@company.com" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wide">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone_number"
                                        autoComplete="tel"
                                        required
                                        maxLength={10}
                                        pattern="[0-9]{10}"
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)}
                                        className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-4 outline-none focus:border-[#FF9F1B] focus:ring-1 focus:ring-[#FF9F1B]/20 transition-all text-foreground placeholder:text-foreground/30 font-medium"
                                        placeholder="9292252880"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wide">Organization Name</label>
                                        <input type="text" name="organization" autoComplete="organization" className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-4 outline-none focus:border-[#FF9F1B] focus:ring-1 focus:ring-[#FF9F1B]/20 transition-all text-foreground placeholder:text-foreground/30 font-medium" placeholder="Company Ltd." />
                                    </div>
                                    <div className="relative">
                                        <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wide">Inquiry Type</label>
                                        <button
                                            type="button"
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-4 outline-none hover:border-[#FF9F1B]/50 focus:border-[#FF9F1B] transition-colors text-foreground text-left flex justify-between items-center font-medium"
                                        >
                                            {inquiryType}
                                            <ChevronRight size={18} className={`transform transition-transform ${dropdownOpen ? 'rotate-90' : ''}`} />
                                        </button>

                                        {dropdownOpen && (
                                            <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-foreground/10 rounded-xl overflow-hidden shadow-2xl z-20 py-2">
                                                {options.map((option) => (
                                                    <button
                                                        key={option}
                                                        type="button"
                                                        onClick={() => {
                                                            setInquiryType(option);
                                                            setDropdownOpen(false);
                                                        }}
                                                        className="w-full text-left px-5 py-3 hover:bg-[#FF9F1B] hover:text-white text-foreground transition-colors font-bold text-sm"
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wide">Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-4 outline-none focus:border-[#FF9F1B] focus:ring-1 focus:ring-[#FF9F1B]/20 transition-all text-foreground placeholder:text-foreground/30 font-medium resize-none"
                                        placeholder="How can we help you?"
                                        rows={4}
                                    />
                                </div>

                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        disabled={status !== ''}
                                        className={`w-full font-bold px-8 py-5 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 ${status === ''
                                            ? 'bg-[#FF9F1B] text-white hover:bg-[#FF9F1B]/90 hover:scale-[1.02] hover:shadow-[#FF9F1B]/20'
                                            : status.includes('Success')
                                                ? 'bg-green-500 text-white cursor-default'
                                                : 'bg-[#FF9F1B]/50 text-white cursor-wait'
                                            }`}
                                    >
                                        {status || "Submit Inquiry Request"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
