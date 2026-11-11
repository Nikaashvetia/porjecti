import React, { useState, useEffect } from 'react';
import Section from './Section.jsx';
import UserCard from './UserCard.jsx';

/**
 * UsersSection Component
 * აკეთებს Fetch-ს JSONPlaceholder /users API-ზე და გამოსახავს UserCard კომპონენტებით
 */
export default function UsersSection() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP შეცდომა: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('მომხმარებლების წამოღების შეცდომა:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const badge = (
    <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      სულ: {users.length > 0 ? `${users.length} მომხმარებელი` : 'იტვირთება...'}
    </span>
  );

  return (
    <Section
      id="users"
      title="მომხმარებლები (API)"
      subtitle="მონაცემები ჩატვირთულია https://jsonplaceholder.typicode.com/users-იდან"
      badge={badge}
    >
      {loading && (
        <div className="text-center py-8 text-slate-400 text-sm flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <span>იტვირთება მომხმარებლების სია...</span>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm text-center border border-red-200">
          შეცდომა მონაცემების ჩატვირთვისას: {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              company={user.company}
            />
          ))}
        </div>
      )}
    </Section>
  );
}

