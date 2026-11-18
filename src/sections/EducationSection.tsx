import React from 'react';
import { useLanguage } from '../translations/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { educationData } from '../data/education';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Parcours Académique"
          title={t.education.title}
          subtitle={t.education.subtitle}
        />

        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:w-0.5 before:bg-blue-600/30">
          {educationData.map((edu) => (
            <div key={edu.id} className="relative pl-12 sm:pl-16">
              
              {/* Timeline marker */}
              <div className="absolute left-3 sm:left-6 -translate-x-1/2 top-4 w-5 h-5 rounded-full bg-blue-600 ring-4 ring-blue-500/20 text-white flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </div>

              {/* Content Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 hover:border-blue-500/40 transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2">
                      <Award className="w-3 h-3" />
                      <span>{edu.degree[language]}</span>
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {edu.specialty[language]}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.institution} — {edu.school}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 sm:self-start">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {edu.description[language]}
                </p>

                {/* Highlights */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                    {t.education.highlightsTitle}
                  </h4>
                  <ul className="space-y-2">
                    {edu.keyPoints[language].map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}

          {/* Prospective Certifications placeholder card */}
          <div className="relative pl-12 sm:pl-16">
            <div className="absolute left-3 sm:left-6 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-slate-400 dark:bg-slate-700"></div>
            <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
              <span>Certifications professionnelles & Spécialisations continues (Section modifiable dans <code>src/data/education.ts</code>)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
