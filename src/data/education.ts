import type { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'inphb-esi-eit',
    institution: 'Institut National Polytechnique Félix Houphouët-Boigny (INP-HB)',
    school: 'École Supérieure d\'Industrie (ESI)',
    department: 'STIC (Sciences et Technologies de l\'Information et de la Communication)',
    specialty: {
      fr: 'Électronique, Informatique et Télécommunications (EIT)',
      en: 'Electronics, Computer Science, and Telecommunications (EIT)',
    },
    degree: {
      fr: '3ème année du cycle Technicien Supérieur (Fin de cycle)',
      en: '3rd Year Higher Technician Degree (Final Year)',
    },
    period: '2026 - 2027 • Diplôme en cours',
    status: {
      fr: 'En cours de finalisation',
      en: 'In progress - Final year',
    },
    description: {
      fr: 'Formation d\'excellence réputée en Côte d\'Ivoire et dans la sous-région, alliant de solides bases scientifiques à une pratique intensive du développement logiciel, des télécommunications, de l\'électronique et des réseaux informatiques.',
      en: 'Renowned academic program in Côte d\'Ivoire and West Africa, blending robust theoretical foundations with intensive hands-on experience in software development, telecommunications, electronics, and networking.',
    },
    keyPoints: {
      fr: [
        'Développement logiciel : Python, JavaScript, PHP, Django, SQL (MySQL, PostgreSQL), Flutter',
        'Électronique appliquée : Microcontrôleurs Arduino, ESP32, Raspberry Pi, IoT & Smart Building, Vidéosurveillance, Pilotage de drones',
        'Télécommunications & Réseaux : TCP/IP, Réseaux mobiles (2G/3G/4G), Réseaux Optiques, GPS, ThingsBoard, Administration Linux/Windows',
        'Projets multidisciplinaires et robotique autonome de forte capacité',
      ],
      en: [
        'Software engineering: Python, JavaScript, PHP, Django, SQL (MySQL, PostgreSQL), Flutter',
        'Applied electronics: Arduino, ESP32, Raspberry Pi, IoT & Smart Building, Video Surveillance, Drone Piloting',
        'Telecommunications & Networks: TCP/IP, Mobile Cellular (2G/3G/4G), Fiber Optics, GPS, ThingsBoard, Linux/Windows Administration',
        'Multidisciplinary applied engineering and heavy-payload autonomous robotics',
      ],
    },
  },
  {
    id: 'certif-linux',
    institution: 'GOAT IT Consulting & ADUTI INP-HB',
    school: 'Linux Learn Tour',
    department: 'Systèmes & Réseaux',
    specialty: {
      fr: 'Certificat de participation _ Linux Learn Tour',
      en: 'Certificate of Participation – Linux Learn Tour',
    },
    degree: {
      fr: 'Fondamentaux Linux et Administration Système',
      en: 'Linux Fundamentals & System Administration',
    },
    period: 'Mai 2026',
    status: {
      fr: 'Certificat obtenu',
      en: 'Certified',
    },
    description: {
      fr: 'Formation pratique intensive axée sur l\'administration système Linux, la gestion des droits, l\'automatisation de scripts Bash, la configuration des services et la sécurisation des serveurs.',
      en: 'Hands-on intensive bootcamp on Linux system administration, permission management, Bash automation, service configuration, and server hardening.',
    },
    keyPoints: {
      fr: [
        'Administration des systèmes d\'exploitation Linux en ligne de commande',
        'Gestion des utilisateurs, des processus, des permissions et des logs système',
        'Configuration des services réseau et bonnes pratiques de sécurité',
      ],
      en: [
        'Linux server administration via CLI',
        'User, process, permission, and system log orchestration',
        'Network service configuration and server security best practices',
      ],
    },
  },
  {
    id: 'certif-anglais-kumasi',
    institution: 'Kumasi Technical University (KsTU)',
    school: 'Language Center',
    department: 'Kumasi, Ghana',
    specialty: {
      fr: 'Certificat en Anglais Professionnel',
      en: 'Certificate in Professional English',
    },
    degree: {
      fr: 'Certificat d\'Anglais Technique & Communication',
      en: 'Technical English & Professional Communication',
    },
    period: 'Août 2025',
    status: {
      fr: 'Certificat obtenu',
      en: 'Certified',
    },
    description: {
      fr: 'Immersion linguistique internationale au Ghana renforçant l\'aisance à communiquer, rédiger et interagir en milieu technique anglophone.',
      en: 'International language immersion program in Ghana strengthening fluency in written, spoken, and technical English for international engineering environments.',
    },
    keyPoints: {
      fr: [
        'Immersion en environnement académique anglophone au Ghana',
        'Communication technique et présentation orale de projets',
        'Lecture et rédaction de documentations techniques en anglais',
      ],
      en: [
        'Academic immersion within an English-speaking technical campus in Ghana',
        'Technical presentation and oral engineering communication skills',
        'Comprehension and drafting of engineering documentation in English',
      ],
    },
  },
  {
    id: 'service-civique-oscn',
    institution: 'Office du Service Civique National (OSCN)',
    school: 'Programme National d\'Engagement Civique',
    department: 'Côte d\'Ivoire',
    specialty: {
      fr: 'Attestation de Service Civique National',
      en: 'National Civic Service Certificate',
    },
    degree: {
      fr: 'Engagement Citoyen & Valeurs Républicaines',
      en: 'Civic Engagement & Community Development',
    },
    period: 'Juin 2025',
    status: {
      fr: 'Attestation obtenue',
      en: 'Completed',
    },
    description: {
      fr: 'Programme de formation civique et citoyenne développant le civisme, la discipline personnelle, le sens du devoir républicain et l\'esprit de service à la communauté.',
      en: 'National civic leadership program fostering civic responsibility, team discipline, ethical commitment, and community service.',
    },
    keyPoints: {
      fr: [
        'Discipline, sens de l\'intérêt général et cohésion sociale',
        'Leadership civique et gestion d\'actions communautaires sur le terrain',
        'Développement de la résilience et adaptabilité en milieu collectif',
      ],
      en: [
        'Discipline, public interest mindset, and team solidarity',
        'Civic leadership and community outreach execution',
        'Personal resilience and collaboration in diverse collective environments',
      ],
    },
  },
  {
    id: 'baccalaureat-serie-c',
    institution: 'Lycée Municipal Djibo Sounkalo de Bouaké',
    school: 'Enseignement Secondaire',
    department: 'Mathématiques & Sciences Physiques',
    specialty: {
      fr: 'Baccalauréat Scientifique Série C (Mathématiques & Sciences Physiques)',
      en: 'Scientific Baccalaureate Series C (Advanced Mathematics & Physics)',
    },
    degree: {
      fr: 'Baccalauréat Série C',
      en: 'Baccalaureate Series C',
    },
    period: '2023 - 2024',
    status: {
      fr: 'Diplôme obtenu avec succès',
      en: 'Diploma Awarded',
    },
    description: {
      fr: 'Filière scientifique d\'élite en mathématiques pures et sciences physiques, ayant préparé avec rigueur aux études supérieures technologiques et au concours de l\'INP-HB.',
      en: 'Rigorous scientific track focused on advanced mathematics and physics, building analytical rigor that paved the way for selective admission into INP-HB.',
    },
    keyPoints: {
      fr: [
        'Excellence en mathématiques fondamentales, algèbre, analyse et mécanique physique',
        'Méthode déductive, esprit critique et résolution de problèmes complexes',
        'Admission à l\'INP-HB de Yamoussoukro à l\'issue du cycle secondaire',
      ],
      en: [
        'Excellence in advanced mathematics, analytical calculus, and mechanics',
        'Deductive problem-solving methodology and critical thinking',
        'Successful competitive admission into INP-HB Yamoussoukro',
      ],
    },
  },
];
