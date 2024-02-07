import { FC } from "react";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import { LocaleSwitcher } from "@/components/locale-switcher";

interface HeaderProps {
  lang: Locale;
}

export const Header: FC<HeaderProps> = async ({ lang }) => {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="py-6">
      <nav className="flex flex-col sm:flex-row items-center justify-between px-4 gap-4">
        <ul className="flex gap-x-8">
          {Object.keys(navigation).map((navItem) => {
            const href =
              navItem === "home" ? `/${lang}` : `/${lang}/${navItem}`;
            return (
              <li key={navItem}>
                <Link href={href} key={navItem}>
                  {navigation[navItem]}
                </Link>
              </li>
            );
          })}
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
};
