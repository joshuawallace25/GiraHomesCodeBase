import Link from "next/link";
import { FOOTER_QUICK_LINKS, FOOTER_LEGAL_LINKS } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 mt-auto border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 lg:col-span-1">
          <div className="text-xl font-bold text-emerald-900 dark:text-emerald-50 mb-6">GiraHomes</div>
          <p className="text-slate-500 font-body-md mb-6 leading-relaxed">
            Your premier partner for luxury real estate in the heart of Africa. Modern homes for modern living.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 hover:text-primary transition-all duration-200"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 hover:text-primary transition-all duration-200"
            >
              <span className="material-symbols-outlined text-lg">groups</span>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 hover:text-primary transition-all duration-200"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-slate-500 hover:text-emerald-700 underline underline-offset-4 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-6">Legal</h4>
          <ul className="space-y-4">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-slate-500 hover:text-emerald-700 underline underline-offset-4 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-6">Newsletter</h4>
          <p className="text-slate-500 mb-4">Stay updated with the latest property trends in Kigali.</p>
          <div className="flex">
            <input
              className="bg-white border border-gray-200 rounded-l-xl px-4 py-3 focus:outline-none focus:border-primary w-full text-slate-900"
              placeholder="Your email"
              type="email"
            />
            <button className="bg-primary text-white px-4 py-3 rounded-r-xl">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-gray-200">
        <p className="text-slate-500 text-sm">© 2024 GiraHomes Kigali. All rights reserved.</p>
      </div>
    </footer>
  );
};
