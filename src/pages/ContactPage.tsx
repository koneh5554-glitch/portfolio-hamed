import React, { useState } from 'react';
import { useLanguage } from '../translations/LanguageContext';
import { ContactForm } from '../components/ContactForm';
import { contactData } from '../data/contact';
import { profileData } from '../data/profile';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink,
  Send
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappLink = `https://wa.me/${contactData.whatsappNumber}`;

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      {/* Background Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 sm:w-[600px] h-96 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <Send className="w-4 h-4" />
            <span>Échange & Opportunités</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {t.contact.title}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards & Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-xl">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-6">
                {t.contact.directContactTitle}
              </h2>

              <div className="space-y-4">
                {/* Email item */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-500 dark:text-slate-400">Email</span>
                      <a
                        href={`mailto:${contactData.email}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-500 transition-colors"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-slate-400 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copier l'email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Téléphone / Appel</span>
                    <a
                      href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                    >
                      {contactData.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <div className="p-2.5 rounded-xl bg-green-500/10 text-green-500">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">WhatsApp direct</span>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-green-600 dark:text-green-400 hover:underline"
                    >
                      <span>Discuter sur WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Location item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Localisation</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {contactData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social profiles */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Réseaux & Plateformes
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={contactData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={contactData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black hover:text-white text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Availability card */}
            <div className="glass-card rounded-3xl p-6 border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  {profileData.status.label[language]}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {profileData.status.subtext[language]}
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-white/10 shadow-xl">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t.contact.formTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                {language === 'fr' 
                  ? 'Remplissez le formulaire ci-dessous pour m\'adresser directement votre message.' 
                  : 'Fill in the form below to deliver your message directly.'}
              </p>
              <ContactForm />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
