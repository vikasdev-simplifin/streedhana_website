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
      <div className="relative bg-gradient-to-r from-rose-50 to-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden max-h-[80vh]">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2 gap-6 items-center p-6 md:p-8">
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-4">
              Download our App!
            </h2>

            <div className="flex md:flex-col flex-row justify-between items-center">
  
              {/* Logo - show first on mobile */}
              <div className="flex items-center order-1 md:order-2">
                <img 
                  src="/finallogo.png"  
                  alt="StreeDhana Logo"
                  className="h-24 w-auto object-contain"
                />
              </div>

              {/* Download Image - show second on mobile */}
              <div className="order-2 md:order-1">
                <img 
                  src="/download-left.png"
                  alt="Download"
                  className="h-20 w-auto object-contain"
                />
              </div>

            </div>

        
            <p className="text-destructive font-bold mb-6">
              Stop Overthinking, Start Investing.
            </p>
        
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:scale-105 transition duration-300 min-w-[170px] max-w-[200px]"
              >
                <img
                  src="/google-play.png"
                  alt="Google Play"
                  className="h-10 w-8 object-contain"
                />
                <div className="leading-tight">
                  <p className="text-[10px] tracking-wide uppercase">
                    Get it on
                  </p>
                  <p className="text-sm font-semibold">
                    Google Play
                  </p>
                </div>
              </a>
            
              <a
                href="#"
                className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:scale-105 transition duration-300 min-w-[170px] max-w-[200px]"
              >
                <img
                  src="/appstore.png"
                  alt="App Store"
                  className="h-10 w-8 object-contain"
                />
                <div className="leading-tight">
                  <p className="text-[10px] tracking-wide">
                    Download on the
                  </p>
                  <p className="text-sm font-semibold">
                    App Store
                  </p>
                </div>
              </a>
            
            </div>
          </div>
  
          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-40"></div>
            
              <img
                src="/girl-1.png"
                alt="App Preview"
                className="relative max-h-[280px] md:max-h-[380px] w-auto object-contain"
              />
            </div>
          </div>

       </div>
    </div>
  );
}
