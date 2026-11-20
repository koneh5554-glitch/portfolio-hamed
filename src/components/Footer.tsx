import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../translations/LanguageContext';
import { profileData } from '../data/profile';
import { contactData } from '../data/contact';
import { ArrowUp, Mail, Phone, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-[#070b12] py-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Identity col */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold text-base shadow-md shadow-blue-500/20">
                {profileData.pseudonym}
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                {profileData.fullName}
              </span>
            </div>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold tracking-wide">
              {profileData.badgeTitle[language]}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {profileData.tagline[language]}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                {t.footer.statusText}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              Pages du site
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-blue-500 transition-colors">
                  {language === 'fr' ? 'Accueil' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/projets" className="hover:text-blue-500 transition-colors">
                  {language === 'fr' ? 'Projets & Réalisations' : 'Projects'}
                </Link>
              </li>
              <li>
                <Link to="/stages" className="hover:text-blue-500 transition-colors">
                  {language === 'fr' ? 'Stages & Immersion' : 'Internships'}
                </Link>
              </li>
              <li>
                <Link to="/parcours" className="hover:text-blue-500 transition-colors">
                  {language === 'fr' ? 'Parcours & Compétences' : 'Background & Skills'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition-colors">
                  {language === 'fr' ? 'Contact' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              {t.contact.title}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-2 hover:text-blue-500 transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="truncate">{contactData.email}</span>
              </a>
              <a
                href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{contactData.phone}</span>
              </a>
              
              <div className="pt-2">
                <a
                  href="./docs/CV_KONE_HAMED_EIT.pdf"
                  download="CV_KONE_HAMED_EIT.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>CV Officiel (PDF)</span>
                </a>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <a
                  href={contactData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={contactData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} {profileData.fullName} ({profileData.pseudonym}). {t.footer.allRightsReserved}
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">
              INP-HB • ESI • STIC • EIT
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
