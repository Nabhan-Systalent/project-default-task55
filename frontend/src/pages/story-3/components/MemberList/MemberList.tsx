'use client';

import React from 'react';
import { MemberListProps } from './MemberList.types';

export const MemberList: React.FC<MemberListProps> = ({ 
  members, 
  isLoading, 
  error, 
  onUpdateRole, 
  onRemoveMember 
}) => {
  if (isLoading) {
    return <div className="p-4 text-center text-sm text-gray-500">Loading members...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-sm text-red-500">{error}</div>;
  }

  if (!members.length) {
    return <div className="p-4 text-center text-sm text-gray-500">No members found.</div>;
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium">Role</th>
            <th className="px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {members.map((member) => (
            <tr key={member.id}>
              <td className="px-4 py-3 text-gray-900">{member.name}</td>
              <td className="px-4 py-3 text-gray-500">{member.email}</td>
              <td className="px-4 py-3">
                <select
                  value={member.role}
                  onChange={(e) => onUpdateRole(member.id, e.target.value as any)}
                  className="rounded border border-gray-300 p-1 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                  <option value="viewer">Viewer</option>
                </select>
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => onRemoveMember(member.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
