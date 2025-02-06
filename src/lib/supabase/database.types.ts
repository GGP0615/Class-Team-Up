export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          user_id: string
          first_name: string
          last_name: string
          email: string
          role: Database['public']['Enums']['user_role']
          department: string | null
          preferences: string | null
          status: Database['public']['Enums']['user_status']
          created_date: string
          last_login: string | null
        }
        Insert: {
          user_id?: string
          first_name: string
          last_name: string
          email: string
          role: Database['public']['Enums']['user_role']
          department?: string | null
          preferences?: string | null
          status?: Database['public']['Enums']['user_status']
          created_date?: string
          last_login?: string | null
        }
        Update: {
          user_id?: string
          first_name?: string
          last_name?: string
          email?: string
          role?: Database['public']['Enums']['user_role']
          department?: string | null
          preferences?: string | null
          status?: Database['public']['Enums']['user_status']
          created_date?: string
          last_login?: string | null
        }
      }
      // Add other table definitions following the same pattern...
    }
    Enums: {
      user_role: 'student' | 'instructor'
      user_status: 'active' | 'inactive' | 'pending'
      course_status: 'active' | 'completed' | 'cancelled'
      team_status: 'forming' | 'active' | 'disbanded'
      proficiency_level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
      connection_status: 'pending' | 'accepted' | 'rejected'
      message_status: 'sent' | 'delivered' | 'read'
    }
  }
}