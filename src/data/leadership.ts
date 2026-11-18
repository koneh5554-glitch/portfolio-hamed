import type { LeadershipActivity, LocalizedString } from '../types';

export interface LeadershipRole {
  roleTitle: LocalizedString;
  organization: LocalizedString;
  institution: string;
  department: string;
  period: LocalizedString;
  summary: LocalizedString;
  positions: {
    period: string;
    title: LocalizedString;
    organization: LocalizedString;
    description: LocalizedString;
  }[];
  activities: LeadershipActivity[];
}

export const leadershipData: LeadershipRole = {
  roleTitle: {
    fr: 'Engagement Associatif & Responsabilités de Leadership',
    en: 'Community Engagement & Leadership Responsibilities',
  },
  organization: {
    fr: 'Association des Polytechniciens de Bouaké (APOLYB) & Filière EIT',
    en: 'Bouaké Polytechnicians Association (APOLYB) & EIT Student Body',
  },
  institution: 'Institut National Polytechnique Félix Houphouët-Boigny (INP-HB)',
  department: 'École Supérieure d\'Industrie (ESI)',
  period: {
    fr: 'Mandats 2025 - 2027',
    en: 'Tenures 2025 - 2027',
  },
  summary: {
    fr: 'Fortement investi dans la vie associative de l\'INP-HB, j\'ai exercé les fonctions de Vice-Président de l\'APOLYB (2025-2026) avant d\'être nommé Adjoint au Conseil Général (depuis Octobre 2026). En parallèle, mon engagement au sein de l\'association de spécialité EIT me permet de piloter des initiatives majeures, de coordonner des équipes et de mentorer les nouvelles promotions.',
    en: 'Deeply committed to student life and peer mentorship at INP-HB, I served as Vice-President of APOLYB (2025-2026) before being appointed to the General Council Board (since October 2026). Concurrently, my active role within the EIT engineering association empowers me to lead flagship student initiatives, oversee logistics, and tutor incoming cohorts.',
  },
  positions: [
    {
      period: 'Depuis Octobre 2026',
      title: {
        fr: 'Adjoint au Conseil Général',
        en: 'Deputy to the General Council',
      },
      organization: {
        fr: 'Association des Polytechniciens de Bouaké (APOLYB)',
        en: 'Bouaké Polytechnicians Association (APOLYB)',
      },
      description: {
        fr: 'Supervision stratégique, gouvernance associative et représentation des étudiants polytechniciens originaires de Bouaké.',
        en: 'Strategic oversight, student body governance, and institutional representation for polytechnic students from Bouaké.',
      },
    },
    {
      period: '2025 - 2026',
      title: {
        fr: 'Vice-Président de l\'APOLYB',
        en: 'Vice-President of APOLYB',
      },
      organization: {
        fr: 'Association des Polytechniciens de Bouaké (APOLYB)',
        en: 'Bouaké Polytechnicians Association (APOLYB)',
      },
      description: {
        fr: 'Coordination générale des activités, gestion des équipes projets, organisation des journées d\'accueil et événements culturels.',
        en: 'General coordination of student activities, project team management, and organization of flagship student events.',
      },
    },
  ],
  activities: [
    {
      id: 'integration-25inp',
      title: {
        fr: 'Journée d\'intégration des 25INP',
        en: '25INP Orientation & Integration Day',
      },
      category: {
        fr: 'Accueil & Cohésion',
        en: 'Orientation & Cohesion',
      },
      description: {
        fr: 'Organisation de la journée d\'accueil de la 25e promotion : ateliers de cohésion, présentation du cursus EIT, partage d\'expériences et création d\'un cadre d\'entraide fraternel.',
        en: 'Organized welcome sessions for the 25th graduating class: team-building workshops, academic orientation, experience sharing, and community bonding.',
      },
      impact: {
        fr: 'Intégration réussie et cohésion renforcée dès les premières semaines de cours.',
        en: 'Seamless social and academic onboarding for the incoming cohort.',
      },
    },
    {
      id: 'journee-touristique',
      title: {
        fr: 'Journée touristique',
        en: 'Cultural & Discovery Excursion',
      },
      category: {
        fr: 'Cohésion & Culture',
        en: 'Community & Culture',
      },
      description: {
        fr: 'Coordination logistique d\'une sortie découverte réunissant les promotions pour décompresser, tisser des liens forts en dehors des amphithéâtres et valoriser le patrimoine régional.',
        en: 'Managed end-to-end logistics for a regional excursion enabling students to bond outside lecture halls and explore local cultural landmarks.',
      },
      impact: {
        fr: 'Mobilisation de plus de 80 participants dans un esprit de camaraderie exceptionnel.',
        en: 'Mobilized over 80 attendees with zero logistics incidents and high community morale.',
      },
    },
    {
      id: 'soiree-gaming',
      title: {
        fr: 'Soirée Gaming & Compétition eSport',
        en: 'Gaming Night & eSports Tournament',
      },
      category: {
        fr: 'Divertissement & Esprit compétitif',
        en: 'Esports & Friendly Competition',
      },
      description: {
        fr: 'Mise en place d\'un tournoi de jeux vidéo multi-plateformes : gestion du matériel, de l\'infrastructure réseau LAN, de l\'arbitrage et de la remise des trophées.',
        en: 'Coordinated a campus gaming tournament: hardware staging, dedicated LAN network setup, match judging, and awards ceremony.',
      },
      impact: {
        fr: 'Succès rassembleur alliant passion technologique et convivialité inter-promotions.',
        en: 'High-energy event bridging tech enthusiasts across all academic years.',
      },
    },
    {
      id: 'journee-carriere-pre-bac',
      title: {
        fr: 'Journée Carrière Pré-Bac',
        en: 'Pre-Baccalaureate Career Orientation Day',
      },
      category: {
        fr: 'Orientation & Vulgarisation',
        en: 'Outreach & Career Guidance',
      },
      description: {
        fr: 'Sensibilisation des lycéens aux métiers d\'avenir de l\'informatique, de l\'électronique et des télécoms. Présentation des filières de l\'INP-HB et démonstration de projets techniques pour susciter des vocations.',
        en: 'Mentored high school students regarding future careers in computing, electronics, and telecom. Presented INP-HB academic tracks and live project demonstrations to inspire STEM vocations.',
      },
      impact: {
        fr: 'Éclairage concret apporté à plusieurs centaines d\'élèves en phase d\'orientation.',
        en: 'Delivered actionable guidance to hundreds of prospective engineering candidates.',
      },
    },
    {
      id: 'akwaba-25inp',
      title: {
        fr: 'Akwaba des 25INP',
        en: 'Akwaba Ceremony for 25INP',
      },
      category: {
        fr: 'Célébration & Tradition',
        en: 'Celebration & Academic Tradition',
      },
      description: {
        fr: 'Cérémonie solennelle et festive marquant l\'admission définitive des nouveaux camarades de la 25e promotion au sein de la grande famille de l\'ESI.',
        en: 'Traditional welcome gala celebrating the formal induction of new 25INP students into the ESI academic fraternity.',
      },
      impact: {
        fr: 'Transmission des valeurs d\'excellence, de solidarité et de respect mutuel.',
        en: 'Reinforced institutional values of academic excellence and mutual solidarity.',
      },
    },
    {
      id: 'journee-carriere-post-bac',
      title: {
        fr: 'Journée Carrière Post-Bac',
        en: 'Post-Baccalaureate Career Forum',
      },
      category: {
        fr: 'Insertion & Réseautage',
        en: 'Career Prep & Industry Networking',
      },
      description: {
        fr: 'Organisation de tables rondes avec des professionnels et anciens diplômés EIT. Préparation aux entretiens, rédaction de CV technique et perspectives d\'insertion sur le marché de l\'emploi.',
        en: 'Organized panel discussions with industry professionals and EIT alumni. Conducted interview preparation, technical resume polishing, and job market awareness sessions.',
      },
      impact: {
        fr: 'Pont direct entre étudiants et opportunités de stage en entreprise.',
        en: 'Created direct networking bridges between students and corporate internship recruiters.',
      },
    },
    {
      id: 'mentorat-concours-26inp',
      title: {
        fr: 'Formation et mentorat des 26INP pour le concours',
        en: 'Training & Mentorship for the 26INP Entrance Exam',
      },
      category: {
        fr: 'Mentorat & Pédagogie',
        en: 'Peer Tutoring & Academic Mentorship',
      },
      description: {
        fr: 'Conception de séances de révision intensives, partage de méthodologies d\'épreuves, résolution guidée d\'annales de concours et accompagnement psychologique des candidats pour la 26e promotion.',
        en: 'Designed intensive tutoring bootcamps, test-taking strategy sessions, guided past exam problem sets, and psychological coaching for 26INP applicants.',
      },
      impact: {
        fr: 'Taux de réussite remarquable des candidats tutorés au concours d\'entrée sélectif.',
        en: 'Outstanding success rate among mentored candidates in the highly selective entrance exam.',
      },
    },
  ],
};
