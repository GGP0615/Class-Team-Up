import { Database } from './database.types';

export type Tables = Database['public']['Tables'];
export type Enums = Database['public']['Enums'];

// Table Types
export type UserRow = Tables['users']['Row'];
export type TeamRulesRow = Tables['team_rules']['Row'];
export type CourseRow = Tables['course']['Row'];
export type TeamRow = Tables['team']['Row'];
export type SkillRow = Tables['skill']['Row'];
export type TeamMemberRow = Tables['team_member']['Row'];
export type UserSkillRow = Tables['user_skill']['Row'];
export type ConnectionRow = Tables['connection']['Row'];
export type MessageRow = Tables['message']['Row'];
export type NotificationRow = Tables['notification']['Row'];
export type ActivityLogRow = Tables['activity_log']['Row'];

// Insert Types
export type UserInsert = Tables['users']['Insert'];
export type TeamRulesInsert = Tables['team_rules']['Insert'];
export type CourseInsert = Tables['course']['Insert'];
export type TeamInsert = Tables['team']['Insert'];
export type SkillInsert = Tables['skill']['Insert'];
export type TeamMemberInsert = Tables['team_member']['Insert'];
export type UserSkillInsert = Tables['user_skill']['Insert'];
export type ConnectionInsert = Tables['connection']['Insert'];
export type MessageInsert = Tables['message']['Insert'];
export type NotificationInsert = Tables['notification']['Insert'];
export type ActivityLogInsert = Tables['activity_log']['Insert'];

// Update Types
export type UserUpdate = Tables['users']['Update'];
export type TeamRulesUpdate = Tables['team_rules']['Update'];
export type CourseUpdate = Tables['course']['Update'];
export type TeamUpdate = Tables['team']['Update'];
export type SkillUpdate = Tables['skill']['Update'];
export type TeamMemberUpdate = Tables['team_member']['Update'];
export type UserSkillUpdate = Tables['user_skill']['Update'];
export type ConnectionUpdate = Tables['connection']['Update'];
export type MessageUpdate = Tables['message']['Update'];
export type NotificationUpdate = Tables['notification']['Update'];
export type ActivityLogUpdate = Tables['activity_log']['Update'];