import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, MapPin, Monitor, Network, Shield, Video } from 'lucide-react';
import { useSEO } from './hooks/useSEO';

const INDIA_FAQS = [
  {
    question: 'What types of organizations in India can use InfinityX solutions?',
    answer: 'Based on the current site content, InfinityX solutions are positioned for schools, colleges, training centers, campuses, enterprises, and institutional deployments that need displays, networking, or surveillance integration.',
  },
  {
    question: 'Does a smart classroom project usually include more than an interactive panel?',
    answer: 'Yes. Most smart classroom projects also depend on room planning, content workflows, networking, teacher enablement, installation, and support readiness for long-term success.',
  },
  {
    question: 'Can InfinityX support multi-solution rollouts in one project?',
    answer: 'Yes. The current site positions InfinityX as an integration-led provider across displays, networking, surveillance, and related deployment support for broader institutional technology rollouts.',
  },
];

const INDIA_USE_CASES = [
  {
    title: 'Smart classroom solutions for schools in India',
    description: 'Interactive flat panels, classroom-ready teaching workflows, and deployment planning for institutions modernizing learning spaces.',
    icon: <Video className="text-[#FF9F1B]" size={22} />,
    to: '/services#smartclass',
  },
  {
    title: 'Interactive displays for training and business collaboration',
    description: 'Panels and collaboration setups suited to training rooms, meetings, and presentation-led environments that need reliable day-to-day usability.',
    icon: <Monitor className="text-[#FF9F1B]" size={22} />,
    to: '/products',
  },
  {
    title: 'Campus networking and surveillance integration',
    description: 'Support for institutions that need connectivity, infrastructure, and monitored security solutions aligned under one implementation partner.',
    icon: <Network className="text-[#FF9F1B]" size={22} />,
    to: '/services#networking',
  },
  {
    title: 'Security and CCTV planning for institutions',
    description: 'Integrated surveillance architecture, access layers, and control-oriented deployment planning for campuses and organizations.',
    icon: <Shield className="text-[#FF9F1B]" size={22} />,
    to: '/services#surveillance',
  },
];

const IndiaSolutionsPage = () => {
  useSEO({
    title: 'Smart Classroom Solutions in India | Interactive Displays & IT Integration | InfinityX',
    description: 'InfinityX provides smart classroom solutions in India, interactive flat panels, campus networking, surveillance systems, and integration support for schools and enterprises.',
    keywords: 'smart classroom solutions in India, interactive flat panel India, digital board for school India, campus networking India, surveillance integration India',
    path: '/smart-classroom-solutions-india',
    image: '/images/SmartClass.png',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Smart Classroom and IT Integration Solutions in India',
        provider: {
          '@type': 'Organization',
          name: 'InfinityX',
          url: 'https://www.infinityxglobal.com/',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.infinityxglobal.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Smart Classroom Solutions in India',
            item: 'https://www.infinityxglobal.com/smart-classroom-solutions-india',
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: INDIA_FAQS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  });

  return (
    <div className="bg-background min-h-screen text-foreground pt-28 pb-20 md:pt-32">
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF9F1B] md:text-sm">
            <MapPin size={14} />
            India-Focused Landing Page
          </span>
          <h1 className="max-w-5xl text-4xl font-display font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Smart classroom solutions in India, backed by interactive displays and integration expertise.
          </h1>
          <p className="mt-6 max-w-3xl text-base md:text-xl text-foreground/60 font-medium leading-relaxed">
            This page is designed to target India-specific commercial search intent around smart classrooms, interactive flat panels, campus infrastructure, and institution-ready deployment support.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF9F1B] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#FF9F1B]/20 transition-all hover:scale-105 hover:bg-[#FF9F1B]/90 active:scale-95"
            >
              Request a Consultation <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 px-8 py-4 text-base font-bold text-foreground transition-all hover:border-[#FF9F1B] hover:text-[#FF9F1B]"
            >
              Explore Services <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
          {INDIA_USE_CASES.map((item) => (
            <Link key={item.title} to={item.to} className="rounded-[30px] border border-foreground/8 bg-[#F9F9F9] p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[#FF9F1B]/25 hover:shadow-xl hover:shadow-[#FF9F1B]/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                {item.icon}
              </div>
              <h2 className="mb-3 text-2xl font-display font-bold text-foreground">{item.title}</h2>
              <p className="text-base font-medium leading-relaxed text-foreground/60">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 border-y border-bento/50 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#FF9F1B] md:text-sm">Why This Page Matters</span>
            <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground md:text-5xl">A dedicated landing page gives the site a stronger chance to rank for India-focused solution intent.</h2>
            <p className="text-base font-medium leading-relaxed text-foreground/60 md:text-lg">
              Product pages alone are not always enough to capture regional commercial searches. This page gives the site a clear entry point for buyers looking for smart classroom and integration partners in India.
            </p>
          </div>

          <div className="space-y-4">
            {[
              'Targets a clear India-specific smart classroom and display keyword cluster',
              'Supports organic traffic before visitors reach the product comparison pages',
              'Creates another strong internal-linking bridge into products, services, and contact',
              'Improves topical coverage for institutions and deployment-focused searches',
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-sm border border-foreground/6">
                <CheckCircle2 className="mt-0.5 text-[#FF9F1B]" size={20} />
                <p className="text-base font-medium leading-relaxed text-foreground/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#FF9F1B] md:text-sm">FAQ</span>
            <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground md:text-5xl">Questions this India-focused landing page is built to answer.</h2>
            <p className="text-base font-medium leading-relaxed text-foreground/60 md:text-lg">
              These FAQs improve semantic relevance and help the page cover real commercial and planning-stage queries without stuffing keywords into the copy.
            </p>
          </div>

          <div className="space-y-4">
            {INDIA_FAQS.map((item) => (
              <div key={item.question} className="rounded-3xl border border-foreground/8 bg-[#F9F9F9] p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-foreground">{item.question}</h3>
                <p className="text-base font-medium leading-relaxed text-foreground/60">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndiaSolutionsPage;
