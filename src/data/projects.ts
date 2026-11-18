import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'robot-livraison-gaz',
    title: {
      fr: 'Robot autonome de livraison de bouteilles de gaz',
      en: 'Autonomous Gas Cylinder Delivery Robot',
    },
    subtitle: {
      fr: 'Conception et réalisation d\'un robot autonome de livraison dans le quartier Lycée de Tiébissou',
      en: 'Design and implementation of an autonomous delivery robot in the Lycée district of Tiébissou',
    },
    category: 'embedded',
    status: 'study', // 'completed' | 'in_progress' | 'study'
    badgeAccent: 'blue',
    summary: {
      fr: 'Conception d\'un rover autonome motorisé à forte capacité de charge (300 kg soit 0,3 T) pour acheminer des bouteilles de gaz dans des zones périurbaines à voirie difficile.',
      en: 'Design of a heavy-duty motorized autonomous rover capable of carrying 300 kg (0.3 T) of gas cylinders in semi-urban areas with challenging terrain.',
    },
    context: {
      fr: 'Dans le quartier Lycée de Tiébissou, l\'approvisionnement en bouteilles de gaz butane est souvent pénible pour les ménages et commerces en raison de l\'éloignement des dépôts et de voies d\'accès accidentées. Ce projet vise à concevoir une solution robotisée robuste de forte capacité (jusqu\'à 300 kg / 0,3 T) pour sécuriser et fluidifier la livraison.',
      en: 'In the Lycée neighborhood of Tiébissou, domestic and commercial gas cylinder supply is challenging due to distance to depots and rugged dirt roads. This project designs a rugged, heavy-payload autonomous robot (up to 300 kg / 0.3 T) to automate last-mile delivery.',
    },
    problem: {
      fr: 'Le transport manuel de charges lourdes (bouteilles multiples cumulant jusqu\'à 300 kg / 0,3 T) présente des risques physiques et ergonomiques majeurs, tandis que les véhicules classiques peinent à circuler sur les pistes dégradées ou étroites.',
      en: 'Manual transport of heavy loads (multiple cylinders totaling up to 300 kg / 0.3 T) carries severe ergonomic hazards, while conventional delivery vehicles struggle on narrow, unpaved local tracks.',
    },
    solution: {
      fr: 'Un châssis mobile tout-terrain équipé d\'une motorisation coupleuse, de capteurs ultrasoniques et infrarouges d\'évitement d\'obstacles, d\'un module de navigation GPS et d\'une unité de commande microcontrôlée capable de suivre un itinéraire programmé avec télé-surveillance.',
      en: 'An all-terrain chassis equipped with high-torque gear motors, ultrasonic and infrared obstacle-avoidance sensors, GPS navigation, and a microcontroller unit executing waypoint routes with remote supervisory control.',
    },
    role: {
      fr: 'Étude d\'ingénierie mécanique et électronique, modélisation de l\'architecture matérielle, sélection des composants (actionneurs, alimentation, capteurs), et conception de la logique d\'asservissement et de navigation.',
      en: 'Mechanical and electronic engineering study, hardware architecture modeling, component selection (actuators, power supply, sensors), and implementation of control and navigation algorithms.',
    },
    technologies: ['Arduino / C++', 'Capteurs Ultrasons', 'Pilotes Moteurs L298N', 'Module GPS', 'Électronique de Puissance'],
    components: ['Châssis 4WD renforcé', 'Moteurs DC à réducteur', 'Batterie Li-Ion haute capacité', 'Capteurs HC-SR04', 'Carte Arduino Mega'],
    results: {
      fr: [
        'Dossier de conception technique et schémas d\'implantation validés',
        'Architecture d\'évitement d\'obstacles modélisée et testée sur banc d\'essai',
        'Dimensionnement énergétique calculé pour une autonomie minimale de 3 heures de roulage avec charge utile',
      ],
      en: [
        'Technical engineering dossier and circuit schematics completed',
        'Obstacle avoidance architecture modeled and tested on a bench setup',
        'Power budget dimensioned for a minimum 3-hour operating range with full payload',
      ],
    },
    challenges: {
      fr: [
        'Gestion du centre de gravité pour éviter le renversement du robot avec une bouteille de gaz',
        'Absorption des chocs et franchissement d\'ornières sur terrain sablonneux',
        'Consommation énergétique des moteurs sous forte charge mécanique',
      ],
      en: [
        'Managing center of gravity to prevent tipping with top-heavy gas cylinders',
        'Shock absorption and clearance over rutted, sandy terrain',
        'High motor current draw under heavy mechanical load conditions',
      ],
    },
    learnings: {
      fr: [
        'Dimensionnement des ponts en H et calcul de couple moteur en conditions réelles',
        'Filtrage des signaux capteurs et logique d\'états finis pour la navigation autonome',
        'Rigueur d\'analyse systémique alliant mécanique, électronique et sécurité',
      ],
      en: [
        'H-bridge sizing and motor torque calculations in real-world conditions',
        'Sensor signal filtering and finite state machine logic for navigation',
        'Systemic engineering rigor bridging mechanical stability, electronics, and safety',
      ],
    },
    metrics: [
      { label: { fr: 'Charge utile visée', en: 'Target Payload' }, value: '300 kg (0,3 T)' },
      { label: { fr: 'Autonomie estimée', en: 'Estimated Range' }, value: '3+ h' },
      { label: { fr: 'Vitesse de croisière', en: 'Cruising Speed' }, value: '5 km/h' },
    ],
  },
  {
    id: 'balise-gps-thingsboard',
    title: {
      fr: 'Balise GPS connectée pour les véhicules de l\'INP-HB',
      en: 'Connected GPS Tracker for INP-HB Vehicles',
    },
    subtitle: {
      fr: 'Solution de géolocalisation de véhicules de l\'INP-HB par Arduino, SIM808 et télémétrie ThingsBoard',
      en: 'Vehicle tracking solution for INP-HB with Arduino, SIM808 module, and ThingsBoard IoT telemetry',
    },
    category: 'iot',
    status: 'completed',
    badgeAccent: 'cyan',
    summary: {
      fr: 'Développement complet d\'un tracker IoT autonome transmettant position GPS, vitesse et statut véhicule vers un tableau de bord ThingsBoard.',
      en: 'Full development of an autonomous IoT tracker streaming GPS coordinates, speed, and vehicle telemetry to a live ThingsBoard dashboard.',
    },
    context: {
      fr: 'Dans le cadre des projets IoT et télécoms à l\'INP-HB, l\'enjeu était de réaliser une chaîne de mesure et de transmission complète : de la capture des trames satellitaires à l\'affichage cartographique en temps réel sur une plateforme de supervision.',
      en: 'As part of IoT & Telecom coursework at INP-HB, the goal was to build a full data acquisition and transmission pipeline: from satellite sentence parsing to live cartographic plotting on a monitoring platform.',
    },
    problem: {
      fr: 'Assurer une transmission fiable des coordonnées géographiques par réseau cellulaire GSM/GPRS même en cas de variations de couverture réseau, tout en optimisant la consommation de données.',
      en: 'Ensuring reliable geographic telemetry transmission over GSM/GPRS cellular network despite fluctuating coverage, while optimizing cellular data usage.',
    },
    solution: {
      fr: 'Intégration d\'un microcontrôleur Arduino interfacé avec un module SIM808 via liaison série UART. Décodage des trames NMEA ($GPRMC, $GPGGA), formulation des requêtes HTTP/MQTT et publication sécurisée sur le serveur ThingsBoard avec tableau de bord dynamique (carte OSM, jauges, historique).',
      en: 'Integration of an Arduino microcontroller interfaced with a SIM808 module via UART serial. Decoding NMEA sentences ($GPRMC, $GPGGA), crafting HTTP/MQTT payloads, and secure publishing to ThingsBoard with a live interactive dashboard (OSM map, gauges, history).',
    },
    role: {
      fr: 'Conception du circuit matériel, développement du firmware Arduino (commandes AT GSM/GPRS, parsing NMEA), configuration du serveur et design du tableau de bord ThingsBoard.',
      en: 'Hardware circuit assembly, Arduino firmware development (GSM/GPRS AT commands, NMEA sentence parsing), server setup, and ThingsBoard visualization design.',
    },
    technologies: ['Arduino / C++', 'Module SIM808', 'Commandes AT', 'NMEA 0183', 'ThingsBoard IoT', 'GSM/GPRS', 'Protocole HTTP / MQTT'],
    components: ['Carte Arduino Uno/Nano', 'Module SIM808 GSM/GPRS/GPS', 'Antenne patch GPS active', 'Antenne GSM', 'Régulateur de tension 2A'],
    results: {
      fr: [
        'Acquisition et synchronisation satellite effectives en moins de 45 secondes à froid',
        'Transmission continue des coordonnées à intervalle régulier de 10 secondes vers ThingsBoard',
        'Tableau de bord ergonomique avec tracé de route en direct et alertes de déplacement',
      ],
      en: [
        'Satellite lock acquired in under 45 seconds from cold start',
        'Continuous telemetry transmission at 10-second intervals to ThingsBoard',
        'Ergonomic dashboard with live route tracking and movement alerts',
      ],
    },
    challenges: {
      fr: [
        'Pics d\'intensité de 2A du module SIM808 lors de l\'émission GSM provoquant des redémarrages de l\'Arduino sans alimentation dédiée',
        'Parsing robuste des trames NMEA sans bloquer la boucle d\'exécution principale',
      ],
      en: [
        '2A current surges from SIM808 during GSM bursts causing MCU brownouts without dedicated filtering power supply',
        'Robust non-blocking parsing of variable-length NMEA serial sentences',
      ],
    },
    learnings: {
      fr: [
        'Maîtrise des protocoles de communication série asynchrone et commandes Hayes (AT)',
        'Gestion de l\'alimentation découplée dans les systèmes radiofréquences embarqués',
        'Intégration de dashboards IoT industriels sur ThingsBoard',
      ],
      en: [
        'Mastery of asynchronous serial protocols and Hayes AT commands',
        'Power rail decoupling and current surge isolation in RF embedded boards',
        'Configuring enterprise IoT telemetry widgets and ingestion rules on ThingsBoard',
      ],
    },
    metrics: [
      { label: { fr: 'Intervalle d\'envoi', en: 'Update Rate' }, value: '10 s' },
      { label: { fr: 'Précision GPS', en: 'GPS Accuracy' }, value: '< 2.5 m' },
      { label: { fr: 'Protocole', en: 'Protocol' }, value: 'GSM / HTTP' },
    ],
  },
  {
    id: 'gestion-notes-web',
    title: {
      fr: 'Application web de gestion des notes pour l\'administration de l\'ESI',
      en: 'Academic Grade Management Web Application for ESI Administration',
    },
    subtitle: {
      fr: 'Plateforme complète de scolarité ESI : étudiants, professeurs, cours, notes et réclamations',
      en: 'Comprehensive ESI academic portal: students, faculty, courses, grading, and appeals',
    },
    category: 'web',
    status: 'completed',
    badgeAccent: 'indigo',
    summary: {
      fr: 'Système d\'information scolaire sécurisé permettant la gestion des notes, calcul des moyennes semestrielles et traitement des réclamations étudiantes.',
      en: 'Secure academic information system for grade entry, GPA calculations, and student grade dispute workflows.',
    },
    context: {
      fr: 'Les établissements font face à des lenteurs dans la transmission manuelle des relevés de notes et le traitement des contestations. Ce projet propose une plateforme web centralisée, intuitive et dotée d\'un contrôle d\'accès basé sur les rôles (RBAC).',
      en: 'Educational institutions often struggle with manual grade distribution and handling disputes. This project built a centralized, role-based access control (RBAC) portal to streamline academic records.',
    },
    problem: {
      fr: 'Éviter les erreurs de saisie, sécuriser les données confidentielles contre la falsification et offrir un canal transparent pour les réclamations des apprenants.',
      en: 'Preventing manual calculation errors, securing sensitive student data from tampering, and providing a transparent channel for student academic appeals.',
    },
    solution: {
      fr: 'Architecture MVC en PHP natif avec base de données MariaDB relationnelle normalisée. Modules dédiés par profil (Administrateur, Professeur, Étudiant), hachage des mots de passe (bcrypt), formulaires sécurisés (CSRF, injection SQL) et interface réactive en JavaScript.',
      en: 'MVC architecture in native PHP with a normalized relational MariaDB database. Tailored modules per role (Admin, Teacher, Student), password hashing (bcrypt), SQL injection & CSRF prevention, and responsive UI with vanilla JavaScript.',
    },
    role: {
      fr: 'Développement Full Stack : conception de la base relationnelle (MCD/MLD), développement du backend PHP, conception de l\'interface utilisateur (HTML5/CSS3/JS) et implémentation de la logique métier.',
      en: 'Full Stack Developer: relational database design (ERD/schema), PHP backend development, responsive UI implementation, and core grading business logic.',
    },
    technologies: ['PHP', 'MariaDB / MySQL', 'JavaScript', 'HTML5 / CSS3', 'Architecture MVC', 'Sécurité Web (CSRF / SQLi)'],
    components: ['Module Authentification', 'Module Administration & Utilisateurs', 'Module Enseignants & Saisie', 'Module Étudiants & Consultations', 'Module Réclamations & Traitement'],
    results: {
      fr: [
        'Gestion fluide de plusieurs filières, promotions et coefficients par matière',
        'Génération dynamique des bulletins et calcul automatique des moyennes pondérées',
        'Workflow de réclamation entièrement dématérialisé avec historique des résolutions',
      ],
      en: [
        'Seamless management of multiple academic tracks, classes, and course weightings',
        'Dynamic report card generation and automated weighted GPA calculation',
        'End-to-end paperless appeal lifecycle with resolution audit trail',
      ],
    },
    challenges: {
      fr: [
        'Gestion complexe des coefficients variables et des rattrapages dans la logique de calcul SQL',
        'Cloisonnement strict des privilèges entre étudiants et corps enseignant',
      ],
      en: [
        'Handling complex weighted grading formulas and retake logic efficiently in SQL',
        'Strict privilege boundary enforcement between student viewers and faculty editors',
      ],
    },
    learnings: {
      fr: [
        'Maîtrise de la modélisation de bases de données relationnelles complexes et requêtes avec jointures',
        'Sécurisation des sessions utilisateurs et protection contre les vulnérabilités OWASP Top 10',
        'Ergonomie des interfaces administratives orientées gain de temps',
      ],
      en: [
        'Mastery of normalized relational schemas and high-performance SQL joins',
        'User session hardening and defense against OWASP Top 10 vulnerabilities',
        'Design of intuitive enterprise administrative dashboards',
      ],
    },
    metrics: [
      { label: { fr: 'Rôles gérés', en: 'Roles Managed' }, value: '3 (Admin/Prof/Étudiant)' },
      { label: { fr: 'Moteur SQL', en: 'Database Engine' }, value: 'MariaDB' },
      { label: { fr: 'Temps de calcul', en: 'Calc Time' }, value: '< 50 ms' },
    ],
    githubUrl: 'https://github.com/koneh5554-glitch',
  },
  {
    id: 'service-web-ubuntu-server',
    title: {
      fr: 'Déploiement d\'un service Web sous Ubuntu Server',
      en: 'Web Service Deployment on Ubuntu Server',
    },
    subtitle: {
      fr: 'Installation, configuration réseau, DNS et sécurisation d\'un serveur Linux virtualisé',
      en: 'Installation, network configuration, DNS setup, and hardening on a virtualized Linux server',
    },
    category: 'networks',
    status: 'completed',
    badgeAccent: 'amber',
    summary: {
      fr: 'Mise en place d\'une infrastructure d\'hébergement web complète sous Ubuntu Server dans un environnement virtualisé VirtualBox.',
      en: 'Complete web hosting stack deployment and administration on Ubuntu Server within a virtualized VirtualBox environment.',
    },
    context: {
      fr: 'Ce projet s\'inscrit dans le module Réseaux et Systèmes d\'exploitation de l\'INP-HB ESI, visant à acquérir les bonnes pratiques d\'administration système Linux pour la production.',
      en: 'Part of the Systems & Networks curriculum at INP-HB ESI, aimed at mastering industry-standard Linux system administration practices for production servers.',
    },
    problem: {
      fr: 'Déployer un environnement serveur stable, accessible sur le réseau local avec résolution de nom de domaine propre, tout en appliquant les règles de filtrage de sécurité élémentaires.',
      en: 'Deploy a reliable server environment reachable over the local network via customized domain name resolution, enforcing essential network firewall security rules.',
    },
    solution: {
      fr: 'Configuration d\'une machine virtuelle Ubuntu Server avec carte réseau en mode pont (Bridged) et IP statique. Installation et paramétrage du serveur web Apache2/Nginx, gestion des hôtes virtuels (VirtualHosts), configuration DNS locale (/etc/hosts & Bind9), et mise en place du pare-feu UFW.',
      en: 'Configured an Ubuntu Server VM with a bridged static IP adapter. Installed and tuned Apache2/Nginx web server, configured virtual hosts, local DNS name resolution, and hardened security using UFW firewall.',
    },
    role: {
      fr: 'Administrateur système : installation de l\'OS, configuration réseau Linux (Netplan), déploiement des paquets, configuration des hôtes virtuels, sécurisation SSH et tests de charge.',
      en: 'System Administrator: OS installation, Netplan networking setup, package deployment, virtual host orchestration, SSH hardening, and load testing.',
    },
    technologies: ['Ubuntu Server LTS', 'Linux CLI / Bash', 'Apache2 / Nginx', 'VirtualBox', 'Netplan / IP Static', 'Pare-feu UFW', 'SSH'],
    components: ['Machine virtuelle VirtualBox', 'Configuration Netplan YAML', 'Fichiers VirtualHost', 'Règles iptables/UFW', 'Certificats de test'],
    results: {
      fr: [
        'Serveur web accessible depuis toutes les machines clientes du réseau local',
        'Résolution de nom de domaine dédiée fonctionnelle',
        'Ports superflus fermés et accès SSH restreint avec authentification par clé',
      ],
      en: [
        'Web service fully accessible across all local network client workstations',
        'Dedicated internal domain resolution operating seamlessly',
        'Unnecessary ports closed and SSH restricted with key-based authentication',
      ],
    },
    challenges: {
      fr: [
        'Configuration du mode réseau sous VirtualBox pour permettre la communication bidirectionnelle hôte/invité',
        'Diagnostic des droits et permissions utilisateurs sur les répertoires web (/var/www)',
      ],
      en: [
        'Configuring VirtualBox network bridging for seamless bidirectional host/guest communication',
        'Troubleshooting Linux file ownership and chmod/chown permissions on /var/www directories',
      ],
    },
    learnings: {
      fr: [
        'Maîtrise de la ligne de commande Bash et de l\'arborescence Linux FHS',
        'Gestion des services système avec systemd et analyse des journaux journalctl/syslog',
        'Notions fondamentales de sécurité et de segmentation réseau',
      ],
      en: [
        'Proficiency in Bash shell scripting and standard Linux FHS directory structure',
        'Service lifecycle management via systemd and log diagnostics with journalctl',
        'Core network segmentation and hardening principles',
      ],
    },
    metrics: [
      { label: { fr: 'Système d\'exploitation', en: 'Operating System' }, value: 'Ubuntu Server' },
      { label: { fr: 'Statut du service', en: 'Service Uptime' }, value: '100% stable' },
      { label: { fr: 'Accès', en: 'Access' }, value: 'SSH / HTTP' },
    ],
  },
  {
    id: 'classification-sms-spam-ml',
    title: {
      fr: 'Classification des SMS Spam avec Machine Learning',
      en: 'SMS Spam Classification with Machine Learning',
    },
    subtitle: {
      fr: 'Modèle NLP d\'analyse textuelle et de détection des messages frauduleux par TF-IDF',
      en: 'NLP text analysis and fraudulent message detection model using TF-IDF & ML classifiers',
    },
    category: 'web',
    status: 'completed',
    badgeAccent: 'emerald',
    summary: {
      fr: 'Pipeline de Natural Language Processing en Python capable d\'identifier et d\'isoler automatiquement les SMS indésirables ou tentatives de phishing avec un F1-score élevé.',
      en: 'Python Natural Language Processing pipeline capable of accurately identifying spam and phishing SMS with a high F1-score.',
    },
    context: {
      fr: 'Avec la prolifération des arnaques par SMS et du smishing, le filtrage intelligent en temps réel est devenu un enjeu critique pour la protection des utilisateurs de téléphonie mobile.',
      en: 'With the rise of SMS phishing scams (smishing), automated real-time text classification is essential to protect mobile users from fraudulent campaigns.',
    },
    problem: {
      fr: 'Distinguer avec une très haute précision un message commercial ou frauduleux d\'un message personnel légitime, en évitant à tout prix de bloquer un message important (faux positifs).',
      en: 'Differentiating with high precision between spam/phishing texts and legitimate personal messages, minimizing false positives that could drop critical communications.',
    },
    solution: {
      fr: 'Pipeline complet de Data Science : nettoyage textuel (suppression de la ponctuation, minuscules, tokenisation, élimination des stop words), vectorisation numérique par TF-IDF (Term Frequency-Inverse Document Frequency), entraînement de classifieurs (Naïve Bayes, Régression Logistique), et évaluation rigoureuse sur jeu de test.',
      en: 'End-to-end Data Science pipeline: text preprocessing (cleaning, tokenization, stop-words removal), numerical vectorization using TF-IDF, training ML classifiers (Naïve Bayes, Logistic Regression), and rigorous evaluation on holdout test data.',
    },
    role: {
      fr: 'Développeur Python / Data : prétraitement des données textuelles, feature engineering, implémentation des modèles avec Scikit-Learn, optimisation des hyperparamètres et calcul des métriques de validation.',
      en: 'Python / Data Developer: text preprocessing, feature engineering, model training with Scikit-Learn, hyperparameter tuning, and metric evaluation.',
    },
    technologies: ['Python', 'Scikit-Learn', 'Pandas & NumPy', 'NLP / Text Mining', 'TF-IDF Vectorization', 'Naïve Bayes', 'Matrice de confusion'],
    components: ['Module de nettoyage regex', 'Vectoriseur TF-IDF', 'Classifieur MultinomialNB', 'Générateur de matrice de confusion', 'Script d\'inférence'],
    results: {
      fr: [
        'Précision globale supérieure à 97% sur le jeu de test indépendant',
        'Taux de faux positifs extrêmement faible (< 1%) préservant les messages légitimes',
        'Temps d\'inférence par SMS inférieur à 5 millisecondes',
      ],
      en: [
        'Overall accuracy exceeding 97% on holdout test partition',
        'Extremely low false positive rate (< 1%) protecting legitimate messages',
        'Per-message inference runtime under 5 milliseconds',
      ],
    },
    challenges: {
      fr: [
        'Déséquilibre fort des classes (nettement plus de SMS légitimes que de spams dans le dataset)',
        'Gestion des abréviations, fautes d\'orthographe volontaires et symboles spéciaux utilisés par les spammeurs',
      ],
      en: [
        'Severe class imbalance (substantially more legitimate SMS than spam in raw datasets)',
        'Handling intentional misspellings, slang abbreviations, and evasive unicode characters',
      ],
    },
    learnings: {
      fr: [
        'Compréhension approfondie du traitement automatique du langage naturel (NLP)',
        'Importance de l\'analyse de la matrice de confusion plutôt que la seule exactitude (Accuracy)',
        'Déploiement d\'un modèle d\'IA sous forme de pipeline réutilisable',
      ],
      en: [
        'In-depth understanding of statistical NLP and lexical feature extraction',
        'Critical importance of confusion matrix and F1-score over raw accuracy in imbalanced data',
        'Packaging trained models into modular inference pipelines',
      ],
    },
    metrics: [
      { label: { fr: 'Précision globale', en: 'Accuracy' }, value: '97.8%' },
      { label: { fr: 'F1-Score Spam', en: 'Spam F1-Score' }, value: '0.94' },
      { label: { fr: 'Temps d\'inférence', en: 'Inference Time' }, value: '< 5 ms' },
    ],
  },
  {
    id: 'systeme-embarque-raspberry-pi',
    title: {
      fr: 'Système embarqué interactif avec Raspberry Pi 4',
      en: 'Interactive Embedded System with Raspberry Pi 4',
    },
    subtitle: {
      fr: 'Pilotage GPIO temps réel : boutons poussoirs, LED, écran LCD et gestion d\'interruptions',
      en: 'Real-time GPIO control: push buttons, LEDs, LCD display, and hardware interrupt routines',
    },
    category: 'embedded',
    status: 'completed',
    badgeAccent: 'rose',
    summary: {
      fr: 'Conception et programmation d\'un système de supervision physique autonome exploitant les capacités GPIO du Raspberry Pi 4.',
      en: 'Design and programming of an autonomous physical supervision system leveraging Raspberry Pi 4 GPIO capabilities.',
    },
    context: {
      fr: 'Projet de travaux pratiques avancés en systèmes embarqués à l\'ESI INP-HB, visant à maîtriser la communication bas niveau et l\'interaction matérielle en environnement Linux temps partagé.',
      en: 'Advanced embedded systems lab project at ESI INP-HB, aimed at mastering low-level hardware interfacing and event-driven programming in Linux.',
    },
    problem: {
      fr: 'Gérer des entrées/sorties numériques multiples avec réactivité immédiate sans saturer le processeur par un polling continuel.',
      en: 'Manage multiple digital I/O lines with instantaneous responsiveness without spiking CPU utilization via continuous busy-wait polling.',
    },
    solution: {
      fr: 'Développement d\'une application Python modulaire utilisant la bibliothèque RPi.GPIO avec gestion des interruptions matérielles (edge detection sur fronts montants/descendants). Affichage d\'états dynamiques sur écran LCD 16x2 via bus I2C, cycles d\'alertes lumineux avec LED et menus interactifs commandés par boutons poussoirs avec anti-rebond logiciel.',
      en: 'Developed a modular Python application using RPi.GPIO with hardware interrupt triggers (edge detection). Real-time status display on a 16x2 I2C LCD, LED indicator signaling sequences, and debounce-filtered push button navigation.',
    },
    role: {
      fr: 'Conception du schéma de câblage sur platine d\'expérimentation, calcul des résistances de tirage et de limitation de courant, programmation du script Python et gestion de l\'anti-rebond.',
      en: 'Breadboard circuit design, pull-up/pull-down and current-limiting resistor calculations, Python logic implementation, and software debouncing.',
    },
    technologies: ['Raspberry Pi 4', 'Python 3', 'RPi.GPIO', 'Bus I2C', 'Écran LCD 16x2', 'Linux Debian / Raspberry Pi OS'],
    components: ['Raspberry Pi 4 Model B', 'Écran LCD avec module backpack I2C PCF8574', 'Boutons poussoirs tactiles', 'Diodes électroluminescentes (LED)', 'Résistances de précision'],
    results: {
      fr: [
        'Réponse instantanée aux sollicitations utilisateurs grâce aux interruptions matérielles',
        'Consommation CPU quasi nulle au repos (< 1%)',
        'Affichage dynamique en temps réel des statistiques d\'entrées et messages d\'état',
      ],
      en: [
        'Instantaneous responsiveness to user input via event-driven edge callbacks',
        'Near-zero idle CPU consumption (< 1%)',
        'Dynamic real-time display of I/O states and diagnostic feedback on LCD',
      ],
    },
    challenges: {
      fr: [
        'Phénomène de rebond mécanique des boutons poussoirs générant des déclenchements parasites multiples',
        'Configuration des adresses et vitesses du bus I2C sous le noyau Linux',
      ],
      en: [
        'Mechanical switch contact bounce causing erroneous multiple interrupt firings',
        'Resolving I2C bus device address mapping and baud rates within Linux kernel overlays',
      ],
    },
    learnings: {
      fr: [
        'Programmation événementielle par interruption versus scrutations actives (polling)',
        'Interfaçage de périphériques série industriels via le protocole synchrone I2C',
        'Protection électrique des broches GPIO 3.3V du Raspberry Pi',
      ],
      en: [
        'Event-driven interrupt programming compared to active polling loops',
        'Serial peripheral interfacing using synchronous 2-wire I2C protocol',
        'Electrical protection principles for delicate 3.3V Raspberry Pi GPIO pins',
      ],
    },
    metrics: [
      { label: { fr: 'Temps de réponse', en: 'Response Time' }, value: '< 2 ms' },
      { label: { fr: 'Charge CPU', en: 'CPU Load' }, value: '< 1%' },
      { label: { fr: 'Interface', en: 'Interface' }, value: 'I2C / GPIO' },
    ],
  },
  {
    id: 'gestion-stock-ms-access',
    title: {
      fr: 'Gestion de stock informatisée sous Microsoft Access',
      en: 'Inventory Management System with Microsoft Access',
    },
    subtitle: {
      fr: 'Base de données relationnelle : fournisseurs, entrées/sorties et calcul d\'état de stock',
      en: 'Relational database: suppliers, stock movements, and real-time inventory reconciliation',
    },
    category: 'studies',
    status: 'completed',
    badgeAccent: 'purple',
    summary: {
      fr: 'Conception et modélisation d\'un système complet de gestion des stocks avec formulaires ergonomiques, requêtes automatisées et états d\'inventaire.',
      en: 'Design and modeling of a complete inventory tracking system with ergonomic entry forms, automated recalculation queries, and printable audit reports.',
    },
    context: {
      fr: 'Les PME ont besoin d\'outils fiables et accessibles pour suivre leurs réapprovisionnements et éviter les ruptures de stock sans nécessiter d\'infrastructures lourdes.',
      en: 'SMEs require reliable and agile tools to track replenishments, orders, and avoid stockouts without incurring massive enterprise software overhead.',
    },
    problem: {
      fr: 'Éviter les écarts d\'inventaire entre le stock physique et le stock théorique, automatiser le calcul des quantités disponibles après chaque mouvement et alerter en cas de stock critique.',
      en: 'Eliminating discrepancies between physical and recorded stock, automating available balance calculations after each receipt/delivery, and alerting on critical thresholds.',
    },
    solution: {
      fr: 'Création d\'un modèle relationnel normalisé en 3e forme normale (3NF) : tables Produits, Fournisseurs, Entrées, Sorties et Mouvements. Élaboration de formulaires avec contrôle de saisie, requêtes d\'union et d\'agrégation pour le calcul de stock en temps réel, et génération d\'états imprimables.',
      en: 'Normalized relational schema in 3rd Normal Form (3NF): Products, Suppliers, Inbound Deliveries, Outbound Sales, and Inventory Movements tables. Interactive forms with validation rules, union/aggregation queries for live balance, and formatted print reports.',
    },
    role: {
      fr: 'Concepteur & Développeur de base de données : analyse des besoins, modélisation conceptuelle (MCD Merise), création des tables avec contraintes d\'intégrité référentielle, écriture des requêtes SQL et design des formulaires.',
      en: 'Database Designer & Developer: requirements gathering, conceptual Merise modeling, table creation with referential integrity constraints, SQL query formulation, and UI form design.',
    },
    technologies: ['Microsoft Access', 'Modélisation Relationnelle (MCD/MLD)', 'Langage SQL', 'Formulaires & Macros', 'Génération d\'États'],
    components: ['Tables normalisées 3NF', 'Requêtes de calcul de solde dynamique', 'Formulaires de saisie guidée', 'Tableaux de bord d\'alertes de seuil', 'États de synthèse mensuelle'],
    results: {
      fr: [
        'Zéro redondance de données grâce à une normalisation rigoureuse',
        'Calcul instantané et automatique du stock réel disponible pour chaque référence',
        'Interface intuitive permettant une saisie sans risque d\'incohérence grâce aux listes déroulantes liées',
      ],
      en: [
        'Zero data redundancy achieved through rigorous schema normalization',
        'Instant automated reconciliation of on-hand inventory across all product SKUs',
        'Intuitive interface enabling error-free staff data entry with linked dropdowns',
      ],
    },
    challenges: {
      fr: [
        'Calcul du stock restant par combinaison dynamique des cumuls d\'entrées et de sorties sans stocker une valeur statique susceptible de désynchronisation',
        'Garantie de l\'intégrité référentielle en cas de suppression ou modification d\'un fournisseur',
      ],
      en: [
        'Dynamically computing net on-hand stock via aggregated inbound minus outbound flows rather than storing stale static fields',
        'Preserving cascade referential integrity upon supplier record alterations',
      ],
    },
    learnings: {
      fr: [
        'Règles fondamentales de conception des bases de données relationnelles',
        'Optimisation des requêtes de regroupement et calculs conditionnels',
        'Conception d\'outils de gestion opérationnels directement exploitables en entreprise',
      ],
      en: [
        'Foundational principles of relational database design and Merise methodologies',
        'Optimization of aggregate grouping queries and conditional logic',
        'Building business productivity tools tailored for immediate operational utility',
      ],
    },
    metrics: [
      { label: { fr: 'Forme normale', en: 'Normal Form' }, value: '3NF respectée' },
      { label: { fr: 'Alertes stock', en: 'Stock Alerts' }, value: 'Automatisées' },
      { label: { fr: 'États générés', en: 'Reports' }, value: 'PDF / Impression' },
    ],
  },
  {
    id: 'protection-electrique-datacenter',
    title: {
      fr: 'Étude de protection électrique d\'un Data Center',
      en: 'Data Center Electrical Protection Study',
    },
    subtitle: {
      fr: 'Systèmes de paratonnerre et parafoudres pour la sécurité des équipements informatiques et télécoms',
      en: 'Lightning conductor & surge protection design for critical computing and telecom equipment',
    },
    category: 'studies',
    status: 'study', // 'study' | 'in_progress' | 'completed'
    badgeAccent: 'teal',
    summary: {
      fr: 'Étude d\'ingénierie technique portant sur la protection contre les surtensions atmosphériques et industrielles des infrastructures sensibles d\'un Data Center.',
      en: 'Comprehensive technical engineering study on transient surge and direct lightning strike mitigation for mission-critical Data Center infrastructures.',
    },
    context: {
      fr: 'Les Data Centers abritent des équipements de calcul et de télécommunication à très haute sensibilité. Un impact direct de foudre ou une surtension transitoire sur le réseau d\'alimentation peut entraîner la destruction irrémédiable de serveurs et des pertes de données massives.',
      en: 'Data Centers house mission-critical computing and telecom arrays vulnerable to electromagnetic disturbances. Direct lightning strikes or switching transients can cause catastrophic hardware destruction and severe data loss.',
    },
    problem: {
      fr: 'Analyser les risques d\'exposition foudre d\'un bâtiment technique et dimensionner une protection coordonnée externe (paratonnerre) et interne (parafoudres multi-étages) respectant les normes internationales.',
      en: 'Assess lightning risk exposure for a technical facility and engineer a coordinated protection scheme combining external interception (lightning rods) and internal multi-tier surge protection (SPDs).',
    },
    solution: {
      fr: 'Élaboration d\'une étude complète basée sur la méthode de calcul du risque foudre (norme NF EN 62305). Recommandation d\'un système de paratonnerre à dispositif d\'amorçage (PDA) pour la protection externe, couplé à un réseau de terre équipotentiel à faible impédance (< 5 ohms). Dimensionnement d\'une cascade de parafoudres (Type 1 en tête de TGBT, Type 2 dans les tableaux divisionnaires informatiques, et Type 3 sur les baies serveurs).',
      en: 'Engineered a comprehensive safety plan adhering to international standard IEC / NF EN 62305. Recommended an early streamer emission (ESE) air terminal system coupled with an equipotential low-impedance earth grid (< 5 ohms). Sized a multi-tier SPD cascade (Type 1 at Main Switchboard, Type 2 at distribution panels, Type 3 at server rack PDUs).',
    },
    role: {
      fr: 'Auteur de l\'étude technique : analyse normative, calcul de la densité de foudroiement, sélection des technologies de protection et formalisation des recommandations d\'installation.',
      en: 'Technical Study Author: standards analysis, lightning density risk assessment, protection hardware selection, and synthesis of engineering recommendations.',
    },
    technologies: ['Normes NF EN 62305 & NFC 15-100', 'Paratonnerres PDA', 'Parafoudres Types 1, 2, 3', 'Schémas Électriques TGBT', 'Équipotentialité & Prise de Terre', 'Compatibilité Électromagnétique (CEM)'],
    components: ['Pointe paratonnerre PDA', 'Conducteurs de descente en cuivre étamé', 'Parafoudres débrochables avec contact télésignalisation', 'Ceinture équipotentielle fond de fouille', 'Éclateurs de terre'],
    results: {
      fr: [
        'Dossier technique d\'ingénierie complet avec zonage de protection foudre (LPZ 0 à LPZ 3)',
        'Schéma unifilaire d\'intégration des parafoudres coordonnés dans la distribution électrique',
        'Cahier des charges pour la réalisation d\'une prise de terre maillée à très faible impédance',
      ],
      en: [
        'Comprehensive engineering study featuring Lightning Protection Zones (LPZ 0 to LPZ 3)',
        'Single-line diagram illustrating coordinated SPD integration into the power distribution architecture',
        'Technical specifications for constructing a low-impedance mesh ground ring',
      ],
    },
    challenges: {
      fr: [
        'Coordination fine des tensions résiduelles (Up) des parafoudres pour garantir la survie des alimentations à découpage des serveurs',
        'Prise en compte des contraintes géologiques locales sur la résistivité du sol pour la prise de terre',
      ],
      en: [
        'Coordinating residual clamping voltages (Up) across cascaded SPDs to safeguard delicate server power supply units',
        'Factoring in local soil resistivity constraints when sizing the earthing grid',
      ],
    },
    learnings: {
      fr: [
        'Maîtrise des concepts de Compatibilité Électromagnétique (CEM) et de propagation des ondes de choc 10/350 µs et 8/20 µs',
        'Rigueur normative appliquée aux infrastructures télécoms critiques',
        'Vision globale de la continuité de service et de la résilience électrique d\'un centre de données',
      ],
      en: [
        'Mastery of Electromagnetic Compatibility (EMC) concepts and 10/350 µs vs 8/20 µs impulse waveform propagation',
        'Regulatory and standard compliance applied to critical IT facilities',
        'Holistic perspective on high-availability power continuity and data center resilience',
      ],
    },
    metrics: [
      { label: { fr: 'Normes de référence', en: 'Standards' }, value: 'NF EN 62305 / NFC 15-100' },
      { label: { fr: 'Prise de terre visée', en: 'Target Grounding' }, value: '< 5 Ohms' },
      { label: { fr: 'Niveaux de cascade', en: 'Cascade Tiers' }, value: '3 (Type 1, 2 & 3)' },
    ],
  },
];
