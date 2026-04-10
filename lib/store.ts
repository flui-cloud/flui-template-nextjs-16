/**
 * In-memory store for demo items.
 * No database — items reset on every server restart.
 */

export interface Item {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

const items = new Map<string, Item>();

// Seed data
const seed = (): void => {
  if (items.size > 0) return;
  const now = new Date().toISOString();
  items.set('1', {
    id: '1',
    name: 'Welcome to Flui',
    description: 'Your first demo item — feel free to delete it.',
    createdAt: now,
  });
  items.set('2', {
    id: '2',
    name: 'Try the API',
    description: 'Visit /docs to explore the OpenAPI documentation.',
    createdAt: now,
  });
};

seed();

export const itemStore = {
  list(): Item[] {
    return Array.from(items.values()).sort((a, b) =>
      b.createdAt.localeCompare(a.createdAt),
    );
  },
  get(id: string): Item | undefined {
    return items.get(id);
  },
  create(name: string, description: string): Item {
    const id = String(Date.now());
    const item: Item = {
      id,
      name,
      description,
      createdAt: new Date().toISOString(),
    };
    items.set(id, item);
    return item;
  },
  delete(id: string): boolean {
    return items.delete(id);
  },
};
