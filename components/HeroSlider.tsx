// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// // import "swiper/css/navigation";

// import Image from "next/image";

// const slides = [
//   "/hero-illustration.jpg",
//   "/hero-illustration.jpg",
//   "/hero-illustration.jpg",
//   "/hero-illustration.jpg",
//   "/hero-illustration.jpg",

// ];

// export default function HeroSlider() {
//   return (
// <div className="relative w-full max-w-2xl mx-auto">

//       {/* Glow Background */}
// <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />

//       <div className="relative overflow-hidden rounded-2xl ">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           autoplay={{ delay: 3500, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           navigation
//           loop
//           className="rounded-2xl"
//         >
//           {slides.map((src, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative  aspect-[16/9] 
//  w-full">
//                 <Image
//                   src={src}
//                   alt={`Dashboard ${index + 1}`}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 50vw"

//                   className="object-cover"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

const slides = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner4.png",
  "/banner5.png",
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

        <div className="relative overflow-hidden rounded-2xl ">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="rounded-2xl"
          >
            {slides.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative  aspect-[16/12] 
 w-full">
                  <Image
                    src={src}
                    alt={`Dashboard ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"

                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="block md:hidden w-full overflow-hidden">

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          style={{ width: "100%" }}
          className="rounded-2xl"
        >

          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={src}
                  alt={`Dashboard ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </>
  );
}
