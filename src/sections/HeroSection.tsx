import React, { useState, useEffect } from 'react';
import { useLanguage } from '../translations/LanguageContext';
import { profileData } from '../data/profile';
import { contactData } from '../data/contact';
import { 
  ArrowRight, 
  Send, 
  FileDown, 
  Sparkles, 
  ChevronDown, 
  Cpu,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentDomainIdx, setCurrentDomainIdx] = useState(0);

  const domains = t.hero.domains;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDomainIdx((prev) => (prev + 1) % domains.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [domains.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-blue-600/15 dark:bg-blue-600/20 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.hero.statusAvailable}</span>
              <span className="hidden sm:inline text-slate-400 dark:text-slate-500">•</span>
              <span className="hidden sm:inline text-slate-600 dark:text-slate-300 font-normal">
                {t.hero.statusSubtext}
              </span>
            </div>

            {/* Name with CC badge */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
                {profileData.fullName}
              </h1>
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-sm sm:text-base shadow-md shadow-blue-500/25 ring-1 ring-white/20">
                {profileData.pseudonym}
              </span>
            </div>

            {/* Subtitle / Title */}
            <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-500" />
              <span>{profileData.badgeTitle[language]}</span>
            </div>

            {/* Dynamic animated domain carousel */}
            <div className="h-8 flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 mb-6">
              <span className="text-slate-400 font-normal">Spécialisé en :</span>
              <span className="px-3 py-1 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30 font-bold transition-all duration-300">
                {domains[currentDomainIdx]}
              </span>
            </div>

            {/* Exact Presentation statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
              « {profileData.shortPresentation[language]} »
            </p>

            {/* Academic badge preview */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-8 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <Layers className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>
                {profileData.academic.institutionShort} • {profileData.academic.schoolShort} • {profileData.academic.departmentShort} • {profileData.academic.specialtyShort}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5"
              >
                <span>{t.hero.discoverProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-blue-500" />
                <span>{t.hero.contactMe}</span>
              </a>

              <a
                href="/docs/CV_KONE_HAMED_EIT.pdf"
                download="CV_KONE_HAMED_EIT.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 transition-all hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                <span>{t.hero.downloadCv}</span>
              </a>
            </div>

            {/* Social profiles & GitHub / LinkedIn */}
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span>Réseaux :</span>
              <a
                href={contactData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={contactData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Sleek Professional Photo / Avatar Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Gradient Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 opacity-30 dark:opacity-40 blur-xl group-hover:opacity-60 transition duration-1000"></div>
              
              {/* Card Container */}
              <div className="relative rounded-3xl glass-card overflow-hidden p-6 sm:p-8 border border-white/20 dark:border-white/10 shadow-2xl">
                
                {/* Photo / Avatar Card with Real Image */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-inner group">
                  <img
                    src="/avatar.jpg"
                    alt={`${profileData.fullName} (${profileData.pseudonym})`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>

                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-blue-400"></div>
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-blue-400"></div>
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-blue-400"></div>
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-blue-400"></div>

                  {/* Badge & Info Overlay at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col items-center text-center p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10">
                    <span className="text-sm font-black text-white tracking-wide flex items-center gap-2">
                      <span>{profileData.fullName}</span>
                      <span className="px-1.5 py-0.5 rounded bg-blue-600 text-white text-[10px] font-extrabold">
                        {profileData.pseudonym}
                      </span>
                    </span>
                    <span className="text-[11px] text-blue-400 font-semibold mt-0.5">
                      {profileData.academic.specialtyShort} • {profileData.academic.institutionShort}
                    </span>
                  </div>
                </div>

                {/* Floating Micro-Card: Dual Competence */}
                <div className="mt-4 p-3 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/10 text-blue-500">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      Polyvalence Matériel & Logiciel
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Arduino • Python • PHP • Linux • ThingsBoard
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors"
          >
            <span className="text-[11px] uppercase tracking-wider font-semibold">
              {t.hero.scrollDown}
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
