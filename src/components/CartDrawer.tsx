import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import { CartOrderEntry } from './ItemModal';
import { SafeImage } from './SafeImage';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  entries: CartOrderEntry[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveEntry: (cartItemId: string) => void;
  onClearCart: () => void;
}

type OrderType = 'Delivery' | 'Takeaway' | 'Car-Hop' | 'Dine-In';

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  entries,
  onUpdateQuantity,
  onRemoveEntry,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<OrderType>('Delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [locationDetail, setLocationDetail] = useState('');
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const subtotal = entries.reduce((sum, entry) => {
    const basePrice = entry.selectedSize ? entry.selectedSize.price : entry.item.price;
    const addonsPrice = entry.selectedAddons.reduce((aSum, a) => aSum + a.price, 0);
    return sum + (basePrice + addonsPrice) * entry.quantity;
  }, 0);

  const deliveryFee =
    orderType === 'Delivery' && subtotal > 0 ? (subtotal >= 2000 ? 0 : 120) : 0;
  const grandTotal = subtotal + deliveryFee;

  const formatOrderMessage = () => {
    const lines = [
      `*NEW ORDER — FRY DAYS FAISALABAD*`,
      `Order Mode: *${orderType}*`,
      `--------------------------------`,
    ];

    entries.forEach((entry, idx) => {
      const basePrice = entry.selectedSize ? entry.selectedSize.price : entry.item.price;
      const addonsPrice = entry.selectedAddons.reduce((aSum, a) => aSum + a.price, 0);
      const lineTotal = (basePrice + addonsPrice) * entry.quantity;
      const sizeSuffix = entry.selectedSize ? ` (${entry.selectedSize.label})` : '';
      lines.push(
        `${idx + 1}. *${entry.quantity}x ${entry.item.name}${sizeSuffix}* — PKR ${lineTotal.toLocaleString()}`
      );
      if (entry.spiceLevel) {
        lines.push(`   • Spice: ${entry.spiceLevel}`);
      }
      if (entry.selectedAddons.length > 0) {
        lines.push(
          `   • Add-ons: ${entry.selectedAddons
            .map((a) => `${a.name} (+Rs. ${a.price})`)
            .join(', ')}`
        );
      }
      if (entry.notes) {
        lines.push(`   • Note: ${entry.notes}`);
      }
    });

    lines.push(`--------------------------------`);
    lines.push(`Subtotal: PKR ${subtotal.toLocaleString()}`);
    if (orderType === 'Delivery') {
      lines.push(`Delivery Fee: ${deliveryFee === 0 ? 'FREE' : `PKR ${deliveryFee}`}`);
    }
    lines.push(`*Total Payable: PKR ${grandTotal.toLocaleString()}* (Cash on Delivery / Counter)`);

    if (customerName.trim() || customerPhone.trim() || locationDetail.trim()) {
      lines.push(`--------------------------------`);
      if (customerName.trim()) lines.push(`Customer: ${customerName.trim()}`);
      if (customerPhone.trim()) lines.push(`Phone: ${customerPhone.trim()}`);
      if (locationDetail.trim()) {
        const label =
          orderType === 'Delivery'
            ? 'Delivery Address'
            : orderType === 'Car-Hop'
            ? 'Car Model / Plate'
            : 'Pickup / Table Note';
        lines.push(`${label}: ${locationDetail.trim()}`);
      }
    }

    return lines.join('\n');
  };

  const handleCopyOrder = () => {
    navigator.clipboard?.writeText(formatOrderMessage());
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const whatsappCheckoutUrl = `https://wa.me/${
    RESTAURANT_INFO.whatsappNumber
  }?text=${encodeURIComponent(formatOrderMessage())}`;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Your Fry Days Order Bag"
    >
      <div
        className="w-full max-w-md bg-surface-container-lowest dark:bg-[#16161a] h-full flex flex-col justify-between shadow-2xl border-l border-outline-variant/30 dark:border-zinc-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Drawer Header */}
        <div className="px-6 py-5 border-b border-outline-variant/30 dark:border-zinc-800 flex items-center justify-between bg-surface dark:bg-[#1a1a1f]">
          <div className="flex items-center gap-2.5 text-left">
            <div className="w-9 h-9 rounded-xl bg-brand-red text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-xl">shopping_bag</span>
            </div>
            <div>
              <h2 className="text-lg font-display font-extrabold text-primary dark:text-white leading-none">
                Your Order Bag
              </h2>
              <p className="text-xs text-on-surface-variant dark:text-zinc-400 mt-1">
                W Canal Road Kitchen · WhatsApp Order Builder
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close order bag"
            className="w-9 h-9 rounded-full bg-surface-container dark:bg-zinc-800 text-on-surface-variant dark:text-zinc-300 hover:text-brand-red flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Drawer Body */}
        {entries.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-surface-container dark:bg-zinc-800 flex items-center justify-center text-brand-red dark:text-red-400 mb-4">
              <span className="material-symbols-outlined text-3xl">lunch_dining</span>
            </div>
            <h3 className="text-lg font-display font-bold text-primary dark:text-white">
              Your order bag is empty
            </h3>
            <p className="text-xs text-on-surface-variant dark:text-zinc-400 mt-1 max-w-xs leading-relaxed">
              Add Injected Chicken Broast, Zesty Zinger burgers, Loaded Fries, or Special Combos to
              prepare your WhatsApp order.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-full bg-brand-red text-white text-xs font-bold shadow-md hover:bg-brand-red-hover transition-colors cursor-pointer"
            >
              Browse Full Menu
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-5 text-left">
            {/* Order Type Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-zinc-300">
                  Dining / Pickup Preference
                </span>
                {orderType === 'Delivery' && (
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    {subtotal >= 2000
                      ? 'Free Delivery Unlocked!'
                      : `Add Rs. ${2000 - subtotal} for Free Delivery`}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-1.5 bg-surface-container dark:bg-zinc-800 p-1 rounded-xl border border-outline-variant/30 dark:border-zinc-700">
                {(['Delivery', 'Takeaway', 'Car-Hop', 'Dine-In'] as OrderType[]).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setOrderType(mode)}
                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      orderType === mode
                        ? 'bg-brand-red text-white shadow-sm'
                        : 'text-on-surface-variant dark:text-zinc-300 hover:text-primary dark:hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Itemized List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-zinc-300">
                  Selected Items ({entries.reduce((s, e) => s + e.quantity, 0)})
                </span>
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-xs font-semibold text-brand-red dark:text-red-400 hover:underline cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              {entries.map((entry) => {
                const basePrice = entry.selectedSize ? entry.selectedSize.price : entry.item.price;
                const addonsPrice = entry.selectedAddons.reduce((aSum, a) => aSum + a.price, 0);
                const lineTotal = (basePrice + addonsPrice) * entry.quantity;
                const displayName = entry.selectedSize
                  ? `${entry.item.name} (${entry.selectedSize.label})`
                  : entry.item.name;

                return (
                  <div
                    key={entry.cartItemId}
                    className="p-3.5 rounded-2xl bg-surface dark:bg-[#1f1f24] border border-outline-variant/30 dark:border-zinc-800 flex gap-3 items-start"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#f6f4f0] dark:bg-zinc-800 shrink-0 flex items-center justify-center">
                      <SafeImage
                        src={entry.item.image}
                        alt={displayName}
                        fallbackTitle={entry.item.name}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-display font-bold text-primary dark:text-white truncate">
                          {displayName}
                        </h4>
                        <span className="text-sm font-extrabold text-brand-red dark:text-red-400 tabular-nums whitespace-nowrap">
                          Rs. {lineTotal.toLocaleString()}
                        </span>
                      </div>
                      {entry.spiceLevel && (
                        <p className="text-[11px] text-on-surface-variant dark:text-zinc-400 mt-0.5">
                          Spice: {entry.spiceLevel}
                        </p>
                      )}
                      {entry.selectedAddons.length > 0 && (
                        <p className="text-[11px] text-gold-600 dark:text-gold-400 font-medium mt-0.5">
                          + {entry.selectedAddons.map((a) => a.name).join(', ')}
                        </p>
                      )}
                      {entry.notes && (
                        <p className="text-[11px] italic text-on-surface-variant dark:text-zinc-400 mt-0.5">
                          "{entry.notes}"
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center gap-1.5 bg-surface-container dark:bg-zinc-800 rounded-full px-1.5 py-0.5 border border-outline-variant/30 dark:border-zinc-700">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(entry.cartItemId, -1)}
                            aria-label="Decrease item quantity"
                            className="w-6 h-6 rounded-full flex items-center justify-center text-primary dark:text-white hover:bg-surface-container-high dark:hover:bg-zinc-700 cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-sm">remove</span>
                          </button>
                          <span className="w-5 text-center text-xs font-bold text-primary dark:text-white tabular-nums">
                            {entry.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(entry.cartItemId, 1)}
                            aria-label="Increase item quantity"
                            className="w-6 h-6 rounded-full flex items-center justify-center text-primary dark:text-white hover:bg-surface-container-high dark:hover:bg-zinc-700 cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-sm">add</span>
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveEntry(entry.cartItemId)}
                          aria-label="Remove item"
                          className="text-on-surface-variant dark:text-zinc-400 hover:text-brand-red dark:hover:text-red-400 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Customer Details for Fast Dispatch */}
            <div className="space-y-3 pt-2 border-t border-outline-variant/30 dark:border-zinc-800">
              <span className="block text-xs font-bold uppercase tracking-wider text-primary dark:text-zinc-300">
                Quick Dispatch Details (Optional)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Your Name"
                  className="px-3.5 py-2.5 rounded-xl text-xs bg-surface dark:bg-zinc-800 text-on-surface dark:text-white border border-outline-variant/40 dark:border-zinc-700 focus:outline-none focus:border-brand-red"
                />
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Phone Number (03XX-...)"
                  className="px-3.5 py-2.5 rounded-xl text-xs bg-surface dark:bg-zinc-800 text-on-surface dark:text-white border border-outline-variant/40 dark:border-zinc-700 focus:outline-none focus:border-brand-red"
                />
              </div>
              <input
                type="text"
                value={locationDetail}
                onChange={(e) => setLocationDetail(e.target.value)}
                placeholder={
                  orderType === 'Delivery'
                    ? 'House #, Street, Area in Faisalabad (e.g., W Canal Rd, Peoples Colony...)'
                    : orderType === 'Car-Hop'
                    ? 'Vehicle Color & Number Plate for Car-Hop Service'
                    : 'Preferred Pickup Time or Table Request'
                }
                className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-surface dark:bg-zinc-800 text-on-surface dark:text-white border border-outline-variant/40 dark:border-zinc-700 focus:outline-none focus:border-brand-red"
              />
            </div>
          </div>
        )}

        {/* Drawer Footer Totals & Checkout */}
        {entries.length > 0 && (
          <div className="p-5 bg-surface dark:bg-[#1a1a1f] border-t border-outline-variant/30 dark:border-zinc-800 space-y-3 text-left">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-on-surface-variant dark:text-zinc-400">
                <span>Subtotal</span>
                <span className="font-semibold tabular-nums">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>
              {orderType === 'Delivery' && (
                <div className="flex justify-between text-on-surface-variant dark:text-zinc-400">
                  <span>Canal Road Delivery</span>
                  <span className="font-semibold tabular-nums">
                    {deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-sm font-display font-extrabold text-primary dark:text-white pt-1 border-t border-outline-variant/20 dark:border-zinc-800">
                <span>Estimated Total (COD)</span>
                <span className="text-brand-red dark:text-red-400 tabular-nums">
                  Rs. {grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={whatsappCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>Open WhatsApp to Send Order</span>
              </a>

              <button
                type="button"
                onClick={handleCopyOrder}
                className="w-full py-2 px-4 rounded-full bg-surface-container dark:bg-zinc-800 text-on-surface-variant dark:text-zinc-300 hover:text-primary dark:hover:text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {copiedSummary ? 'Order Summary Copied!' : 'Copy Order Summary Text'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
