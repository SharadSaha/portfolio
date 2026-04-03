export type NavItem = {
  id: string;
  label: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  summary: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  period: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  github: string;
  live?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};
