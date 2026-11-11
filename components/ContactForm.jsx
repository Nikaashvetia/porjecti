import React, { useState } from 'react';

/**
 * ContactForm Component
 * ინტერაქტიული საკონტაქტო ფორმა React State-ით (Controlled Component)
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setLoading(true);
    // სიმულაცია გაგზავნის
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <div>
      {submitted && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-3">
            <span className="text-xl">✅</span>
            <p className="text-sm font-semibold">
              მადლობა! თქვენი შეტყობინება წარმატებით გაიგზავნა.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline ml-2"
          >
            დახურვა
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm"
      >
        <div>
          <label
            htmlFor="user-name"
            className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2"
          >
            თქვენი სახელი *
          </label>
          <input
            type="text"
            id="user-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="მაგ: გიორგი"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all text-sm sm:text-base"
          />
        </div>

        <div>
          <label
            htmlFor="user-email"
            className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2"
          >
            თქვენი ელ-ფოსტა *
          </label>
          <input
            type="email"
            id="user-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="მაგ: example@mail.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all text-sm sm:text-base"
          />
        </div>

        <div>
          <label
            htmlFor="user-message"
            className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2"
          >
            შეტყობინება *
          </label>
          <textarea
            id="user-message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="ჩაწერეთ შეტყობინება..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all text-sm sm:text-base resize-y"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-50"
          >
            {loading ? 'იგზავნება...' : 'შეტყობინების გაგზავნა'}
          </button>
        </div>
      </form>
    </div>
  );
}

