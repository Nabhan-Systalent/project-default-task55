import React from 'react';
import { MemberList } from './MemberList';

export const WorkspaceSettingsPage: React.FC = () => {
  // Logic would fetch members via API in a real app
  const [members, setMembers] = React.useState([
    { id: '1', name: 'Alice Smith', email: 'alice@example.com', role: 'admin', joinedAt: '2023-01-01' },
    { id: '2', name: 'Bob Jones', email: 'bob@example.com', role: 'member', joinedAt: '2023-02-15' },
  ]);

  const handleUpdateRole = (id: string, role: any) => {
    setMembers(prev => prev.map(m => m.id === id ? { ...m, role } : m));
  };

  const handleRemove = (id: string) => {
    setMembers(prev => prev.filter(m => m.id !== id));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Workspace Settings</h1>
      <section>
        <h2 className="mb-4 text-lg font-medium">Manage Members</h2>
        <MemberList 
          members={members} 
          onUpdateRole={handleUpdateRole} 
          onRemoveMember={handleRemove}
        />
      </section>
    </div>
  );
};
