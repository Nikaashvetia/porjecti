import React from 'react';
import Section from './Section.jsx';
import SkillCard from './SkillCard.jsx';
import { skillsData } from '../data/portfolioData.js';

/**
 * SkillsSection Component
 * იყენებს მრავალჯერად SkillCard კომპონენტს
 */
export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="ჩემი უნარები"
      subtitle="ტექნოლოგიური და პიროვნული უნარები"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.id}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
            borderClass={skill.borderClass}
            badge={skill.badge}
          />
        ))}
      </div>
    </Section>
  );
}

