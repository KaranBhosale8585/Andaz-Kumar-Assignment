"use client";

import { motion } from "framer-motion";
import { Bell, Search } from "lucide-react";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/courses": "Courses",
  "/analytics": "Analytics",
  "/settings": "Settings",
};

export default function Header() {
  const pathname = usePathname();

  const title = pageTitles[pathname] || "Dashboard";

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        sticky
        top-0
        z-40
        border-b
        border-white/10
        bg-black/50
        backdrop-blur-2xl
      "
    >
      <section className="flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        <section>
          <p className="text-sm text-zinc-500">Next-Gen Learning Platform</p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
            {title}
          </h1>
        </section>

        <section className="flex items-center gap-3">
          <div
            className="
              hidden
              md:flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
            "
          >
            <Search className="h-4 w-4 text-zinc-500" />

            <input
              type="text"
              placeholder="Search courses..."
              className="
                w-52
                bg-transparent
                text-sm
                text-white
                outline-none
                placeholder:text-zinc-500
              "
            />
          </div>

          <button
            aria-label="Notifications"
            className="
              relative
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
              transition-transform
              hover:scale-[1.02]
            "
          >
            <Bell className="h-5 w-5 text-white" />

            <span
              className="
                absolute
                right-3
                top-3
                h-2
                w-2
                rounded-full
                bg-emerald-400
              "
            />
          </button>

          <button
            aria-label="User Profile"
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-3
              py-2
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-violet-500
                to-fuchsia-500
                text-sm
                font-semibold
                text-white
              "
            >
              RK
            </div>

            <div className="hidden text-left md:block">
              <p className="text-sm font-medium text-white">Mr Rk</p>

              <p className="text-xs text-zinc-500">Student</p>
            </div>
          </button>
        </section>
      </section>
    </motion.header>
  );
}
