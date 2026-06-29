import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectDto } from './dto';

@Injectable()
export class ProjectsService {
  private projects: ProjectDto[] = [
    { id: '1', name: 'Project Alpha' },
    { id: '2', name: 'Project Beta' },
  ];

  async findAll(): Promise<ProjectDto[]> {
    return this.projects;
  }

  async delete(id: string): Promise<void> {
    const index = this.projects.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    this.projects.splice(index, 1);
  }
}
