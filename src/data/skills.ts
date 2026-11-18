import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'web-dev',
    title: {
      fr: 'Développement Web & Programmation',
      en: 'Web Development & Programming',
    },
    icon: 'Code2',
    skills: [
      { name: 'HTML5', level: { fr: 'Maîtrisé', en: 'Proficient' }, highlighted: true },
      { name: 'CSS3 / Tailwind', level: { fr: 'Maîtrisé', en: 'Proficient' }, highlighted: true },
      { name: 'JavaScript', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'PHP', level: { fr: 'Pratique académique & projets', en: 'Academic & Projects' }, highlighted: true },
      { name: 'Python', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'SQL', level: { fr: 'Pratique courante', en: 'Working Knowledge' } },
      { name: 'Développement Front-end', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'Développement Back-end', level: { fr: 'Pratique académique & projets', en: 'Academic & Projects' } },
    ],
  },
  {
    id: 'electronics',
    title: {
      fr: 'Électronique & Systèmes Embarqués',
      en: 'Electronics & Embedded Systems',
    },
    icon: 'Cpu',
    skills: [
      { name: 'Arduino', level: { fr: 'Maîtrisé', en: 'Proficient' }, highlighted: true },
      { name: 'Raspberry Pi 4', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'Gestion GPIO', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'Capteurs & Actionneurs', level: { fr: 'Pratique courante', en: 'Working Knowledge' } },
      { name: 'Programmation embarquée (C/C++, Python)', level: { fr: 'Pratique académique & projets', en: 'Academic & Projects' }, highlighted: true },
    ],
  },
  {
    id: 'networks',
    title: {
      fr: 'Réseaux & Systèmes',
      en: 'Networks & Systems',
    },
    icon: 'Server',
    skills: [
      { name: 'Linux', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'Ubuntu Server', level: { fr: 'Pratique académique & projets', en: 'Academic & Projects' }, highlighted: true },
      { name: 'Configuration Réseau', level: { fr: 'Pratique courante', en: 'Working Knowledge' } },
      { name: 'Adressage IP & Sous-réseaux', level: { fr: 'Maîtrisé', en: 'Proficient' }, highlighted: true },
      { name: 'DHCP & DNS', level: { fr: 'Pratique académique & projets', en: 'Academic & Projects' } },
      { name: 'VirtualBox', level: { fr: 'Pratique courante', en: 'Working Knowledge' } },
    ],
  },
  {
    id: 'iot',
    title: {
      fr: 'IoT & Télécommunications',
      en: 'IoT & Telecommunications',
    },
    icon: 'Radio',
    skills: [
      { name: 'ThingsBoard', level: { fr: 'Pratique académique & projets', en: 'Academic & Projects' }, highlighted: true },
      { name: 'GPS (Acquisition NMEA)', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'SIM808 (GSM/GPRS/GPS)', level: { fr: 'Pratique académique & projets', en: 'Academic & Projects' }, highlighted: true },
      { name: 'Communication GSM', level: { fr: 'Pratique académique & projets', en: 'Academic & Projects' } },
      { name: 'Géolocalisation temps réel', level: { fr: 'Pratique courante', en: 'Working Knowledge' } },
      { name: 'Objets Connectés', level: { fr: 'Pratique académique & projets', en: 'Academic & Projects' } },
    ],
  },
  {
    id: 'database',
    title: {
      fr: 'Bases de Données',
      en: 'Databases & Data Modeling',
    },
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'MariaDB', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'Microsoft Access', level: { fr: 'Pratique courante', en: 'Working Knowledge' } },
      { name: 'Modélisation des données (MCD/MLD/UML)', level: { fr: 'Pratique académique & projets', en: 'Academic & Projects' }, highlighted: true },
    ],
  },
  {
    id: 'tools',
    title: {
      fr: 'Outils & Environnements',
      en: 'Tools & Environments',
    },
    icon: 'Wrench',
    skills: [
      { name: 'Visual Studio Code', level: { fr: 'Maîtrisé', en: 'Proficient' }, highlighted: true },
      { name: 'Git', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'GitHub', level: { fr: 'Pratique courante', en: 'Working Knowledge' } },
      { name: 'Thonny IDE', level: { fr: 'Pratique courante', en: 'Working Knowledge' } },
      { name: 'Microsoft Office (Word, Excel, PPT)', level: { fr: 'Maîtrisé', en: 'Proficient' } },
    ],
  },
  {
    id: 'soft-skills',
    title: {
      fr: 'Qualités Humaines & Soft Skills',
      en: 'Interpersonal & Leadership Skills',
    },
    icon: 'Award',
    skills: [
      { name: 'Travail en équipe', level: { fr: 'Compétence clé', en: 'Core Competency' }, highlighted: true },
      { name: 'Leadership & Esprit associatif', level: { fr: 'Compétence clé', en: 'Core Competency' }, highlighted: true },
      { name: 'Communication & Écoute active', level: { fr: 'Compétence clé', en: 'Core Competency' } },
      { name: 'Organisation & Méthode', level: { fr: 'Compétence clé', en: 'Core Competency' } },
      { name: 'Adaptabilité & Agilité', level: { fr: 'Compétence clé', en: 'Core Competency' }, highlighted: true },
      { name: 'Esprit d\'initiative', level: { fr: 'Compétence clé', en: 'Core Competency' } },
      { name: 'Résolution méthodique de problèmes', level: { fr: 'Compétence clé', en: 'Core Competency' }, highlighted: true },
    ],
  },
];
