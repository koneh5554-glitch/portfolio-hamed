import React from 'react';
import { useLanguage } from '../translations/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { documentsData } from '../data/documents';
import { FileText, FileDown, Eye, CheckCircle2 } from 'lucide-react';

export const DocumentsSection: React.FC = () => {
  const { language, t } = useLanguage();

  // Filtrer uniquement les documents disponibles ou afficher une notification discrète pour les archivés
  const availableDocs = documentsData.filter((d) => d.available);

  return (
    <section id="documents" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Ressources & Documents"
          title={t.documents.title}
          subtitle={t.documents.subtitle}
        />

        <div className="max-w-4xl mx-auto">
          {/* Main CV Hero Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-blue-500/40 bg-gradient-to-r from-blue-900/10 via-slate-900/40 to-indigo-900/20 shadow-xl mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 sm:p-4 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-1">
                    <span>Curriculum Vitæ</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    Curriculum Vitæ — KONÉ HAMED (CC)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
                    {language === 'fr'
                      ? 'Format PDF standard prêt pour les candidatures de stage, alternance, premier emploi et freelance.'
                      : 'Standard PDF format ready for internship, work-study, job, and freelance applications.'}
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col gap-2.5">
                <a
                  href="/docs/CV_KONE_HAMED_EIT.pdf"
                  download="CV_KONE_HAMED_EIT.pdf"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 transition-all cursor-pointer"
                >
                  <FileDown className="w-4 h-4" />
                  <span>{t.documents.downloadPdf}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Other Documents List (only displayed if available, per rule #11 & #18) */}
          {availableDocs.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableDocs.slice(1).map((doc) => (
                <div
                  key={doc.id}
                  className="glass-card rounded-xl p-5 border border-slate-200 dark:border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      {doc.category[language]}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-2">
                      {doc.title[language]}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      {doc.description[language]}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">{doc.size}</span>
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-500 hover:underline"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t.documents.viewDoc}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Guide note for adding documents */}
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span>
              {language === 'fr'
                ? 'Les documents complémentaires (rapports de stage, dossiers techniques) sont activables dans src/data/documents.ts en plaçant les fichiers PDF dans le dossier public/docs/.'
                : 'Additional documents (internship reports, technical dossiers) can be enabled in src/data/documents.ts by adding PDF files into public/docs/.'}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
