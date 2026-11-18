import type { ExperienceItem } from '../types';

export const experiencesData: ExperienceItem[] = [
  {
    id: 'stage-aeg',
    company: 'AEG Services (Afrique Électronique Générale)',
    role: {
      fr: 'Stagiaire d\'application en Sécurité Incendie',
      en: 'Field Application Intern – Fire Safety Systems',
    },
    period: {
      fr: '2026 • Stage d\'application',
      en: '2026 • Application Internship',
    },
    location: {
      fr: 'Abidjan, Côte d\'Ivoire',
      en: 'Abidjan, Côte d\'Ivoire',
    },
    badge: {
      fr: 'Sécurité Électronique & Incendie',
      en: 'Electronic Safety & Fire Protection',
    },
    description: {
      fr: 'Stage d\'application spécialisé en sécurité incendie au sein d\'AEG Services. Immersion au cœur des équipes techniques, participant aux opérations de diagnostic, d\'installation et d\'étude des installations électroniques.',
      en: 'Specialized application internship in fire safety systems with AEG Services. Technical field immersion assisting senior engineers with installation, diagnostics, and electronic safety maintenance.',
    },
    tasks: {
      fr: [
        'Découverte active de l\'environnement professionnel en entreprise et des processus de maintenance industrielle',
        'Étude des installations techniques et analyse des schémas d\'implantation sur site',
        'Travaux techniques liés aux systèmes de sécurité incendie (détection optique, alarmes, déclencheurs)',
        'Découverte et initiation au système PACIFIC (centrales de détection et de mise en sécurité)',
        'Participation aux opérations d\'installation, de câblage et de raccordement des équipements',
        'Assistance des techniciens seniors lors des essais fonctionnels et vérifications de conformité',
      ],
      en: [
        'Active immersion in enterprise workflows and industrial safety maintenance procedures',
        'Study of technical facility blueprints and site installation diagrams',
        'Technical tasks related to fire detection systems (optical sensors, alarms, manual triggers)',
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
  {
    id: 'stage-mandigo',
    company: 'Mandigo',
    role: {
      fr: 'Stagiaire d\'immersion – Développeur Web',
      en: 'Web Developer – Immersion Internship',
    },
    period: {
      fr: 'Juillet 2025 • Stage d\'immersion',
      en: 'July 2025 • Immersion Internship',
    },
    location: {
      fr: 'Bouaké, Côte d\'Ivoire',
      en: 'Bouaké, Côte d\'Ivoire',
    },
    badge: {
      fr: 'Développement Web',
      en: 'Web Development',
    },
    description: {
      fr: 'Stage d\'immersion pratique en développement web au sein de la structure Mandigo à Bouaké. Conception et intégration d\'interfaces web responsives et dynamiques.',
      en: 'Practical web development immersion internship at Mandigo in Bouaké. Front-end and responsive UI component development.',
    },
    tasks: {
      fr: [
        'Intégration d\'interfaces web responsives en HTML5, CSS3 et JavaScript',
        'Structuration du code front-end et optimisation pour la navigation mobile',
        'Participation aux revues de code et collaboration avec les développeurs de l\'équipe',
      ],
      en: [
        'Integration of responsive web UI components in HTML5, CSS3, and JavaScript',
        'Front-end code structuring and mobile responsiveness optimization',
        'Participation in team code reviews and collaborative sprint tasks',
      ],
    },
    skillsAcquired: {
      fr: [
        'Méthodologie de développement en équipe',
        'Sens du détail UI/UX et respect des maquettes',
        'Autonomie dans la résolution de bugs d\'affichage',
      ],
      en: [
        'Collaborative software development workflows',
        'UI/UX design fidelity and mobile ergonomics',
        'Autonomous debugging and layout problem-solving',
      ],
    },
    technologies: ['HTML5 / CSS3', 'JavaScript', 'Responsive Web Design', 'Git'],
  },
  {
    id: 'mecanique-bouake',
    company: 'Garage Automobile (Bouaké)',
    role: {
      fr: 'Apprenti Mécanicien Automobile',
      en: 'Automotive Mechanical Apprentice',
    },
    period: {
      fr: '2022 - 2024 • Apprentissage pratique',
      en: '2022 - 2024 • Practical Apprenticeship',
    },
    location: {
      fr: 'Bouaké, Côte d\'Ivoire',
      en: 'Bouaké, Côte d\'Ivoire',
    },
    badge: {
      fr: 'Mécanique & Diagnostic',
      en: 'Mechanics & Diagnostics',
    },
    description: {
      fr: 'Expérience formatrice de 2 ans en atelier automobile ayant forgé une rigueur manuelle, le sens du diagnostic électromécanique et la compréhension concrète des systèmes motopropulseurs, précieux pour la conception de robots autonomes.',
      en: '2-year formative practical training in an automotive workshop, developing mechanical troubleshooting intuition, electrical system diagnostics, and hands-on fabrication skills directly beneficial for autonomous robotic systems.',
    },
    tasks: {
      fr: [
        'Diagnostic de pannes mécaniques et circuits électriques automobiles 12V',
        'Démontage, entretien et remontage d\'organes mécaniques (moteurs, transmission, freinage)',
        'Utilisation d\'outillage spécialisé et respect strict des règles de sécurité en atelier',
      ],
      en: [
        'Diagnostic of automotive mechanical faults and 12V automotive electrical circuits',
        'Maintenance, servicing, and rebuilding mechanical sub-assemblies',
        'Mastery of workshop tooling and rigorous industrial safety compliance',
      ],
    },
    skillsAcquired: {
      fr: [
        'Compréhension approfondie de l\'électromécanique et des actionneurs',
        'Capacité de travail manuel sous contrainte et sens de l\'effort',
        'Résolution méthodique des dysfonctionnements physiques',
      ],
      en: [
        'Deep grounding in electromechanical systems and heavy-duty actuators',
        'Manual dexterity, resilience, and hands-on problem-solving under pressure',
        'Methodical troubleshooting of complex electro-physical mechanisms',
      ],
    },
    technologies: ['Électromécanique', 'Circuits Électriques 12V', 'Diagnostic Moteur', 'Transmission & Couple'],
  },
];
