import React, { useState } from 'react';

/**
 * Navbar Component
 * ჰედერი და ნავიგაცია ადაპტური ჰამბურგერ მენიუთი (React State-ით მართვადი)
 */
export default function Navbar({ navLinks = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300 w-full">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* ლოგო / სახელი */}
          <div className="flex-shrink-0 text-left">
            <a href="#top" className="group block">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent tracking-tight group-hover:opacity-90 transition-opacity whitespace-nowrap">
                ჩემი პორტფოლიო
              </h1>
            </a>
            <p className="text-xs sm:text-sm text-slate-600 whitespace-nowrap mt-0.5">
              <span className="font-semibold text-slate-900">ნიკა აშვეთია</span> | Full Stack Development
            </p>
          </div>

          {/* მობილურის Burger Menu ღილაკი */}
          <div className="lg:hidden relative">
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isOpen ? 'მენიუს დახურვა' : 'მენიუს გახსნა'}
              aria-expanded={isOpen}
              className="cursor-pointer inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-blue-600 transition-colors shadow-sm border border-slate-200 select-none"
            >
              {isOpen ? (
                // Close Icon (X)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Bars Icon (ჰამბურგერი)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* მობილური ჩამოსაშლელი სია (Dropdown) */}
            {isOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white/95 backdrop-blur-lg border border-slate-200 shadow-xl rounded-2xl p-3 transition-all z-50 animate-fadeIn">
                <ul className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="block px-4 py-2 rounded-xl font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        {link.icon} {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* დესკტოპ ნავიგაცია */}
          <nav aria-label="მთავარი ნავიგაცია" className="hidden lg:flex items-center flex-shrink-0">
            <ul className="flex items-center flex-nowrap whitespace-nowrap gap-1 xl:gap-2 bg-slate-100/90 border border-slate-200 p-1.5 rounded-full shadow-inner">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-3 xl:px-4 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-white rounded-full transition-all duration-200 block shadow-sm hover:shadow whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

