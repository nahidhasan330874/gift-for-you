// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Card, CardBody } from "@heroui/react";

// const message =
//   "Dear Hafiza, Happy Birthday. Allah tomake shob shomoy shukhi rakhun. Tomar jiboner protita din hok noor, bhalobasha o hasite vora. 🌸";

// export default function LoveLetter() {
//   const [text, setText] = useState("");

//   useEffect(() => {
//     let i = 0;

//     const timer = setInterval(() => {
//       setText(message.slice(0, i));
//       i++;

//       if (i > message.length) clearInterval(timer);
//     }, 35);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 70 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//     >
//       <Card className="glass rounded-[30px] mt-16">
//         <CardBody className="p-8 md:p-10">
//           <h2 className="text-3xl font-bold text-pink-300 mb-5">
//             💌 A Letter For You
//           </h2>

//           <p className="text-gray-100 leading-8 text-lg">
//             {text}
//             <span className="animate-pulse">|</span>
//           </p>
//         </CardBody>
//       </Card>
//     </motion.div>
//   );
// }