'use client';

import React, { useState } from 'react';
import { BoardColumn, Task } from './Board.types';

const INITIAL_DATA: BoardColumn[] = [
  { id: 'todo', title: 'To Do', tasks: [{ id: '1', title: 'Design System', status: 'todo', priority: 'high' }] },
  { id: 'in-progress', title: 'In Progress', tasks: [{ id: '2', title: 'Kanban Board UI', status: 'in-progress', priority: 'high' }] },
  { id: 'done', title: 'Done', tasks: [{ id: '3', title: 'Project Setup', status: 'done', priority: 'medium' }] },
];

export const ProjectBoard: React.FC = () => {
  const [columns, setColumns] = useState<BoardColumn[]>(INITIAL_DATA);
  const [loading] = useState(false);

  if (loading) return <div className="p-8 text-[var(--color-text-muted)]">Loading board...</div>;

  return (
    <div className="flex gap-6 p-6 h-full overflow-x-auto bg-[var(--color-background)]">
      {columns.map((column) => (
        <div key={column.id} className="w-80 flex flex-col gap-4 bg-[var(--color-surface)] p-4 rounded-lg border border-[var(--color-border)]">
          <h3 className="font-semibold text-[var(--color-text-primary)]">{column.title}</h3>
          <div className="flex flex-col gap-3">
            {column.tasks.length === 0 ? (
              <p className="text-sm text-[var(--color-text-disabled)] italic p-2">No tasks</p>
            ) : (
              column.tasks.map((task) => (
                <div key={task.id} className="p-4 bg-[var(--color-background)] rounded border border-[var(--color-border)] shadow-sm cursor-pointer hover:border-[var(--color-primary)] transition-colors">
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">{task.title}</p>
                  <span className={`text-xs px-2 py-1 rounded mt-2 inline-block ${task.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                    {task.priority}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
