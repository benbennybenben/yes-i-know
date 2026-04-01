"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="relative flex-1 flex items-center justify-center overflow-hidden">
      <Image
        src="/the-sleep-of-reason-produces-monsters.webp"
        alt="The Sleep of Reason Produces Monsters by Francisco Goya"
        width={600}
        height={900}
        className="absolute inset-0 m-auto h-[calc(100%-4rem)] w-auto object-contain opacity-50 select-none pointer-events-none"
        priority
      />
      <h1 className="relative z-10 text-[clamp(3rem,12vw,10rem)] font-extrabold leading-none tracking-tight text-ink">
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Yes,
        </motion.span>{" "}
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.9,
          }}
        >
          I know
        </motion.span>
      </h1>
    </main>
  );
}
