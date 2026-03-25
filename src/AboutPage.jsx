import React, { useEffect } from 'react';
import { useSEO } from './hooks/useSEO';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    useSEO({
        title: "About InfinityX | Matrix Edge Computers",
        description: "Learn about Matrix Edge Computers (MEC) and InfinityX. Over a decade of experience delivering top-tier IT infrastructure and system integration services.",
        keywords: "About InfinityX, Matrix Edge Computers, IT Infrastructure Provider, System Integrator India",
        path: "/about",
        image: "/images/INFINITYX.png"
    });

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.from('.fade-up', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.fade-up',
                    start: 'top 85%'
                }
            });

            gsap.utils.toArray('.section-anim').forEach(section => {
                gsap.from(section, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%'
                    }
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-background min-h-screen text-foreground font-sans selection:bg-[#FF9F1B]/20 pb-24">

            {/* 1. Header & Logo */}
            <header className="pt-24 md:pt-32 pb-8 md:pb-16 px-6 text-left max-w-7xl mx-auto flex flex-col items-start">
                <img
                    src={`${import.meta.env.BASE_URL}images/INFINITYX.png`}
                    alt="Matrix Edge Computers / InfinityX Logo"
                    className="h-24 md:h-32 object-contain mb-8 filter drop-shadow-sm fade-up"
                />
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-foreground fade-up">
                    About Us
                </h1>
                <p className="text-xl text-foreground/70 font-medium leading-relaxed max-w-3xl fade-up">
                    Empowering customers, facilitating easy goal attainment, and fostering a more fulfilling and productive life.
                </p>
            </header>

            {/* 2. Main Narrative based on company.md */}
            <main className="max-w-7xl mx-auto px-6 space-y-12 md:space-y-24">

                <section className="space-y-6 text-lg text-foreground/80 font-medium leading-relaxed section-anim text-justify">
                    <p>
                        Matrix Edge Computers (MEC) stands as a premier system integration partner, offering a comprehensive array of IT-integrated products and services. Established in 2013, MEC has navigated a decade-long journey, emerging as a prominent IT Infrastructure Solution provider catering to a diverse clientele, ranging from small and medium businesses to esteemed blue-chip enterprises. Additionally, we specialize in delivering tailored services to educational institutes.
                    </p>
                    <p>
                        With a wealth of experience, MEC excels in providing top-notch IT Infrastructure services across various verticals and technology landscapes. Our customer-centric approach, rooted in unwavering operational excellence, allows us to understand the intricate details of business, technology, and operations. Each encounter fuels our drive for innovation, enabling us to evolve as dynamic solution providers.
                    </p>
                    <p>
                        As a professionally managed, process-driven, and technology-focused System and Network Integrator, MEC specializes in LAN, WAN, WIRELESS, NETWORK MANAGEMENT, STORAGE, SERVERS, DESKTOP SECURITY & SURVEILLANCE, and a diverse array of DISPLAY Solutions domains. Our dedicated team of skilled professionals is committed to proposing technically superior and commercially competitive solutions, positioning MEC as the go-to enterprise solutions provider.
                    </p>
                </section>

                <section className="section-anim">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Mission</h2>
                    <p className="text-lg text-foreground/80 font-medium leading-relaxed text-justify">
                        Our mission is to deliver superior value by offering high-quality products that seamlessly blend performance with competitive pricing. We are dedicated to cultivating successful and lasting relationships with both our customers and suppliers.
                    </p>
                </section>

                <section className="section-anim">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Our Approach</h2>
                    <p className="text-lg text-foreground/80 font-medium leading-relaxed mb-8 text-justify">
                        Rooted in our corporate ethos of perpetual enhancement and seamless integration, our company is steadfastly committed to delivering excellence through the robust framework of its quality management system. Our unwavering dedication is directed towards:
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Delivering services and products of unparalleled quality that surpass customer expectations.",
                            "Ensuring optimal value for our customers' investments.",
                            "Providing courteous and delightful service that aligns seamlessly with both professionalism and personalized attention.",
                            "Offering candid and efficacious consultation and advice.",
                            "Ensuring swift and efficient delivery of both services and products."
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-[#FF9F1B] shrink-0 mt-0.5" />
                                <span className="text-lg text-foreground/80 font-medium text-justify">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="section-anim">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">IT Products & Services</h2>
                    <p className="text-lg text-foreground/80 font-medium leading-relaxed mb-10 text-justify">
                        In today's fast-paced digital landscape, reliable IT infrastructure is the backbone of any successful organization. We provide a comprehensive suite of hardware, software, and enterprise-grade networking solutions tailored to your specific operational needs. From outfitting campuses with robust WiFi networks to providing end-to-end network integration and high-performance computing hardware, our solutions ensure seamless connectivity and sustained productivity.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-foreground">Desktops, Laptops & Servers</h3>
                            <ul className="space-y-3">
                                {['HP', 'Dell', 'Lenovo', 'Acer'].map(brand => (
                                    <li key={brand} className="flex items-center text-foreground/80 font-medium"><ArrowRight className="w-5 h-5 text-[#FF9F1B] mr-3" />{brand}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-foreground">Networking Solutions</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-foreground/80 font-medium"><ArrowRight className="w-5 h-5 text-[#FF9F1B] mr-3" />Campus WiFi solutions</li>
                                <li className="flex items-center text-foreground/80 font-medium"><ArrowRight className="w-5 h-5 text-[#FF9F1B] mr-3" />Network Integration</li>
                                <li className="flex items-center text-foreground/80 font-medium"><ArrowRight className="w-5 h-5 text-[#FF9F1B] mr-3" />Bandwidth Management</li>
                            </ul>
                            <div className="text-sm font-bold text-foreground/50 uppercase tracking-wide mt-4">
                                D-Link • tp-link • Ubiquiti • Cisco
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-anim">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">Surveillance & Security</h2>
                    <p className="text-lg text-foreground/80 font-medium leading-relaxed mb-8 text-justify">
                        Safeguarding your physical assets and ensuring the safety of your personnel or students is paramount. We design and deploy sophisticated, scalable surveillance architectures that provide total geographical awareness. Our integrated security systems empower organizations with real-time monitoring, intelligent access control, and centralized command capabilities to mitigate risks proactively.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center text-lg text-foreground/80 font-medium"><ArrowRight className="w-5 h-5 text-[#FF9F1B] mr-3" />CCTV Architecture and Design Solutions</li>
                        <li className="flex items-center text-lg text-foreground/80 font-medium"><ArrowRight className="w-5 h-5 text-[#FF9F1B] mr-3" />CCTV Command Control Room Solutions</li>
                        <li className="flex items-center text-lg text-foreground/80 font-medium"><ArrowRight className="w-5 h-5 text-[#FF9F1B] mr-3" />Access Control & Boom Barrier Solutions</li>
                        <li className="flex items-center text-lg text-foreground/80 font-medium"><ArrowRight className="w-5 h-5 text-[#FF9F1B] mr-3" />Integration and Maintenance</li>
                    </ul>
                    <div className="text-sm font-bold text-foreground/50 uppercase tracking-wide">
                        HIKVISION • Dahua • CP PLUS
                    </div>
                </section>

                <section className="section-anim">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">Digital Solutions</h2>
                    <p className="text-lg text-foreground/80 font-medium leading-relaxed mb-8 text-justify">
                        The world of education has been constantly evolving and the use of technology in education is one of the biggest innovations which has been re-defining the scope of learning. Realizing its innumerable benefits, schools are building smart classrooms to provide a holistic learning experience to the students.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {[
                            "Interactive Flat Panel (SMART DIGITAL BOARD)",
                            "Interactive Class Room Setup",
                            "Digital Studio Setup",
                            "Interactive Digital Content",
                            "Auditorium Setup",
                            "Active Led Walls",
                            "Digital Signage Solutions",
                            "Video Conference Solutions",
                            "Public Addressing Solutions (PA System)",
                            "Accessories (IFPD STANDS, ENCLOSURES AND STANDS)"
                        ].map((sol, idx) => (
                            <div key={idx} className="flex items-start text-foreground/80 font-medium py-2">
                                <ArrowRight className="w-5 h-5 text-[#FF9F1B] mr-3 shrink-0 mt-0.5" />
                                <span>{sol}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
};

export default AboutPage;
