"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MOBILE_NAV_ITEMS = [
  { label: "Discover", icon: "search", href: "/" },
  { label: "Saved", icon: "favorite", href: "#" },
  { label: "Messages", icon: "mail", href: "#" },
  { label: "Profile", icon: "person", href: "#" },
];

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-safe pt-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-gray-100 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 rounded-t-2xl h-16">
      {MOBILE_NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center rounded-xl px-4 py-1 active:scale-90 transition-transform",
              isActive
                ? "text-emerald-900 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30"
                : "text-slate-400 dark:text-slate-500 hover:bg-gray-50 dark:hover:bg-slate-800"
            )}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-['Manrope'] text-[10px] font-semibold">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
