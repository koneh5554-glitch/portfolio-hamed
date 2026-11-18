import React, { useState } from 'react';
import { useLanguage } from '../translations/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import type { ProjectCategory } from '../types';

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'web', label: t.projects.filterWeb },
    { id: 'embedded', label: t.projects.filterEmbedded },
    { id: 'electronics', label: t.projects.filterElectronics },
    { id: 'iot', label: t.projects.filterIot },
    { id: 'networks', label: t.projects.filterNetworks },
    { id: 'studies', label: t.projects.filterStudies },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Projets & Réalisations"
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              <span>{tab.label}</span>
              <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-black/10 dark:bg-white/10">
                {tab.id === 'all'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === tab.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};
