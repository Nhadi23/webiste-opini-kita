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

export type UserRole = 'MAHASISWA' | 'TAMU';

export interface User {
  name: string;
  id: string; // NIM for Mahasiswa, Email for Guest
  role: UserRole;
}

export interface Comment {
  id: string;
  opinionId: string;
  author: string;
  authorRole: UserRole;
  content: string;
  date: string;
}

export enum ViewState {
  HOME = 'HOME',
  WRITE = 'WRITE',
  READ = 'READ',
  LOGIN_STUDENT = 'LOGIN_STUDENT',
  LOGIN_GUEST = 'LOGIN_GUEST',
  ABOUT_DEPT = 'ABOUT_DEPT',
  PROFILE = 'PROFILE',
  DASHBOARD = 'DASHBOARD'
}

export interface AIFeedback {
  tone: string;
  suggestions: string[];
  summary: string;
}