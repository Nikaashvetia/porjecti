import React from 'react';

/**
 * Reusable SkillCard Component
 * მრავალჯერ გამოყენებადი ბარათი უნარების გამოსატანად
 * Props:
 * - title: უნარის სათაური
 * - description: აღწერა
 * - icon: ემოჯი ან 'flag-uk'
 * - borderClass: მარცხენა ხაზის ფერი (მაგ: 'border-l-blue-600')
 * - badge: პატარა თეგი/ბეიჯი
 */
export default function SkillCard({
  title,
  description,
  icon = '💡',
  borderClass = 'border-l-blue-600',
  badge
}) {
  return (
    <div
      className={`bg-white p-5 rounded-2xl border border-slate-100 shadow-sm border-l-4 ${borderClass} hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          {icon === 'flag-uk' ? (
            <svg
              className="w-8 h-6 rounded shadow-sm border border-slate-200 inline-block"
              viewBox="0 0 60 30"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="დიდი ბრიტანეთის დროშა"
            >
              <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z" />
              </clipPath>
              <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
              </clipPath>
              <g clipPath="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
              </g>
            </svg>
          ) : (
            <div className="text-2xl">{icon}</div>
          )}

          {badge && (
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-slate-900 font-bold mb-1 text-base">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

