// Website publication only; application/document status stays in each site's brief.
// New sites start as draft. Change to published only when Carl requests a launch.

export const applications = [
  { id: 'accenture', status: 'draft' },
  { id: 'datadog', status: 'published' },
  { id: 'chromatic', status: 'draft' }
];

// Rejections confirmed by Carl: ACLU September 26, BNY Director October 6, 2026.
// Keep retired URLs here to remove stale server directories and prevent accidental reuse.
export const retiredApplicationSites = ['aclu', 'bny'];

const reservedIds = new Set(['main', 'about', 'portfolio', 'case-studies', 'drawing-board', 'on-my-desk', '404', 'media']);

export const validateRetiredApplicationSites = (ids) => {
  const seen = new Set();
  for (const id of ids) {
    if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(id ?? '') || reservedIds.has(id) || seen.has(id) || applications.some((site) => site.id === id)) {
      throw new Error(`Invalid retired application URL: ${id}`);
    }
    seen.add(id);
  }
  return ids;
};

validateRetiredApplicationSites(retiredApplicationSites);

/** @param {{ id: string, status: string }[]} registry @returns {string[]} */
export const selectApplicationSites = (registry, { includeDrafts = false } = {}) => {
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
};

export const getApplicationSites = (options = {}) => {
  return selectApplicationSites(applications, options);
};

// All registered sites are needed for link isolation, including unpublished ones.
export const applicationSites = getApplicationSites({ includeDrafts: true });
