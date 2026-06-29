import { Project } from './ProjectManager.types';

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Updating the core landing pages and documentation site.',
    memberCount: 5,
    status: 'active',
    lastUpdated: '2026-06-25',
  },
  {
    id: '2',
    name: 'Mobile App Beta',
    description: 'Internal testing phase for the new mobile interface.',
    memberCount: 12,
    status: 'active',
    lastUpdated: '2026-06-27',
  },
];
