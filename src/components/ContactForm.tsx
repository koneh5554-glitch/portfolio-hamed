import React, { useState } from 'react';
import { useLanguage } from '../translations/LanguageContext';
import { contactData } from '../data/contact';
import { Send, CheckCircle2, AlertCircle, Mail, Sparkles, Loader2 } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const { language, t } = useLanguage();

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) {
      errs.name = t.contact.requiredField;
    }
    if (!form.email.trim()) {
      errs.email = t.contact.requiredField;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = t.contact.invalidEmail;
    }
    if (!form.subject.trim()) {
      errs.subject = t.contact.requiredField;
    }
    if (!form.message.trim()) {
      errs.message = t.contact.requiredField;
    } else if (form.message.trim().length < 15) {
      errs.message = t.contact.minMessageLength;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Vérification de la configuration de l'envoi réel (Règle #12 : ne pas simuler une réussite si non configuré)
    const isConfigured = 
      contactData.web3formsAccessKey && 
      contactData.web3formsAccessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY';

    if (!isConfigured) {
      // Le service n'a pas encore reçu la clé API de l'utilisateur
      setStatus('unconfigured');
      return;
    }

    setStatus('submitting');
    setServerMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: contactData.web3formsAccessKey,
          name: form.name,
          email: form.email,
          subject: `[Portfolio CC] ${form.subject}`,
          message: form.message,
          from_name: 'Portfolio CC - Hamed Koné',
        }),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setServerMessage(result.message || t.contact.errorMessage);
      }
    } catch {
      setStatus('error');
      setServerMessage(t.contact.errorMessage);
    }
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(
      `[Portfolio CC] ${form.subject || 'Prise de contact'}`
    )}&body=${encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {t.contact.formTitle}
        </h3>
      </div>

      {status === 'success' && (
        <div className="p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-start gap-3 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-sm">{t.contact.successTitle}</h4>
            <p className="text-xs mt-1">{t.contact.successMessage}</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 mb-6 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 flex items-start gap-3 animate-in fade-in">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-sm">{t.contact.errorTitle}</h4>
            <p className="text-xs mt-1">{serverMessage || t.contact.errorMessage}</p>
            <button
              type="button"
              onClick={handleMailtoFallback}
              className="mt-2 text-xs font-semibold underline hover:text-rose-500"
            >
              {language === 'fr' ? 'Envoyer directement via votre boîte mail' : 'Send directly via your email client'}
            </button>
          </div>
        </div>
      )}

      {status === 'unconfigured' && (
        <div className="p-4 mb-6 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-300 flex items-start gap-3 animate-in fade-in">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
          <div className="text-xs">
            <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400">
              {language === 'fr' 
                ? 'Envoi direct via client mail disponible' 
                : 'Direct email client transmission ready'}
            </h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              {language === 'fr'
                ? `La clé API Web3Forms n'a pas encore été renseignée dans src/data/contact.ts. Cliquez ci-dessous pour transmettre immédiatement votre message pré-rempli à ${contactData.email} via votre logiciel de messagerie :`
                : `Web3Forms access key is not yet set in src/data/contact.ts. Click below to forward your prefilled message immediately to ${contactData.email} via your email client:`}
            </p>
            <button
              type="button"
              onClick={handleMailtoFallback}
              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Ouvrir mon client mail' : 'Open Email Client'}</span>
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name input */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            {t.contact.nameLabel} *
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder={t.contact.namePlaceholder}
            className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-100 dark:bg-slate-900/80 border ${
              errors.name ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
            } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all`}
          />
          {errors.name && <p className="mt-1 text-[11px] text-rose-500">{errors.name}</p>}
        </div>

        {/* Email input */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            {t.contact.emailLabel} *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder={t.contact.emailPlaceholder}
            className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-100 dark:bg-slate-900/80 border ${
              errors.email ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
            } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all`}
          />
          {errors.email && <p className="mt-1 text-[11px] text-rose-500">{errors.email}</p>}
        </div>

        {/* Subject input */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            {t.contact.subjectLabel} *
          </label>
          <input
            type="text"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            placeholder={t.contact.subjectPlaceholder}
            className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-100 dark:bg-slate-900/80 border ${
              errors.subject ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
            } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all`}
          />
          {errors.subject && <p className="mt-1 text-[11px] text-rose-500">{errors.subject}</p>}
        </div>

        {/* Message input */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            {t.contact.messageLabel} *
          </label>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={t.contact.messagePlaceholder}
            className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-100 dark:bg-slate-900/80 border ${
              errors.message ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
            } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-y`}
          />
          {errors.message && <p className="mt-1 text-[11px] text-rose-500">{errors.message}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 transition-all cursor-pointer disabled:opacity-50"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{t.contact.sending}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{t.contact.sendButton}</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
          {t.contact.configuredMethodNote}
        </p>
      </form>
    </div>
  );
};
