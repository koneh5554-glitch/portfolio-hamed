import type { LocalizedString } from '../types';

export interface ProfileData {
  fullName: string;
  shortName: string;
  pseudonym: string;
  badgeTitle: LocalizedString;
  heroHeadline: LocalizedString;
  tagline: LocalizedString;
  shortPresentation: LocalizedString;
  fullBio: {
    paragraph1: LocalizedString;
    paragraph2: LocalizedString;
    paragraph3: LocalizedString;
    paragraph4: LocalizedString;
  };
  polyvalenceHighlight: LocalizedString;
  status: {
    available: boolean;
    label: LocalizedString;
    subtext: LocalizedString;
  };
  academic: {
    institution: string;
    institutionShort: string;
    school: string;
    schoolShort: string;
    department: string;
    departmentShort: string;
    specialty: string;
    specialtyShort: string;
    level: LocalizedString;
    location: string;
  };
  objectives: LocalizedString[];
  interests: LocalizedString[];
  keyStrengths: {
    icon: string;
    title: LocalizedString;
    description: LocalizedString;
  }[];
}

export const profileData: ProfileData = {
  fullName: 'KONÉ HAMED',
  shortName: 'Hamed Koné',
  pseudonym: 'CC',
  badgeTitle: {
    fr: 'Étudiant en EIT & Développeur informatique',
    en: 'EIT Student & Software Developer',
  },
  heroHeadline: {
    fr: 'Étudiant en EIT | Développeur informatique | Passionné de technologies et d\'innovation.',
    en: 'EIT Student | Software Developer | Technology & Innovation Enthusiast.',
  },
  tagline: {
    fr: 'Je transforme les idées en solutions technologiques, en associant informatique, électronique et innovation.',
    en: 'I transform ideas into technological solutions, blending computing, electronics, and innovation.',
  },
  shortPresentation: {
    fr: 'Passionné par les technologies, je conçois, développe et expérimente des solutions dans les domaines de l\'informatique, de l\'électronique et des systèmes connectés.',
    en: 'Passionate about technology, I design, develop, and experiment with solutions across computing, electronics, and connected systems.',
  },
  fullBio: {
    paragraph1: {
      fr: 'Je suis étudiant en dernière année de Technicien Supérieur à l\'École Supérieure d\'Industrie de l\'INP-HB, dans la spécialité Électronique, Informatique et Télécommunications.',
      en: 'I am a final-year Higher Technician student at École Supérieure d\'Industrie (INP-HB), specializing in Electronics, Computer Science, and Telecommunications.',
    },
    paragraph2: {
      fr: 'Mon parcours m\'a permis de développer un intérêt particulier pour le développement informatique, les réseaux, l\'électronique, les systèmes embarqués et les nouvelles technologies.',
      en: 'My academic path has allowed me to cultivate a strong passion for software development, networking, electronics, embedded systems, and emerging technologies.',
    },
    paragraph3: {
      fr: 'J\'aime apprendre, expérimenter et transformer des idées en solutions concrètes. À travers mes projets académiques et personnels, je cherche constamment à renforcer mes compétences techniques et ma capacité à résoudre des problèmes.',
      en: 'I love learning, experimenting, and turning ideas into tangible solutions. Through both academic and personal projects, I continuously strive to strengthen my technical skills and problem-solving abilities.',
    },
    paragraph4: {
      fr: 'Je souhaite évoluer dans un environnement professionnel stimulant où je pourrai apprendre, contribuer à des projets innovants et développer mon expérience.',
      en: 'I aspire to grow within a stimulating professional environment where I can learn, contribute to innovative projects, and expand my practical experience.',
    },
  },
  polyvalenceHighlight: {
    fr: 'Double compétence matérielle et logicielle : concevoir l\'architecture électronique, programmer le système embarqué et créer l\'interface web ou cloud pour piloter la solution de bout en bout.',
    en: 'Dual hardware and software skill set: designing electronic architectures, programming embedded firmware, and building web or cloud interfaces for end-to-end solutions.',
  },
  status: {
    available: true,
    label: {
      fr: 'Disponible pour opportunités',
      en: 'Available for opportunities',
    },
    subtext: {
      fr: 'Recherche active : Stage, Alternance, Premier emploi & Freelance',
      en: 'Actively seeking: Internship, Work-Study, Entry-level & Freelance',
    },
  },
  academic: {
    institution: 'Institut National Polytechnique Félix Houphouët-Boigny',
    institutionShort: 'INP-HB',
    school: 'École Supérieure d\'Industrie',
    schoolShort: 'ESI',
    department: 'Sciences et Technologies de l\'Information et de la Communication',
    departmentShort: 'STIC',
    specialty: 'Électronique, Informatique et Télécommunications',
    specialtyShort: 'EIT',
    level: {
      fr: 'Dernière année de Technicien Supérieur (Bac+2 / Bac+3)',
      en: 'Final year Higher Technician (Associate / Undergraduate)',
    },
    location: 'Yamoussoukro / Côte d\'Ivoire',
  },
  objectives: [
    {
      fr: 'Stage de fin d\'études ou d\'immersion professionnelle en développement logiciel ou systèmes embarqués',
      en: 'Graduation internship or technical immersion in software development or embedded systems',
    },
    {
      fr: 'Opportunités en alternance pour allier théorie académique et défis techniques en entreprise',
      en: 'Work-study opportunities to bridge academic theory with real-world enterprise engineering',
    },
    {
      fr: 'Missions en freelance : création d\'applications web, prototypage IoT et intégration technique',
      en: 'Freelance projects: web application development, IoT prototyping, and technical integrations',
    },
  ],
  interests: [
    {
      fr: 'Systèmes embarqués & Robotique autonome',
      en: 'Embedded Systems & Autonomous Robotics',
    },
    {
      fr: 'Développement Web moderne & Architecture cloud',
      en: 'Modern Web Development & Cloud Architecture',
    },
    {
      fr: 'Internet des Objets (IoT) & Télémétrie temps réel',
      en: 'Internet of Things (IoT) & Real-time Telemetry',
    },
    {
      fr: 'Intelligence Artificielle & Traitement du Langage Naturel (NLP)',
      en: 'Artificial Intelligence & Natural Language Processing (NLP)',
    },
  ],
  keyStrengths: [
    {
      icon: 'Cpu',
      title: {
        fr: 'Synergie Hardware & Software',
        en: 'Hardware & Software Synergy',
      },
      description: {
        fr: 'Capacité à faire dialoguer microcontrôleurs, capteurs et applications logicielles.',
        en: 'Ability to seamlessly interface microcontrollers, sensors, and modern web applications.',
      },
    },
    {
      icon: 'Code2',
      title: {
        fr: 'Rigueur de Développement',
        en: 'Development Rigor',
      },
      description: {
        fr: 'Code propre, structuré, modulaire et orienté résolution de problèmes réels.',
        en: 'Clean, structured, modular code driven by pragmatic problem-solving.',
      },
    },
    {
      icon: 'Users',
      title: {
        fr: 'Leadership & Esprit d\'Équipe',
        en: 'Leadership & Team Spirit',
      },
      description: {
        fr: 'Vice-président d\'association, animation d\'événements, mentorat et esprit d\'initiative.',
        en: 'Association Vice-President, event organizing, mentoring, and strong initiative.',
      },
    },
    {
      icon: 'Compass',
      title: {
        fr: 'Curiosité & Adaptabilité',
        en: 'Curiosity & Adaptability',
      },
      description: {
        fr: 'Veille continue, apprentissage autonome rapide et goût prononcé pour l\'expérimentation.',
        en: 'Continuous tech watch, rapid self-learning, and passion for hands-on experimentation.',
      },
    },
  ],
};
