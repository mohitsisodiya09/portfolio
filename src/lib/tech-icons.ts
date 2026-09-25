import { BRAND_ICONS } from '@/lib/brand-icons';
import type { SimpleIcon } from 'simple-icons';
import {
  siChai,
  siClaude,
  siCursor,
  siDocker,
  siExpress,
  siGit,
  siGithubactions,
  siGitlab,
  siGooglecloud,
  siJavascript,
  siJest,
  siMocha,
  siMongodb,
  siMysql,
  siNestjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siTypescript,
} from 'simple-icons';

export type TechIconData = { hex: string; path: string };

/** Brand colors that are invisible on the dark portfolio UI. */
const DARK_THEME_COLOR_OVERRIDES: Record<string, string> = {
  'Express.js': 'EEF2FF',
};

/** Skill labels used in the Skills section — keep in sync with TechStack groups. */
const TECH_ICON_MAP: Record<string, SimpleIcon> = {
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  'Node.js': siNodedotjs,
  NestJS: siNestjs,
  'Express.js': siExpress,
  MongoDB: siMongodb,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  GCP: siGooglecloud,
  Docker: siDocker,
  'GitHub Actions': siGithubactions,
  GitLab: siGitlab,
  Jest: siJest,
  Mocha: siMocha,
  Chai: siChai,
  Git: siGit,
  Cursor: siCursor,
  Claude: siClaude,
  Postman: siPostman,
};

export function getTechIcon(name: string): TechIconData | null {
  const key = name.trim();
  const brand = BRAND_ICONS[key];
  if (brand) return brand;

  const icon = TECH_ICON_MAP[key];
  if (!icon) return null;

  return {
    hex: DARK_THEME_COLOR_OVERRIDES[key] ?? icon.hex,
    path: icon.path,
  };
}
