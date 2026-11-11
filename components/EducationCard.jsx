import React from 'react';

/**
 * Reusable EducationCard Component
 * მრავალჯერ გამოყენებადი ბარათი განათლებისა და კურსებისთვის
 */
export default function EducationCard({
  title,
  level,
  badge,
  badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-200',
  icon = '🎓',
  description
}) {
  return (
    <article className="bg-gradient-to-br from-white to-emerald-50/30 p-6 rounded-2xl border border-emerald-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="text-xl">{icon}</span> {title}
        </h3>
        {badge && (
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${badgeColor}`}>
            {badge}
          </span>
        )}
      </div>

      {level && (
        <p className="text-slate-700 text-sm font-semibold mb-2 flex items-center gap-2">
          <span className="text-slate-500 font-normal">საფეხური:</span>
          <span>{level}</span>
        </p>
      )}

      {description && (
        <p className="text-slate-600 leading-relaxed text-sm">
          {description}
        </p>
      )}
    </article>
  );
}

