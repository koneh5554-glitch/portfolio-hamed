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
      { name: 'HTML5 / CSS3', level: { fr: 'Maîtrisé', en: 'Proficient' }, highlighted: true },
      { name: 'JavaScript', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'PHP', level: { fr: 'Pratique académique & projets', en: 'Academic & Projects' }, highlighted: true },
      { name: 'Python & Django', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'Flutter', level: { fr: 'Notions & Projets', en: 'Working Knowledge' } },
      { name: 'Machine Learning (NLP)', level: { fr: 'Pratique académique', en: 'Academic & Projects' }, highlighted: true },
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
      { name: 'Arduino & ESP32', level: { fr: 'Maîtrisé', en: 'Proficient' }, highlighted: true },
      { name: 'Raspberry Pi 4', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'Gestion GPIO & Bus I2C', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'Capteurs & Actionneurs', level: { fr: 'Pratique courante', en: 'Working Knowledge' } },
      { name: 'Sécurité électronique & Vidéosurveillance', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'Pilotage de drones', level: { fr: 'Pratique & Pilotage', en: 'Drone Piloting' } },
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
      { name: 'Linux (Ubuntu Server, Debian)', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
      { name: 'Réseaux TCP/IP & Adressage', level: { fr: 'Maîtrisé', en: 'Proficient' }, highlighted: true },
      { name: 'Réseaux Mobiles (2G / 3G / 4G)', level: { fr: 'Pratique académique', en: 'Academic & Projects' }, highlighted: true },
      { name: 'Réseaux Optiques', level: { fr: 'Notions académiques', en: 'Academic' } },
      { name: 'DHCP, DNS & Routage', level: { fr: 'Pratique courante', en: 'Working Knowledge' } },
      { name: 'VirtualBox & Virtualisation', level: { fr: 'Pratique courante', en: 'Working Knowledge' } },
      { name: 'Administration Windows & Linux', level: { fr: 'Pratique courante', en: 'Working Knowledge' }, highlighted: true },
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
