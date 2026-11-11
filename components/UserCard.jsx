import React from 'react';

/**
 * Reusable UserCard Component
 * JSONPlaceholder API-დან წამოღებული მომხმარებლების ბარათი
 * Props:
 * - name: მომხმარებლის სახელი
 * - email: ელ-ფოსტა
 * - phone: ტელეფონის ნომერი (არასავალდებულო)
 * - company: კომპანიის სახელი (არასავალდებულო)
 */
export default function UserCard({ name, email, phone, company }) {
  const initial = name ? name.charAt(0).toUpperCase() : '?';

  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3.5">
      {/* ავატარის წრე პირველი ასოთი */}
      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-white font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0">
        {initial}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="font-bold text-slate-800 text-sm sm:text-base truncate">
          {name}
        </h4>
        <a
          href={`mailto:${email}`}
          className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 truncate mt-0.5"
        >
          <span>📧</span>
          <span className="truncate">{email}</span>
        </a>
        {company && (
          <p className="text-[11px] text-slate-400 truncate mt-0.5">
            🏢 {company.name || company}
          </p>
        )}
      </div>
    </div>
  );
}

