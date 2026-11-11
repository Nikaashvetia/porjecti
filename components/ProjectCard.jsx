import React from 'react';

/**
 * Reusable ProjectCard Component
 * მრავალჯერ გამოყენებადი ბარათი პროექტების წარმოსადგენად
 * Props:
 * - title: პროექტის სახელი
 * - description: მოკლე აღწერა
 * - icon: ემოჯი
 * - status: სტატუსი (მაგ: "დასრულებული", "პროცესშია")
 * - statusColor: სტატუსის ბეიჯის ფერები
 * - tags: ტექნოლოგიების მასივი (მაგ: ['React', 'Tailwind'])
 * - link: პროექტის ბმული
 */
export default function ProjectCard({
  title,
  description,
  icon = '🚀',
  status = 'მზადდება',
  statusColor = 'bg-blue-100 text-blue-800 border-blue-200',
  tags = [],
  link = '#'
}) {
  return (
    <article className="bg-gradient-to-br from-white to-blue-50/40 p-6 rounded-2xl border border-blue-100/90 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl p-2 rounded-xl bg-white shadow-sm border border-slate-100">
              {icon}
            </span>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          </div>
          {status && (
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColor}`}
            >
              {status}
            </span>
          )}
        </div>

        <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
          {description}
        </p>
      </div>

      <div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-blue-100/60">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-semibold bg-white text-slate-700 px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-2xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {link && link !== '#' && (
          <a
            href={link}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
          >
            პროექტის ნახვა &rarr;
          </a>
        )}
      </div>
    </article>
  );
}

