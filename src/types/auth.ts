export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'student' | 'instructor';
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  session: any | null;
  loading: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Team {
  id: string;
  name: string;
  courseId: string;
  members: string[];
  createdAt: string;
  updatedAt: string;
}