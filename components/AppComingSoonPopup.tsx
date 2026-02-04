"use client";

import { useEffect, useState } from "react";

export default function AppComingSoonPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("appPopupShown");

    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setShow(true);
      localStorage.setItem("appPopupShown", "true");
    }, 60000); 

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-xl p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-2">🚀 App Coming Soon</h2>
        <p className="text-gray-600 mb-4">
          Our mobile app is launching soon. Stay tuned!
        </p>
        <button
          onClick={() => setShow(false)}
          className="bg-primary text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
