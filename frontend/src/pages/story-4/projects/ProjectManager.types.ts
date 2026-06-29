export interface Project {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  status: 'active' | 'archived';
  lastUpdated: string;
}
