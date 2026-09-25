 "use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Card } from "@heroui/react";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";

const photos = [
  "/images1.jpg",
  "/images2.jpg",
  "/images3.jpg",
  "/images4.jpg",
  "/images5.jpg",
  "/images6.jpg",
  "/images7.jpg",
  "/images8.jpg",
  
];

// Floating Hearts Data
const hearts = [
  { left: "8%", delay: 0, duration: 6, size: 18 },
  { left: "22%", delay: 1, duration: 7, size: 24 },
  { left: "38%", delay: 2, duration: 8, size: 20 },
  { left: "55%", delay: 0.5, duration: 6.5, size: 26 },
  { left: "72%", delay: 1.5, duration: 7.5, size: 22 },
  { left: "88%", delay: 3, duration: 8, size: 18 },
];

export default function MemoryPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 1500); // 1.5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070311] px-4 py-10 text-white">
      {/* Aurora */}
      <div className="aurora absolute inset-0" />

      {/* Floating Hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {hearts.map((heart, i) => (
          <motion.div
            key={i}
            className="absolute bottom-[-40px]"
            style={{ left: heart.left }}
            initial={{ y: 0, opacity: 0, x: 0 }}
            animate={{
              y: -900,
              opacity: [0, 0.9, 0.8, 0],
              x: [0, -15, 15, -10, 0],
              rotate: [0, -20, 20, 0],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            🌸
             
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Sparkles size={25} className="mx-auto mb-3 text-yellow-300" />

          <h1 className="text-3xl font-black text-pink-300">
            Beautiful Memories ✨
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-300">
            Hafiza, even though you are my sister, you have always been like a
            friend to me. That’s why you are very special to me. 💖
          </p>
        </motion.div>

        {/* Photo Slider */}
        <div className="relative mt-8">
          <Card className="overflow-hidden rounded-[25px] border border-pink-400/20 bg-white/10 backdrop-blur-xl">
            <div className="relative h-[430px] w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={photos[current]}
                    alt={`Memory ${current + 1}`}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-full bg-black/40 px-4 py-1.5 text-xs backdrop-blur-md">
                    Memory {current + 1} / {photos.length} 💕
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Card>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-1.5">
          {photos.map((_, i) => (
            <motion.span
              key={i}
              animate={{
                scale: i === current ? 1.4 : 1,
                opacity: i === current ? 1 : 0.35,
              }}
              className="h-1.5 w-1.5 rounded-full bg-pink-400"
            />
          ))}
        </div>

        {/* Dua */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Card className="rounded-[25px] bg-white/10 backdrop-blur-xl">
            <div className="p-6 text-center">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mb-3 flex justify-center"
              >
                <Heart size={30} className="fill-pink-500 text-pink-500" />
              </motion.div>

              <h2 className="text-xl font-bold text-pink-300">
                A Special Dua For You 💖
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-200">
                May Allah bless you with strong faith, modesty, good health,
                abundant sustenance, and countless blessings. May your beautiful
                smile never fade. 🌸
              </p>

              <p className="mt-4 text-xs text-pink-200">
                — Happy Birthday, Hafiza 🎂
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Back Button */}
        <motion.div
          className="mt-8 flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">
            <Button
              radius="full"
              size="sm"
              className="bg-pink-500/20 px-5 text-white backdrop-blur-md p-2 rounded-full hover:bg-pink-500/30 focus:bg-pink-500/30"
              startContent={<ArrowLeft size={16} />}
            >
              Back Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}