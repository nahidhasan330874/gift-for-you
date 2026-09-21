// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   "/images/1.jpg",
//   "/images/2.jpg",
//   "/images/3.jpg",
//   "/images/4.jpg",
//   "/images/5.jpg",
//   "/images/6.jpg",
// ];

// export default function PhotoCarousel() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(id);
//   }, []);

//   return (
//     <div className="relative mx-auto mt-14 h-[460px] max-w-md">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, rotateY: 90, scale: 0.9 }}
//           animate={{ opacity: 1, rotateY: 0, scale: 1 }}
//           exit={{ opacity: 0, rotateY: -90, scale: 0.9 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0 overflow-hidden rounded-[35px] border border-white/20 shadow-[0_0_45px_rgba(236,72,153,.25)]"
//         >
//           <Image
//             src={images[index]}
//             alt=""
//             fill
//             className="object-cover"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//           <div className="absolute bottom-4 left-4 rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-md">
//             Hafiza • {index + 1}/6
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }