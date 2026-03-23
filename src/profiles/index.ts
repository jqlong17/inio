import { coreProfile } from "./core";
import { productDesignProfile } from "./product-design";
import { researchAnalysisProfile } from "./research-analysis";
import type { InioProfile, SupportedLanguage } from "./types";

export const profileRegistry: Record<string, InioProfile> = {
  [coreProfile.id]: coreProfile,
  [productDesignProfile.id]: productDesignProfile,
  [researchAnalysisProfile.id]: researchAnalysisProfile
};

export function getProfileOrThrow(profileId: string): InioProfile {
  const profile = profileRegistry[profileId];
  if (!profile) {
    throw new Error(
      `Unknown profile "${profileId}". Use "inio list" to see available profiles.`
    );
  }
  return profile;
}

export function resolveProfile(profileId: string): InioProfile {
  const selected = getProfileOrThrow(profileId);
  if (!selected.extends) {
    return selected;
  }

  const base = getProfileOrThrow(selected.extends);
  return {
    id: selected.id,
    name: selected.name,
    description: selected.description,
    extends: selected.extends,
    requiredDirs: [...base.requiredDirs, ...selected.requiredDirs],
    requiredFiles: [...base.requiredFiles, ...selected.requiredFiles],
    files: {
      ...base.files,
      ...selected.files
    },
    localizedFiles: {
      en: {
        ...(base.localizedFiles?.en ?? {}),
        ...(selected.localizedFiles?.en ?? {})
      },
      zh: {
        ...(base.localizedFiles?.zh ?? {}),
        ...(selected.localizedFiles?.zh ?? {})
      }
    }
  };
}

export function listProfiles(): InioProfile[] {
  return Object.values(profileRegistry);
}

export function resolveProfileFiles(
  profile: InioProfile,
  lang: SupportedLanguage
): Record<string, string> {
  return {
    ...profile.files,
    ...(profile.localizedFiles?.[lang] ?? {})
  };
}
