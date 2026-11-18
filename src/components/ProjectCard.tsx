import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';
import { useLanguage } from '../translations/LanguageContext';
import { StatusBadge } from './Badge';
import { ArrowRight, Bot, Cpu, Globe, Server, Database, Radio, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language, t } = useLanguage();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'embedded':
        return <Cpu className="w-5 h-5 text-rose-400" />;
      case 'electronics':
        return <Bot className="w-5 h-5 text-blue-400" />;
      case 'iot':
        return <Radio className="w-5 h-5 text-cyan-400" />;
      case 'networks':
        return <Server className="w-5 h-5 text-amber-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <div className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between h-full border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all duration-300">
      
      {/* Card Header & Visual Badge */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-blue-500/10 dark:bg-slate-800/80 border border-blue-500/20 group-hover:scale-110 transition-transform">
            {getCategoryIcon(project.category)}
          </div>
          <StatusBadge status={project.status} />
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors line-clamp-2">
          {project.title[language]}
        </h3>
        
        <p className="mt-1 text-xs text-blue-600 dark:text-blue-400 font-medium line-clamp-1">
          {project.subtitle[language]}
        </p>

        {/* Summary */}
        <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {project.summary[language]}
        </p>

        {/* Key Metrics Preview */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/60">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx} className="bg-slate-100/70 dark:bg-slate-800/40 rounded-lg p-2 text-center">
                <span className="block text-xs font-bold text-slate-900 dark:text-slate-200">
                  {m.value}
                </span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 truncate">
                  {m.label[language]}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="p-6 pt-2">
        {/* Technologies Pill List */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[11px] font-medium text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Button */}
        <Link
          to={`/project/${project.id}`}
          className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-800 dark:text-slate-200 hover:text-white font-semibold text-xs transition-all group/btn"
        >
          <span>{t.projects.viewProject}</span>
          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
};
