"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    label: "Courses",
    href: "/courses",
    icon: BookOpen,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] =
    useState(false);

  return (
    <>
      <nav
        className={`
          hidden md:flex sticky top-0 h-screen flex-col border-r border-white/10 bg-black/60 backdrop-blur-2xl
          ${collapsed ? "w-24" : "w-72"}
          transition-[width]
          duration-300
        `}
      >
        <section className="flex h-20 items-center justify-between border-b border-white/5 px-6">
          {!collapsed && (
            <h2 className="text-xl font-bold tracking-tight">
              NexaLearn
            </h2>
          )}

          <button
            aria-label="Toggle Sidebar"
            onClick={() =>
              setCollapsed(!collapsed)
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5"
          >
            {collapsed ? (
              <PanelLeftOpen size={18} />
            ) : (
              <PanelLeftClose size={18} />
            )}
          </button>
        </section>

        <section className="flex flex-1 flex-col gap-2 p-3">
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="relative overflow-hidden rounded-2xl"
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-highlight"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="absolute inset-0 rounded-2xl bg-white/10"
                  />
                )}

                <div className="relative z-10 flex items-center gap-4 px-4 py-4 text-zinc-300">
                  <Icon className="h-5 w-5 shrink-0" />

                  {!collapsed && (
                    <span className="font-medium">
                      {item.label}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </section>
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden">
        <section className="grid grid-cols-4">
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="relative flex flex-col items-center justify-center gap-1 py-4 text-xs text-zinc-400"
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav"
                    className="absolute inset-2 rounded-2xl bg-white/10"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                )}

                <Icon className="relative z-10 h-5 w-5" />

                <span className="relative z-10">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </section>
      </nav>
    </>
  );
}