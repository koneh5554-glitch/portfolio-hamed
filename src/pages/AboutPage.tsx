import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../translations/LanguageContext';
import { profileData } from '../data/profile';
import { educationData } from '../data/education';
import { skillsData } from '../data/skills';
import { leadershipData } from '../data/leadership';
import { documentsData } from '../data/documents';
import { 
  GraduationCap, 
  Code2, 
  Cpu, 
  Server, 
  Radio, 
  Database, 
  CheckCircle2, 
  FileDown, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Trophy,
  Users
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { language } = useLanguage();

  const getSkillCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-indigo-500" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-rose-500" />;
      case 'Server':
        return <Server className="w-4 h-4 text-emerald-500" />;
      case 'Radio':
        return <Radio className="w-4 h-4 text-cyan-500" />;
      case 'Database':
        return <Database className="w-4 h-4 text-purple-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      {/* Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 sm:w-[600px] h-96 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Profil, Formation & Compétences</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {language === 'fr' ? 'Parcours & Savoir-Faire' : 'Background & Skillset'}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {profileData.tagline[language]}
          </p>
        </div>

        {/* Presentation & Vision Essential */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-white/10 mb-14 shadow-xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              INP-HB • ESI • STIC • EIT
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-4">
            {language === 'fr' ? 'Une vision transverse : Logiciel, Électronique & Réseaux' : 'A versatile vision: Software, Electronics & Networks'}
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>{profileData.fullBio.paragraph1[language]}</p>
            <p>{profileData.fullBio.paragraph2[language]}</p>
            <p>{profileData.fullBio.paragraph3[language]}</p>
          </div>

          {/* Quick Strengths badges */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                {language === 'fr' ? 'Double Compétence' : 'Dual Expertise'}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {language === 'fr' ? 'Matériel (Hardware/Électronique) & Logiciel (Software/Web/Python)' : 'Hardware & Software engineering synergy'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
              <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                {language === 'fr' ? 'Pragmatisme Terrain' : 'Field Pragmatism'}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {language === 'fr' ? 'Expérience en sécurité incendie, câblage et atelier mécanique' : 'Hands-on experience in fire safety and wiring'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                {language === 'fr' ? 'Disponibilité' : 'Availability'}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {profileData.status.subtext[language]}
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Academic Formation */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {language === 'fr' ? 'Formation Académique' : 'Academic Education'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {language === 'fr' ? 'Cursus d\'excellence et certifications techniques' : 'Excellence curriculum and technical credentials'}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-lg hover:border-blue-500/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2">
                      {edu.degree[language]}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {edu.specialty[language]}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                      {edu.institution} {edu.school ? `— ${edu.school}` : ''}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 whitespace-nowrap self-start">
                    {edu.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {edu.description[language]}
                </p>

                {edu.keyPoints && edu.keyPoints[language].length > 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {edu.keyPoints[language].map((kp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{kp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Technical Skills by category */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {language === 'fr' ? 'Compétences Techniques' : 'Technical Skills'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {language === 'fr' ? 'Technologies et outils maîtrisés au quotidien' : 'Core competencies and technologies'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((category) => (
              <div
                key={category.id}
                className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-lg"
              >
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                    {getSkillCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {category.title[language]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center justify-between gap-2 border ${
                        skill.highlighted
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 font-semibold'
                          : 'bg-slate-100/70 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-700/60'
                      }`}
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 opacity-80">
                        {skill.level[language]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Leadership & Engagement */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {language === 'fr' ? 'Engagement Associatif & Responsabilités' : 'Community & Leadership'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {leadershipData.organization[language]}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {leadershipData.positions.map((pos, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-500" />
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {pos.title[language]}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 self-start sm:self-auto">
                    {pos.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {pos.organization[language]}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pos.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: CV Downloads direct */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-white/10 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-cyan-600/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
                <FileDown className="w-3.5 h-3.5" />
                <span>Documents Officiels</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {language === 'fr' ? 'Télécharger mon Curriculum Vitæ' : 'Download My Official Resume'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                {language === 'fr'
                  ? 'Consultez la synthèse officielle de mes qualifications, disponible aux formats PDF certifié et Word.'
                  : 'Get the official breakdown of my credentials in standard certified PDF or Word format.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {documentsData.filter(d => d.available).map((doc) => (
                <a
                  key={doc.id}
                  href={doc.fileUrl}
                  download={doc.filename}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/25 transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>{doc.filename.endsWith('.pdf') ? 'Télécharger PDF (265 Ko)' : 'Format Word DOCX'}</span>
                </a>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-all"
              >
                <span>{language === 'fr' ? 'Me contacter' : 'Contact me'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
