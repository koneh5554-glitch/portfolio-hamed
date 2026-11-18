import React, { useState } from 'react';
import { useLanguage } from '../translations/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { ContactForm } from '../components/ContactForm';
import { contactData } from '../data/contact';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Prise de Contact"
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards & Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-6">
                {t.contact.directContactTitle}
              </h3>

              <div className="space-y-4">
                {/* Email item */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-500">
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
                    className="p-2 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copier l'email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">WhatsApp</span>
                    <a
                      href={`https://wa.me/${contactData.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors flex items-center gap-1"
                    >
                      <span>{contactData.whatsappDisplay}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>

                {/* Telephone item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Téléphone</span>
                    <a
                      href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-500 transition-colors"
                    >
                      {contactData.phone}
                    </a>
                  </div>
                </div>

                {/* Location item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-500">
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

              {/* Social Channels buttons */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <a
                  href={contactData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={contactData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};
