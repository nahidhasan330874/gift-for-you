"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio.loop = true;

    const playMusic = async () => {
      try {
        await audio.play();

        let vol = 0;
        const fade = setInterval(() => {
          vol += 0.02;
          if (vol >= 0.35) {
            audio.volume = 0.35;
            clearInterval(fade);
          } else {
            audio.volume = vol;
          }
        }, 200);
      } catch (e) {
        // Browser interaction required
      }
    };

    playMusic();
  }, []);

  return (
    <audio ref={audioRef} autoPlay playsInline>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  );
}