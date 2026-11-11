import React from 'react';

/**
 * Reusable CommentCard Component
 * JSONPlaceholder API-დან წამოღებული კომენტარების ბარათი
 * Props:
 * - index: კომენტარის რიგითი ნომერი (1-based)
 * - id: კომენტარის უნიკალური ID
 * - name: სათაური / ავტორის სახელი
 * - email: ავტორის იმეილი
 * - body: კომენტარის ტექსტი
 */
export default function CommentCard({ index, id, name, email, body }) {
  return (
    <article className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs flex-shrink-0">
            #{index}
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base capitalize truncate">
              {name}
            </h4>
            <a
              href={`mailto:${email}`}
              className="text-xs text-slate-500 hover:text-blue-600 truncate block"
            >
              {email}
            </a>
          </div>
        </div>
        {id && (
          <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
            ID: {id}
          </span>
        )}
      </div>

      <p className="text-slate-600 text-sm leading-relaxed pl-10 border-l-2 border-amber-200 mt-2 italic">
        "{body}"
      </p>
    </article>
  );
}

