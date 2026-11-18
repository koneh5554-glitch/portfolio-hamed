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
      fr: 'Technicien Supérieur – Dernière année',
      en: 'Higher Technician Degree – Final Year',
    },
    period: 'En cours (Dernière année)',
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
        'Développement logiciel : Algorithmique, C/C++, Python, PHP, JavaScript, SQL et bases de données',
        'Électronique appliquée : Microcontrôleurs, capteurs, systèmes embarqués, circuits imprimés et mesures',
        'Télécommunications & Réseaux : Réseaux IP, routage, GSM, IoT, propagation d\'ondes et transmission',
        'Projets multidisciplinaires en équipe et mise en situation réelle',
      ],
      en: [
        'Software engineering: Algorithms, C/C++, Python, PHP, JavaScript, SQL, and database modeling',
        'Applied electronics: Microcontrollers, sensors, embedded systems, PCB design, and instrumentation',
        'Telecommunications & Networks: IP networking, routing, GSM, IoT telemetry, wave propagation',
        'Cross-disciplinary team projects and practical real-world engineering simulations',
      ],
    },
  },
  {
    id: 'baccalaureat',
    institution: 'Lycée / Enseignement Secondaire',
    school: 'Section Scientifique',
    department: 'Mathématiques & Sciences Physiques',
    specialty: {
      fr: 'Baccalauréat Scientifique (Série C / D)',
      en: 'Scientific High School Diploma (Mathematics & Physics)',
    },
    degree: {
      fr: 'Baccalauréat Scientifique',
      en: 'Scientific Baccalaureate',
    },
    period: 'Obtenu avec succès',
    status: {
      fr: 'Diplôme obtenu',
      en: 'Diploma Awarded',
    },
    description: {
      fr: 'Solide socle en mathématiques, sciences physiques et raisonnement logique, ayant permis l\'admission sélective à l\'INP-HB de Yamoussoukro.',
      en: 'Strong academic foundation in advanced mathematics, physics, and logical reasoning, leading to competitive admission into INP-HB Yamoussoukro.',
    },
    keyPoints: {
      fr: [
        'Excellence en mathématiques et modélisation physique',
        'Rigueur d\'analyse, méthode déductive et esprit de synthèse',
        'Concours d\'entrée réussi pour l\'INP-HB ESI',
      ],
      en: [
        'Excellence in mathematics and physical modeling',
        'Analytical rigor, deductive problem-solving, and critical thinking',
        'Successful competitive entrance into INP-HB ESI',
      ],
    },
  },
];
