import React from 'react';
import Section from './Section.jsx';
import EducationCard from './EducationCard.jsx';
import { educationData } from '../data/portfolioData.js';

/**
 * EducationSection Component
 * იყენებს მრავალჯერად EducationCard კომპონენტს
 */
export default function EducationSection() {
  return (
    <Section id="education" title="განათლება">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {educationData.map((edu) => (
          <EducationCard
            key={edu.id}
            title={edu.title}
            level={edu.level}
            badge={edu.badge}
            badgeColor={edu.badgeColor}
            icon={edu.icon}
            description={edu.description}
          />
        ))}
      </div>
    </Section>
  );
}

