import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import avatarImg from '../assets/avatar.jpg';
import { useLanguage } from '../translations/LanguageContext';
import { profileData } from '../data/profile';
import { contactData } from '../data/contact';
import { projectsData } from '../data/projects';
import { experiencesData } from '../data/experience';
import { ProjectCard } from '../components/ProjectCard';
import { 
  ArrowRight, 
  Send, 
  FileDown, 
  Sparkles, 
  Cpu, 
  Globe, 
  Server, 
  Briefcase, 
  FolderGit2, 
  Building2, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentDomainIdx, setCurrentDomainIdx] = useState(0);

  const domains = t.hero.domains;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDomainIdx((prev) => (prev + 1) % domains.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [domains.length]);

  // Featured 3 top projects
  const featuredProjects = projectsData.slice(0, 3);
  // Featured 2 internships
  const featuredExperiences = experiencesData.slice(0, 2);

  return (
    <div className="relative overflow-hidden">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Ambient lighting effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-blue-600/15 dark:bg-blue-600/20 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Status pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{t.hero.statusAvailable}</span>
                <span className="hidden sm:inline text-slate-400 dark:text-slate-500">•</span>
                <span className="hidden sm:inline text-slate-600 dark:text-slate-300 font-normal">
                  {t.hero.statusSubtext}
                </span>
              </div>

              {/* Name & Pseudonym */}
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

              {/* Animated domain pill */}
              <div className="h-8 flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 mb-6">
                <span className="text-slate-400 font-normal">
                  {language === 'fr' ? 'Spécialisé en :' : 'Focused on:'}
                </span>
                <span className="px-3 py-1 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30 font-bold transition-all duration-300">
                  {domains[currentDomainIdx]}
                </span>
              </div>

              {/* Short Presentation statement */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-2xl">
                « {profileData.shortPresentation[language]} »
              </p>

              {/* Academic badge */}
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-8 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <Layers className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>
                  {profileData.academic.institutionShort} • {profileData.academic.schoolShort} • {profileData.academic.departmentShort} • {profileData.academic.specialtyShort}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                <Link
                  to="/projets"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5"
                >
                  <span>{t.hero.discoverProjects}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/stages"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all hover:-translate-y-0.5"
                >
                  <Briefcase className="w-4 h-4 text-blue-500" />
                  <span>{language === 'fr' ? 'Voir mes stages' : 'View internships'}</span>
                </Link>

                <a
                  href="./docs/CV_KONE_HAMED_EIT.pdf"
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

            {/* Right Column: Sleek Photo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                
                {/* Glow behind frame */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 opacity-30 dark:opacity-40 blur-xl" />

                <div className="relative rounded-3xl glass-card overflow-hidden p-6 sm:p-8 border border-white/20 dark:border-white/10 shadow-2xl">
                  
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-inner group">
                    <img
                      src={avatarImg}
                      alt={`${profileData.fullName} (${profileData.pseudonym})`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Corner marks */}
                    <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-blue-400" />
                    <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-blue-400" />
                    <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-blue-400" />
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-blue-400" />

                    {/* Overlay badge */}
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

                  {/* Dual competence badge */}
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
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. THREE CORE PILLARS                                        */}
      {/* ============================================================ */}
      <section className="py-12 relative border-y border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1 */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-blue-500/40 transition-all">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 w-fit mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Systèmes Embarqués & IoT
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Conception électronique, microcontrôleurs (Arduino, ESP32), pilotage de capteurs, télémétrie GSM/GPS et intégration ThingsBoard.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Arduino', 'ESP32', 'SIM808', 'ThingsBoard', 'C/C++'].map((item, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 transition-all">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 w-fit mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Développement Logiciel & Web
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Architecture d'applications complètes : interfaces responsives, back-end robuste (Python/Django, PHP), et bases de données relationnelles.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'Django', 'PHP', 'JavaScript', 'React', 'SQL'].map((item, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 transition-all">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit mb-4">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Réseaux, Systèmes & Terrain
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Administration Linux (Ubuntu Server), protocoles TCP/IP, sécurité incendie industrielle (SSI / PACIFIC) et dépannage électromécanique.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Linux', 'TCP/IP', 'Apache', 'SSI / PACIFIC', 'Câblage'].map((item, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ESSENTIAL ABOUT / PRESENTATION                            */}
      {/* ============================================================ */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-white/10 shadow-xl max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                {language === 'fr' ? 'À propos de moi' : 'About me'}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                INP-HB • ESI • EIT
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-6">
              {profileData.polyvalenceHighlight[language]}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>{profileData.fullBio.paragraph1[language]}</p>
              <p>{profileData.fullBio.paragraph2[language]}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/parcours"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>{language === 'fr' ? 'Découvrir tout mon parcours & mes compétences' : 'View full background & qualifications'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-3">
                <Link
                  to="/stages"
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                >
                  {language === 'fr' ? 'Voir mes stages' : 'Internships'}
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
                >
                  {language === 'fr' ? 'Me contacter' : 'Contact me'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. FEATURED PROJECTS PREVIEW                                 */}
      {/* ============================================================ */}
      <section className="py-20 relative bg-slate-50/50 dark:bg-[#070b12]/50 border-t border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Sélection de Projets</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                {language === 'fr' ? 'Projets Phares & Réalisations' : 'Featured Projects'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                {language === 'fr'
                  ? 'Aperçu de mes travaux en robotique autonome, télémétrie IoT et ingénierie logicielle.'
                  : 'A glance at my work in autonomous robotics, IoT telemetry, and software engineering.'}
              </p>
            </div>

            <Link
              to="/projets"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/25 transition-all self-start md:self-auto"
            >
              <span>{language === 'fr' ? 'Voir tous les 8 projets' : 'View all 8 projects'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of 3 featured projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Bottom Link */}
          <div className="mt-12 text-center">
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold border border-slate-200 dark:border-slate-700 transition-all"
            >
              <span>{language === 'fr' ? 'Consulter le catalogue complet avec filtres et fiches détaillées' : 'Browse full project catalog with filters'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. INTERNSHIPS & EXPERIENCE PREVIEW                          */}
      {/* ============================================================ */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Expérience en Entreprise</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                {language === 'fr' ? 'Mes Stages & Immersion Terrain' : 'Internships & Field Experience'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                {language === 'fr'
                  ? 'Pratique réelle des chantiers industriels et du développement applicatif.'
                  : 'Real-world practice in industrial field sites and software development.'}
              </p>
            </div>

            <Link
              to="/stages"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-500/25 transition-all self-start md:self-auto"
            >
              <span>{language === 'fr' ? 'Découvrir tous mes stages' : 'View all internships'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of featured experiences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredExperiences.map((exp) => (
              <div
                key={exp.id}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      {exp.badge[language]}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {exp.period[language]}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {exp.role[language]}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-4">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 font-normal">{exp.location[language]}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {exp.description[language]}
                  </p>

                  <div className="space-y-2 mb-6">
                    {exp.tasks[language].slice(0, 3).map((task, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/stages"
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>Détails</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CALL TO ACTION BANNER                                     */}
      {/* ============================================================ */}
      <section className="py-20 relative bg-slate-50/50 dark:bg-[#070b12]/50 border-t border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-white/10 text-center bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
              {language === 'fr' ? 'Prêt à collaborer sur vos défis technologiques ?' : 'Ready to collaborate on technological challenges?'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              {language === 'fr'
                ? 'Je suis disponible immédiatement pour un stage d\'application / fin de cycle, une alternance ou un échange professionnel.'
                : 'I am immediately available for internships, work-study programs, or professional opportunities.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'fr' ? 'Entrer en contact' : 'Get in touch'}</span>
              </Link>
              <a
                href="./docs/CV_KONE_HAMED_EIT.pdf"
                download="CV_KONE_HAMED_EIT.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>{language === 'fr' ? 'Télécharger mon CV (PDF)' : 'Download Resume (PDF)'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
