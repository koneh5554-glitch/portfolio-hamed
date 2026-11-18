import type { ExperienceItem } from '../types';

export const experiencesData: ExperienceItem[] = [
  {
    id: 'stage-aeg',
    company: 'AEG (Afrique Électronique Générale)',
    role: {
      fr: 'Stagiaire Technique – Électronique & Systèmes de Sécurité',
      en: 'Technical Intern – Electronics & Safety Systems',
    },
    period: {
      fr: 'Stage académique - Département Technique',
      en: 'Academic Internship - Technical Department',
    },
    location: {
      fr: 'Abidjan, Côte d\'Ivoire',
      en: 'Abidjan, Côte d\'Ivoire',
    },
    badge: {
      fr: 'Immersion Professionnelle',
      en: 'Professional Immersion',
    },
    description: {
      fr: 'Immersion au cœur des équipes techniques d\'AEG, participant aux opérations de diagnostic, d\'installation et d\'étude des installations électroniques et de sécurité.',
      en: 'Hands-on immersion within AEG technical teams, participating in diagnostics, installation, and field operations for electronic and safety installations.',
    },
    tasks: {
      fr: [
        'Découverte active de l\'environnement professionnel en entreprise et des processus de maintenance industrielle',
        'Étude des installations techniques et analyse des schémas d\'implantation sur site',
        'Travaux techniques liés aux systèmes de sécurité incendie (sous réserve de confirmation de la terminologie exacte)',
        'Découverte et initiation au système PACIFIC (centrales de détection et de mise en sécurité)',
        'Participation aux opérations d\'installation, de câblage et de raccordement des équipements',
        'Assistance des techniciens seniors lors des essais fonctionnels et vérifications de conformité',
      ],
      en: [
        'Active immersion in enterprise workflows and industrial maintenance procedures',
        'Study of technical facility architectures and site installation blueprints',
        'Technical tasks related to fire safety systems (subject to exact internal terminology confirmation)',
        'Discovery and hands-on initiation to the PACIFIC system (detection & safety control units)',
        'Participation in equipment installation, wiring, and terminal connections',
        'Assisting senior field engineers during functional commissionings and compliance tests',
      ],
    },
    skillsAcquired: {
      fr: [
        'Règles de sécurité sur chantiers et dans les locaux techniques',
        'Rigueur de câblage et lecture de schémas industriels normalisés',
        'Communication technique et travail en équipe pluridisciplinaire',
        'Sens du diagnostic et compréhension des contraintes terrain',
      ],
      en: [
        'Site safety regulations and technical room protocol adherence',
        'Precision wiring and interpretation of standardized industrial schematics',
        'Technical communication and multidisciplinary teamwork',
        'Troubleshooting mindset and pragmatic field constraint awareness',
      ],
    },
    technologies: ['Système PACIFIC', 'Sécurité Incendie', 'Câblage Industriel', 'Schémas Techniques', 'Contrôle d\'Accès / SSI'],
    confidentialityNotice: {
      fr: 'Note : Les détails spécifiques, documents internes et données d\'exploitation de l\'entreprise sont strictement préservés conformément à l\'éthique professionnelle et à la confidentialité d\'entreprise.',
      en: 'Note: Specific internal schematics and proprietary operational data are strictly protected in accordance with professional ethics and non-disclosure standards.',
    },
  },
];
