import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;

export interface SubpageItem {
  id: string;
  label: string;
  href: string;
  children?: SubpageItem[];
}

/**
 * Display order for the projects index and homepage.
 * Anything not listed here is appended alphabetically, so forgetting to add a
 * new project degrades gracefully instead of breaking the build.
 */
export const projectOrder = [
  'aeolus',
  'wind-tunnel',
  'quadruped-robot',
  'penny-hockey',
  'schlieren-imaging',
  'ship-model',
];

const rank = (slug: string) => {
  const i = projectOrder.indexOf(slug);
  return i === -1 ? projectOrder.length : i;
};

/** Top-level project pages (no "/" in the id), in curated order. */
export async function getProjects(): Promise<ProjectEntry[]> {
  const all = await getCollection('projects');
  return all
    .filter((e) => !e.id.includes('/'))
    .sort((a, b) => rank(a.id) - rank(b.id) || a.id.localeCompare(b.id));
}

/** Projects listed on /projects and the homepage. Respects `hidden` frontmatter. */
export async function getVisibleProjects(): Promise<ProjectEntry[]> {
  return (await getProjects()).filter((e) => !e.data.hidden);
}

/**
 * One top-level project by slug. Returns undefined rather than throwing, so a
 * content file without a matching page can't take down the whole build.
 */
export async function getProject(slug: string): Promise<ProjectEntry | undefined> {
  return (await getProjects()).find((e) => e.id === slug);
}

/**
 * Sidebar nav for a project, derived from the files on disk. Subpages are
 * ordered by their `order` frontmatter and labelled `"<order>. <navLabel>"`.
 * Adding a subpage means creating one file — there is no list to keep in sync.
 */
export async function getProjectNav(slug: string): Promise<SubpageItem[]> {
  const all = await getCollection('projects');
  const subpages = all
    .filter((e) => e.id.startsWith(`${slug}/`))
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));

  if (subpages.length === 0) return [];

  return [
    { id: 'overview', label: '0. Overview', href: `/projects/${slug}` },
    ...subpages.map((e) => ({
      id: e.id.split('/').pop()!,
      label: `${e.data.order}. ${e.data.navLabel ?? e.data.title}`,
      href: `/projects/${e.id}`,
    })),
  ];
}

export const projectHref = (entry: ProjectEntry) => `/projects/${entry.id}`;
