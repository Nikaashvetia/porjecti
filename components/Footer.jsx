import React from 'react';

/**
 * Footer Component
 * გვერდის ქვედა ნაწილი კონტაქტებით და უკან ასვლის ღილაკით
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white/90 backdrop-blur-md border-t border-slate-200 text-center py-10 px-4 mt-16 shadow-inner">
      <div className="max-w-4xl mx-auto space-y-4">
        <address className="not-italic">
          <p className="font-bold text-slate-900 mb-3 text-base">საკონტაქტო ინფორმაცია:</p>
          <ul className="flex flex-wrap justify-center gap-3 text-sm">
            <li className="bg-blue-50 border border-blue-200/80 px-4 py-2 rounded-full text-slate-700">
              📧 Gmail:{' '}
              <a
                href="mailto:nika.ashvetiate08@geolab.edu.ge"
                className="text-blue-600 font-semibold hover:underline"
              >
                nika.ashvetiate08@geolab.edu.ge
              </a>
            </li>
            <li className="bg-blue-50 border border-blue-200/80 px-4 py-2 rounded-full text-slate-700">
              📞 ტელეფონი:{' '}
              <a
                href="tel:67676767"
                className="text-blue-600 font-semibold hover:underline"
              >
                67676767
              </a>
            </li>
          </ul>
        </address>

        <p className="text-xs sm:text-sm text-slate-500">
          &copy; {new Date().getFullYear()} ნიკა აშვეთია. ყველა უფლება დაცულია.
        </p>

        <div>
          <button
            type="button"
            onClick={scrollToTop}
            className="cursor-pointer inline-block mt-2 text-xs font-bold text-blue-600 bg-slate-100 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition-all duration-200 shadow-sm"
          >
            ზემოთ ასვლა &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}

