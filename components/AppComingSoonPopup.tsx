"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function AppDownloadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasShown = localStorage.getItem("appPopupShown");
    if (!hasShown) {
      setOpen(true);
    }
  }, []);
  
  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("appPopupShown", "true");
  };
  
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4">
  <div className="relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-r from-[#3F9EB0] via-[#3E97AB] to-[#6cc3d5] px-6 md:px-10 py-8 md:py-10">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download our App!
            </h2>

            <div className="flex flex-col md:flex-col items-center gap-6">
            
              <div className="order-2 md:order-1">
                <img 
                  src="/download-left.png"
                  alt="Download"
                  className="h-28 md:h-36 w-auto object-contain"
                />
              </div>
            
              <div className="order-1 md:order-2 mb-4">
                <img 
                  src="/logo121.png"  
                  alt="StreeDhana Logo"
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-2xl text-white font-bold mb-6">
              Stop Overthinking, Start Investing.
            </p>
        
            <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-center w-full">
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-black text-white px-4 md:px-5 py-3 rounded-xl hover:scale-105 transition duration-300 w-[200px]"
              >
                <img
                  src="/google-play.png"
                  alt="Google Play"
                  className="h-10 w-8 object-contain"
                />
                <div className="leading-tight">
                  <p className="text-[14px] uppercase">
                    Get it on
                  </p>
                  <p className="text-[18px] font-semibold">
                    Google Play
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-black text-white px-4 md:px-5 py-3 rounded-xl hover:scale-105 transition duration-300 w-[200px]"
              >
                <img
                  src="/appstore.png"
                  alt="App Store"
                  className="h-10 w-8 object-contain"
                />
                <div className="leading-tight">
                  <p className="text-[14px]">
                    Download on the
                  </p>
                  <p className="text-[18px] font-semibold">
                    App Store
                  </p>
                </div>
              </a>
            </div>
          </div>
  
          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 bg-white rounded-full"></div>
              <img
                src="/app-img.png"
                alt="App Preview"
                className="relative max-h-[280px] md:max-h-[380px] w-auto object-cover"
              />
            </div>
          </div>
       </div>
    </div>
  );
}
