import React from 'react';
import { useLanguage } from '../translations/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { profileData } from '../data/profile';
import { 
  Cpu, 
  Code2, 
  Network, 
  Radio, 
  Target, 
  Sparkles, 
  Lightbulb, 
  Users, 
  CheckCircle2, 
  GraduationCap
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();

  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-500" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-500" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge={t.about.academicBadge}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Detailed Biography Text (Exact user quotes) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base border border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>{profileData.academic.level[language]}</span>
            </div>

            <p className="font-medium text-slate-900 dark:text-white">
              {profileData.fullBio.paragraph1[language]}
            </p>

            <p>
              {profileData.fullBio.paragraph2[language]}
            </p>

            <p>
              {profileData.fullBio.paragraph3[language]}
            </p>

            <p className="p-4 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 border-l-4 border-blue-600 text-blue-900 dark:text-blue-200 font-medium">
              « {profileData.fullBio.paragraph4[language]} »
            </p>
          </div>

          {/* Polyvalence & Synergy Visual Pillar */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="glass-card rounded-2xl p-6 border border-blue-500/30 bg-gradient-to-br from-blue-900/10 to-indigo-900/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {t.about.polyvalenceTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {profileData.polyvalenceHighlight[language]}
              </p>
            </div>

            {/* Triad of Skills: Informatique, Électronique, Réseaux */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="glass-card rounded-xl p-4 text-center border border-slate-200 dark:border-slate-800">
                <Code2 className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">Informatique</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Web, SQL, Python, Algorithmes</p>
              </div>

              <div className="glass-card rounded-xl p-4 text-center border border-slate-200 dark:border-slate-800">
                <Cpu className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">Électronique</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Arduino, RPi, Capteurs, GPIO</p>
              </div>

              <div className="glass-card rounded-xl p-4 text-center border border-slate-200 dark:border-slate-800">
                <Network className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">Réseaux & IoT</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Linux, IP, GSM, ThingsBoard</p>
              </div>
            </div>

          </div>

        </div>

        {/* Secondary Grid: Motivations, Interests & Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Career Objectives & Motivations */}
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-2.5 mb-4 text-blue-600 dark:text-blue-400">
              <Target className="w-5 h-5" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {t.about.motivationsTitle}
              </h3>
            </div>
            <ul className="space-y-3">
              {profileData.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>{obj[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas of Interest */}
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-2.5 mb-4 text-indigo-600 dark:text-indigo-400">
              <Radio className="w-5 h-5" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {t.about.interestsTitle}
              </h3>
            </div>
            <ul className="space-y-3">
              {profileData.interests.map((interest, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <Sparkles className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span>{interest[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Strengths */}
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-2.5 mb-4 text-emerald-600 dark:text-emerald-400">
              <Lightbulb className="w-5 h-5" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {t.about.strengthsTitle}
              </h3>
            </div>
            <div className="space-y-3">
              {profileData.keyStrengths.slice(0, 3).map((strength, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                    {getStrengthIcon(strength.icon)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {strength.title[language]}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      {strength.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
