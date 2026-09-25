
"use client";

import { useState } from "react";
import { Button, Card } from "@heroui/react";
import { Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import GiftOpening from "@/components/GiftOpening";

const starsData = [
  [3, 8, 12, 0.2],
  [2, 18, 30, 1.1],
  [3, 32, 15, 0.5],
  [2, 47, 40, 1.7],
  [3, 62, 20, 0.8],
  [2, 78, 55, 1.4],
  [3, 91, 10, 0.3],
  [2, 12, 72, 1.8],
  [3, 28, 90, 0.6],
  [2, 43, 68, 1.2],
  [3, 57, 82, 0.4],
  [2, 73, 75, 1.6],
  [3, 87, 35, 0.9],
  [2, 96, 70, 1.3],
  [3, 6, 45, 0.7],
  [2, 22, 52, 1.9],
  [3, 38, 5, 0.1],
  [2, 53, 28, 1.5],
  [3, 69, 48, 0.6],
  [2, 84, 88, 1.1],
];

const heartsData = [
  [8, 16, 7],
  [20, 13, 9],
  [34, 18, 8],
  [49, 15, 10],
  [65, 14, 7],
  [80, 17, 9],
  [94, 13, 8],
  [15, 21, 10],
  [42, 19, 8],
  [72, 20, 9],
];

export default function Home() {
  const [stars] = useState(starsData);
  const [hearts] = useState(heartsData);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070311] px-3 py-6 text-white sm:px-5 sm:py-10">

      {/* Background */}
      <div className="aurora" />

      {/* Stars */}
      {stars.map(([size, left, top, delay], i) => (
        <span
          key={i}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}

      {/* Floating Hearts */}
      {hearts.map(([left, size, duration], i) => (
        <span
          key={i}
          className="heart text-pink-100"
          style={{
            left: `${left}%`,
            fontSize: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          🎂
        </span>
      ))}

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-md items-center justify-center"
      >
        <Card className="glass w-full overflow-hidden rounded-[28px] border border-pink-400/20 shadow-[0_0_50px_rgba(236,72,153,0.12)]">

          <div className="relative p-5 text-center sm:p-8">

            {/* Top Glow */}
            <div className="absolute left-1/2 top-0 h-24 w-40 -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />

            {/* Sparkle */}
            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-300/20 bg-yellow-300/10"
            >
              <Sparkles size={25} className="text-yellow-300" />
            </motion.div>

            {/* Date */}
            <p className="text-[10px] font-medium tracking-[4px] text-pink-200 sm:text-xs">
              26 SEPTEMBER
            </p>

            {/* Heading */}
            <h1 className="glow mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Happy Birthday
            </h1>

            <motion.h2
              animate={{
                textShadow: [
                  "0 0 10px rgba(244,114,182,.2)",
                  "0 0 25px rgba(244,114,182,.6)",
                  "0 0 10px rgba(244,114,182,.2)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-1 text-2xl font-bold text-pink-300 sm:text-4xl"
            >
              Hafiza ✨
            </motion.h2>

            {/* Message */}
            <p className="mx-auto mt-4 max-w-sm text-xs leading-6 text-gray-300 sm:text-sm sm:leading-7">
              Dear Hafiza, even though you are my sister,
              you have always been like a friend to me.
              That’s why you are very special to me. 💖
            </p>

            {/* Gift */}
            <div className="my-5 sm:my-7">
              <GiftOpening />
            </div>

            {/* Button */}
            <Link href="/memory" className="block">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button
                  size="md"
                  radius="full"
                  className="h-11 w-full bg-gradient-to-r rounded-2xl from-pink-500 via-fuchsia-500 to-purple-500 px-6 text-sm font-bold text-white shadow-[0_0_30px_rgba(236,72,153,0.35)] sm:h-12 sm:text-base"
                  endContent={<Heart size={17} />}
                >
                  Open Your Gift
                </Button>
              </motion.div>
            </Link>

            <p className="mt-4 text-[10px] text-gray-400 sm:text-xs">
              A little surprise made with ❤️ just for you
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-pink-400/50" />
              <span className="text-xs text-pink-300">✦</span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-pink-400/50" />
            </div>

          </div>
        </Card>
      </motion.div>
    </main>
  );
}
