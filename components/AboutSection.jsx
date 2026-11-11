import React from 'react';
import Section from './Section.jsx';

/**
 * AboutSection Component
 */
export default function AboutSection() {
  return (
    <Section id="about" title="ჩემ შესახებ">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="flex-1 order-2 md:order-1 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>
            გამარჯობა! მე ვარ <strong className="text-slate-900 font-bold">ნიკა აშვეთია</strong>, მე-9 კლასის
            მოსწავლე ტყაჩირიდან.
          </p>
          <p className="mt-3">
            ამჟამად აქტიურად ვსწავლობ{' '}
            <strong className="text-blue-600 font-bold">Full Stack Development</strong>-ს და მიზნად მაქვს შევქმნა
            თანამედროვე ვებსაიტები და აპლიკაციები React-ისა და კომპონენტური მიდგომის გამოყენებით.
          </p>
        </div>
        <figure className="order-1 md:order-2 flex-shrink-0 bg-white p-3 rounded-2xl border border-slate-200 shadow-md text-center transform hover:rotate-1 hover:scale-105 transition-all duration-300">
          <img
            src="photo/messi.jpg"
            alt="ლეო მესი"
            className="w-52 h-52 object-cover rounded-xl shadow-inner mx-auto"
          />
          <figcaption className="mt-2.5 inline-block bg-blue-50 text-blue-600 font-bold text-xs px-3 py-1 rounded-full">
            ლეო მესი
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}

