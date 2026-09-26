// Website publication only; application/document status stays in each site's brief.
// New sites start as draft. Change to published only when Carl requests a launch.
export const applications = [
  { id: 'bny', status: 'published' },
  { id: 'accenture', status: 'draft' },
  { id: 'datadog', status: 'draft' },
  { id: 'chromatic', status: 'draft' }
];

// ACLU rejection confirmed by Carl on September 26, 2026.
// Keep retired URLs here to remove stale server directories and prevent accidental reuse.
export const retiredApplicationSites = ['aclu'];

const reservedIds = new Set(['main', 'about', 'portfolio', 'drawing-board', 'on-my-desk', '404', 'media']);

export function validateRetiredApplicationSites(ids) {
  const seen = new Set();
  for (const id of ids) {
    if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(id ?? '') || reservedIds.has(id) || seen.has(id) || applications.some((site) => site.id === id)) {
      throw new Error(`Invalid retired application URL: ${id}`);
    }
    seen.add(id);
  }
  return ids;
}

validateRetiredApplicationSites(retiredApplicationSites);

/** @param {{ id: string, status: string }[]} registry @returns {string[]} */
export function selectApplicationSites(registry, { includeDrafts = false } = {}) {
  const ids = new Set();
  for (const { id, status } of registry) {
    if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(id ?? '') || reservedIds.has(id) || retiredApplicationSites.includes(id) || ids.has(id)) {
      throw new Error(`Application site needs a unique, non-reserved URL slug: ${id}`);
    }
    if (status !== 'draft' && status !== 'published') {
      throw new Error(`Application ${id}: status must be draft or published.`);
    }
    ids.add(id);
  }
  return registry.filter(({ status }) => includeDrafts || status === 'published').map(({ id }) => id);
}

export function getApplicationSites(options = {}) {
  return selectApplicationSites(applications, options);
}

// All registered sites are needed for link isolation, including unpublished ones.
export const applicationSites = getApplicationSites({ includeDrafts: true });
