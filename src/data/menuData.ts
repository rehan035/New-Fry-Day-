export type MenuCategory = 'all' | 'burgers' | 'fries' | 'chicken' | 'drinks';

export interface MenuAddon {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: Exclude<MenuCategory, 'all'>;
  description: string;
  image: string;
  alt: string;
  badge?: string;
  badgeColor?: 'red' | 'gold' | 'amber';
  mobileTag: string;
  prepTime: string;
  spiceOptions?: boolean;
  addons: MenuAddon[];
}

export const RESTAURANT_INFO = {
  name: 'Fry Day',
  tagline: 'Gourmet Casual',
  phone: '+92 326 1180202',
  whatsappNumber: '923261180202',
  address: 'W Canal Road, Jahan E Andalus, Faisalabad, Punjab, Pakistan',
  shortAddress: 'W Canal Road, Jahan E Andalus',
  city: 'Faisalabad',
  hours: '12:00 PM – 3:00 AM',
  hoursShort: '12 PM - 3 AM',
  rating: '4.9 / 5.0',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fry+Day+W+Canal+Road+Jahan+E+Andalus+Faisalabad',
  logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgVPqKsjJPHYkGlvfhuKOGhbJcJ-FGdh6vve5FOSBOFV1H-orz1GiI28bwK5QQtPqeanSfVqleQp_Ms0IBPkZDDE4zznaRiFoMKWOp2LY2wERd2V15qV_jrcqHFJwMSnBShHDQL2eVt6sCDH3Jys9h2eVZ5ROcPGiEDAI5UznXoq-Mpeml5q-GhpQ6DDkh2-aQS1b7-Nj1ZJ-0VMszxUD9_0p1AEogIcC80-EWgA3HaI6_NSnuq9SO-lDu_hv2xfuVaQ',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkdUSdl72DFcDNucGWY58MaJCr0RNwAiHPETyX1iSluhaq1EOY4u1RAjbvFe4I0PZ_LIbdvxQ_TjenVzLGQ7zM_dxe1OsLO5iNtzI1RhhzI2eocXjzFSgqWG1_oyk15ThfdgsWJY-pKZGOD-r67R99nI18YYqVX0wEo9lbGu1CT-K0wD2Oxl-wy0G3lcEP_sviJ9A07iUJEdS7_KMt5t-s9bQ16CNHkeTXsP8wP1tQPudR-nJ1_w3F',
  exteriorImage: '/assets/aistudio/ChatGPT_Image_Oct_23__2026__09_57_39_PM_b006631e.png',
  interiorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZGZzpY7P3wUgQaIF0S_xpNQVotJqbraV-eg6WotQcq4DcTpPu4oS03F7BthTD3FYhProbkXfR8PERv_b9hs_USZed2m6c6EA9o8VOVXwTXiUk-FvO3ZajtQPH5Pc_wgRn_yewFLhXpDadMj6H7fdokxUVajHqXBMobTA4o3TI--HfDxM2AHv5sJ7sxHUs-hXQGjdHtnYSMF_b-0H0cdDeUvqR17GbXlcQHJgyPT-mLVX51o8kqUzg',
  mapPreviewImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC487rl5i4luuTImJ8z518T7SccStYDruncjRGpqon0GXEcNI_2XaHcdpzXgWLJJJwiMcn1WDHXhveRkZhXjMT8oW08d9OQCeVyHKYVzyvONv-rFYpWbSh0_1v6NiaONH5Unu1B8x9X1chMTN28WyHIg2Wz9HWlOIf5G5y4D3RguSVmB9QF2MgjQDb5p2LpWhr9n6ovK6tfGJNe1YP8pfhTopBVbFFBGoJVaVZppIuMSlGHeSssIrwC',
};

export const CATEGORIES: { id: MenuCategory; label: string; shortLabel: string }[] = [
  { id: 'all', label: 'All Creations', shortLabel: 'All Creations' },
  { id: 'burgers', label: 'Signature Burgers', shortLabel: 'Signature Burgers' },
  { id: 'fries', label: 'Loaded Gourmet Fries', shortLabel: 'Loaded Fries' },
  { id: 'chicken', label: 'Crispy Chicken & Wings', shortLabel: 'Fried Chicken' },
  { id: 'drinks', label: 'Artisan Shakes & Drinks', shortLabel: 'Shakes & Drinks' },
];

const BURGER_ADDONS: MenuAddon[] = [
  { id: 'combo-meal', name: 'Make it a Meal (Skin-On Fries + Soft Drink)', price: 350 },
  { id: 'extra-cheese', name: 'Extra Aged Cheddar Melt Slice', price: 120 },
  { id: 'extra-patty', name: 'Add Extra Smash Beef Patty', price: 320 },
  { id: 'jalapenos', name: 'Pickled Jalapeños & Secret Spread Dip', price: 90 },
];

const FRIES_ADDONS: MenuAddon[] = [
  { id: 'extra-cheese-lava', name: 'Extra Wisconsin Cheddar Cheese Lava', price: 150 },
  { id: 'garlic-mayo', name: 'House Garlic Mayo Dip', price: 80 },
  { id: 'nashville-drizzle', name: 'Extra Fiery Nashville Oil Drizzle', price: 90 },
];

const CHICKEN_ADDONS: MenuAddon[] = [
  { id: 'fries-drink', name: 'Add Skin-On Fries & Chilled Drink', price: 350 },
  { id: 'extra-bun', name: 'Extra Butter-Toasted Brioche Dinner Bun', price: 80 },
  { id: 'garlic-dip', name: 'Extra Creamy Garlic Herb Dip', price: 90 },
];

const DRINK_ADDONS: MenuAddon[] = [
  { id: 'whipped-cream', name: 'Extra Whipped Cream & Biscoff Crumble', price: 110 },
  { id: 'gelato-scoop', name: 'Extra Whole Milk Gelato Scoop', price: 160 },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'double-smash-melt',
    name: 'Classic Smash Double',
    price: 850,
    category: 'burgers',
    description:
      'Two seasoned smash beef patties, double cheddar cheese, dill pickles, grilled sweet onions, and house Fry Day secret spread.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCR8z_HYMVDCxUHriSc3VgnkXQ9iSw18peUixIQEFZqLL6yY2rhQ2LmMKuRPxvBxiYPdzK4mybmsGV0fE_HyXtWOz5qoIe-Lr9wWnJs8RMMmhxp2gQFqdIPb5aHtkACQds_inpyQJ-UuIWeLXd1B6lf2SEAbqswox0LdcLOhQDkZu8McO1R_TYSwDUhzClDqnhdwgUTl2_7tZeDPbzvqYOfiq9i0K--jhSvTM6bR72AIkyLlVHe-n29',
    alt: 'Juicy double smash beef patties grilled with caramelized crisp lace edges and double American melted cheese on a glazed sesame brioche bun',
    badge: "Chef's Signature",
    badgeColor: 'red',
    mobileTag: 'Brioche Bun',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: BURGER_ADDONS,
  },
  {
    id: 'crispy-zinger-supreme',
    name: 'Crispy Zinger Supreme',
    price: 690,
    category: 'burgers',
    description:
      '18-hour buttermilk-marinated whole chicken breast, extra crunchy batter, creamy ranch slaw, and tangy jalapeños.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_hRRYTgkT8Vd2g93zZZ-uBzAoO8Nr8040xGKm9vnGUfsnBEXRV7ALlVr4qfVNCw45y6xleBIGhtj8ocPHFRKMVA_Lmj7LuJ67khrDDjb8Gv-Xi-HH8KLE4EIrpXEGXBtYIzuZvQMTM4vyxZ6BHQRLifUoKuCAdJBYT_IZrUDw7f1gt9Z5yYS0hRn1S6FSiYrir0fU0n5RFEf9582q-Kx4rKkU_XL_rBSP6J1H7c5PUg_BVZXjj9QL',
    alt: 'Towering crispy golden fried chicken breast burger with crunchy iceberg lettuce, spicy sriracha mayo, and melted cheese on a glossy buttered brioche bun',
    badge: 'Bestseller',
    badgeColor: 'gold',
    mobileTag: 'Extra Crunchy',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: BURGER_ADDONS,
  },
  {
    id: 'smoky-bbq-bacon-beef',
    name: 'Smoky BBQ Bacon Beef',
    price: 950,
    category: 'burgers',
    description:
      'Pure beef patty crowned with crispy cured beef bacon strips, hickory wood BBQ reduction, and crunchy beer-battered onions.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDlV3Cx-2km9sp6XR32A3L6Bu0KMXT45NMAzI60Af6330rAOzdWy7qxElC4SWVytv0anq-VRgAY71QCg_B5T7vAzC5bflPu0TIhL9hbVn4E3VfyjdDKAjjWGcuAGQ1cTEviirmQNH3Ux9qTo0V1hQPaA33SDm4d-d2cQcGOtjYKZCowDmFjzt7kCRmMw-RqGnv7_4NyxXUFKdiFMlvPlOf03lmniDTRlao-FaSSUgD7RVJMQGMA-KWM',
    alt: 'Gourmet craft beef burger dripping with smoky hickory barbecue sauce, crisp beef bacon strips, golden crispy onion rings, and smoked gouda cheese',
    mobileTag: 'Hickory Smoked',
    prepTime: '12–15 mins',
    spiceOptions: true,
    addons: BURGER_ADDONS,
  },
  {
    id: 'truffle-mushroom-melt',
    name: 'Truffle Mushroom Melt',
    price: 980,
    category: 'burgers',
    description:
      'Pan-seared prime smash patty, butter-braised cremini mushrooms, aromatic truffle cream glaze, and melted Swiss cheese.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAL70RDuKRmG1a8NnO0FU5mxPpdJtfCnyDniFe_tfJ3rlU95xQzmQy902bN3HG4rXwqE9WczAg7KiKZ5J7IppeD61y2lxI9UFnT4EE8vWXm2C8nPxAhVxunR89AKifYXgPlRIAk2Y7D2et5eIpQS47XwEXEr2fedQJY7ohCyQOXRoYtqSDBHEmSscBcAOhc2k5cBN_lfjJKoLJc14RAKJePsPudJBJEF0FAe3EZ--0c58fg5dBtvCY3',
    alt: 'Decadent gourmet burger topped with sautéed wild portobello mushrooms, black truffle aioli, melted swiss emmental cheese on a brioche bun',
    mobileTag: 'Truffle Glaze',
    prepTime: '12–15 mins',
    spiceOptions: false,
    addons: BURGER_ADDONS,
  },
  {
    id: 'cheddar-bacon-melt-fries',
    name: 'Cheddar Bacon Melt Fries',
    price: 620,
    category: 'fries',
    description:
      'Skin-on russet fries loaded with warm Wisconsin cheddar cheese lava, smoky beef bacon crumbles, and spring onions.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3UkwBmGd7DfV7gSjcVBEYuo0ZEt-gW1Gj3w_eWSI55Kjsn_ga8yEaUKLs7hRDa1kspi2Uh40jC-3Re1zVObhniAKSSK5zi1K2RERFAiKMzcaw39dg4rFj-hOCE_0bXxQNZ0FGP_j-lSU2TyR84M0CxFQ02NUHZDYCKDGqctb7km6ecIIh6ogh_uYfpGE00yq3gnVCnJM7N2a22VKL0EzKTmpvlzu8einWAIk-dyNKb40pt86Nkioo',
    alt: 'Crispy hand-cut golden skin-on French fries smothered in warm liquid aged cheddar cheese, sprinkled with crispy beef bacon bits and freshly chopped chives',
    badge: 'Fan Favorite',
    badgeColor: 'gold',
    mobileTag: 'Hand-Cut',
    prepTime: '8–10 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },
  {
    id: 'fiery-nashville-hot-fries',
    name: 'Fiery Nashville Hot Fries',
    price: 680,
    category: 'fries',
    description:
      'Cayenne dusted crisp fries, diced hot chicken tenders, fiery house Nashville oil drizzle, and pickled jalapeños.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBteXuQ0Ocw7EOFQhwOzJA_cXob_SxJtNd-yGkgj1dkTUC6xkk3sgpJntc4zSvsVqOpxlq6MAYm3K-xC_5bzIq6jjVoXJsBEkIg3V2uGbNym2gdqCLtf2i6NHCtxDgk2wKlLGavTEBE5dS5p92h1Kfcx-RwHhGvxQ8TpL-YgF48MCG4OkKu3wCWIh3hWQ2EKT-vwNn_5AAFrrvkureQoXK6RxtJurSEN7oDkYvUcYoYY-nU-Gc5W9-C',
    alt: 'Heaping platter of spicy Nashville style tossed french fries dusted with intense cayenne red spice rub, topped with chopped spicy tenders and jalapeño pickle slices',
    mobileTag: 'Nashville Hot',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },
  {
    id: 'truffle-garlic-parmesan-fries',
    name: 'Truffle Garlic Parmesan',
    price: 650,
    category: 'fries',
    description:
      'Hand-cut double cooked fries drizzled with white truffle infused olive oil, roasted garlic butter, and aged parmesan cheese.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvGdau4lkt6hRgtktvacBYfN2LRaq9CF21zD7rlT_y7UwblkcL6CM-EvRKi2k4twOQRaVKpXNt7ykvA19-YU2BX1-6ZCSrpiQiWcqK705BHk9eVCf8caZM94J_gsASTkF4lTnYZV-LfFdreffn61k15LP2p7nOmd_elaRzK6XSZbfTz3Lu3j3THVTmW36vJoXm_43xFJsEOyeNzI9d5THmTMjc7w9h4zR2n2BhpaUpeOpURaHJxc5l',
    alt: 'Artisanal shoestring fries tossed in fragrant white truffle oil, roasted garlic butter, and finely grated Reggiano parmesan cheese',
    mobileTag: 'Artisan Herb',
    prepTime: '8–10 mins',
    spiceOptions: false,
    addons: FRIES_ADDONS,
  },
  {
    id: 'animal-style-fries',
    name: 'Animal-Style Fries',
    price: 580,
    category: 'fries',
    description:
      'Fresh cut fries buried beneath slow-caramelized sweet onions, melted American yellow cheese, and signature Fry Day spread.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDX0ilhINg1K32vXg1exh4cZa5Pr7SB862_g8qNJIp6aaNKlQoNuaTQCTHVEniUjrGl-il5f_KkHAqk1RuDwrXdpCNXFtL_A6TRc6oPDuDSaW27XJErnybamhwVa9sU2ilrimQfhluh01n6jn0OIz06hy0fD2U7-XeNkjGeee4cHs5dvPuSBxVdlnUfbRMoezzfpbjsDOe7pZo5gF8Gmf_loamTaP5FvO31KY-aUpoI6ENidp3XYVG-',
    alt: 'Diner style loaded fries overflowing with caramelized grilled onions, double melted yellow cheddar cheese, and signature thousand-island secret dressing',
    mobileTag: 'Classic Diner',
    prepTime: '8–10 mins',
    spiceOptions: true,
    addons: FRIES_ADDONS,
  },
  {
    id: 'golden-fried-broast-3pc',
    name: 'Golden Fried Broast (3-Pc)',
    price: 750,
    category: 'chicken',
    description:
      'Pressure-fried crisp chicken with deep savory seasoning, juicy tender meat, served with garlic mayo dip and fresh dinner bun.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCimELEo8gq-_UASJS_8NYYoIRaC5aCb825aw0WevuWNkkZ-nxMSEGSZyw7obg5i-RWA8misqoR22CImH51eo55CfNxETeZmlDuh4niabTlcYKYOf5jtHiM6j8MKH9vC7LCc24Y6BJjYrHAwbRTFqh8emyWp-ha2kO4yhVc4tHynJHrDgYuncZmM-dIbfZn0RQYNEKYzYXVvkolsYHa3nQxmLOaR0_Wbq7UeMUTmxPYrnAqB4rwuE7k',
    alt: 'Golden crisp deep fried chicken broast 3 piece portions served with crinkle fries and garlic mayo dip',
    mobileTag: '3 Pieces',
    prepTime: '12–15 mins',
    spiceOptions: true,
    addons: CHICKEN_ADDONS,
  },
  {
    id: 'sweet-chili-crunch-tenders',
    name: 'Sweet Chili Crunch Tenders',
    price: 620,
    category: 'chicken',
    description:
      'Hand-breaded whole chicken tenders coated in artisanal sweet chili glaze, toasted sesame seeds, and fresh coriander.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDy6PXG50o0GrkfTBRhhgIGXGEKio1RK543eaPR1baR7DCO5kUvkVAB05LPH6S0eHvovjGAdKCi5ufBTrEFcbBafSNL5RRq1cbUg-yWyZvywq3kmFywhad3DxSmW37Wpc1SLBbhMBhyckvOguySYINAA2UARSkqpsGQiT91jiSys-68Fx4LQ2gFKkbx2FklMFUrZoLLpJM28GdX66W-sMRYd65Kkg_uESwshsJkA58g7HdkvuzwEIIQ',
    alt: 'Glazed sweet chili chicken tenders with toasted white sesame seeds and sliced green scallions on white stoneware plate',
    mobileTag: 'Sesame Glazed',
    prepTime: '10–12 mins',
    spiceOptions: true,
    addons: CHICKEN_ADDONS,
  },
  {
    id: 'honey-garlic-glazed-wings',
    name: 'Honey Garlic Glazed Wings',
    price: 650,
    category: 'chicken',
    description:
      '6-piece jumbo wings tossed in sticky reduced honey garlic glaze with fried garlic flakes and cracked black pepper.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCjxuIGbN-YZhY2GZKgFcw6KgI35drao5ZDrVkXoum7Ra0lS_VLbn8k-QzhKV5_3NCAd5ov-8FMKfeAnGn_QRFS1mQ0k0DY-u8GfhusZE9GwR447up6lSysAXXxp-GVJLUsUZHOyWY5Zn8Hu6IZvkQVrtiefdODGzWbwQ39TmhlHRSMvb2r6Hc_0aJGi0M_l5gfAJgrncXg1lrfFoEcjwOeuHl6rXEx1LIq6FjaM9nH6zhncwYxgDjx',
    alt: 'Crispy jumbo chicken wings tossed in sticky golden honey garlic sauce with caramelized garlic chips in a cast iron skillet',
    mobileTag: '6 Jumbo Wings',
    prepTime: '10–12 mins',
    spiceOptions: false,
    addons: CHICKEN_ADDONS,
  },
  {
    id: 'lotus-biscoff-shake',
    name: 'Lotus Biscoff Shake',
    price: 580,
    category: 'drinks',
    description:
      'Blended whole milk gelato, pure Belgian speculoos biscuit paste, rich whipped cream dome, and Biscoff crumble.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCA0BtCtlK21PxtCQzgpM_A0N-7BoDkgnpGXisAJWjHQIpOK6sVSeOcSVx1quEe3fTYJKPgTd4qIV0o3ngVBECZ631XVQkO22qaWGkaTxv-oICBK8Zo2ja4jLXlRlozv3VWDuO_vXeVNGSVeShEU3clZqToh1VoAN6mvapCRByFxMBlN4N1D6abXG4kVYv2NuXmscq1WS3C18L_GlMFqa1p4uWwqhpJ_exmm0RvNaCtrrKKEHR7rWmO',
    alt: 'Decadent gourmet thick milkshake layered with creamy Lotus Biscoff spread, whipped cream topping, and crunchy spiced biscuit crumbs',
    mobileTag: 'Cold Beverage',
    prepTime: '5 mins',
    spiceOptions: false,
    addons: DRINK_ADDONS,
  },
];

export const QUALITY_PILLARS = [
  {
    icon: 'egg_alt',
    title: '100% Fresh Chicken',
    description:
      'Never frozen, hormone-free chicken brined in small batches for 18 hours with buttermilk and natural aromatics for unbeatable tenderness.',
    accentClass: 'bg-brand-red/10 dark:bg-red-500/10 text-brand-red dark:text-red-400',
  },
  {
    icon: 'bakery_dining',
    title: 'Daily Brioche Buns',
    description:
      'Artisanal golden brioche baked fresh every morning in Faisalabad with pure churned butter for that melt-in-your-mouth bite.',
    accentClass: 'bg-gold-500/10 dark:bg-gold-500/10 text-gold-600 dark:text-gold-400',
  },
  {
    icon: 'soup_kitchen',
    title: 'Secret In-House Sauces',
    description:
      'From our famous Fry Day burger spread to sweet chili glazes and Nashville chili oil, all dressings are mixed by our culinary team.',
    accentClass: 'bg-brand-red/10 dark:bg-red-500/10 text-brand-red dark:text-red-400',
  },
  {
    icon: 'sanitizer',
    title: 'Spotless Open Kitchen',
    description:
      'Full visibility into our fryers, grills, and assembly line on W Canal Road. Cleanliness is our most prestigious ingredient.',
    accentClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
];
