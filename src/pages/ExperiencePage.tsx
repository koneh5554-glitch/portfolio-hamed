import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../translations/LanguageContext';
import { experiencesData } from '../data/experience';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  Lock,
  ArrowRight,
  Flame,
  Globe,
  Settings2
} from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const { language, t } = useLanguage();

  const getExperienceIcon = (id: string) => {
    switch (id) {
      case 'stage-aeg':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'stage-mandigo':
        return <Globe className="w-5 h-5 text-blue-500" />;
      default:
        return <Settings2 className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      {/* Ambient background glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 sm:w-[600px] h-96 bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Immersion & Pratique Terrain</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {language === 'fr' ? 'Mes Stages & Expériences' : 'Internships & Experience'}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {language === 'fr'
              ? "Une solide expérience pratique acquise sur le terrain : de la sécurité incendie industrielle au développement web et à l'électromécanique."
              : "Hands-on experience gained in the field: from industrial fire protection systems to responsive web development and electromechanics."}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiencesData.map((exp) => (
            <div
              key={exp.id}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              {/* Subtle accent bar on the left */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600" />

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 mt-1">
                    {getExperienceIcon(exp.id)}
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{exp.badge[language]}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      {exp.role[language]}
                    </h2>
                    <div className="flex items-center gap-2 mt-1 text-sm font-bold text-blue-600 dark:text-blue-400">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/90 px-3.5 py-1.5 rounded-xl font-medium border border-slate-200/60 dark:border-slate-700/60">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{exp.period[language]}</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{exp.location[language]}</span>
                  </span>
                </div>
              </div>

              {/* Context / Overview description */}
              <p className="mt-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {exp.description[language]}
              </p>

              {/* Real Tasks / Missions */}
              <div className="mt-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                  <Wrench className="w-4 h-4 text-blue-500" />
                  <span>{t.experience.tasksTitle}</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.tasks[language].map((task, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Acquired & Technologies */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{t.experience.skillsTitle}</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {exp.skillsAcquired[language].map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                    {t.experience.techTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Confidentiality Notice */}
              {exp.confidentialityNotice && (
                <div className="mt-6 p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                  <Lock className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <p className="italic leading-relaxed">{exp.confidentialityNotice[language]}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-14 glass-card rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-white/10 text-center bg-gradient-to-r from-indigo-600/5 via-blue-600/5 to-cyan-600/5">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {language === 'fr' ? 'À la recherche d\'un profil rigoureux et immédiatement opérationnel ?' : 'Looking for a hands-on, dependable engineer?'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-6">
            {language === 'fr'
              ? 'Mon bagage technique complet allie compétences matérielles, développement et aisance sur les installations réelles.'
              : 'My engineering background merges hardware intuition, software craftsmanship, and field-tested troubleshooting.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-lg shadow-blue-500/25 transition-all"
            >
              <span>{language === 'fr' ? 'Proposer une opportunité' : 'Propose an opportunity'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-all"
            >
              <span>{language === 'fr' ? 'Voir mes projets techniques' : 'View technical projects'}</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
