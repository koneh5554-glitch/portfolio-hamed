import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { useLanguage } from '../translations/LanguageContext';
import { StatusBadge } from '../components/Badge';
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronLeft, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Cpu, 
  Wrench, 
  Layers
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[currentIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center glass-card p-10 rounded-3xl max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Projet introuvable</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Le projet demandé n'existe pas ou a été déplacé.</p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.projects.backToProjects}</span>
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t.projects.backToProjects}</span>
          </Link>

          <span className="text-xs text-slate-400">
            Projet {currentIndex + 1} sur {projectsData.length}
          </span>
        </div>

        {/* Project Header Banner */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-white/10 mb-10 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              {project.category.toUpperCase()}
            </span>
            <StatusBadge status={project.status} />
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {project.title[language]}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold leading-relaxed">
            {project.subtitle[language]}
          </p>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {project.summary[language]}
          </p>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 text-center">
                  <span className="block text-base sm:text-lg font-black text-blue-600 dark:text-blue-400">
                    {m.value}
                  </span>
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {m.label[language]}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Case Study Details Grid */}
        <div className="space-y-8">
          
          {/* Section: Context & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-blue-500" />
                <span>Contexte du projet</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.context[language]}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>{t.projects.problemTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.problem[language]}
              </p>
            </div>
          </div>

          {/* Section: Solution & Role */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-indigo-500" />
                <span>{t.projects.solutionTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.solution[language]}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                {t.projects.roleTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.role[language]}
              </p>
            </div>
          </div>

          {/* Section: Technologies & Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Technologies */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Wrench className="w-4 h-4 text-blue-500" />
                <span>{t.projects.technologiesTitle}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Components (if hardware/embedded) */}
            {project.components && project.components.length > 0 && (
              <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                  <Cpu className="w-4 h-4 text-rose-500" />
                  <span>{t.projects.componentsTitle}</span>
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {project.components.map((comp, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Section: Results Obtained */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>{t.projects.resultsTitle}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.results[language].map((res, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {res}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Challenges & Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>{t.projects.challengesTitle}</span>
              </h3>
              <ul className="space-y-2.5">
                {project.challenges[language].map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-blue-500" />
                <span>{t.projects.learningsTitle}</span>
              </h3>
              <ul className="space-y-2.5">
                {project.learnings[language].map((l, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources / Source Code status (Honest per Rule #1, #3 & #9) */}
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {t.projects.linksTitle}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {project.githubUrl
                  ? 'Code source disponible sur le dépôt officiel.'
                  : t.projects.noGithubYet}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white font-bold text-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Prev / Next Project Navigation Bar */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            {prevProject ? (
              <button
                onClick={() => navigate(`/project/${prevProject.id}`)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-bold transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline truncate max-w-xs">{prevProject.title[language]}</span>
                <span className="sm:hidden">Précédent</span>
              </button>
            ) : (
              <div></div>
            )}

            {nextProject && (
              <button
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-bold transition-all cursor-pointer"
              >
                <span className="hidden sm:inline truncate max-w-xs">{nextProject.title[language]}</span>
                <span className="sm:hidden">Suivant</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
