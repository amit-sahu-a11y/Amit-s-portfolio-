import React from "react";

export default function BackgroundBlobs() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute w-72 h-72 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse top-10 left-10" />
      <div className="absolute w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse top-1/2 right-10" />
      <div className="absolute w-60 h-60 bg-pink-600 opacity-20 rounded-full blur-3xl animate-pulse bottom-10 left-1/3" />
    </div>
  );
}
