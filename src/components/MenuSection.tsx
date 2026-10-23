import React, { useState, useMemo } from 'react';
import {
  CATEGORIES,
  MENU_ITEMS,
  MenuCategory,
  MenuItem,
  RESTAURANT_INFO,
} from '../data/menuData';
import { SafeImage } from './SafeImage';

interface MenuSectionProps {
  onSelectDish: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  getItemQuantity: (itemId: string) => number;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectDish,
  onQuickAdd,
  getItemQuantity,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileCompactView, setMobileCompactView] = useState(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.mobileTag.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      className="py-16 md:py-24 bg-surface-container-low/50 dark:bg-[#161619]"
      id="menu"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6 text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red dark:text-red-400 mb-2">
              Freshly Prepared To Order
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#281715] dark:text-white tracking-tight leading-[1.15]">
              Our Artisan Menu
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant dark:text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              Every burger, broast portion, and loaded fry skillet is cooked fresh from scratch in
              our W Canal Road kitchen. Select any dish to customize spice levels and add-ons.
            </p>
          </div>

          {/* Search & Mobile View Switcher */}
          <div className="flex items-center gap-2.5 w-full lg:w-auto shrink-0">
            <div className="relative flex-1 lg:w-72">
              <span className="material-symbols-outlined text-lg text-on-surface-variant dark:text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search burgers, fries, shakes..."
                aria-label="Search menu items"
                className="w-full h-11 pl-10 pr-9 rounded-xl text-xs sm:text-sm bg-surface-container-lowest dark:bg-[#1c1c21] text-[#281715] dark:text-white placeholder:text-on-surface-variant/60 dark:placeholder:text-zinc-500 border border-outline-variant/40 dark:border-zinc-700 focus:outline-none focus:border-brand-red dark:focus:border-red-400 transition-colors shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant dark:text-zinc-400 hover:text-brand-red cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              )}
            </div>

            {/* Mobile View Toggle (Cards vs Compact List) */}
            <button
              type="button"
              onClick={() => setMobileCompactView((prev) => !prev)}
              aria-label={mobileCompactView ? 'Switch to grid view' : 'Switch to compact list view'}
              title={mobileCompactView ? 'Grid View' : 'Compact List View'}
              className="md:hidden h-11 w-11 rounded-xl bg-surface-container-lowest dark:bg-[#1c1c21] text-[#281715] dark:text-zinc-200 border border-outline-variant/40 dark:border-zinc-700 shadow-sm flex items-center justify-center cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-lg">
                {mobileCompactView ? 'grid_view' : 'view_agenda'}
              </span>
            </button>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar"
          role="tablist"
          aria-label="Menu categories"
        >
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category.id)}
                className={`h-10 px-4 sm:px-5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center ${
                  isActive
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'bg-surface-container-lowest dark:bg-[#1c1c21] hover:bg-surface-container dark:hover:bg-zinc-800 text-on-surface-variant dark:text-zinc-300 border border-outline-variant/35 dark:border-zinc-800'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredItems.length === 0 ? (
          <div className="bg-surface-container-lowest dark:bg-[#1c1c21] rounded-2xl border border-outline-variant/30 dark:border-zinc-800 p-12 text-center my-4">
            <span className="material-symbols-outlined text-4xl text-brand-red dark:text-red-400 mb-3 block">
              search_off
            </span>
            <h3 className="text-lg font-display font-bold text-[#281715] dark:text-white">
              No matching dishes found
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant dark:text-zinc-400 mt-1 max-w-md mx-auto">
              We couldn't find any items matching "{searchQuery}". Try clearing your search or
              switching categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-5 h-10 px-6 rounded-xl bg-brand-red text-white text-xs font-bold shadow-sm hover:bg-brand-red-hover transition-colors cursor-pointer"
            >
              Show All Dishes
            </button>
          </div>
        ) : (
          <>
            {/* Mobile Compact List View */}
            {mobileCompactView && (
              <div className="md:hidden space-y-3">
                {filteredItems.map((item) => {
                  const qtyInCart = getItemQuantity(item.id);
                  return (
                    <article
                      key={item.id}
                      className="bg-surface-container-lowest dark:bg-[#1c1c21] rounded-2xl p-3.5 border border-outline-variant/30 dark:border-zinc-800 shadow-sm flex gap-3.5 items-stretch text-left"
                    >
                      <div
                        onClick={() => onSelectDish(item)}
                        className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-surface-container dark:bg-zinc-800 cursor-pointer"
                      >
                        <SafeImage
                          src={item.image}
                          alt={item.alt}
                          fallbackTitle={item.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div onClick={() => onSelectDish(item)} className="cursor-pointer">
                          <div className="flex items-baseline justify-between gap-2">
                            <h3 className="text-sm font-display font-bold text-[#281715] dark:text-white leading-snug truncate">
                              {item.name}
                            </h3>
                            <span className="text-sm font-extrabold text-brand-red dark:text-red-400 whitespace-nowrap tabular-nums shrink-0">
                              Rs. {item.price}
                            </span>
                          </div>
                          <p className="text-xs text-on-surface-variant dark:text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-2.5 flex items-center justify-between gap-2">
                          <span className="text-[11px] text-on-surface-variant dark:text-zinc-400 truncate">
                            {item.mobileTag} · {item.prepTime}
                          </span>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => onQuickAdd(item)}
                              className="h-8 px-3 rounded-lg bg-brand-red text-white text-xs font-bold inline-flex items-center gap-1 cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-sm">add</span>
                              <span>{qtyInCart > 0 ? `Bag (${qtyInCart})` : 'Add'}</span>
                            </button>
                            <a
                              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                                `I would like to order ${item.name} (Rs. ${item.price})`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Order ${item.name} on WhatsApp`}
                              className="h-8 w-8 rounded-lg bg-emerald-600 text-white inline-flex items-center justify-center"
                            >
                              <span className="material-symbols-outlined text-sm">chat</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* Main 4-Column Product Grid with Strictly Aligned Baselines */}
            <div
              className={`${
                mobileCompactView ? 'hidden md:grid' : 'grid'
              } grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch`}
            >
              {filteredItems.map((item) => {
                const qtyInCart = getItemQuantity(item.id);
                const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `I would like to order ${item.name} (Rs. ${item.price})`
                )}`;

                return (
                  <article
                    key={item.id}
                    className="bg-surface-container-lowest dark:bg-[#1c1c21] rounded-2xl border border-outline-variant/30 dark:border-zinc-800/90 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-brand-red/40 dark:hover:border-red-500/40 transition-all duration-200 group text-left"
                  >
                    {/* Top Image & Content */}
                    <div className="flex flex-col flex-1">
                      <div
                        onClick={() => onSelectDish(item)}
                        className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container dark:bg-zinc-800 cursor-pointer"
                      >
                        <SafeImage
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          alt={item.alt}
                          src={item.image}
                          fallbackTitle={item.name}
                          loading="lazy"
                        />
                        {item.badge && (
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#161211]/85 backdrop-blur-md text-white text-[11px] font-bold tracking-wide">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <div className="p-5 flex flex-col flex-1 justify-between">
                        <div>
                          {/* Clean Unboxed Metadata */}
                          <div className="flex items-center gap-1.5 text-xs text-on-surface-variant dark:text-zinc-400 mb-1.5">
                            <span>{item.mobileTag}</span>
                            <span aria-hidden="true">·</span>
                            <span>{item.prepTime}</span>
                          </div>

                          {/* Title & Price Aligned on Baseline */}
                          <div className="flex items-baseline justify-between gap-3">
                            <h3
                              onClick={() => onSelectDish(item)}
                              className="text-base font-display font-bold text-[#281715] dark:text-white group-hover:text-brand-red dark:group-hover:text-red-400 transition-colors cursor-pointer leading-snug"
                            >
                              {item.name}
                            </h3>
                            <span className="text-base font-extrabold text-brand-red dark:text-red-400 whitespace-nowrap tabular-nums shrink-0">
                              Rs. {item.price}
                            </span>
                          </div>

                          {/* Uniform 2-Line Description */}
                          <p className="text-xs text-on-surface-variant dark:text-zinc-400 line-clamp-2 min-h-[2.5rem] leading-relaxed mt-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Aligned Action Footer */}
                    <div className="px-5 pb-5 pt-1 grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => onQuickAdd(item)}
                        className="h-10 px-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-sm"
                      >
                        <span className="material-symbols-outlined text-base">
                          {qtyInCart > 0 ? 'shopping_bag' : 'add'}
                        </span>
                        <span>{qtyInCart > 0 ? `In Bag (${qtyInCart})` : 'Add to Bag'}</span>
                      </button>

                      <a
                        className="h-10 px-3 rounded-xl bg-surface-container dark:bg-zinc-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white text-[#281715] dark:text-zinc-200 border border-outline-variant/30 dark:border-zinc-700 text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                        href={whatsappUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-base text-emerald-600 dark:text-emerald-400 group-hover:text-current">
                          chat
                        </span>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
