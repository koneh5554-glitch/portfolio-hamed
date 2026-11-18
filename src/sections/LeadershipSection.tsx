import React from 'react';
import { useLanguage } from '../translations/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { leadershipData } from '../data/leadership';
import { Users, Sparkles, Trophy } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="leadership" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#070b12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Leadership & Esprit d'Équipe"
          title={t.leadership.title}
          subtitle={t.leadership.subtitle}
        />

        {/* Role Banner */}
        <div className="max-w-5xl mx-auto mb-12 glass-card rounded-2xl p-6 sm:p-8 border border-blue-500/30 bg-gradient-to-r from-blue-950/20 via-indigo-950/20 to-slate-900/40">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-3 sm:p-4 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/20 flex-shrink-0">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-1">
                  <span>{leadershipData.period[language]}</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {leadershipData.roleTitle[language]}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {leadershipData.organization[language]} — {leadershipData.department} ({leadershipData.institution})
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {leadershipData.summary[language]}
          </p>

          {/* Governance Positions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            {leadershipData.positions.map((pos, pIdx) => (
              <div key={pIdx} className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  {pos.period}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1.5">
                  {pos.title[language]}
                </h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {pos.organization[language]}
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                  {pos.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 7 Flagship Activities Grid */}
        <div className="max-w-5xl mx-auto">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-6">
            <Users className="w-4 h-4 text-blue-500" />
            <span>{t.leadership.activitiesTitle}</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadershipData.activities.map((act) => (
              <div
                key={act.id}
                className="glass-card rounded-xl p-5 border border-slate-200 dark:border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      {act.category[language]}
                    </span>
                  </div>

                  <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-2">
                    {act.title[language]}
                  </h5>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {act.description[language]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-start gap-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>{act.impact[language]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
