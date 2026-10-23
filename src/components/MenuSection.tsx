import React, { useState } from 'react';
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

  const filteredItems = MENU_ITEMS.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section
      className="py-16 md:py-24 bg-surface-container-low/60 dark:bg-[#161619]"
      id="menu"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-red dark:text-red-400 font-bold mb-2">
              <span className="material-symbols-outlined text-lg">restaurant</span>
              <span className="text-xs uppercase tracking-widest">Culinary Catalog</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary dark:text-white tracking-tight">
              Our Artisan Menu
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant dark:text-zinc-400 mt-2 max-w-xl">
              Every element is prepped fresh from scratch. Tap any item to place an instant
              WhatsApp order with our kitchen on W Canal Road.
            </p>
          </div>

          {/* Filter Category Tabs */}
          <div
            className="flex gap-2 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 md:flex-wrap no-scrollbar"
            id="category-tabs"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    isActive
                      ? 'menu-tab-btn shrink-0 px-5 py-2.5 rounded-full text-xs font-bold bg-brand-red text-white shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap'
                      : 'menu-tab-btn shrink-0 px-5 py-2.5 rounded-full text-xs font-bold bg-surface-container dark:bg-zinc-800 hover:bg-surface-container-high dark:hover:bg-zinc-700 text-on-surface-variant dark:text-zinc-300 border border-outline-variant/30 dark:border-zinc-700 transition-all duration-200 cursor-pointer whitespace-nowrap'
                  }
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid: Bento / Elevated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {filteredItems.map((item) => {
            const qtyInCart = getItemQuantity(item.id);
            const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
              `I would like to order ${item.name} (Rs. ${item.price})`
            )}`;

            return (
              <div
                key={item.id}
                className="menu-card bg-surface-container-lowest dark:bg-[#1c1c21] rounded-2xl border border-outline-variant/30 dark:border-zinc-800/80 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-brand-red/40 dark:hover:border-red-500/40 transition-all duration-300 group text-left"
              >
                <div>
                  <div
                    onClick={() => onSelectDish(item)}
                    className="relative h-48 overflow-hidden bg-surface-container dark:bg-zinc-800 cursor-pointer"
                  >
                    <SafeImage
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={item.alt}
                      src={item.image}
                      fallbackTitle={item.name}
                      loading="lazy"
                    />
                    {item.badge && (
                      <span
                        className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold shadow-sm backdrop-blur-sm ${
                          item.badgeColor === 'gold' ? 'bg-gold-600' : 'bg-brand-red/90'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickAdd(item);
                      }}
                      aria-label={`Add ${item.name} to order bag`}
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
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3
                        onClick={() => onSelectDish(item)}
                        className="text-base font-display font-bold text-primary dark:text-white group-hover:text-brand-red dark:group-hover:text-red-400 transition-colors cursor-pointer"
                      >
                        {item.name}
                      </h3>
                      <span className="text-base font-extrabold text-brand-red dark:text-red-400 whitespace-nowrap tabular-nums">
                        Rs. {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant dark:text-zinc-400 line-clamp-2 min-h-[2.25rem] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container dark:bg-zinc-800 hover:bg-brand-red hover:text-white dark:hover:bg-brand-red dark:hover:text-white text-brand-red dark:text-red-300 text-xs font-bold transition-all shadow-sm whitespace-nowrap"
                    href={whatsappUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    <span>Order via WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
