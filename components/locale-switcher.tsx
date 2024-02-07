"use client";

import { Locale, i18n } from "@/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LocaleSwitcher = () => {
  const pathname = usePathname();

  const getRedirectPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex items-center gap-x-2">
      {i18n.locales.map((locale) => (
        <li key={locale}>
          <Link
            href={getRedirectPathname(locale)}
            className="bg-black rounded-2xl px-3 py-2 text-white"
          >
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
};
