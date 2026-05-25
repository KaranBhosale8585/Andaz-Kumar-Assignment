"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function HeroTile({ courses }: any) {
  const avgProgress = Math.round(
    courses.reduce((acc: number, course: any) => acc + course.progress, 0) /
      courses.length,
  );

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
        p-8
        md:col-span-2
        xl:col-span-2
        will-change-transform
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.25),transparent_35%)]
        "
      />

      <div className="absolute inset-0 opacity-[0.03] [background-image:url('/noise.png')]" />

      <section className="relative z-10 flex h-full flex-col justify-between">
        <header>
          <p className="text-sm text-zinc-400">Welcome back,</p>

          <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-white">
            Mr Rk 👋
          </h1>

          <p className="mt-4 max-w-xl text-zinc-500">
            Continue building momentum in your learning journey with immersive
            next-generation courses.
          </p>
        </header>

        <footer className="mt-10 flex flex-wrap gap-4">
          <section className="flex items-center gap-3 rounded-2xl border border-orange-500/20 bg-orange-500/10 px-4 py-3">
            <Flame className="h-5 w-5 text-orange-400" />

            <div>
              <p className="text-sm text-zinc-400">Learning Streak</p>

              <h2 className="font-semibold text-white">14 Days</h2>
            </div>
          </section>

          <section className="rounded-2xl border border-violet-500/20 bg-violet-500/10 px-4 py-3">
            <p className="text-sm text-zinc-400">Average Progress</p>

            <h2 className="font-semibold text-white">{avgProgress}%</h2>
          </section>

          <section className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
            <p className="text-sm text-zinc-400">Active Courses</p>

            <h2 className="font-semibold text-white">{courses.length}</h2>
          </section>
        </footer>
      </section>
    </motion.article>
  );
}
