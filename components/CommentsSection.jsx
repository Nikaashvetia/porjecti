import React, { useState, useEffect } from 'react';
import Section from './Section.jsx';
import CommentCard from './CommentCard.jsx';

/**
 * CommentsSection Component
 * აკეთებს Fetch-ს JSONPlaceholder /comments?_limit=5 API-ზე და გამოსახავს CommentCard კომპონენტებით
 */
export default function CommentsSection() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP შეცდომა: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('კომენტარების წამოღების შეცდომა:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const badge = (
    <a
      href="comments.html"
      className="inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full border border-amber-300 transition-colors shadow-sm"
    >
      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
      <span>სულ: 250 კომენტარი (ცალკე გვერდი) &rarr;</span>
    </a>
  );

  return (
    <Section
      id="comments"
      title="კომენტარები (API)"
      subtitle="500-იდან ამოღებულია ნახევარი (250 კომენტარი). სრული სიის და Search Bar-ის სანახავად გადადით ცალკე გვერდზე."
      badge={badge}
    >
      {/* გადასასვლელი ბანერი ცალკე გვერდზე Search Bar-ით */}
      <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-blue-500/10 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl p-2.5 rounded-xl bg-white shadow-sm border border-amber-200">🔍</span>
          <div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              კომენტარების სრული სია და Search Bar
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              500-დან ამოღებულია ნახევარი (250 კომენტარი), ძებნის ველითა და პაგინაციით.
            </p>
          </div>
        </div>

        <a
          href="comments.html"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-amber-500/20 hover:shadow-lg transition-all duration-200 whitespace-nowrap flex-shrink-0"
        >
          <span>გახსენი ცალკე გვერდი</span>
          <span>&rarr;</span>
        </a>
      </div>

      {loading && (
        <div className="text-center py-8 text-slate-400 text-sm flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5 text-amber-500" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <span>იტვირთება კომენტარების პრევიუ...</span>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm text-center border border-red-200">
          შეცდომა კომენტარების ჩატვირთვისას: {error}
        </div>
      )}

      {!loading && !error && (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <CommentCard
              key={comment.id}
              index={index + 1}
              id={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          ))}

          <div className="text-center pt-4">
            <a
              href="comments.html"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200"
            >
              <span>ყველა 250 კომენტარის ნახვა და ძებნა (Search Bar)</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      )}
    </Section>
  );
}

