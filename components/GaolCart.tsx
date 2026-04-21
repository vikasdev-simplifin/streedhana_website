// "use client";

// // const goalCards = [
// //     { icon: "💰", label: "Gold Plan", sublabel: "Safety First, Wealth Next" },
// //     { icon: "👶", label: "MY Child Education Plan", sublabel: "My Child, My Priority" },
// //     { icon: "🏖️", label: "Retirement", sublabel: "A Future Where You Don’t Have to Ask." },
// //     { icon: "✨", label: "Dreams", sublabel: "My Life, My Choices" },
// // ];
// import {
//     ShieldCheck,
//     GraduationCap,
//     Sunrise,
//     Sparkles,
// } from "lucide-react";

// const goalCards = [
//     {
//         icon: ShieldCheck,
//         label: "Gold Plan",
//         sublabel: "Safety First, Wealth Next",
//     },
//     {
//         icon: GraduationCap,
//         label: "My Child Education Plan",
//         sublabel: "My Child, My Priority",
//     },
//     {
//         icon: Sunrise,
//         label: "Retirement",
//         sublabel: "A Future Where You Don’t Have to Ask.",
//     },
//     {
//         icon: Sparkles,
//         label: "Dreams",
//         sublabel: "My Life, My Choices",
//     },
// ];

// const GaolCart = () => {
//   return (
//     <section className="relative bg-gradient-hero-reverse pt-24 pb-16 overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-6xl mx-auto">

//           <div
//             className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up"
//             style={{ animationDelay: "0.4s" }}
//           >
//             {goalCards.map((card, index) => (
//               <div
//                 key={card.label}
//                 className="

//                   rounded-xl
//                   p-6
//                   text-center
//                   cursor-pointer

//                   transition-all
//                   duration-300
//                   ease-out

//                   hover:border-primary                 
//                   hover:shadow-glow
//                   shadow-soft
//                   md:hover:-translate-y-1
//                   text-center
//                 "
//                 style={{ animationDelay: `${0.1 * index}s` }}
//               >
//                 <div
//                   className="
//                     flex
//                     justify-center
//                     items-center
//                     w-12
//                     h-12
//                     rounded-full
//                     bg-primary/10
//                     mb-4

//                   "
//                 >

//                         <card.icon />
//                 </div>

//                 <p className="font-semibold text-foreground text-capitalize">
//                   {card.label}
//                 </p>

//                 {card.sublabel && (
//                   <p className="text-sm text-muted-foreground mt-1">
//                     {card.sublabel}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GaolCart;

"use client";
import Image from "next/image";

type GoalCard = {
  image: string;
  label: string;
  sublabel: string;
};

const goalCards: GoalCard[] = [
  {
    image: "/IMG_3599.PNG",
    label: "Safety First , Wealth Next",
    sublabel: "Gold Investment",
  },
  {
    image: "/IMG_3595.PNG",
    label: "My Child, My Priority",
    sublabel: "Child Future Investment Plan",
  },
  {
    image: "/IMG_3602.PNG",
    label: "A Future Where You Don’t Have To Ask",
    sublabel: "Monthly Income Retirement Plan",
  },
  {
    image: "/IMG_3596.PNG",
    label: "My Life, My Choices",
    sublabel: "DreamSecure Plan",
  },
];

const GaolCart = () => {
  return (
    <section className="relative bg-gradient-hero-reverse pt-24 pb-20 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {goalCards.map((card) => (
            <a
              href="https://next.streedhana.com"
              key={card.label}
              className="
                group
                rounded-2xl
                p-6
                text-center
                bg-white/60
                backdrop-blur-md
                border border-white/30
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-primary/40
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  items-center
                  justify-center
                  w-20
                  h-20
                  rounded-full
                  bg-primary
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:shadow-lg
                "
              >
                <Image
                  src={card.image}
                  alt={card.label}
                  width={56}
                  height={42}
                  className="object-contain"
                />
              </div>

              <p className="mt-4 font-semibold text-lg text-foreground">
                {card.label}
              </p>

              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {card.sublabel}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaolCart;