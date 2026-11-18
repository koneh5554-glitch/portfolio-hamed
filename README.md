# Portfolio Professionnel – KONÉ HAMED (CC)

> **Étudiant en Électronique, Informatique et Télécommunications (EIT) – Institut National Polytechnique Félix Houphouët-Boigny (INP-HB / ESI)**  
> Portfolio moderne, haut de gamme, dark premium, responsive et bilingue (Français / Anglais).

---

## 🌟 Présentation du Projet

Ce portfolio a été conçu selon les standards les plus exigeants du web moderne afin de mettre en valeur l'identité, les compétences et les projets d'ingénierie de **KONÉ HAMED (CC)** auprès des recruteurs, entreprises, responsables techniques et clients.

### Points Forts :
- **Design Dark Premium & Minimaliste** : Teintes noir profond, bleu électrique et midnight blue, dégradés subtils, micro-interactions et glassmorphism.
- **Mode Sombre & Mode Clair** : Basculement fluide avec mémorisation instantanée dans `localStorage`.
- **Bilingue Intégral (FR / EN)** : Traduction complète et dynamique de toutes les sections, boutons, formulaires, badges et détails techniques.
- **Architecture de Données Découplée** : Toutes les informations personnelles, compétences, projets et contacts sont isolés dans `src/data/`, évitant de modifier le code des composants.
- **8 Études de Cas Détaillées** : Pages dédiées (`/project/:id`) avec contexte, problème, solution, rôle exact, technologies, schémas/composants, résultats et difficultés surmontées.
- **Formulaire de Contact Réel** : Intégration directe avec **Web3Forms** (ou Formspree) pour une réception réelle d'emails sans serveur backend requis, avec validation en direct et redirection mailto de secours.
- **Timeline Académique & Expérience** : Présentation du stage chez **AEG** (avec respect strict de la confidentialité) et du parcours à l'**INP-HB ESI STIC**.
- **Engagement Associatif & Leadership** : Mise en valeur du mandat de **Vice-Président** et de ses 7 initiatives phares (intégration, hackathons/gaming, journées carrières, mentorat concours).
- **Documents & Téléchargement CV** : Téléchargement direct du CV au format PDF et masquage élégant des documents non encore publiés.
- **Veille Technologique & Blog** : Espace facultatif d'articles techniques avec lecteur immersif.

---

## 🛠️ Stack Technologique

- **Framework & Runtime** : [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool** : [Vite](https://vitejs.dev/)
- **Styles & Design** : [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Icônes** : [Lucide React](https://lucide.dev/) + Icônes SVG haute précision
- **Routage** : [React Router v7](https://reactrouter.com/) (Navigation SPA fluide + mémorisation du défilement)
- **Formulaire & Télémétrie** : Web3Forms API REST

---

## 📂 Arborescence du Projet

```text
portfolio/
├── public/
│   ├── docs/
│   │   └── CV_KONE_HAMED_EIT.pdf     # CV PDF téléchargeable (remplaçable)
│   ├── avatar.jpg                    # Photo professionnelle (facultative)
│   ├── favicon.svg                   # Favicon personnalisé avec monogramme CC
│   ├── robots.txt                    # Configuration pour l'indexation des moteurs
│   └── sitemap.xml                   # Plan du site pour le référencement naturel (SEO)
├── src/
│   ├── components/                   # Composants UI réutilisables
│   │   ├── Navbar.tsx                # Barre de navigation fixe avec sélecteurs FR/EN & Thème
│   │   ├── Footer.tsx                # Pied de page avec liens, statut et retour en haut
│   │   ├── SectionHeader.tsx         # Titres de sections standardisés avec badges
│   │   ├── Badge.tsx                 # Badges de statut (Terminé, En cours, Étude)
│   │   ├── ProjectCard.tsx           # Carte interactive de projet
│   │   ├── ContactForm.tsx           # Formulaire de contact fonctionnel avec validation
│   │   └── SocialIcons.tsx           # Icônes vectorielles GitHub et LinkedIn
│   ├── context/
│   │   └── ThemeContext.tsx          # Gestionnaire de thème (Dark/Light + localStorage)
│   ├── data/                         # 📁 FICHIERS DE DONNÉES (À MODIFIER FACILEMENT)
│   │   ├── profile.ts                # Bio, accroche, objectifs, statut de disponibilité
│   │   ├── projects.ts               # Les 8 projets détaillés avec cas d'études
│   │   ├── skills.ts                 # Compétences classées par domaines avec niveaux
│   │   ├── experience.ts             # Stage chez AEG et parcours technique
│   │   ├── education.ts              # Formation INP-HB ESI et diplômes
│   │   ├── leadership.ts             # Vice-Présidence et activités associatives
│   │   ├── documents.ts              # Liste des documents et rapports téléchargeables
│   │   ├── contact.ts                # Coordonnées, réseaux sociaux et clés d'API
│   │   └── blog.ts                   # Articles de veille technologique
│   ├── pages/
│   │   ├── HomePage.tsx              # Page d'accueil complète one-page
│   │   └── ProjectDetailPage.tsx     # Page détaillée d'étude de cas pour chaque projet
│   ├── sections/                     # Sections modulaires de la page d'accueil
│   │   ├── HeroSection.tsx           # En-tête principal, avatar, CTAs et badge CC
│   │   ├── AboutSection.tsx          # Biographie, synergie matériel/logiciel
│   │   ├── SkillsSection.tsx         # Grille de compétences avec filtre de catégories
│   │   ├── ProjectsSection.tsx       # Galerie de projets avec filtres interactifs
│   │   ├── ExperienceSection.tsx     # Présentation professionnelle du stage AEG
│   │   ├── EducationSection.tsx      # Timeline moderne de formation académique
│   │   ├── LeadershipSection.tsx     # Mandat associatif et réalisations
│   │   ├── DocumentsSection.tsx      # Téléchargement du CV et rapports
│   │   ├── BlogSection.tsx           # Rubrique veille technologique
│   │   └── ContactSection.tsx        # Coordonnées directes et formulaire
│   ├── translations/                 # 📁 TRADUCTIONS BILINGUES
│   │   ├── fr.ts                     # Textes français
│   │   ├── en.ts                     # Textes anglais
│   │   └── LanguageContext.tsx       # Gestionnaire de langue (FR/EN)
│   ├── types/
│   │   └── index.ts                  # Interfaces TypeScript complètes
│   ├── App.tsx                       # Racine de l'application et routes
│   ├── index.css                     # Styles globaux, glassmorphism et Tailwind
│   └── main.tsx                      # Point d'entrée React
├── index.html                        # Métadonnées SEO, Open Graph et titre
├── package.json                      # Dépendances et scripts
├── tsconfig.json                     # Configuration TypeScript
└── vite.config.ts                    # Configuration du bundler Vite + Tailwind
```

---

## 🚀 Démarrage Rapide

### 1. Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- npm ou yarn

### 2. Installation et Lancement Local
Ouvrez un terminal dans le dossier du projet :

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement local
npm run dev
```

L'application est immédiatement accessible à l'adresse suivante :  
👉 **`http://localhost:5173/`**

### 3. Compiler pour la Production
```bash
npm run build
```
Le dossier optimisé et minifié sera généré dans `/dist`.

---

## ⚙️ Guide de Personnalisation Simplifié

Toutes vos informations personnelles sont isolées dans le dossier **`src/data/`**. Vous n'avez pas besoin de toucher au code des composants !

### 1. Modifier vos Coordonnées et Liens Réseaux
Fichier : **`src/data/contact.ts`**
```typescript
export const contactData = {
  email: 'votre.email@gmail.com',
  phone: '+225 07 XX XX XX XX',
  whatsappNumber: '22507XXXXXXXX',
  whatsappDisplay: '+225 07 XX XX XX XX',
  location: 'Yamoussoukro / Abidjan, Côte d\'Ivoire',
  githubUrl: 'https://github.com/votre_pseudo',
  linkedinUrl: 'https://linkedin.com/in/votre_profil',
  ...
};
```

### 2. Activer la Réception Réelle des Messages du Formulaire
1. Rendez-vous sur [Web3Forms](https://web3forms.com/) (100% gratuit, sans inscription complexe).
2. Entrez votre adresse email pour recevoir votre clé d'accès (`Access Key`).
3. Ouvrez **`src/data/contact.ts`** et collez votre clé :
```typescript
web3formsAccessKey: 'votre_cle_web3forms_ici',
```
Dès cet instant, chaque message envoyé depuis votre portfolio arrivera directement dans votre boîte email !

### 3. Remplacer votre Photo Professionnelle
1. Placez votre photo au format carré dans le dossier **`public/avatar.jpg`**.
2. Elle sera automatiquement prise en compte dans la Hero Section.

### 4. Mettre à Jour votre CV PDF
1. Enregistrez votre CV sous le nom **`CV_KONE_HAMED_EIT.pdf`**.
2. Déposez-le dans le dossier **`public/docs/`**.
3. Tout visiteur cliquant sur le bouton « Télécharger mon CV » recevra automatiquement votre fichier actualisé.

### 5. Ajouter ou Modifier des Projets
Fichier : **`src/data/projects.ts`**
Chaque projet possède un objet structuré avec :
- `title` : Titre bilingue `{ fr: '...', en: '...' }`
- `status` : `'completed'` (Terminé), `'in_progress'` (En cours), ou `'study'` (Étude de conception)
- `category` : `'web'`, `'electronics'`, `'embedded'`, `'iot'`, `'networks'`, ou `'studies'`
- `context`, `problem`, `solution`, `role`, `results`, `challenges`, `learnings`.

---

## 🌐 Déploiement Gratuit en Ligne

Vous pouvez héberger gratuitement ce portfolio en quelques clics :

### Option A : Déploiement sur Vercel (Recommandé)
1. Créez un compte gratuit sur [Vercel](https://vercel.com/).
2. Installez le CLI ou connectez votre compte GitHub.
3. Importez votre dépôt `portfolio`.
4. Vercel détecte automatiquement le projet **Vite** : cliquez sur **Deploy**.
5. Votre site est instantanément en ligne avec HTTPS et un domaine gratuit `.vercel.app` (ex: `kone-hamed.vercel.app`).

### Option B : Déploiement sur Netlify
1. Créez un compte sur [Netlify](https://www.netlify.com/).
2. Glissez-déposez le dossier `dist/` (généré avec `npm run build`), ou connectez votre dépôt GitHub.
3. Build command : `npm run build` | Publish directory : `dist`.
4. Cliquez sur **Deploy Site**.

### Option C : Hébergement Local sous XAMPP
Puisque le projet est situé dans `c:\xampp\htdocs\portfolio` :
1. Exécutez `npm run build`.
2. Copiez les fichiers du dossier `dist/` directement dans `c:\xampp\htdocs\portfolio\`.
3. Démarrez Apache dans le panneau XAMPP.
4. Accédez au portfolio via `http://localhost/portfolio/`.

---

## 📄 Licence & Droits d'Auteur

Conçu et développé sur-mesure pour **KONÉ HAMED (CC)**.  
Tous droits réservés © 2026.
