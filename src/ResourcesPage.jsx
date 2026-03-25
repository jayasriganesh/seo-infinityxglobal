import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, ChevronRight, FileText, Network, Shield, Video } from 'lucide-react';
import { useSEO } from './hooks/useSEO';

const RESOURCE_GUIDES = [
  {
    title: 'Interactive Flat Panel Buying Guide',
    summary: 'A practical overview of panel sizes, classroom fit, collaboration features, and deployment questions buyers should answer before comparing models.',
    icon: <Video className="text-[#FF9F1B]" size={22} />,
    cta: 'Compare display series',
    to: '/products',
  },
  {
    title: 'Smart Classroom Planning Checklist',
    summary: 'A deployment-oriented checklist covering content flow, teacher adoption, room layout, support readiness, and rollout planning for schools.',
    icon: <BookOpen className="text-[#FF9F1B]" size={22} />,
    cta: 'Explore classroom services',
    to: '/services#smartclass',
  },
  {
    title: 'Campus Networking Readiness Guide',
    summary: 'A quick planning framework for Wi-Fi density, integration scope, infrastructure dependencies, and operational resilience across institutions.',
    icon: <Network className="text-[#FF9F1B]" size={22} />,
    cta: 'View networking solutions',
    to: '/services#networking',
  },
  {
    title: 'Surveillance Deployment Checklist',
    summary: 'A concise reference for camera coverage, control room requirements, access layers, and maintenance planning for campus security projects.',
    icon: <Shield className="text-[#FF9F1B]" size={22} />,
    cta: 'See surveillance services',
    to: '/services#surveillance',
  },
];

const RESOURCE_FAQS = [
  {
    question: 'What should schools compare before buying an interactive flat panel?',
    answer: 'The most important factors are panel size, touch capability, classroom suitability, operating system, collaboration tools, service support, and whether the hardware fits the way teachers actually work every day.',
  },
  {
    question: 'Why does a smart classroom rollout need more than just a display?',
    answer: 'A successful rollout usually depends on content access, training, room planning, network readiness, teacher adoption, and post-installation support, not just the panel itself.',
  },
  {
    question: 'When should an institution involve a system integration partner?',
    answer: 'An integration partner becomes especially useful when the project includes multiple rooms, networking, surveillance, support dependencies, or a need to align hardware, deployment, and operations under one plan.',
  },
];

const ResourcesPage = () => {
  useSEO({
    title: 'Resource Center | Smart Classroom & Display Buying Guides | InfinityX',
    description: 'Explore InfinityX buying guides, planning checklists, and implementation resources for interactive displays, smart classrooms, campus networking, and surveillance projects.',
    keywords: 'interactive flat panel buying guide, smart classroom checklist, campus networking guide, surveillance deployment checklist, education technology resources India',
    path: '/resources',
    image: '/images/SmartClass.png',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'InfinityX Resource Center',
        url: 'https://www.infinityxglobal.com/resources',
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
            name: 'Resources',
            item: 'https://www.infinityxglobal.com/resources',
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: RESOURCE_FAQS.map((item) => ({
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
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#FF9F1B] md:text-sm">Resource Center</span>
          <h1 className="max-w-4xl text-4xl font-display font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Guides and planning resources for interactive display and smart classroom projects.
          </h1>
          <p className="mt-6 max-w-3xl text-base md:text-xl text-foreground/60 font-medium leading-relaxed">
            This page expands the site beyond product pages by covering the questions buyers ask earlier in the research journey, from panel selection to rollout planning and support readiness.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF9F1B] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#FF9F1B]/20 transition-all hover:scale-105 hover:bg-[#FF9F1B]/90 active:scale-95"
            >
              Request a Consultation <ArrowRight size={18} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 px-8 py-4 text-base font-bold text-foreground transition-all hover:border-[#FF9F1B] hover:text-[#FF9F1B]"
            >
              Explore Products <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
          {RESOURCE_GUIDES.map((guide) => (
            <div key={guide.title} className="rounded-[32px] border border-foreground/8 bg-[#F9F9F9] p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                {guide.icon}
              </div>
              <h2 className="mb-3 text-2xl font-display font-bold text-foreground">{guide.title}</h2>
              <p className="mb-6 text-base font-medium leading-relaxed text-foreground/60">{guide.summary}</p>
              <Link to={guide.to} className="inline-flex items-center gap-2 text-sm font-bold text-[#FF9F1B]">
                {guide.cta}
                <ChevronRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 border-y border-bento/50 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#FF9F1B] md:text-sm">What This Hub Covers</span>
            <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground md:text-5xl">Helpful content for buyers before and after they shortlist solutions.</h2>
            <p className="text-base font-medium leading-relaxed text-foreground/60 md:text-lg">
              Resource content gives the site more entry points for informational search traffic while also supporting mid-funnel visitors who are not ready to request a quote on their first visit.
            </p>
          </div>

          <div className="space-y-4">
            {[
              'Buying guidance for interactive display and smart board decisions',
              'Deployment checklists for classrooms, campuses, and institutions',
              'Implementation support topics that improve post-sales trust',
              'Clear internal links into product, service, contact, and support pages',
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
            <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground md:text-5xl">Common research questions this page is designed to answer.</h2>
            <p className="text-base font-medium leading-relaxed text-foreground/60 md:text-lg">
              These answers broaden keyword coverage and help connect informational searches to the commercial pages already in the site.
            </p>
          </div>

          <div className="space-y-4">
            {RESOURCE_FAQS.map((item) => (
              <div key={item.question} className="rounded-3xl border border-foreground/8 bg-[#F9F9F9] p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-foreground">{item.question}</h3>
                <p className="text-base font-medium leading-relaxed text-foreground/60">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-foreground text-white p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
              <FileText size={14} />
              Next Step
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">Need help choosing the right solution for your institution or team?</h2>
            <p className="mt-4 text-white/60 font-medium leading-relaxed">
              Use the resource hub to narrow the shortlist, then reach out for a solution recommendation aligned to your classrooms, training rooms, or infrastructure requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-foreground transition-all hover:bg-[#FF9F1B] hover:text-white"
          >
            Talk to InfinityX <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
