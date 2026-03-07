"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

const slides = [
  "/banner2.png",
  "/2k-sip.jpg",
  "/mf-sakhi.jpg",
  "/mf-ginnie.jpg",
  "/5k-sip.jpg",
  // "/banner5.png",
];

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="hidden md:block relative w-full max-w-2xl mx-auto">
        {/* Glow Background */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />

        <div className="relative rounded-3xl overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="rounded-3xl"
          >
            {slides.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-[16/12] w-full">
                  <Image
                    src={src}
                    alt={`Dashboard ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="block md:hidden w-full">
        <div className="rounded-3xl overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="rounded-3xl"
          >
            {slides.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={src}
                    alt={`Dashboard ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
