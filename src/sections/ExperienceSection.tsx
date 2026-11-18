import React from 'react';
import { useLanguage } from '../translations/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { experiencesData } from '../data/experience';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Wrench, 
  Sparkles,
  Lock
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#070b12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Immersion Professionnelle"
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="max-w-4xl mx-auto">
          {experiencesData.map((exp) => (
            <div
              key={exp.id}
              className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-white/10 hover:border-blue-500/40 transition-all shadow-xl"
            >
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{exp.badge[language]}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {exp.role[language]}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm font-bold text-blue-600 dark:text-blue-400">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{exp.period[language]}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{exp.location[language]}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {exp.description[language]}
              </p>

              {/* Tasks List */}
              <div className="mt-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                  <Wrench className="w-4 h-4 text-blue-500" />
                  <span>{t.experience.tasksTitle}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.tasks[language].map((task, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Acquired & Technologies */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{t.experience.skillsTitle}</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {exp.skillsAcquired[language].map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                    {t.experience.techTitle}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Confidentiality Notice */}
              {exp.confidentialityNotice && (
                <div className="mt-8 p-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                  <Lock className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <p className="italic">{exp.confidentialityNotice[language]}</p>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
