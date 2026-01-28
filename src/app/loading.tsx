"use client";

const loading = () => {
  return (
    <div className="space-y-4 animate-pulse w-full max-w-4xl mx-auto p-6">
      <div className="h-6 w-32 rounded bg-gray-300" />
      <div className="space-y-2">
        <div className="h-4 w-full rounded bg-gray-300" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
        <div className="h-4 w-4/6 rounded bg-gray-200" />
      </div>
      <div className="flex space-x-3">
        <div className="h-10 w-24 rounded bg-gray-300" />
        <div className="h-10 w-24 rounded bg-gray-200" />
      </div>
    </div>
  );
};

export default loading