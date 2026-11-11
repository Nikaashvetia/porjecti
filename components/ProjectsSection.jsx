import React from 'react';
import Section from './Section.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projectsData } from '../data/portfolioData.js';

/**
 * ProjectsSection Component
 * იყენებს მრავალჯერად ProjectCard კომპონენტს
 */
export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="პროექტები"
      subtitle="შესრულებული და მიმდინარე სამუშაოები"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            icon={project.icon}
            status={project.status}
            statusColor={project.statusColor}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </Section>
  );
}

