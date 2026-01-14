export interface Opinion {
  id: string;
  title: string;
  author: string;
  category: string;
  content: string;
  date: string;
  summary?: string;
  imageUrl?: string;
}

export interface User {
  name: string;
  nim: string;
}

export enum ViewState {
  HOME = 'HOME',
  WRITE = 'WRITE',
  READ = 'READ',
  LOGIN = 'LOGIN',
  ABOUT_DEPT = 'ABOUT_DEPT',
  PROFILE = 'PROFILE',
  DASHBOARD = 'DASHBOARD'
}

export interface AIFeedback {
  tone: string;
  suggestions: string[];
  summary: string;
}