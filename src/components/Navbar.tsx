import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../translations/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Globe, 
  Menu, 
  X, 
  FileDown, 
  Send,
  Terminal
} from 'lucide-react';
import { profileData } from '../data/profile';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '/#hero' },
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.skills, href: '/#skills' },
    { label: t.nav.projects, href: '/#projects' },
    { label: t.nav.experience, href: '/#experience' },
    { label: t.nav.education, href: '/#education' },
    { label: t.nav.leadership, href: '/#leadership' },
    { label: t.nav.documents, href: '/#documents' },
    { label: t.nav.contact, href: '/#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (isHome && href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-lg shadow-md shadow-blue-500/20 ring-1 ring-white/20 group-hover:scale-105 transition-transform">
              <span>{profileData.pseudonym}</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                {profileData.fullName}
              </span>
              <span className="text-[11px] font-medium tracking-wide text-blue-600 dark:text-blue-400 flex items-center gap-1">
                <Terminal className="w-3 h-3 inline" />
                {profileData.academic.specialtyShort} • {profileData.academic.schoolShort}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }
                }}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              aria-label={t.lang.toggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-200/70 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-300 dark:border-slate-700/60 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Theme Switch */}
            <button
              onClick={toggleTheme}
              aria-label={t.theme.toggleTheme}
              className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-300 dark:border-slate-700/60 transition-all cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Quick CV Download button */}
            <a
              href="/docs/CV_KONE_HAMED_EIT.pdf"
              download="CV_KONE_HAMED_EIT.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-bold rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-200 dark:border-slate-800 mt-2 py-4 px-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <a
                href="/docs/CV_KONE_HAMED_EIT.pdf"
                download="CV_KONE_HAMED_EIT.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-lg bg-blue-600 text-white shadow-md shadow-blue-500/20"
              >
                <FileDown className="w-4 h-4" />
                <span>{t.hero.downloadCv}</span>
              </a>
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white"
              >
                <Send className="w-4 h-4 text-blue-500" />
                <span>{t.hero.contactMe}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
