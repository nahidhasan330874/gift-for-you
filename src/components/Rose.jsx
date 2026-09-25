//  "use client";

// import { useState } from "react";

// export default function RosePetals() {
//   const [petals] = useState(() =>
//     Array.from({ length: 25 }, (_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       duration: 6 + Math.random() * 5,
//       delay: Math.random() * 5,
//       size: 18 + Math.random() * 18,
//     }))
//   );

//   return (
//     <>
//       {petals.map((petal) => (
//         <span
//           key={petal.id}
//           className="petal"
//           style={{
//             left: `${petal.left}%`,
//             animationDuration: `${petal.duration}s`,
//             animationDelay: `${petal.delay}s`,
//             fontSize: `${petal.size}px`,
//           }}
//         >
//           🌹
//         </span>
//       ))}
//     </>
//   );
// }