"use client";

import { motion } from "framer-motion";

const activityData = [
  40, 70, 30, 90, 55, 80, 45, 65, 35, 95, 60, 75, 50, 85, 45, 78, 66, 92, 35,
  58, 74,
];

export default function ActivityTile() {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.01,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-950
        p-6
        md:col-span-2
        xl:col-span-2
        will-change-transform
        before:absolute
        before:inset-0
        before:bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.14),transparent_35%)]
        after:absolute
        after:inset-0
        after:opacity-[0.03]
        after:[background-image:url('/noise.png')]
      "
    >
      <section className="relative z-10 flex h-full flex-col">
        <header>
          <p className="text-sm text-zinc-500">Weekly Activity</p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Consistency Graph
          </h2>
        </header>

        <section className="mt-8 flex flex-1 items-end gap-2">
          {activityData.map((height, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: `${height}px`,
              }}
              transition={{
                delay: index * 0.02,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="
                w-full
                self-end
                rounded-full
                bg-gradient-to-t
                from-emerald-500
                to-emerald-300
              "
            />
          ))}
        </section>
      </section>
    </motion.article>
  );
}
