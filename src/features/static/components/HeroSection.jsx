import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-700 via-indigo-800 to-gray-900 text-white min-h-dvh flex justify-center items-center">
      <div className="px-6 py-16 text-center max-w-3xl">
        <div className="mb-4 inline-block bg-white/10 text-xs sm:text-sm font-medium px-4 py-1 rounded-full backdrop-blur-sm border border-white/20">
          Smart Business Toolkit
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          Powerful Voucher & Product Management App
        </h1>
        <p className="mt-6 text-xs sm:text-xl text-white/80 leading-relaxed">
          Store your products, sell to real customers, and create usable vouchers — all from one simple, reliable platform made for everyday businesses.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
