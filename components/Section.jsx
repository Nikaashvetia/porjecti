import React from 'react';

/**
 * Reusable Section Wrapper Component
 * გამოიყენება გვერდის ნებისმიერი სექციისთვის ერთიანი სტილისა და სათაურის უზრუნველსაყოფად
 */
export default function Section({ id, title, subtitle, badge, children, className = '' }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 bg-white/90 backdrop-blur-sm border border-white/80 rounded-3xl p-6 sm:p-10 shadow-lg shadow-blue-500/5 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 mb-6 border-b border-slate-100/80 gap-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-sky-400 after:rounded-full">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-500 mt-3">{subtitle}</p>
          )}
        </div>
        {badge && (
          <div className="self-start sm:self-auto">{badge}</div>
        )}
      </div>
      {children}
    </section>
  );
}

