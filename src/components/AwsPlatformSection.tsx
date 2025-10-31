'use client';

import AnimatedAwsInfra from '@/components/AnimatedAwsInfra';

export default function AwsPlatformSection() {
  return (
    <section className="py-20 md:py-32 w-full flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* ===== HEADER - Aligned with Diagram Border ===== */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Automated AWS Cloud Platform
          </h2>
        </div>

        {/* ===== DIAGRAM CARD ===== */}
        <div className="rounded-2xl shadow-sm border border-gray-100 p-4 bg-white">
          <AnimatedAwsInfra />
        </div>

        {/* ===== SECTION DIVIDER ===== */}
        <div className="max-w-5xl mx-auto my-20 border-t border-gray-200" />
      </div>
    </section>
  );
}

