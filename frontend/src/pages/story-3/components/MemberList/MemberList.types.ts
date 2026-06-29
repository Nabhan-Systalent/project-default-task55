export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
  joinedAt: string;
}

export interface MemberListProps {
  members: Member[];
  isLoading?: boolean;
  error?: string;
  onUpdateRole: (memberId: string, role: Member['role']) => void;
  onRemoveMember: (memberId: string) => void;
}
