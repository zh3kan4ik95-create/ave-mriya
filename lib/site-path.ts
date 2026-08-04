const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const basePath = rawBasePath.replace(/\/$/, '');

export function appPath(href: string) {
  if (!href || href.startsWith('#') || /^[a-z]+:/i.test(href)) return href;

  const normalizedHref = href.startsWith('/') ? href : `/${href}`;

  if (!basePath) return normalizedHref;
  if (normalizedHref === '/') return `${basePath}/`;

  return `${basePath}${normalizedHref}`;
}
