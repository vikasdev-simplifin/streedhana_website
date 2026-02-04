"use client";

import { useEffect, useState } from "react";
import { Apple, Smartphone, User, X } from "lucide-react";

export default function AppComingSoonPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(true);
    }, 30000); 

    return () => clearInterval(interval);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
      <div className="relative bg-white rounded-xl p-6 max-w-md w-full text-center shadow-xl">
        
        {/* Close Icon */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-2">
          📱 Download StreeDhana App
        </h2>

        <p className="text-gray-600 mb-6">
          Available on Android & iOS.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition"
          >
            <User size={18} />
            Android
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white px-4 py-3 rounded-lg font-medium transition"
          >
            <Apple size={18} />
             iOS
          </a>
        </div>
      </div>
    </div>
  );
}
