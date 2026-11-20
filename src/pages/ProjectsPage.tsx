import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../translations/LanguageContext';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import type { ProjectCategory } from '../types';
import { 
  FolderGit2, 
  Search, 
  Sparkles, 
  Layers, 
  Cpu, 
  Globe, 
  Server, 
  Radio, 
  ArrowRight,
  Filter
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { id: ProjectCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: t.projects.filterAll, icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'embedded', label: t.projects.filterEmbedded, icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'iot', label: t.projects.filterIot, icon: <Radio className="w-3.5 h-3.5" /> },
    { id: 'web', label: t.projects.filterWeb, icon: <Globe className="w-3.5 h-3.5" /> },
    { id: 'networks', label: t.projects.filterNetworks, icon: <Server className="w-3.5 h-3.5" /> },
    { id: 'electronics', label: t.projects.filterElectronics, icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'studies', label: t.projects.filterStudies, icon: <Filter className="w-3.5 h-3.5" /> },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      if (!matchCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const title = p.title[language]?.toLowerCase() || '';
      const subtitle = p.subtitle[language]?.toLowerCase() || '';
      const summary = p.summary[language]?.toLowerCase() || '';
      const techs = p.technologies.join(' ').toLowerCase();

      return title.includes(q) || subtitle.includes(q) || summary.includes(q) || techs.includes(q);
    });
  }, [selectedCategory, searchQuery, language]);

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 sm:w-[600px] h-96 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <FolderGit2 className="w-4 h-4" />
            <span>Catalogue des Réalisations</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {t.projects.title}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {language === 'fr'
              ? "Découvrez mes réalisations techniques concrètes : robotique autonome, télémétrie IoT, développement d'applications web, administration de serveurs et ingénierie électronique."
              : "Explore my hands-on technical achievements: autonomous robotics, IoT telemetry, full-stack web applications, server administration, and electronics engineering."}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 mb-10 border border-slate-200 dark:border-white/10 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'fr' ? "Rechercher par mot-clé, techno..." : "Search by keyword, tech..."}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Results counter */}
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
              <span>{filteredProjects.length} {filteredProjects.length > 1 ? (language === 'fr' ? 'projets trouvés' : 'projects found') : (language === 'fr' ? 'projet trouvé' : 'project found')}</span>
              <span className="mx-1">•</span>
              <span>{projectsData.length} au total</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            {filterTabs.map((tab) => {
              const count = tab.id === 'all' 
                ? projectsData.length 
                : projectsData.filter((p) => p.category === tab.id).length;

              if (count === 0 && tab.id !== 'all') return null;

              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/60 border border-slate-200/80 dark:border-slate-700/50'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center max-w-md mx-auto border border-slate-200 dark:border-white/10">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              {language === 'fr' ? 'Aucun projet correspondant' : 'No matching projects'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              {language === 'fr'
                ? "Essayez d'ajuster votre recherche ou sélectionnez une autre catégorie."
                : "Try adjusting your search query or selecting a different category."}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
            >
              {language === 'fr' ? 'Réinitialiser les filtres' : 'Reset filters'}
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 glass-card rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-white/10 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-purple-600/5 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {language === 'fr' ? 'Vous avez un projet ou une opportunité à me confier ?' : 'Have a project or opportunity to discuss?'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-6">
            {language === 'fr'
              ? 'Je suis à l\'écoute de propositions de stage de fin de cycle, alternance ou collaborations techniques innovantes.'
              : 'I am available for final-year internship proposals, work-study programs, or innovative technical collaborations.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-lg shadow-blue-500/25 transition-all"
            >
              <span>{language === 'fr' ? 'Prendre contact' : 'Contact me'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/stages"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-all"
            >
              <span>{language === 'fr' ? 'Découvrir mes stages' : 'View my internships'}</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
