export type SupportedLanguage = "en" | "zh";

export type ProfileLocalizedMeta = {
  name: string;
  description: string;
};

export type InioProfile = {
  id: string;
  name: string;
  description: string;
  extends?: string;
  requiredDirs: string[];
  requiredFiles: string[];
  files: Record<string, string>;
  localizedMeta?: Partial<Record<SupportedLanguage, ProfileLocalizedMeta>>;
  localizedFiles?: Partial<Record<SupportedLanguage, Record<string, string>>>;
};

export type RenderVariables = {
  projectName: string;
  year: string;
};
