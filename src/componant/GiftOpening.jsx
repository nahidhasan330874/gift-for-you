"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

export default function GiftOpening() {
  const [open, setOpen] = useState(false);

  const [particles] = useState(() =>
    [...Array(24)].map((_, i) => ({
      x: (Math.random() - 0.5) * 220,
      y: (Math.random() - 0.5) * 180,
      rotate: Math.random() * 360,
      emoji: i % 3 === 0 ? "🌸" : i % 2 === 0 ? "✨" : "💖",
    })),
  );

  return (
    <div className="flex w-full items-center justify-center">
      {/* <AnimatePresence mode="wait"> */}

      {/* CLOSED GIFT */}
      {!open ? (
        <motion.div
          key="gift"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full flex-col items-center text-center"
        >
          {/* Gift Box */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="relative flex h-24 w-24 items-center justify-center rounded-[24px] bg-gradient-to-br from-pink-500 via-fuchsia-500 to-violet-500 shadow-[0_0_45px_rgba(236,72,153,0.5)] sm:h-28 sm:w-28"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[24px] bg-pink-400/20 blur-xl" />

            <Gift size={45} className="relative text-white sm:size-[52px]" />

            {/* Sparkles */}
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -right-2 -top-2 text-lg"
            >
              ✨
            </motion.span>
          </motion.div>

          {/* Title */}
          <h3 className="mt-4 text-base font-bold text-pink-200 sm:text-lg">
            A Surprise Gift For Hafiza 💖
          </h3>

          <p className="mt-1 text-[11px] text-gray-400 sm:text-xs">
            Tap the gift to open ✨
          </p>

          {/* Button */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            whileTap={{ scale: 0.92 }}
            className="mt-4"
          >
            <Button
              size="sm"
              radius="full"
              onPress={() => setOpen(true)}
              className="bg-gradient-to-r rounded-full p-3 text-2xl font-bold from-pink-500 to-fuchsia-500 px-6 text-xs font-bold text-white shadow-[0_0_25px_rgba(236,72,153,0.4)]"
            >
              Open Gift 🎁
            </Button>
          </motion.div>
        </motion.div>
      ) : (
        /* OPENED GIFT */
        <motion.div
          key="opened"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex w-full flex-col items-center text-center"
        >
          {/* Particles */}
          {particles.map((p, i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute left-1/2 top-12 text-base sm:text-xl"
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                x: p.x,
                y: p.y,
                opacity: 0,
                scale: 1.5,
                rotate: p.rotate,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            >
              {p.emoji}
            </motion.span>
          ))}

          {/* Magic Circle */}
          <motion.div
            initial={{ scale: 0.5, rotate: -30, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-pink-300 to-fuchsia-400 shadow-[0_0_55px_rgba(255,192,203,0.65)] sm:h-28 sm:w-28"
          >
            <div className="absolute inset-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-white/40 border-dashed"
              />

              {/* Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-pink-300/80 shadow-[0_0_25px_rgba(244,114,182,0.8)]">
                <Image
                  src="/images100.jpg"
                  alt="Heart"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Birthday Text */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="glow mt-5 text-2xl font-black leading-tight text-pink-300 sm:text-4xl"
          >
            Happy Birthday
            <br />
            <span className="text-pink-200">Hafiza 💖</span>
          </motion.h2>

          {/* Message */}
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-3 max-w-xs text-xs leading-6 text-gray-300 sm:max-w-md sm:text-sm sm:leading-7"
          >
            May Allah fill your life with happiness, barakah and endless
            beautiful moments. 🌸
          </motion.p>

          {/* Memory Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-5"
          >
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileTap={{ scale: 0.94 }}
            >
              <Link href="/memory">
                <Button
                  size="md"
                  radius="full"
                  className="bg-gradient-to-r rounded-full   font-bold p-3 from-pink-500 via-fuchsia-500 to-violet-500 px-6 text-sm font-bold text-white shadow-[0_0_30px_rgba(236,72,153,0.45)] sm:px-8 sm:text-base"
                >
                  See Our Memories
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                    }}
                  >
                    →
                  </motion.span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
