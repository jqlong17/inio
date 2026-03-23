import type { RenderVariables } from "../profiles/types";

export function renderTemplate(content: string, vars: RenderVariables): string {
  return content
    .replaceAll("{{projectName}}", vars.projectName)
    .replaceAll("{{year}}", vars.year);
}
