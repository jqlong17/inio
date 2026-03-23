import { listProfiles } from "../profiles";
import type { SupportedLanguage } from "../profiles/types";

type ListOptions = {
  lang: SupportedLanguage;
};

export function runListCommand(options: ListOptions): void {
  const profiles = listProfiles();
  const isZh = options.lang === "zh";
  console.log(isZh ? "可用场景：" : "Available profiles:");
  for (const profile of profiles) {
    const localized = profile.localizedMeta?.[options.lang];
    const name = localized?.name ?? profile.name;
    const description = localized?.description ?? profile.description;
    console.log(`- ${profile.id} (${name}): ${description}`);
  }
}
