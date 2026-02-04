"use client";

import { useEffect, useState } from "react";

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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-xl p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-2">🚀 App Coming Soon</h2>
        <p className="text-gray-600 mb-4">
          Our mobile app is launching soon. Stay tuned!
        </p>
        <button
          onClick={() => setOpen(false)}
          className="bg-primary text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
