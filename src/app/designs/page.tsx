"use client";

import AwsPlatformSection from "@/components/AwsPlatformSection";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Designs() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* AWS Platform Section */}
      <ErrorBoundary>
        <AwsPlatformSection />
      </ErrorBoundary>
    </div>
  );
}
