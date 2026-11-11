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
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
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
    <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
      ნაჩვენებია: {comments.length} კომენტარი
    </span>
  );

  return (
    <Section
      id="comments"
      title="კომენტარები (API)"
      subtitle="მონაცემები ჩატვირთულია https://jsonplaceholder.typicode.com/comments-იდან"
      badge={badge}
    >
      {loading && (
        <div className="text-center py-8 text-slate-400 text-sm flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5 text-amber-500" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <span>იტვირთება კომენტარები...</span>
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
        </div>
      )}
    </Section>
  );
}

