import React, { useState } from 'react';
import { MenuAddon, MenuItem, RESTAURANT_INFO } from '../data/menuData';
import { SafeImage } from './SafeImage';

export interface CartOrderEntry {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  spiceLevel?: string;
  selectedAddons: MenuAddon[];
  notes: string;
}

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (entry: Omit<CartOrderEntry, 'cartItemId'>) => void;
}

const SPICE_LEVELS = ['Mild & Savory', 'Classic Fry Day', 'Fiery Nashville Hot'];

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [spiceLevel, setSpiceLevel] = useState<string>('Classic Fry Day');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  if (!item) return null;

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedAddons = item.addons.filter((a) => selectedAddonIds.includes(a.id));
  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = item.price + addonsTotal;
  const totalPrice = unitPrice * quantity;

  const handleAddToBag = () => {
    onAddToCart({
      item,
      quantity,
      spiceLevel: item.spiceOptions ? spiceLevel : undefined,
      selectedAddons,
      notes: notes.trim(),
    });
    onClose();
  };

  const buildDirectWhatsAppUrl = () => {
    const parts = [
      `Hello Fry Day! I would like to order:`,
      `• ${quantity}x ${item.name} (Rs. ${item.price} each)`,
    ];
    if (item.spiceOptions) {
      parts.push(`  Spice Level: ${spiceLevel}`);
    }
    if (selectedAddons.length > 0) {
      parts.push(
        `  Add-ons: ${selectedAddons.map((a) => `${a.name} (+Rs. ${a.price})`).join(', ')}`
      );
    }
    if (notes.trim()) {
      parts.push(`  Note: ${notes.trim()}`);
    }
    parts.push(`Total: Rs. ${totalPrice}`);
    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
      parts.join('\n')
    )}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/65 backdrop-blur-sm p-0 sm:p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dish-title"
    >
      <div
        className="w-full sm:max-w-lg bg-surface-container-lowest dark:bg-[#1a1a1f] rounded-t-3xl sm:rounded-3xl border border-outline-variant/30 dark:border-zinc-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dish Header Image */}
        <div className="relative h-56 sm:h-64 bg-surface-container dark:bg-zinc-800 shrink-0">
          <SafeImage
            src={item.image}
            alt={item.alt}
            fallbackTitle={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
            <div>
              {item.badge && (
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-red text-white text-[11px] font-bold mb-1.5">
                  {item.badge}
                </span>
              )}
              <h3
                id="modal-dish-title"
                className="text-xl sm:text-2xl font-display font-extrabold text-white"
              >
                {item.name}
              </h3>
              <p className="text-xs text-zinc-200 flex items-center gap-2 mt-0.5">
                <span>{item.mobileTag}</span>
                <span>·</span>
                <span>Prep: {item.prepTime}</span>
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-gold-500 text-white font-extrabold text-sm shadow-md tabular-nums whitespace-nowrap">
              Rs. {item.price}
            </span>
          </div>
        </div>

        {/* Scrollable Customization Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          <p className="text-xs sm:text-sm text-on-surface-variant dark:text-zinc-300 leading-relaxed">
            {item.description}
          </p>

          {/* Spice Level Selector */}
          {item.spiceOptions && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-primary dark:text-zinc-200 mb-2.5">
                Select Spice Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {SPICE_LEVELS.map((level) => {
                  const active = spiceLevel === level;
                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setSpiceLevel(level)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        active
                          ? 'bg-brand-red text-white border-brand-red shadow-sm'
                          : 'bg-surface-container/60 dark:bg-zinc-800/80 text-on-surface-variant dark:text-zinc-300 border-outline-variant/30 dark:border-zinc-700 hover:border-brand-red/40'
                      }`}
                    >
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Optional Add-ons */}
          {item.addons.length > 0 && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-primary dark:text-zinc-200 mb-2.5">
                Gourmet Upgrades &amp; Add-Ons (Optional)
              </label>
              <div className="space-y-2">
                {item.addons.map((addon) => {
                  const checked = selectedAddonIds.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                        checked
                          ? 'bg-brand-red/5 dark:bg-red-500/10 border-brand-red dark:border-red-400'
                          : 'bg-surface dark:bg-zinc-800/50 border-outline-variant/30 dark:border-zinc-800 hover:border-brand-red/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                            checked
                              ? 'bg-brand-red border-brand-red text-white'
                              : 'border-outline-variant dark:border-zinc-600'
                          }`}
                        >
                          {checked && (
                            <span className="material-symbols-outlined text-sm">check</span>
                          )}
                        </div>
                        <span className="text-xs font-semibold text-primary dark:text-zinc-200">
                          {addon.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-brand-red dark:text-red-400 tabular-nums">
                        +Rs. {addon.price}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Kitchen Note */}
          <div>
            <label
              htmlFor="kitchen-note"
              className="block text-xs font-bold uppercase tracking-wider text-primary dark:text-zinc-200 mb-2"
            >
              Special Kitchen Instructions
            </label>
            <input
              id="kitchen-note"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., Extra crispy, no onions, extra sauce on side..."
              className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-surface dark:bg-zinc-800/80 text-on-surface dark:text-white border border-outline-variant/40 dark:border-zinc-700 focus:outline-none focus:border-brand-red"
            />
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="p-4 sm:p-5 bg-surface dark:bg-[#141418] border-t border-outline-variant/30 dark:border-zinc-800 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            {/* Quantity Stepper */}
            <div className="flex items-center gap-2 bg-surface-container dark:bg-zinc-800 rounded-full p-1 border border-outline-variant/30 dark:border-zinc-700">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="w-8 h-8 rounded-full flex items-center justify-center text-primary dark:text-white hover:bg-surface-container-high dark:hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">remove</span>
              </button>
              <span className="w-6 text-center text-sm font-extrabold text-primary dark:text-white tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="w-8 h-8 rounded-full flex items-center justify-center text-primary dark:text-white hover:bg-surface-container-high dark:hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">add</span>
              </button>
            </div>

            {/* Add to Bag CTA */}
            <button
              type="button"
              onClick={handleAddToBag}
              className="flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-brand-red to-brand-red-hover hover:from-brand-red-hover hover:to-red-800 text-white font-bold text-xs sm:text-sm shadow-lg shadow-brand-red/25 flex items-center justify-between gap-2 transition-all cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg">shopping_bag</span>
                <span>Add to Order Bag</span>
              </span>
              <span className="font-extrabold tabular-nums">Rs. {totalPrice}</span>
            </button>
          </div>

          <a
            href={buildDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Order Immediately on WhatsApp (Rs. {totalPrice})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
