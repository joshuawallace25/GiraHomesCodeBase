"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md font-['Manrope'] antialiased docked full-width top-0 sticky z-50 border-b border-gray-100 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-4 md:px-8 h-20 w-full">
        <Link href="/" className="text-2xl font-black text-emerald-900 dark:text-emerald-50 tracking-tighter">
          GiraHomes
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={cn(
              "transition-all duration-200",
              pathname === "/"
                ? "text-emerald-900 dark:text-emerald-400 font-bold border-b-2 border-emerald-900 dark:border-emerald-400 pb-1 hover:text-emerald-700 dark:hover:text-emerald-300"
                : "text-slate-600 dark:text-slate-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300"
            )}
          >
            Listings
          </Link>
          <Link
            href="#"
            className="text-slate-600 dark:text-slate-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-200"
          >
            Agents
          </Link>
          <Link
            href="#"
            className="text-slate-600 dark:text-slate-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-200"
          >
            About
          </Link>
        </div>

        {/* Trailing Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden lg:block text-slate-600 dark:text-slate-400 font-medium hover:text-emerald-700 transition-all"
          >
            Login
          </Link>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-label-md active:scale-95 transform transition-transform shadow-lg shadow-primary/20">
            Post a Listing
          </button>
        </div>
      </div>
    </nav>
  );
};
