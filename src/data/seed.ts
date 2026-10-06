import type { CommerceProductList, ProductContent } from '@/lib/types';

/** Product order is chosen by merchandising, independently of price order. */
export const commerceProducts: CommerceProductList = [
  { id: 'ridge-pack', brand: 'Northstar Gear', name: 'Ridge 28 Pack', category: 'Packs', price: '129.00', rating: 4.8 },
  { id: 'storm-shell', brand: 'Northstar Gear', name: 'Storm Shell', category: 'Layers', price: '189.00', rating: 4.6 },
  { id: 'camp-lantern', brand: 'Canyon Works', name: 'Camp Lantern', category: 'Camp', price: '54.99', rating: 4.7 },
  { id: 'ridge-tent', brand: 'Canyon Works', name: 'Ridge Tent 2', category: 'Shelter', price: '219.00', rating: 4.9 },
];

/** Editorial content is joined to commerce by productId. */
export const productContent: ProductContent[] = [
  {
    productId: 'ridge-pack',
    slug: 'ridge-28-pack',
    description: 'A balanced day pack with room for long miles and quick weather changes.',
    features: ['Ventilated back panel', 'Hydration sleeve', 'Stretch side pockets'],
    accent: '#d9e9e5',
  },
  {
    productId: 'storm-shell',
    slug: 'storm-shell',
    description: 'A lightweight waterproof layer for exposed ridgelines and wet forecasts.',
    features: ['Three-layer waterproof fabric', 'Helmet-compatible hood', 'Adjustable cuffs'],
    accent: '#dae1f0',
  },
  {
    productId: 'camp-lantern',
    slug: 'camp-lantern',
    description: 'Warm, dependable light for camp kitchens, tents and late-night map checks.',
    features: ['Dimmable warm light', 'USB-C recharge', 'Red night mode'],
    accent: '#eee4d7',
  },
  {
    productId: 'ridge-tent',
    slug: 'ridge-tent-2',
    description: 'A compact two-person shelter that balances livable space and packed weight.',
    features: ['Two-door entry', 'Aluminium poles', 'Full-coverage rainfly'],
    accent: '#e9dfee',
  },
];
