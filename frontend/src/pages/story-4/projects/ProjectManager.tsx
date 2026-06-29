'use client';

import React, { useState } from 'react';
import { Project } from './ProjectManager.types';
import { mockProjects } from './mockData';

export const ProjectManager = () => {
  const [projects] = useState<Project[]>(mockProjects);
  const [isLoading] = useState(false);

  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Loading projects...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Create Project
        </button>
      </div>

      <div className="grid gap-4">
        {projects.length === 0 ? (
          <div className="p-8 border-2 border-dashed border-gray-200 rounded-xl text-center text-gray-500">
            No projects found. Create your first project to get started.
          </div>
        ) : (
          projects.map((project) => (
            <div 
              key={project.id} 
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-gray-600 mt-1">{project.description}</p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {project.status}
                </span>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-500 gap-4">
                <span>{project.memberCount} members</span>
                <span>Last updated {project.lastUpdated}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
