export type Language = 'fr' | 'en';

export type Theme = 'dark' | 'light';

export type ProjectCategory = 
  | 'all'
  | 'web'
  | 'electronics'
  | 'embedded'
  | 'iot'
  | 'networks'
  | 'studies';

export type ProjectStatus = 'completed' | 'in_progress' | 'study';

export interface LocalizedString {
  fr: string;
  en: string;
}

export interface LocalizedList {
  fr: string[];
  en: string[];
}

export interface ProjectMetric {
  label: LocalizedString;
  value: string;
}

export interface Project {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: LocalizedString;
  context: LocalizedString;
  problem: LocalizedString;
  solution: LocalizedString;
  role: LocalizedString;
  technologies: string[];
  components?: string[];
  results: LocalizedList;
  challenges: LocalizedList;
  learnings: LocalizedList;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  badgeAccent?: string;
  metrics?: ProjectMetric[];
}

export interface SkillItem {
  name: string;
  level: LocalizedString;
  highlighted?: boolean;
}

export interface SkillCategory {
  id: string;
  title: LocalizedString;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: LocalizedString;
  period: LocalizedString;
  location: LocalizedString;
  badge: LocalizedString;
  description: LocalizedString;
  tasks: LocalizedList;
  skillsAcquired: LocalizedList;
  technologies: string[];
  confidentialityNotice?: LocalizedString;
}

export interface EducationItem {
  id: string;
  institution: string;
  school: string;
  department: string;
  specialty: LocalizedString;
  degree: LocalizedString;
  period: string;
  status: LocalizedString;
  description: LocalizedString;
  keyPoints: LocalizedList;
}

export interface LeadershipActivity {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  category: LocalizedString;
  impact: LocalizedString;
}

export interface DocumentItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  category: LocalizedString;
  filename: string;
  fileUrl?: string;
  size?: string;
  available: boolean;
}

export interface BlogPost {
  id: string;
  title: LocalizedString;
  summary: LocalizedString;
  date: string;
  category: LocalizedString;
  readTime: string;
  tags: string[];
  content?: LocalizedString;
}
