import type { DocumentItem } from '../types';

export const documentsData: DocumentItem[] = [
  {
    id: 'cv-hamed-kone',
    title: {
      fr: 'Curriculum Vitæ Professionnel (PDF)',
      en: 'Professional Resume / CV (PDF)',
    },
    description: {
      fr: 'Curriculum Vitæ officiel de KONÉ HAMED (CC), Élève Technicien Supérieur EIT à l\'INP-HB ESI. Compétences complètes, parcours et projets.',
      en: 'Official Resume of KONÉ HAMED (CC), Higher Technician Student in EIT at INP-HB ESI. Full skillset, career, and engineering projects.',
    },
    category: {
      fr: 'Document Officiel',
      en: 'Official Document',
    },
    filename: 'CV_KONE_HAMED_EIT.pdf',
    fileUrl: './docs/CV_KONE_HAMED_EIT.pdf',
    size: 'PDF Officiel (265 Ko)',
    available: true,
  },
  {
    id: 'cv-hamed-kone-docx',
    title: {
      fr: 'Curriculum Vitæ Professionnel (Format Word .docx)',
      en: 'Professional Resume / CV (Word .docx format)',
    },
    description: {
      fr: 'Version Microsoft Word modifiable du CV professionnel de KONÉ HAMED.',
      en: 'Editable Microsoft Word version of KONÉ HAMED\'s professional resume.',
    },
    category: {
      fr: 'Document Source',
      en: 'Source Document',
    },
    filename: 'CV_KONE_HAMED_EIT.docx',
    fileUrl: './docs/CV_KONE_HAMED_EIT.docx',
    size: 'Word DOCX (1.7 Mo)',
    available: true,
  },
  {
    id: 'rapport-stage-aeg',
    title: {
      fr: 'Rapport de stage académique – Entreprise AEG',
      en: 'Academic Internship Report – AEG Enterprise',
    },
    description: {
      fr: 'Compte-rendu des missions techniques réalisées au sein des équipes d\'AEG (systèmes de sécurité et installations électriques).',
      en: 'Comprehensive report on technical field assignments carried out with AEG engineering teams.',
    },
    category: {
      fr: 'Rapport de Stage',
      en: 'Internship Report',
    },
    filename: 'Rapport_Stage_AEG_KONE_HAMED.pdf',
    fileUrl: '/docs/Rapport_Stage_AEG_KONE_HAMED.pdf',
    size: 'PDF Document',
    available: false, // Passer à true dès que le fichier est déposé dans /public/docs/
  },
  {
    id: 'dossier-robot-gaz',
    title: {
      fr: 'Dossier d\'ingénierie – Robot autonome de livraison de gaz',
      en: 'Engineering Dossier – Autonomous Gas Delivery Robot',
    },
    description: {
      fr: 'Schémas structurels, dimensionnement mécanique, bilans de puissance et architecture électronique du rover.',
      en: 'Structural schematics, mechanical sizing, power calculations, and electronic architecture of the rover.',
    },
    category: {
      fr: 'Dossier Projet',
      en: 'Project Dossier',
    },
    filename: 'Dossier_Technique_Robot_Gaz_Tiebiossou.pdf',
    fileUrl: '/docs/Dossier_Technique_Robot_Gaz_Tiebiossou.pdf',
    size: 'PDF Document',
    available: false, // Passer à true dès que le fichier est déposé dans /public/docs/
  },
  {
    id: 'etude-datacenter-foudre',
    title: {
      fr: 'Étude technique – Protection foudre et parafoudres Data Center',
      en: 'Technical Study – Lightning & Surge Protection for Data Centers',
    },
    description: {
      fr: 'Analyse des risques de foudroiement selon la norme NF EN 62305 et schémas unifilaires de distribution avec parafoudres.',
      en: 'Lightning risk evaluation according to IEC 62305 and single-line surge protection diagrams.',
    },
    category: {
      fr: 'Étude Technique',
      en: 'Technical Study',
    },
    filename: 'Etude_Protection_Foudre_DataCenter.pdf',
    fileUrl: '/docs/Etude_Protection_Foudre_DataCenter.pdf',
    size: 'PDF Document',
    available: false, // Passer à true dès que le fichier est déposé dans /public/docs/
  },
];
