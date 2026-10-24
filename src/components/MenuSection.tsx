import React, { useState } from 'react';
import {
  CATEGORIES,
  MENU_ITEMS,
  MenuCategory,
  MenuItem,
  MenuSizeOption,
  RESTAURANT_INFO,
} from '../data/menuData';
import { SafeImage } from './SafeImage';

interface MenuSectionProps {
  onSelectDish: (item: MenuItem, preselectedSize?: MenuSizeOption) => void;
  onQuickAdd: (item: MenuItem, selectedSize?: MenuSizeOption) => void;
  getItemQuantity: (itemId: string) => number;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectDish,
  onQuickAdd,
  getItemQuantity,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

  const getActiveSize = (item: MenuItem): MenuSizeOption | undefined => {
    if (!item.sizes || item.sizes.length === 0) return undefined;
    const chosenId = selectedSizes[item.id];
    return item.sizes.find((s) => s.id === chosenId) || item.sizes[0];
  };

  const handleSelectSize = (itemId: string, sizeId: string) => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: sizeId }));
  };

  // Keep promotional deals separate when viewing 'all' regular menu items unless searched or selected
  const filteredItems = MENU_ITEMS.filter((item) => {
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.categoryLabel.toLowerCase().includes(query) ||
      item.sectionGroup.toLowerCase().includes(query);

    if (selectedCategory === 'all') {
      return matchesSearch;
    }
    return item.category === selectedCategory && matchesSearch;
  });

  return (
    <section
      className="py-16 md:py-24 bg-surface-container-low/60 dark:bg-[#161619]"
      id="menu"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header + Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-red dark:text-red-400 font-bold mb-2">
              <span className="material-symbols-outlined text-lg">restaurant</span>
              <span className="text-xs uppercase tracking-widest">
                Complete Fry Days Official Menu
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary dark:text-white tracking-tight">
              Explore Our Menu
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant dark:text-zinc-400 mt-2 max-w-2xl">
              All-Time Favorites (Burgers, Wings, Wraps, Chips &amp; Wings), Injected Chicken
              Broast, Awesome Fries, Combos, Lunch &amp; Midnight Combos, Extras, Dips &amp;
              Beverages — all prices in PKR.
            </p>
          </div>

          {/* Instant Search Input */}
          <div className="w-full lg:w-80 relative">
            <span className="material-symbols-outlined text-lg text-on-surface-variant dark:text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Zesty Zinger, Twisto, Broast..."
              aria-label="Search menu items"
              className="w-full pl-10 pr-9 py-2.5 rounded-full text-xs sm:text-sm bg-surface-container-lowest dark:bg-zinc-800/90 text-primary dark:text-white border border-outline-variant/40 dark:border-zinc-700 focus:outline-none focus:border-brand-red shadow-sm"
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
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex gap-2 overflow-x-auto pb-3 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 md:flex-wrap no-scrollbar"
          id="category-tabs"
        >
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category.id;
            const count =
              category.id === 'all'
                ? MENU_ITEMS.length
                : MENU_ITEMS.filter((i) => i.category === category.id).length;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={
                  isActive
                    ? 'menu-tab-btn shrink-0 px-4 py-2 rounded-full text-xs font-bold bg-brand-red text-white shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5'
                    : 'menu-tab-btn shrink-0 px-4 py-2 rounded-full text-xs font-bold bg-surface-container dark:bg-zinc-800 hover:bg-surface-container-high dark:hover:bg-zinc-700 text-on-surface-variant dark:text-zinc-300 border border-outline-variant/30 dark:border-zinc-700 transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5'
                }
              >
                <span>{category.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-black/5 dark:bg-white/10 text-on-surface-variant dark:text-zinc-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Subheading Banner for Timed Combos or Promotional Deals */}
        {selectedCategory === 'lunch-combos' && (
          <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
            <h3 className="text-lg font-display font-extrabold text-primary dark:text-white">
              Lunch Combos — 12 PM to 4 PM
            </h3>
            <span className="text-xs font-semibold text-amber-800 dark:text-amber-300">
              Combo 1 (Rs. 550) · Combo 2 (Rs. 850) · Combo 3 (Rs. 890) · Combo 4 (Rs. 660)
            </span>
          </div>
        )}

        {selectedCategory === 'midnight-combos' && (
          <div className="mb-8 p-4 rounded-2xl bg-brand-red/10 border border-brand-red/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
            <h3 className="text-lg font-display font-extrabold text-primary dark:text-white">
              Midnight Combos — 11 PM to 2 AM
            </h3>
            <span className="text-xs font-semibold text-brand-red dark:text-red-300">
              Combo 1 (Rs. 560) · Combo 2 (Rs. 720) · Combo 3 (Rs. 700)
            </span>
          </div>
        )}

        {/* Empty Search State */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-surface-container-lowest dark:bg-[#1c1c21] rounded-3xl border border-outline-variant/30 dark:border-zinc-800 p-8">
            <span className="material-symbols-outlined text-4xl text-brand-red mb-2">
              search_off
            </span>
            <h3 className="text-lg font-display font-bold text-primary dark:text-white">
              No matching dishes found
            </h3>
            <p className="text-xs text-on-surface-variant dark:text-zinc-400 mt-1">
              Try clearing your search or selecting "All Menu Items".
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-brand-red text-white text-xs font-bold cursor-pointer"
            >
              Show All Menu Items
            </button>
          </div>
        ) : (
          /* Menu Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {filteredItems.map((item) => {
              const qtyInCart = getItemQuantity(item.id);
              const activeSize = getActiveSize(item);
              const displayPrice = activeSize ? activeSize.price : item.price;
              const itemDisplayName = activeSize
                ? `${item.name} (${activeSize.label})`
                : item.name;
              const isPromoDeal = item.category === 'special-deals';

              const whatsappUrl = `https://wa.me/${
                RESTAURANT_INFO.whatsappNumber
              }?text=${encodeURIComponent(
                `Hello Fry Days! I would like to order ${itemDisplayName} (Rs. ${displayPrice.toLocaleString()}).`
              )}`;

              return (
                <div
                  key={item.id}
                  className={`menu-card rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group text-left ${
                    isPromoDeal
                      ? 'bg-gradient-to-b from-red-950/10 to-surface-container-lowest dark:from-red-950/30 dark:to-[#1c1c21] border-brand-red/50 hover:shadow-xl'
                      : 'bg-surface-container-lowest dark:bg-[#1c1c21] border-outline-variant/30 dark:border-zinc-800/80 hover:shadow-xl hover:border-brand-red/40 dark:hover:border-red-500/40'
                  }`}
                >
                  <div>
                    {/* Dish Photo Container (4:3 Studio Frame) */}
                    <div
                      onClick={() => onSelectDish(item, activeSize)}
                      className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 cursor-pointer flex items-center justify-center"
                    >
                      <SafeImage
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        alt={item.alt}
                        src={item.image}
                        fallbackTitle={item.name}
                        loading="lazy"
                      />

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onQuickAdd(item, activeSize);
                        }}
                        aria-label={`Add ${itemDisplayName} to order bag`}
                        title="Add to Order Bag"
                        className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-brand-red hover:bg-brand-red-hover text-white flex items-center justify-center shadow-lg transition-transform active:scale-90 cursor-pointer"
                      >
                        {qtyInCart > 0 ? (
                          <span className="text-xs font-extrabold tabular-nums">{qtyInCart}</span>
                        ) : (
                          <span className="material-symbols-outlined text-lg">add</span>
                        )}
                      </button>
                    </div>

                    <div className="p-5">
                      {/* Clean unboxed metadata kicker */}
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-on-surface-variant dark:text-zinc-400 mb-1">
                        <span>{item.sectionGroup}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-brand-red dark:text-red-400">
                          {item.categoryLabel}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3
                          onClick={() => onSelectDish(item, activeSize)}
                          className="text-base font-display font-bold text-primary dark:text-white group-hover:text-brand-red dark:group-hover:text-red-400 transition-colors cursor-pointer leading-snug"
                        >
                          {item.name}
                        </h3>
                        <div className="text-right shrink-0">
                          {item.originalPrice && (
                            <span className="block text-[11px] font-semibold text-on-surface-variant dark:text-zinc-400 line-through tabular-nums">
                              Rs. {item.originalPrice.toLocaleString()}
                            </span>
                          )}
                          <span className="text-base font-extrabold text-brand-red dark:text-red-400 whitespace-nowrap tabular-nums">
                            Rs. {displayPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {item.promoBanner && (
                        <div className="mb-2 text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
                          {item.promoBanner}
                        </div>
                      )}

                      <p className="text-xs text-on-surface-variant dark:text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Included Combo / Platter Contents */}
                      {item.comboContents && item.comboContents.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-outline-variant/25 dark:border-zinc-800 text-[11px] text-primary dark:text-zinc-300 font-medium">
                          <span className="font-bold text-brand-red dark:text-red-400">
                            Includes:{' '}
                          </span>
                          {item.comboContents.join(' · ')}
                        </div>
                      )}

                      {/* Size / Free Loaded Fries Selector */}
                      {item.sizes && item.sizes.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-outline-variant/25 dark:border-zinc-800">
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant dark:text-zinc-400 mb-1.5">
                            {item.id === 'azadi-deal'
                              ? 'Select Free Loaded Fries Variety:'
                              : 'Select Size:'}
                          </span>
                          <div
                            className={`grid gap-1.5 ${
                              item.sizes.length === 2
                                ? 'grid-cols-2'
                                : item.sizes.length === 4
                                ? 'grid-cols-2'
                                : 'grid-cols-3'
                            }`}
                          >
                            {item.sizes.map((sizeOpt) => {
                              const isSelected = activeSize?.id === sizeOpt.id;
                              return (
                                <button
                                  key={sizeOpt.id}
                                  type="button"
                                  onClick={() => handleSelectSize(item.id, sizeOpt.id)}
                                  className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-all cursor-pointer flex flex-col items-center leading-tight ${
                                    isSelected
                                      ? 'bg-brand-red text-white border-brand-red shadow-sm'
                                      : 'bg-surface-container/60 dark:bg-zinc-800 text-on-surface-variant dark:text-zinc-300 border-outline-variant/30 dark:border-zinc-700 hover:border-brand-red/40'
                                  }`}
                                >
                                  <span className="truncate max-w-full">{sizeOpt.label}</span>
                                  <span
                                    className={`text-[10px] font-extrabold tabular-nums ${
                                      isSelected
                                        ? 'text-gold-200'
                                        : 'text-brand-red dark:text-red-400'
                                    }`}
                                  >
                                    Rs. {sizeOpt.price.toLocaleString()}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Verification / Time Window Note */}
                      {(item.timeWindow || item.verificationNote) && (
                        <div className="mt-2.5 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-800 dark:text-amber-300 font-medium space-y-0.5">
                          {item.timeWindow && (
                            <div className="font-bold">{item.timeWindow}</div>
                          )}
                          {item.verificationNote && <div>{item.verificationNote}</div>}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onQuickAdd(item, activeSize)}
                      className="py-2.5 px-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer whitespace-nowrap"
                    >
                      <span className="material-symbols-outlined text-base">shopping_bag</span>
                      <span>Add to Bag</span>
                    </button>

                    <a
                      className="py-2.5 px-3 rounded-xl bg-surface-container dark:bg-zinc-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-primary dark:text-zinc-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm whitespace-nowrap"
                      href={whatsappUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-base text-emerald-600 dark:text-emerald-400 group-hover:text-white">
                        chat
                      </span>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
