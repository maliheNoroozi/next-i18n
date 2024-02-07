import "server-only";
import type { Locale } from "@/i18n-config";

const disctionaries = {
  "en-US": () =>
    import("@/dictionaries/en-US.json").then((module) => module.default),
  "nl-NL": () =>
    import("@/dictionaries/nl.json").then((module) => module.default),
  nl: () => import("@/dictionaries/nl.json").then((module) => module.default),
};

export const getDictionary = (locale: Locale) => disctionaries[locale]();
