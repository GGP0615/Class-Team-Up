// Custom Types (matching your PostgreSQL ENUM types)
export type UserRole = 'student' | 'instructor';
export type UserStatus = 'active' | 'inactive' | 'pending';
export type CourseStatus = 'active' | 'completed' | 'cancelled';
export type TeamStatus = 'forming' | 'active' | 'disbanded';
export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type ConnectionStatus = 'pending' | 'accepted' | 'rejected';
export type MessageStatus = 'sent' | 'delivered' | 'read';

// Database Types
export interface User {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: UserRole;
  department?: string;
  preferences?: string;
  status: UserStatus;
  created_date: string;
  last_login?: string;
}

export interface TeamRules {
  rule_id: string;
  instructor_id: string;
  min_members: number;
  max_members: number;
  skill_requirements?: Record<string, any>;
  diversity_rules?: string;
  created_date: string;
  modified_date: string;
}

export interface Course {
  course_id: string;
  instructor_id: string;
  course_name: string;
  semester: string;
  year: number;
  description?: string;
  status: CourseStatus;
}

export interface Team {
  team_id: string;
  team_name: string;
  course_id: string;
  rule_set_id?: string;
  status: TeamStatus;
  created_date: string;
  modified_date: string;
}

export interface Skill {
  skill_id: string;
  skill_name: string;
  category?: string;
  description?: string;
}

export interface TeamMember {
  team_id: string;
  user_id: string;
  join_date: string;
  role?: string;
  is_team_lead: boolean;
  status: UserStatus;
}

export interface UserSkill {
  user_id: string;
  skill_id: string;
  proficiency_level: ProficiencyLevel;
  verified: boolean;
}

export interface Connection {
  connection_id: string;
  requester_id: string;
  recipient_id: string;
  status: ConnectionStatus;
  created_date: string;
  updated_date: string;
}

export interface Message {
  message_id: string;
  sender_id: string;
  recipient_id: string;
  content: string;
  status: MessageStatus;
  sent_date: string;
  read_date?: string;
}

export interface Notification {
  notification_id: string;
  user_id: string;
  content: string;
  is_read: boolean;
  created_date: string;
}

export interface ActivityLog {
  log_id: string;
  user_id: string;
  action: string;
  details?: Record<string, any>;
  created_date: string;
}

// Database Response Types
export type DatabaseResponse<T> = {
  data: T | null;
  error: Error | null;
};

// API Response Types
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};