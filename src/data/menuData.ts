export type MenuCategory =
  | 'all'
  | 'burgers'
  | 'wings'
  | 'wraps'
  | 'chips-and-wings'
  | 'chicken-broast'
  | 'hand-cut-fries'
  | 'signature-fries'
  | 'twisto-fries'
  | 'loaded-fries'
  | 'pizza-fries'
  | 'special-combos'
  | 'lunch-combos'
  | 'midnight-combos'
  | 'special-deals'
  | 'extras-and-dips'
  | 'beverages-and-tea';

export interface MenuSizeOption {
  id: string;
  label: string;
  price: number;
}

export interface MenuAddon {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  promoBanner?: string;
  category: Exclude<MenuCategory, 'all'>;
  categoryLabel: string;
  sectionGroup: string;
  description: string;
  comboContents?: string[];
  sizes?: MenuSizeOption[];
  image: string;
  alt: string;
  badge?: string;
  badgeColor?: 'red' | 'gold' | 'amber' | 'emerald';
  mobileTag: string;
  prepTime: string;
  timeWindow?: string;
  verificationNote?: string;
  spiceOptions?: boolean;
  addons: MenuAddon[];
}

export interface OfficialMenuSheet {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export const RESTAURANT_INFO = {
  name: 'Fry Days',
  tagline: 'Fries • Burgers • Broast • Wraps',
  phone: '+92 326 1180202',
  whatsappNumber: '923261180202',
  address: 'W Canal Road, Jahan E Andalus, Faisalabad, Punjab, Pakistan',
  shortAddress: 'W Canal Road, Jahan E Andalus',
  city: 'Faisalabad',
  hours: '12:00 PM – 3:00 AM',
  hoursShort: '12 PM - 3 AM',
  rating: '4.9 / 5.0',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Fry+Day+W+Canal+Road+Jahan+E+Andalus+Faisalabad',
  logoUrl: '/assets/aistudio/fry_days_logo_small_c6ff3652.png',
  heroImage: '/assets/menu/foodshot1fullmenu.png',
  exteriorImage: '/assets/aistudio/ChatGPT_Image_Oct_23__2026__09_57_39_PM_b006631e.png',
  interiorImage: '/assets/menu/foodshot1fullmenu.png',
  mapPreviewImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC487rl5i4luuTImJ8z518T7SccStYDruncjRGpqon0GXEcNI_2XaHcdpzXgWLJJJwiMcn1WDHXhveRkZhXjMT8oW08d9OQCeVyHKYVzyvONv-rFYpWbSh0_1v6NiaONH5Unu1B8x9X1chMTN28WyHIg2Wz9HWlOIf5G5y4D3RguSVmB9QF2MgjQDb5p2LpWhr9n6ovK6tfGJNe1YP8pfhTopBVbFFBGoJVaVZppIuMSlGHeSssIrwC',
};

export const OFFICIAL_MENU_SHEETS: OfficialMenuSheet[] = [
  {
    id: 'burgers-wings-wraps-sheet',
    title: 'All Time Favorites — Burgers, Wings & Wraps',
    subtitle: 'Zesty Zinger, Fire Cracking, Jalo Blast, Krunch Munch, Stack It Up, Charcoal Fire Grill, Wings & Wraps',
    image: '/assets/menu/MenuBurgersWingsWraps.jpeg',
  },
  {
    id: 'broast-sheet',
    title: 'Injected Chicken Broast',
    subtitle: 'Quarter, Half, Full, 2 Full & 3 Full Broast Platters',
    image: '/assets/menu/MenuBroast.jpeg',
  },
  {
    id: 'fries-sheet',
    title: 'Awesome Fries Collection',
    subtitle: 'Hand-Cut, Signature, Twisto, Loaded Fries & Pizza Fries',
    image: '/assets/menu/MenuFries.jpeg',
  },
  {
    id: 'combos-sheet',
    title: 'Combos & Feasts',
    subtitle: 'Twin Zinger Combo, Double Treat Combo, Fantastic Four, Wrap N Wing Feast & Full House Feast',
    image: '/assets/menu/MenuCombos.jpeg',
  },
];

export const CATEGORIES: { id: MenuCategory; label: string; shortLabel: string; count?: number }[] =
  [
    { id: 'all', label: 'All Menu Items', shortLabel: 'All' },
    { id: 'burgers', label: 'Burgers', shortLabel: 'Burgers' },
    { id: 'wings', label: 'Wings', shortLabel: 'Wings' },
    { id: 'wraps', label: 'Wraps', shortLabel: 'Wraps' },
    { id: 'chips-and-wings', label: 'Chips & Wings', shortLabel: 'Chips & Wings' },
    { id: 'chicken-broast', label: 'Injected Chicken Broast', shortLabel: 'Chicken Broast' },
    { id: 'hand-cut-fries', label: 'Hand-Cut Fries', shortLabel: 'Hand-Cut Fries' },
    { id: 'signature-fries', label: 'Signature Fries', shortLabel: 'Signature Fries' },
    { id: 'twisto-fries', label: 'Twisto Fries', shortLabel: 'Twisto Fries' },
    { id: 'loaded-fries', label: 'Loaded Fries', shortLabel: 'Loaded Fries' },
    { id: 'pizza-fries', label: 'Pizza Fries', shortLabel: 'Pizza Fries' },
    { id: 'special-combos', label: 'Combos', shortLabel: 'Combos' },
    { id: 'lunch-combos', label: 'Lunch Combos (12 PM – 4 PM)', shortLabel: 'Lunch Combos' },
    { id: 'midnight-combos', label: 'Midnight Combos (11 PM – 2 AM)', shortLabel: 'Midnight Combos' },
    { id: 'special-deals', label: 'Promotional Deals', shortLabel: 'Promo Deals' },
    { id: 'extras-and-dips', label: 'Extras & Dips', shortLabel: 'Extras & Dips' },
    { id: 'beverages-and-tea', label: 'Beverages', shortLabel: 'Beverages' },
  ];

const OFFICIAL_DIPS_AND_EXTRAS: MenuAddon[] = [
  { id: 'extra-bun', name: 'Bun', price: 60 },
  { id: 'extra-cheese-slice', name: 'Cheese Slice', price: 70 },
  { id: 'dip-garlic-mayo', name: 'Dip — Garlic Mayo', price: 80 },
  { id: 'dip-honey-mustard', name: 'Dip — Honey Mustard', price: 80 },
  { id: 'dip-cocktail', name: 'Dip — Cocktail', price: 80 },
  { id: 'dip-hot-garlic-mayo', name: 'Dip — Hot Garlic Mayo', price: 80 },
  { id: 'dip-buffalo-sauce', name: 'Dip — Buffalo Sauce', price: 80 },
  { id: 'dip-smoky-sauce', name: 'Dip — Smoky Sauce', price: 80 },
];

const BURGER_ADDONS: MenuAddon[] = [
  { id: 'official-add-on', name: 'ADD ON (Fries + Regular Drink)', price: 240 },
  ...OFFICIAL_DIPS_AND_EXTRAS,
];

const BROAST_ADDONS: MenuAddon[] = [...OFFICIAL_DIPS_AND_EXTRAS];

const FRIES_ADDONS: MenuAddon[] = [
  { id: 'dip-garlic-mayo', name: 'Dip — Garlic Mayo', price: 80 },
  { id: 'dip-honey-mustard', name: 'Dip — Honey Mustard', price: 80 },
  { id: 'dip-cocktail', name: 'Dip — Cocktail', price: 80 },
  { id: 'dip-hot-garlic-mayo', name: 'Dip — Hot Garlic Mayo', price: 80 },
  { id: 'dip-buffalo-sauce', name: 'Dip — Buffalo Sauce', price: 80 },
  { id: 'dip-smoky-sauce', name: 'Dip — Smoky Sauce', price: 80 },
];

const WINGS_WRAPS_ADDONS: MenuAddon[] = [
  { id: 'official-add-on', name: 'ADD ON (Fries + Regular Drink)', price: 240 },
  ...OFFICIAL_DIPS_AND_EXTRAS,
];

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================================
  // A. ALL-TIME FAVORITES — BURGERS
  // ==========================================================
  {
    id: 'zesty-zinger',
    name: 'Zesty Zinger',
    price: 540,
    category: 'burgers',
    categoryLabel: 'Burgers',
    sectionGroup: 'All-Time Favorites',
    description: 'All-Time Favorites — Burgers. Optional ADD ON (Fries + Drink) available for Rs. 240.',
    image: '/assets/dishes/zesty-zinger.jpg',
    alt: 'Zesty Zinger crispy chicken burger on a sesame seed bun with signature zesty sauce and lettuce',
    badge: 'All-Time Favorite',
    badgeColor: 'red',
    mobileTag: 'Burgers',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: BURGER_ADDONS,
  },
  {
    id: 'fire-cracking',
    name: 'Fire Cracking',
    price: 610,
    category: 'burgers',
    categoryLabel: 'Burgers',
    sectionGroup: 'All-Time Favorites',
    description: 'All-Time Favorites — Burgers. Optional ADD ON (Fries + Drink) available for Rs. 240.',
    image: '/assets/dishes/fire-cracking.jpg',
    alt: 'Fire Cracking spicy red glazed crispy chicken burger with melted cheese and jalapenos on a sesame bun',
    badge: 'Spicy Favorite',
    badgeColor: 'red',
    mobileTag: 'Burgers',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: BURGER_ADDONS,
  },
  {
    id: 'jalo-blast',
    name: 'Jalo Blast',
    price: 560,
    category: 'burgers',
    categoryLabel: 'Burgers',
    sectionGroup: 'All-Time Favorites',
    description: 'All-Time Favorites — Burgers. Optional ADD ON (Fries + Drink) available for Rs. 240.',
    image: '/assets/dishes/jalo-blast.jpg',
    alt: 'Jalo Blast crispy chicken burger with sliced jalapenos, cheese sauce, and creamy mayo',
    mobileTag: 'Burgers',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: BURGER_ADDONS,
  },
  {
    id: 'krunch-munch',
    name: 'Krunch Munch',
    price: 560,
    category: 'burgers',
    categoryLabel: 'Burgers',
    sectionGroup: 'All-Time Favorites',
    description: 'All-Time Favorites — Burgers. Optional ADD ON (Fries + Drink) available for Rs. 240.',
    verificationNote:
      'Verification note: Listed as Rs. 560 in supplied menu text (printed menu sheet shows Rs. 360 — please verify current price at order).',
    image: '/assets/dishes/krunch-munch.jpg',
    alt: 'Krunch Munch extra crunchy golden chicken burger with creamy mayo and crisp lettuce',
    mobileTag: 'Burgers',
    prepTime: '8–10 mins',
    spiceOptions: false,
    addons: BURGER_ADDONS,
  },
  {
    id: 'stack-it-up',
    name: 'Stack It Up',
    price: 690,
    category: 'burgers',
    categoryLabel: 'Burgers',
    sectionGroup: 'All-Time Favorites',
    description: 'All-Time Favorites — Burgers. Optional ADD ON (Fries + Drink) available for Rs. 240.',
    image: '/assets/dishes/stack-it-up.jpg',
    alt: 'Stack It Up tall double crispy chicken fillet burger with melted yellow cheddar cheese',
    badge: 'Double Stack',
    badgeColor: 'gold',
    mobileTag: 'Burgers',
    prepTime: '12–14 mins',
    spiceOptions: true,
    addons: BURGER_ADDONS,
  },
  {
    id: 'charcoal-fire-grill',
    name: 'Charcoal Fire Grill',
    price: 620,
    category: 'burgers',
    categoryLabel: 'Burgers',
    sectionGroup: 'All-Time Favorites',
    description: 'All-Time Favorites — Burgers. Optional ADD ON (Fries + Drink) available for Rs. 240.',
    image: '/assets/dishes/charcoal-fire-grill.jpg',
    alt: 'Charcoal Fire Grill burger with flame-grilled chicken strips, tomatoes, pickles, and lettuce on a dark sesame bun',
    badge: 'Flame Grilled',
    badgeColor: 'amber',
    mobileTag: 'Burgers',
    prepTime: '12–14 mins',
    spiceOptions: true,
    addons: BURGER_ADDONS,
  },

  // ==========================================================
  // A. ALL-TIME FAVORITES — WINGS
  // ==========================================================
  {
    id: 'classic-wings',
    name: 'Classic Wings — 4 pcs',
    price: 450,
    category: 'wings',
    categoryLabel: 'Wings',
    sectionGroup: 'All-Time Favorites',
    description: 'All-Time Favorites — Wings (4 pcs).',
    verificationNote:
      'Verification note: Supplied menu data lists 4 pcs at Rs. 450 (printed menu sheet lists 6 pcs at Rs. 490 — please confirm portion & price).',
    image: '/assets/dishes/classic-wings.jpg',
    alt: 'Classic Wings crispy breaded fried chicken wings in a red Fry Days bucket',
    mobileTag: '4 pcs Wings',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: WINGS_WRAPS_ADDONS,
  },
  {
    id: 'fire-honey-wings',
    name: 'Fire Money Wings — 6 pcs',
    price: 550,
    category: 'wings',
    categoryLabel: 'Wings',
    sectionGroup: 'All-Time Favorites',
    description: 'All-Time Favorites — Wings (6 pcs).',
    verificationNote:
      'Verification note: Preserved exact supplied name "Fire Money Wings — 6 pcs" at Rs. 550 (printed sheet reads "Fire Honey Wings" at Rs. 560).',
    image: '/assets/dishes/fire-honey-wings.jpg',
    alt: 'Fire Money Wings 6 pieces glazed crispy chicken wings',
    badge: '6 pcs',
    badgeColor: 'gold',
    mobileTag: '6 pcs Wings',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: WINGS_WRAPS_ADDONS,
  },
  {
    id: 'buffalo-wings',
    name: 'Buffalo — 6 pcs',
    price: 580,
    category: 'wings',
    categoryLabel: 'Wings',
    sectionGroup: 'All-Time Favorites',
    description: 'All-Time Favorites — Wings (6 pcs).',
    verificationNote:
      'Verification note: Listed as Rs. 580 in supplied menu text (printed menu sheet lists Rs. 560 — please confirm at order).',
    image: '/assets/dishes/buffalo-wings.jpg',
    alt: 'Buffalo 6 pieces chicken wings tossed in tangy spicy buffalo sauce',
    badge: '6 pcs',
    badgeColor: 'red',
    mobileTag: '6 pcs Wings',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: WINGS_WRAPS_ADDONS,
  },

  // ==========================================================
  // A. ALL-TIME FAVORITES — WRAPS
  // ==========================================================
  {
    id: 'wrapstar',
    name: 'Wrapstar',
    price: 720,
    category: 'wraps',
    categoryLabel: 'Wraps',
    sectionGroup: 'All-Time Favorites',
    description: 'All-Time Favorites — Wraps.',
    image: '/assets/dishes/wrapstar.jpg',
    alt: 'Wrapstar crispy chicken tortilla wrap wrapped in Fry Days red and white checkered paper',
    badge: 'All-Time Favorite',
    badgeColor: 'red',
    mobileTag: 'Wraps',
    prepTime: '8–10 mins',
    spiceOptions: true,
    addons: WINGS_WRAPS_ADDONS,
  },
  {
    id: 'hot-grilled',
    name: 'Hot Grilled',
    price: 720,
    category: 'wraps',
    categoryLabel: 'Wraps',
    sectionGroup: 'All-Time Favorites',
    description: 'All-Time Favorites — Wraps.',
    image: '/assets/dishes/hot-grilled.jpg',
    alt: 'Hot Grilled char-grilled chicken tortilla wrap wrapped in Fry Days checkered paper',
    badge: 'Grilled Wrap',
    badgeColor: 'amber',
    mobileTag: 'Wraps',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: WINGS_WRAPS_ADDONS,
  },

  // ==========================================================
  // A. ALL-TIME FAVORITES — CHIPS & WINGS
  // ==========================================================
  {
    id: 'chips-and-wings-8pcs',
    name: '8 pcs, Classic Wings and Small Fries',
    price: 760,
    category: 'chips-and-wings',
    categoryLabel: 'Chips & Wings',
    sectionGroup: 'All-Time Favorites',
    description: 'Chips & Wings — 8 pcs Classic Wings and Small Fries.',
    comboContents: ['8 pcs Classic Wings', 'Small Fries'],
    image: '/assets/dishes/chips-and-wings.jpg',
    alt: '8 pcs Classic Wings and Small Fries served in a red Fry Days bucket',
    badge: '8 pcs + Small Fries',
    badgeColor: 'red',
    mobileTag: '8 pcs + Small Fries',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: WINGS_WRAPS_ADDONS,
  },

  // ==========================================================
  // B. INJECTED CHICKEN BROAST
  // ==========================================================
  {
    id: 'quarter-broast',
    name: 'Quarter Broast',
    price: 720,
    category: 'chicken-broast',
    categoryLabel: 'Injected Chicken Broast',
    sectionGroup: 'Injected Chicken Broast',
    description: '1 THIGH, 1 LEG / 1 CHEST, 1 WING | 1 DIP, 1 BUN, FRIES.',
    comboContents: ['1 Thigh, 1 Leg / 1 Chest, 1 Wing', '1 Dip', '1 Bun', 'Fries'],
    image: '/assets/dishes/quarter-broast.jpg',
    alt: 'Quarter Broast platter with 2 pieces injected crispy chicken, fries, bun, and garlic dip',
    badge: '2 Pcs + Bun & Fries',
    badgeColor: 'red',
    mobileTag: 'Quarter Broast',
    prepTime: '12–15 mins',
    spiceOptions: true,
    addons: BROAST_ADDONS,
  },
  {
    id: 'half-broast',
    name: 'Half Broast',
    price: 1320,
    category: 'chicken-broast',
    categoryLabel: 'Injected Chicken Broast',
    sectionGroup: 'Injected Chicken Broast',
    description: '1 THIGH, 1 LEG, 1 CHEST, 1 WING | 1 DIP, 1 BUN, FRIES.',
    comboContents: ['1 Thigh, 1 Leg, 1 Chest, 1 Wing', '1 Dip', '1 Bun', 'Fries'],
    image: '/assets/dishes/half-broast.jpg',
    alt: 'Half Broast platter with 4 pieces injected crispy chicken, fries, bun, and dip',
    badge: '4 Pcs + Bun & Fries',
    badgeColor: 'gold',
    mobileTag: 'Half Broast',
    prepTime: '12–15 mins',
    spiceOptions: true,
    addons: BROAST_ADDONS,
  },
  {
    id: 'full-broast',
    name: 'Full Broast',
    price: 2490,
    category: 'chicken-broast',
    categoryLabel: 'Injected Chicken Broast',
    sectionGroup: 'Injected Chicken Broast',
    description: '2 THIGH, 2 LEG, 2 CHEST, 2 WING | 2 DIP, 2 BUN, FRIES.',
    comboContents: ['2 Thigh, 2 Leg, 2 Chest, 2 Wing', '2 Dip', '2 Bun', 'Fries'],
    image: '/assets/dishes/injected-chicken-broast.jpg',
    alt: 'Full Broast platter with 8 pieces injected crispy chicken, 2 buns, 2 dips, and fries',
    badge: '8 Pcs + 2 Buns & Fries',
    badgeColor: 'red',
    mobileTag: 'Full Broast',
    prepTime: '15–18 mins',
    spiceOptions: true,
    addons: BROAST_ADDONS,
  },
  {
    id: 'two-full-broast',
    name: '2 Full Broast',
    price: 4690,
    category: 'chicken-broast',
    categoryLabel: 'Injected Chicken Broast',
    sectionGroup: 'Injected Chicken Broast',
    description: '16 PCS, 4 DIP, 4 BUN, FRIES.',
    comboContents: ['16 Pcs', '4 Dip', '4 Bun', 'Fries'],
    image: '/assets/dishes/two-full-broast.jpg',
    alt: '2 Full Broast platter with 16 pieces injected crispy chicken, 4 buns, 4 dips, and fries',
    badge: '16 Pcs Platter',
    badgeColor: 'gold',
    mobileTag: '16 Pcs + 4 Buns',
    prepTime: '18–20 mins',
    spiceOptions: true,
    addons: BROAST_ADDONS,
  },
  {
    id: 'three-full-broast',
    name: '3 Full Broast',
    price: 6890,
    category: 'chicken-broast',
    categoryLabel: 'Injected Chicken Broast',
    sectionGroup: 'Injected Chicken Broast',
    description: '32 PCS, 6 DIP, 6 BUN, FRIES.',
    comboContents: ['32 Pcs', '6 Dip', '6 Bun', 'Fries'],
    verificationNote:
      'Quantity confirmation note: Printed menu lists "32 PCS, 6 DIP, 6 BUN, FRIES" (note: 3 × 8-pc Full Broast = 24 pcs mathematically — please confirm 24 vs. 32 pcs with restaurant when ordering).',
    image: '/assets/dishes/three-full-broast.jpg',
    alt: '3 Full Broast family party platter with crispy injected chicken broast, 6 buns, 6 dips, and fries',
    badge: '32 Pcs Listed',
    badgeColor: 'red',
    mobileTag: '32 Pcs + 6 Buns',
    prepTime: '20–25 mins',
    spiceOptions: true,
    addons: BROAST_ADDONS,
  },

  // ==========================================================
  // C. AWESOME FRIES — HAND-CUT FRIES
  // ==========================================================
  {
    id: 'plain-hand-cut-fries',
    name: 'Plain',
    price: 300,
    category: 'hand-cut-fries',
    categoryLabel: 'Hand-Cut Fries',
    sectionGroup: 'Awesome Fries',
    description: 'Hand-Cut Fries — Plain. Available in Small (Rs. 300), Regular (Rs. 450), and Large (Rs. 550).',
    sizes: [
      { id: 'small', label: 'Small', price: 300 },
      { id: 'regular', label: 'Regular', price: 450 },
      { id: 'large', label: 'Large', price: 550 },
    ],
    image: '/assets/dishes/plain-handcut-fries.jpg',
    alt: 'Plain Hand-Cut Fries served in a red Fry Days cup',
    mobileTag: 'Small / Reg / Large',
    prepTime: '6–8 mins',
    spiceOptions: false,
    addons: FRIES_ADDONS,
  },
  {
    id: 'masala-hand-cut-fries',
    name: 'Masala',
    price: 320,
    category: 'hand-cut-fries',
    categoryLabel: 'Hand-Cut Fries',
    sectionGroup: 'Awesome Fries',
    description: 'Hand-Cut Fries — Masala. Available in Small (Rs. 320), Regular (Rs. 470), and Large (Rs. 570).',
    sizes: [
      { id: 'small', label: 'Small', price: 320 },
      { id: 'regular', label: 'Regular', price: 470 },
      { id: 'large', label: 'Large', price: 570 },
    ],
    image: '/assets/dishes/masala-handcut-fries.jpg',
    alt: 'Masala Hand-Cut Fries seasoned with spice blend in a red Fry Days cup',
    mobileTag: 'Small / Reg / Large',
    prepTime: '6–8 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },

  // ==========================================================
  // C. AWESOME FRIES — SIGNATURE FRIES
  // ==========================================================
  {
    id: 'garlic-mayo-fries',
    name: 'Garlic Mayo',
    price: 390,
    category: 'signature-fries',
    categoryLabel: 'Signature Fries',
    sectionGroup: 'Awesome Fries',
    description: 'Signature Fries — Garlic Mayo. Available in Small (Rs. 390) and Regular (Rs. 520).',
    sizes: [
      { id: 'small', label: 'Small', price: 390 },
      { id: 'regular', label: 'Regular', price: 520 },
    ],
    image: '/assets/dishes/garlic-mayo-fries.jpg',
    alt: 'Garlic Mayo Signature Fries topped with creamy white garlic mayonnaise in a Fry Days cup',
    mobileTag: 'Small / Regular',
    prepTime: '7–9 mins',
    spiceOptions: false,
    addons: FRIES_ADDONS,
  },
  {
    id: 'hot-garlic-mayo-fries',
    name: 'Hot Garlic Mayo',
    price: 390,
    category: 'signature-fries',
    categoryLabel: 'Signature Fries',
    sectionGroup: 'Awesome Fries',
    description: 'Signature Fries — Hot Garlic Mayo. Available in Small (Rs. 390) and Regular (Rs. 520).',
    sizes: [
      { id: 'small', label: 'Small', price: 390 },
      { id: 'regular', label: 'Regular', price: 520 },
    ],
    image: '/assets/dishes/hot-garlic-mayo-fries.jpg',
    alt: 'Hot Garlic Mayo Signature Fries topped with spicy chili garlic mayo in a Fry Days cup',
    mobileTag: 'Small / Regular',
    prepTime: '7–9 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },

  // ==========================================================
  // C. AWESOME FRIES — TWISTO FRIES
  // ==========================================================
  {
    id: 'twisto-fries',
    name: 'Twisto Fries',
    price: 390,
    category: 'twisto-fries',
    categoryLabel: 'Twisto Fries',
    sectionGroup: 'Awesome Fries',
    description: 'Twisto Fries — Available in Small (Rs. 390), Regular (Rs. 520), and Large (Rs. 690).',
    sizes: [
      { id: 'small', label: 'Small', price: 390 },
      { id: 'regular', label: 'Regular', price: 520 },
      { id: 'large', label: 'Large', price: 690 },
    ],
    image: '/assets/dishes/twisto-fries.jpg',
    alt: 'Twisto Fries golden spiral curly fries in a red Fry Days cup',
    mobileTag: 'Small / Reg / Large',
    prepTime: '8–10 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },

  // ==========================================================
  // C. AWESOME FRIES — LOADED FRIES
  // ==========================================================
  {
    id: 'frydays-special-loaded',
    name: "Fryday's Special",
    price: 760,
    category: 'loaded-fries',
    categoryLabel: 'Loaded Fries',
    sectionGroup: 'Awesome Fries',
    description: "Loaded Fries — Fryday's Special. Available in Regular (Rs. 760) and Large (Rs. 990).",
    sizes: [
      { id: 'regular', label: 'Regular', price: 760 },
      { id: 'large', label: 'Large', price: 990 },
    ],
    image: '/assets/dishes/frydays-special-loaded.jpg',
    alt: "Fryday's Special Loaded Fries topped with chicken chunks, sauces, and sliced jalapenos",
    mobileTag: 'Regular / Large',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },
  {
    id: 'flaming-hot-buffalo-loaded',
    name: 'Flaming Hot Buffalo',
    price: 760,
    category: 'loaded-fries',
    categoryLabel: 'Loaded Fries',
    sectionGroup: 'Awesome Fries',
    description: 'Loaded Fries — Flaming Hot Buffalo. Available in Regular (Rs. 760) and Large (Rs. 990).',
    sizes: [
      { id: 'regular', label: 'Regular', price: 760 },
      { id: 'large', label: 'Large', price: 990 },
    ],
    image: '/assets/dishes/flaming-hot-buffalo-loaded.jpg',
    alt: 'Flaming Hot Buffalo Loaded Fries with buffalo sauce, melted cheese, chicken, and jalapenos',
    mobileTag: 'Regular / Large',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },
  {
    id: 'crispy-attack-loaded',
    name: 'Crispy Attack',
    price: 760,
    category: 'loaded-fries',
    categoryLabel: 'Loaded Fries',
    sectionGroup: 'Awesome Fries',
    description: 'Loaded Fries — Crispy Attack. Available in Regular (Rs. 760) and Large (Rs. 990).',
    sizes: [
      { id: 'regular', label: 'Regular', price: 760 },
      { id: 'large', label: 'Large', price: 990 },
    ],
    image: '/assets/dishes/crispy-attack-loaded.jpg',
    alt: 'Crispy Attack Loaded Fries topped with crunchy fried chicken pieces, sauces, and jalapenos',
    mobileTag: 'Regular / Large',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },
  {
    id: 'smokey-grilled-loaded',
    name: 'Smokey Grilled',
    price: 790,
    category: 'loaded-fries',
    categoryLabel: 'Loaded Fries',
    sectionGroup: 'Awesome Fries',
    description: 'Loaded Fries — Smokey Grilled. Available in Regular (Rs. 790) and Large (Rs. 1,020).',
    sizes: [
      { id: 'regular', label: 'Regular', price: 790 },
      { id: 'large', label: 'Large', price: 1020 },
    ],
    image: '/assets/dishes/smokey-grilled-loaded.jpg',
    alt: 'Smokey Grilled Loaded Fries topped with char-grilled chicken, black olives, and smoky sauce',
    mobileTag: 'Regular / Large',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },

  // ==========================================================
  // C. AWESOME FRIES — PIZZA FRIES
  // ==========================================================
  {
    id: 'pizza-fries',
    name: 'Pizza Fries',
    price: 820,
    category: 'pizza-fries',
    categoryLabel: 'Pizza Fries',
    sectionGroup: 'Awesome Fries',
    description: 'Pizza Fries — Available in Regular (Rs. 820) and Large (Rs. 1,020).',
    sizes: [
      { id: 'regular', label: 'Regular', price: 820 },
      { id: 'large', label: 'Large', price: 1020 },
    ],
    image: '/assets/dishes/pizza-fries.jpg',
    alt: 'Pizza Fries loaded with melted cheese, black olives, bell peppers, and pizza sauce in a Fry Days bowl',
    mobileTag: 'Regular / Large',
    prepTime: '12–14 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },

  // ==========================================================
  // D. COMBOS
  // ==========================================================
  {
    id: 'twin-zinger-combo',
    name: 'Twin Zinger Combo',
    price: 1200,
    category: 'special-combos',
    categoryLabel: 'Combos',
    sectionGroup: 'Combos',
    description: '2 ZESTY ZINGER, SMALL FRIES, 500ML DRINK.',
    comboContents: ['2 Zesty Zinger', 'Small Fries', '500ml Drink'],
    verificationNote:
      'Verification note: Listed as Rs. 1,200 in supplied menu text (printed combo sheet lists Rs. 1,290 — please confirm at order).',
    image: '/assets/dishes/twin-zinger-combo.jpg',
    alt: 'Twin Zinger Combo showing 2 Zesty Zinger burgers, small fries, and 500ml soft drink bottle',
    badge: 'Combo',
    badgeColor: 'red',
    mobileTag: '2 Zesty Zinger + Fries + 500ml',
    prepTime: '12–15 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },
  {
    id: 'fantastic-four',
    name: 'Fantastic Four',
    price: 2490,
    category: 'special-combos',
    categoryLabel: 'Combos',
    sectionGroup: 'Combos',
    description: '2 ZESTY ZINGER, 2 FIRE CRACKER BURGER, REGULAR FRIES, 1LTR DRINK.',
    comboContents: ['2 Zesty Zinger', '2 Fire Cracker Burger', 'Regular Fries', '1Ltr Drink'],
    image: '/assets/dishes/fantastic-four-combo.jpg',
    alt: 'Fantastic Four combo showing 2 Zesty Zinger burgers, 2 Fire Cracker burgers, regular fries, and 1 liter drink',
    badge: '4 Burgers + Fries + 1L',
    badgeColor: 'red',
    mobileTag: '4 Burgers + Reg Fries + 1L',
    prepTime: '15–18 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },
  {
    id: 'full-house-feast',
    name: 'Full House Feast',
    price: 3490,
    category: 'special-combos',
    categoryLabel: 'Combos',
    sectionGroup: 'Combos',
    description: 'FULL INJ. BROAST, 2 ZESTY ZINGER, SMALL FRIES, 1 LTR DRINK.',
    comboContents: ['Full Inj. Broast', '2 Zesty Zinger', 'Small Fries', '1 Ltr Drink'],
    image: '/assets/dishes/full-house-feast.jpg',
    alt: 'Full House Feast showing Full Injected Broast platter, 2 Zesty Zinger burgers, small fries, and 1 liter drink',
    badge: 'Family Feast',
    badgeColor: 'gold',
    mobileTag: 'Full Broast + 2 Zingers + 1L',
    prepTime: '18–20 mins',
    spiceOptions: true,
    addons: BROAST_ADDONS,
  },
  {
    id: 'double-treat-combo',
    name: 'Double Treat Combo',
    price: 1720,
    category: 'special-combos',
    categoryLabel: 'Combos',
    sectionGroup: 'Combos',
    description: '2 ZESTY ZINGER, 2 PC BROAST, SMALL FRIES, 500ML DRINK.',
    comboContents: ['2 Zesty Zinger', '2 Pc Broast', 'Small Fries', '500ml Drink'],
    image: '/assets/dishes/double-treat-combo.jpg',
    alt: 'Double Treat Combo showing 2 Zesty Zinger burgers, 2 pieces chicken broast, small fries, and 500ml drink',
    badge: 'Burgers + Broast',
    badgeColor: 'gold',
    mobileTag: '2 Zingers + 2 Pc Broast',
    prepTime: '14–16 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },
  {
    id: 'wrap-n-wing-feast',
    name: 'Wrap N Wing Feast',
    price: 1790,
    category: 'special-combos',
    categoryLabel: 'Combos',
    sectionGroup: 'Combos',
    description: '2 WRAPSTAR, WINGS 6PC, SMAL FRIES.',
    comboContents: ['2 Wrapstar', 'Wings 6pc', 'Smal Fries'],
    image: '/assets/dishes/wrap-n-wing-feast.jpg',
    alt: 'Wrap N Wing Feast showing 2 Wrapstar wraps, 6 crispy wings, and small fries',
    badge: 'Wraps + Wings',
    badgeColor: 'red',
    mobileTag: '2 Wrapstar + 6pc Wings + Fries',
    prepTime: '12–15 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },

  // ==========================================================
  // E. LUNCH COMBOS — 12 PM TO 4 PM
  // ==========================================================
  {
    id: 'lunch-combo-1',
    name: 'Combo 1',
    price: 550,
    category: 'lunch-combos',
    categoryLabel: 'Lunch Combos — 12 PM to 4 PM',
    sectionGroup: 'Lunch Combos — 12 PM to 4 PM',
    description: 'Lunch Combos — 12 PM to 4 PM (Combo 1 — Rs. 550).',
    timeWindow: 'Lunch Combos — 12 PM to 4 PM',
    verificationNote:
      'Verification required: Exact included items & drink size for Lunch Combo 1 were not attached in the image sheets — please confirm included items on WhatsApp.',
    image: '/assets/dishes/lunch-zinger-combo.jpg',
    alt: 'Lunch Combo 1 midday meal with crispy chicken burger, fries, and soft drink',
    badge: '12 PM to 4 PM',
    badgeColor: 'amber',
    mobileTag: 'Lunch Combo 1',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: BURGER_ADDONS,
  },
  {
    id: 'lunch-combo-2',
    name: 'Combo 2',
    price: 850,
    category: 'lunch-combos',
    categoryLabel: 'Lunch Combos — 12 PM to 4 PM',
    sectionGroup: 'Lunch Combos — 12 PM to 4 PM',
    description: 'Lunch Combos — 12 PM to 4 PM (Combo 2 — Rs. 850).',
    timeWindow: 'Lunch Combos — 12 PM to 4 PM',
    verificationNote:
      'Verification required: Exact included items & drink size for Lunch Combo 2 were not attached in the image sheets — please confirm included items on WhatsApp.',
    image: '/assets/dishes/lunch-broast-combo.jpg',
    alt: 'Lunch Combo 2 midday meal with chicken broast, bun, fries, dip, and soft drink',
    badge: '12 PM to 4 PM',
    badgeColor: 'amber',
    mobileTag: 'Lunch Combo 2',
    prepTime: '12–15 mins',
    spiceOptions: true,
    addons: BROAST_ADDONS,
  },
  {
    id: 'lunch-combo-3',
    name: 'Combo 3',
    price: 890,
    category: 'lunch-combos',
    categoryLabel: 'Lunch Combos — 12 PM to 4 PM',
    sectionGroup: 'Lunch Combos — 12 PM to 4 PM',
    description: 'Lunch Combos — 12 PM to 4 PM (Combo 3 — Rs. 890).',
    timeWindow: 'Lunch Combos — 12 PM to 4 PM',
    verificationNote:
      'Verification required: Exact included items & drink size for Lunch Combo 3 were not attached in the image sheets — please confirm included items on WhatsApp.',
    image: '/assets/dishes/lunch-combo-3.jpg',
    alt: 'Lunch Combo 3 midday meal with double chicken burger, curly fries, and chilled cola',
    badge: '12 PM to 4 PM',
    badgeColor: 'amber',
    mobileTag: 'Lunch Combo 3',
    prepTime: '12–15 mins',
    spiceOptions: true,
    addons: BURGER_ADDONS,
  },
  {
    id: 'lunch-combo-4',
    name: 'Combo 4',
    price: 660,
    category: 'lunch-combos',
    categoryLabel: 'Lunch Combos — 12 PM to 4 PM',
    sectionGroup: 'Lunch Combos — 12 PM to 4 PM',
    description: 'Lunch Combos — 12 PM to 4 PM (Combo 4 — Rs. 660).',
    timeWindow: 'Lunch Combos — 12 PM to 4 PM',
    verificationNote:
      'Verification required: Exact included items & drink size for Lunch Combo 4 were not attached in the image sheets — please confirm included items on WhatsApp.',
    image: '/assets/dishes/lunch-combo-4.jpg',
    alt: 'Lunch Combo 4 midday meal with grilled chicken wrap, golden fries, and chilled drink',
    badge: '12 PM to 4 PM',
    badgeColor: 'amber',
    mobileTag: 'Lunch Combo 4',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: WINGS_WRAPS_ADDONS,
  },

  // ==========================================================
  // F. MIDNIGHT COMBOS — 11 PM TO 2 AM
  // ==========================================================
  {
    id: 'midnight-combo-1',
    name: 'Combo 1',
    price: 560,
    category: 'midnight-combos',
    categoryLabel: 'Midnight Combos — 11 PM to 2 AM',
    sectionGroup: 'Midnight Combos — 11 PM to 2 AM',
    description: 'Midnight Combos — 11 PM to 2 AM (Combo 1 — Rs. 560).',
    timeWindow: 'Midnight Combos — 11 PM to 2 AM',
    verificationNote:
      'Verification required: Exact included items & drink size for Midnight Combo 1 were not attached in the image sheets — please confirm included items on WhatsApp.',
    image: '/assets/dishes/midnight-fire-combo.jpg',
    alt: 'Midnight Combo 1 late-night meal with spicy chicken burger, fries, and soft drink',
    badge: '11 PM to 2 AM',
    badgeColor: 'red',
    mobileTag: 'Midnight Combo 1',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: BURGER_ADDONS,
  },
  {
    id: 'midnight-combo-2',
    name: 'Combo 2',
    price: 720,
    category: 'midnight-combos',
    categoryLabel: 'Midnight Combos — 11 PM to 2 AM',
    sectionGroup: 'Midnight Combos — 11 PM to 2 AM',
    description: 'Midnight Combos — 11 PM to 2 AM (Combo 2 — Rs. 720).',
    timeWindow: 'Midnight Combos — 11 PM to 2 AM',
    verificationNote:
      'Verification required: Exact included items & drink size for Midnight Combo 2 were not attached in the image sheets — please confirm included items on WhatsApp.',
    image: '/assets/dishes/midnight-wrap-combo.jpg',
    alt: 'Midnight Combo 2 late-night meal with crispy chicken wrap, fries, and soft drink',
    badge: '11 PM to 2 AM',
    badgeColor: 'red',
    mobileTag: 'Midnight Combo 2',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: WINGS_WRAPS_ADDONS,
  },
  {
    id: 'midnight-combo-3',
    name: 'Combo 3',
    price: 700,
    category: 'midnight-combos',
    categoryLabel: 'Midnight Combos — 11 PM to 2 AM',
    sectionGroup: 'Midnight Combos — 11 PM to 2 AM',
    description: 'Midnight Combos — 11 PM to 2 AM (Combo 3 — Rs. 700).',
    timeWindow: 'Midnight Combos — 11 PM to 2 AM',
    verificationNote:
      'Verification required: Exact included items & drink size for Midnight Combo 3 were not attached in the image sheets — please confirm included items on WhatsApp.',
    image: '/assets/dishes/midnight-combo-3.jpg',
    alt: 'Midnight Combo 3 late-night meal with char-grilled burger, wings, fries, and cola',
    badge: '11 PM to 2 AM',
    badgeColor: 'red',
    mobileTag: 'Midnight Combo 3',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: BURGER_ADDONS,
  },

  // ==========================================================
  // G, H, J. PROMOTIONAL DEALS (THE BOSS DEAL, AZADI DEAL, WACKY WEDNESDAY)
  // ==========================================================
  {
    id: 'the-boss-deal',
    name: 'The Boss Deal',
    price: 2090,
    originalPrice: 2690,
    promoBanner: 'Promotional Price Rs. 2,090 (Original Price Rs. 2,690 — Save Rs. 600)',
    category: 'special-deals',
    categoryLabel: 'The Boss Deal',
    sectionGroup: 'Promotional Deals',
    description:
      'The Boss Deal: Includes Half Broast, Charcoal Fire Grill Burger, and Fire Cracking Burger. Promotional price Rs. 2,090 (Original price Rs. 2,690).',
    comboContents: ['Half Broast', 'Charcoal Fire Grill Burger', 'Fire Cracking Burger'],
    image: '/assets/dishes/the-boss-deal.jpg',
    alt: 'The Boss Deal featuring Half Broast, Charcoal Fire Grill Burger, and Fire Cracking Burger',
    badge: 'Save Rs. 600',
    badgeColor: 'gold',
    mobileTag: 'Promo Rs. 2,090 (Orig. Rs. 2,690)',
    prepTime: '15–18 mins',
    spiceOptions: true,
    addons: BROAST_ADDONS,
  },
  {
    id: 'azadi-deal',
    name: 'Azadi Deal — Full Chicken Broast',
    price: 2490,
    promoBanner: 'GET LOADED FRIES FREE! Choose any eligible Loaded Fries variety',
    category: 'special-deals',
    categoryLabel: 'Azadi Deal',
    sectionGroup: 'Promotional Deals',
    description:
      'Azadi Deal: Full Chicken Broast (Rs. 2,490) — Get Loaded Fries FREE! Select your eligible Loaded Fries variety below.',
    comboContents: [
      'Full Chicken Broast (2 Thigh, 2 Leg, 2 Chest, 2 Wing, 2 Dip, 2 Bun, Fries)',
      'Get Loaded Fries FREE! (Choose variety)',
    ],
    sizes: [
      { id: 'free-frydays-special', label: "Free: Fryday's Special", price: 2490 },
      { id: 'free-flaming-buffalo', label: 'Free: Flaming Hot Buffalo', price: 2490 },
      { id: 'free-crispy-attack', label: 'Free: Crispy Attack', price: 2490 },
      { id: 'free-smokey-grilled', label: 'Free: Smokey Grilled', price: 2490 },
    ],
    image: '/assets/dishes/azadi-deal.jpg',
    alt: 'Azadi Deal featuring Full Chicken Broast with Free Loaded Fries',
    badge: 'Get Loaded Fries FREE!',
    badgeColor: 'emerald',
    mobileTag: 'Get Loaded Fries FREE!',
    prepTime: '15–18 mins',
    spiceOptions: true,
    addons: BROAST_ADDONS,
  },
  {
    id: 'wacky-wednesday-broast',
    name: 'Wacky Wednesday — Full Broast',
    price: 2290,
    originalPrice: 2490,
    promoBanner: 'Wacky Wednesday Promotion — Full Broast Rs. 2,290',
    category: 'special-deals',
    categoryLabel: 'Wacky Wednesday',
    sectionGroup: 'Promotional Deals',
    description:
      'Wacky Wednesday: Full Broast — 2 THIGH, 2 LEG, 2 CHEST, 2 WING | 2 DIP, 2 BUN, FRIES.',
    comboContents: ['2 Thigh, 2 Leg, 2 Chest, 2 Wing', '2 Dip', '2 Bun', 'Fries'],
    timeWindow: 'Wacky Wednesday Promotional Offer',
    image: '/assets/dishes/wacky-wednesday-broast.jpg',
    alt: 'Wacky Wednesday Full Broast platter with 8 pieces chicken, 2 dips, 2 buns, and fries',
    badge: 'Wacky Wednesday',
    badgeColor: 'red',
    mobileTag: 'Wacky Wednesday',
    prepTime: '15–18 mins',
    spiceOptions: true,
    addons: BROAST_ADDONS,
  },

  // ==========================================================
  // I. EXTRAS (BUN, CHEESE SLICE, 6 DIPS, ADD ON)
  // ==========================================================
  {
    id: 'extra-dinner-bun',
    name: 'Bun',
    price: 60,
    category: 'extras-and-dips',
    categoryLabel: 'Extras',
    sectionGroup: 'Extras & Dips',
    description: 'Extras — Bun (Rs. 60).',
    image: '/assets/dishes/extra-dinner-bun.jpg',
    alt: 'Freshly toasted golden broast bun',
    mobileTag: 'Extra',
    prepTime: '2 mins',
    spiceOptions: false,
    addons: [],
  },
  {
    id: 'extra-cheese-slice',
    name: 'Cheese Slice',
    price: 70,
    category: 'extras-and-dips',
    categoryLabel: 'Extras',
    sectionGroup: 'Extras & Dips',
    description: 'Extras — Cheese Slice (Rs. 70).',
    image: '/assets/dishes/cheese-slice.jpg',
    alt: 'Rich golden cheddar cheese slice',
    mobileTag: 'Extra',
    prepTime: '1 min',
    spiceOptions: false,
    addons: [],
  },
  {
    id: 'garlic-mayo-dip',
    name: 'Garlic Mayo (Dip)',
    price: 80,
    category: 'extras-and-dips',
    categoryLabel: 'Dips',
    sectionGroup: 'Extras & Dips',
    description: 'Extras — Dips: Garlic Mayo (Rs. 80).',
    image: '/assets/dishes/garlic-mayo-dip.jpg',
    alt: 'Garlic Mayo dip served in a white dipping bowl',
    mobileTag: 'Dip — Rs. 80',
    prepTime: '1 min',
    spiceOptions: false,
    addons: [],
  },
  {
    id: 'honey-mustard-dip',
    name: 'Honey Mustard (Dip)',
    price: 80,
    category: 'extras-and-dips',
    categoryLabel: 'Dips',
    sectionGroup: 'Extras & Dips',
    description: 'Extras — Dips: Honey Mustard (Rs. 80).',
    image: '/assets/dishes/honey-mustard-dip.jpg',
    alt: 'Honey Mustard dip served in a white dipping bowl',
    mobileTag: 'Dip — Rs. 80',
    prepTime: '1 min',
    spiceOptions: false,
    addons: [],
  },
  {
    id: 'cocktail-dip',
    name: 'Cocktail (Dip)',
    price: 80,
    category: 'extras-and-dips',
    categoryLabel: 'Dips',
    sectionGroup: 'Extras & Dips',
    description: 'Extras — Dips: Cocktail (Rs. 80).',
    image: '/assets/dishes/cocktail-dip.jpg',
    alt: 'Cocktail dip served in a white dipping bowl',
    mobileTag: 'Dip — Rs. 80',
    prepTime: '1 min',
    spiceOptions: false,
    addons: [],
  },
  {
    id: 'hot-garlic-mayo-dip',
    name: 'Hot Garlic Mayo (Dip)',
    price: 80,
    category: 'extras-and-dips',
    categoryLabel: 'Dips',
    sectionGroup: 'Extras & Dips',
    description: 'Extras — Dips: Hot Garlic Mayo (Rs. 80).',
    image: '/assets/dishes/hot-garlic-mayo-dip.jpg',
    alt: 'Hot Garlic Mayo spicy dip served in a white dipping bowl',
    mobileTag: 'Dip — Rs. 80',
    prepTime: '1 min',
    spiceOptions: false,
    addons: [],
  },
  {
    id: 'fiery-buffalo-dip',
    name: 'Buffalo Sauce (Dip)',
    price: 80,
    category: 'extras-and-dips',
    categoryLabel: 'Dips',
    sectionGroup: 'Extras & Dips',
    description: 'Extras — Dips: Buffalo Sauce (Rs. 80).',
    image: '/assets/dishes/fiery-buffalo-dip.jpg',
    alt: 'Buffalo Sauce dip served in a white dipping bowl',
    mobileTag: 'Dip — Rs. 80',
    prepTime: '1 min',
    spiceOptions: false,
    addons: [],
  },
  {
    id: 'smoky-sauce-dip',
    name: 'Smoky Sauce (Dip)',
    price: 80,
    category: 'extras-and-dips',
    categoryLabel: 'Dips',
    sectionGroup: 'Extras & Dips',
    description: 'Extras — Dips: Smoky Sauce (Rs. 80).',
    image: '/assets/dishes/smoky-sauce-dip.jpg',
    alt: 'Smoky Sauce dip served in a white dipping bowl',
    mobileTag: 'Dip — Rs. 80',
    prepTime: '1 min',
    spiceOptions: false,
    addons: [],
  },
  {
    id: 'meal-addon',
    name: 'ADD ON (Fries + Drink)',
    price: 240,
    category: 'extras-and-dips',
    categoryLabel: 'Extras',
    sectionGroup: 'Extras & Dips',
    description: 'All-Time Favorites — ADD ON: Fries + Drink (Rs. 240).',
    image: '/assets/dishes/meal-addon.jpg',
    alt: 'ADD ON Fries in a Fry Days cup and soft drink bottle',
    badge: 'Meal Add-On',
    badgeColor: 'red',
    mobileTag: 'Fries + Drink',
    prepTime: '5 mins',
    spiceOptions: false,
    addons: [],
  },

  // ==========================================================
  // K. BEVERAGES
  // ==========================================================
  {
    id: 'cold-drink-350ml',
    name: 'Cold Drink — 350 ml',
    price: 90,
    category: 'beverages-and-tea',
    categoryLabel: 'Beverages',
    sectionGroup: 'Beverages',
    description: 'Beverages — Cold Drink — 350 ml (Rs. 90).',
    image: '/assets/dishes/cold-drink-350ml.jpg',
    alt: 'Chilled 350 ml Cold Drink bottle with ice glass',
    mobileTag: '350 ml',
    prepTime: '1 min',
    spiceOptions: false,
    addons: [],
  },
  {
    id: 'chilled-soft-drink-500ml',
    name: 'Cold Drink — 500 ml',
    price: 160,
    category: 'beverages-and-tea',
    categoryLabel: 'Beverages',
    sectionGroup: 'Beverages',
    description: 'Beverages — Cold Drink — 500 ml (Rs. 160).',
    image: '/assets/dishes/soft-drink-500ml.jpg',
    alt: 'Chilled 500 ml Cold Drink bottle',
    mobileTag: '500 ml',
    prepTime: '1 min',
    spiceOptions: false,
    addons: [],
  },
  {
    id: 'water-500ml',
    name: 'Water — 500 ml',
    price: 70,
    category: 'beverages-and-tea',
    categoryLabel: 'Beverages',
    sectionGroup: 'Beverages',
    description: 'Beverages — Water — 500 ml (Rs. 70).',
    image: '/assets/dishes/water-500ml.jpg',
    alt: 'Chilled 500 ml bottled mineral water with glass of ice',
    mobileTag: '500 ml',
    prepTime: '1 min',
    spiceOptions: false,
    addons: [],
  },
  {
    id: 'plain-tea',
    name: 'Fantastic Tea — Plain Tea',
    price: 199,
    category: 'beverages-and-tea',
    categoryLabel: 'Beverages',
    sectionGroup: 'Beverages',
    description: 'Beverages — Fantastic Tea — Plain Tea (Rs. 199).',
    image: '/assets/dishes/plain-tea.jpg',
    alt: 'Steaming hot cup of Fantastic Tea — Plain Tea on a saucer',
    badge: 'Fantastic Tea',
    badgeColor: 'amber',
    mobileTag: 'Plain Tea',
    prepTime: '5 mins',
    spiceOptions: false,
    addons: [],
  },
];

export const QUALITY_PILLARS = [
  {
    icon: 'egg_alt',
    title: 'Injected Chicken Broast',
    description:
      'Quarter, Half, Full, 2 Full, and 3 Full Injected Chicken Broast platters served with golden fries, toasted buns, and signature dips.',
    accentClass: 'bg-brand-red/10 dark:bg-red-500/10 text-brand-red dark:text-red-400',
  },
  {
    icon: 'restaurant',
    title: 'Awesome Fries Collection',
    description:
      "Plain & Masala Hand-Cut Fries, Garlic Mayo & Hot Garlic Mayo Signature Fries, Twisto Fries, Pizza Fries, and 4 Loaded Fries varieties.",
    accentClass: 'bg-gold-500/10 dark:bg-gold-500/10 text-gold-600 dark:text-gold-400',
  },
  {
    icon: 'soup_kitchen',
    title: 'All-Time Favorites',
    description:
      'Zesty Zinger, Fire Cracking, Jalo Blast, Krunch Munch, Stack It Up, Charcoal Fire Grill, Wings, Chips & Wings, and Wraps.',
    accentClass: 'bg-brand-red/10 dark:bg-red-500/10 text-brand-red dark:text-red-400',
  },
  {
    icon: 'sanitizer',
    title: 'W Canal Road Location',
    description:
      'Located at Jahan E Andalus on W Canal Road, Faisalabad. Serving dine-in, takeaway, and direct WhatsApp ordering daily.',
    accentClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
];
