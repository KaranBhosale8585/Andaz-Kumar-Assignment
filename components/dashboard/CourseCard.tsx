"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Layers3, Database } from "lucide-react";

const icons: any = {
  Code2,
  Sparkles,
  Layers3,
  Database,
};

const gradients = [
  "from-violet-500/20 to-fuchsia-500/10",
  "from-cyan-500/20 to-blue-500/10",
  "from-emerald-500/20 to-teal-500/10",
  "from-orange-500/20 to-red-500/10",
];

export default function CourseCard({ course, index }: any) {
  const Icon = icons[course.icon_name];

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.12,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-950
        p-6
        will-change-transform
      "
    >
      <div
        className={`
          absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100
          bg-gradient-to-br ${gradients[index % gradients.length]}
        `}
      />

      <div className="absolute inset-0 opacity-[0.03] [background-image:url('/noise.png')]" />

      <section className="relative z-10 flex h-full flex-col justify-between">
        <header className="flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl">
            {Icon && <Icon className="h-6 w-6 text-white" />}
          </div>

          <span className="text-sm text-zinc-500">{course.progress}%</span>
        </header>

        <footer>
          <h2 className="text-xl font-semibold leading-snug">{course.title}</h2>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${course.progress}%`,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
            />
          </div>
        </footer>
      </section>
    </motion.article>
  );
}
