import React from 'react';
import Navbar from './components/Navbar.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import UsersSection from './components/UsersSection.jsx';
import CommentsSection from './components/CommentsSection.jsx';
import Section from './components/Section.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

const navLinks = [
  { href: '#about', label: 'ჩემ შესახებ', icon: '👤' },
  { href: '#skills', label: 'უნარები', icon: '⚡' },
  { href: '#projects', label: 'პროექტები', icon: '🚀' },
  { href: '#education', label: 'განათლება', icon: '🎓' },
  { href: '#users', label: 'მომხმარებლები', icon: '👥' },
  { href: '#comments', label: 'კომენტარები', icon: '💬' },
  { href: '#contact', label: 'კონტაქტი', icon: '✉️' },
];

export default function App() {
  return (
    <div className="font-sans min-h-screen relative overflow-x-hidden text-slate-800">
      {/* ფონის დეკორატიული გრადიენტური ბუშტები */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-[30rem] h-[30rem] bg-indigo-200/40 rounded-full blur-3xl"></div>
      </div>

      {/* ნავიგაციის კომპონენტი (Burger Menu State-ით) */}
      <Navbar navLinks={navLinks} />

      {/* ძირითადი შინაარსი - სექციებად დაყოფილი */}
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* ჩემ შესახებ */}
        <AboutSection />

        {/* უნარები (Reusable SkillCard ბარათებით) */}
        <SkillsSection />

        {/* პროექტები (Reusable ProjectCard ბარათებით) */}
        <ProjectsSection />

        {/* განათლება (Reusable EducationCard ბარათებით) */}
        <EducationSection />

        {/* მომხმარებლები (API + Reusable UserCard ბარათებით) */}
        <UsersSection />

        {/* კომენტარები (API + Reusable CommentCard ბარათებით) */}
        <CommentsSection />

        {/* კონტაქტის ფორმა (Controlled React Component) */}
        <Section
          id="contact"
          title="დამიკავშირდით"
          subtitle="შეგიძლიათ მომწეროთ შეტყობინება ქვემოთ მოცემული ფორმის საშუალებით:"
        >
          <ContactForm />
        </Section>
      </main>

      {/* ფუტერი */}
      <Footer />
    </div>
  );
}
