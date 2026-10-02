/** @type {Record<string, { home: Record<string, string> }>} */
const copies = import.meta.glob('/src/sites/?*/site.json', {
  eager: true,
  import: 'default',
});

export const getApplicationCopy = (siteId) => {
  const copy = copies[`/src/sites/${siteId}/site.json`];
  if (!copy) throw new Error(`Application ${siteId}: missing site.json.`);
  return copy;
};
