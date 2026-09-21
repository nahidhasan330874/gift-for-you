// "use client";

// import { useRef, useState } from "react";
// import { Button } from "@heroui/react";
// import { Volume2, VolumeX } from "lucide-react";

// export default function MusicPlayer() {
//   const audioRef = useRef(null);
//   const [playing, setPlaying] = useState(false);

//   const toggleMusic = () => {
//     if (!audioRef.current) return;

//     if (playing) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }

//     setPlaying(!playing);
//   };

//   return (
//     <>
//       <audio ref={audioRef} loop>
//         <source src="/music/birthday.mp3" type="audio/mpeg" />
//       </audio>

//       <Button
//         isIconOnly
//         radius="full"
//         onPress={toggleMusic}
//         className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-xl border border-white/20 text-white"
//       >
//         {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
//       </Button>
//     </>
//   );
// }