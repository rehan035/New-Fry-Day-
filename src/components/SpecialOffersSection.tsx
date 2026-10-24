import React, { useState } from 'react';
import {
  MENU_ITEMS,
  MenuItem,
  MenuSizeOption,
  OFFICIAL_MENU_SHEETS,
  OfficialMenuSheet,
  RESTAURANT_INFO,
} from '../data/menuData';
import { SafeImage } from './SafeImage';

interface SpecialOffersSectionProps {
  onSelectDish: (item: MenuItem, preselectedSize?: MenuSizeOption) => void;
  onQuickAdd: (item: MenuItem, selectedSize?: MenuSizeOption) => void;
}

export const SpecialOffersSection: React.FC<SpecialOffersSectionProps> = ({
  onSelectDish,
  onQuickAdd,
}) => {
  const [activeSheet, setActiveSheet] = useState<OfficialMenuSheet | null>(null);
  const [azadiSelectedVariety, setAzadiSelectedVariety] = useState<string>('free-frydays-special');

  const promoDeals = MENU_ITEMS.filter((item) => item.category === 'special-deals');
  const signatureCombos = MENU_ITEMS.filter((item) => item.category === 'special-combos');
  const lunchCombos = MENU_ITEMS.filter((item) => item.category === 'lunch-combos');
  const midnightCombos = MENU_ITEMS.filter((item) => item.category === 'midnight-combos');

  return (
    <section
      id="offers"
      className="py-16 md:py-24 bg-[#140a0a] dark:bg-[#0d0d10] text-white relative overflow-hidden border-b border-brand-red/25"
    >
      {/* Subtle Ambient Red & Gold Glow */}
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-brand-red/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-extrabold uppercase tracking-widest mb-2">
              <span className="material-symbols-outlined text-base">local_fire_department</span>
              <span>Separate Promotional Offers &amp; Official Combos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
              The Boss Deal, Azadi Deal, Wacky Wednesday &amp; Combos
            </h2>
            <p className="text-sm md:text-base text-zinc-300 mt-2 max-w-2xl leading-relaxed">
              Promotional offers are kept clearly separate from regular menu pricing. View official
              printed menu sheets or add any combo directly to your order bag.
            </p>
          </div>

          {/* Official Menu Sheets Trigger Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            {OFFICIAL_MENU_SHEETS.map((sheet, index) => (
              <button
                key={sheet.id}
                type="button"
                onClick={() => setActiveSheet(sheet)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-brand-red text-white border border-white/15 hover:border-brand-red text-xs font-bold transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm text-gold-400">menu_book</span>
                <span>Reference Menu {index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 1. PROMOTIONAL DEALS (The Boss Deal, Azadi Deal, Wacky Wednesday) */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 text-left">
            <h3 className="text-lg md:text-xl font-display font-extrabold text-white">
              Promotional Deals — The Boss Deal · Azadi Deal · Wacky Wednesday
            </h3>
            <span className="text-xs text-amber-300 font-medium">
              Separate Promotional Pricing — All prices in PKR
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {promoDeals.map((deal) => {
              const isAzadi = deal.id === 'azadi-deal';
              const activeAzadiOption =
                isAzadi && deal.sizes
                  ? deal.sizes.find((s) => s.id === azadiSelectedVariety) || deal.sizes[0]
                  : undefined;

              const whatsappUrl = `https://wa.me/${
                RESTAURANT_INFO.whatsappNumber
              }?text=${encodeURIComponent(
                `Hello Fry Days! I would like to order ${
                  activeAzadiOption ? `${deal.name} (${activeAzadiOption.label})` : deal.name
                } — Rs. ${deal.price.toLocaleString()}.`
              )}`;

              return (
                <div
                  key={deal.id}
                  className="rounded-3xl bg-gradient-to-b from-zinc-900/95 to-zinc-950 border border-brand-red/40 hover:border-gold-400/60 overflow-hidden flex flex-col justify-between shadow-xl group transition-all duration-300 text-left"
                >
                  <div>
                    <div
                      onClick={() => onSelectDish(deal, activeAzadiOption)}
                      className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 cursor-pointer"
                    >
                      <SafeImage
                        src={deal.image}
                        alt={deal.alt}
                        fallbackTitle={deal.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                      <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">
                        <div>
                          <span className="block text-[11px] font-bold uppercase tracking-wider text-gold-400">
                            {deal.categoryLabel}
                          </span>
                          <h4 className="text-lg font-display font-extrabold text-white leading-snug">
                            {deal.name}
                          </h4>
                        </div>
                        <div className="text-right shrink-0">
                          {deal.originalPrice && (
                            <span className="block text-xs font-bold text-zinc-300 line-through tabular-nums">
                              Original: Rs. {deal.originalPrice.toLocaleString()}
                            </span>
                          )}
                          <span className="inline-block px-3.5 py-1 rounded-xl bg-gold-500 text-zinc-950 font-black text-sm whitespace-nowrap shadow-lg tabular-nums">
                            Promo: Rs. {deal.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      {deal.promoBanner && (
                        <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-xs font-extrabold text-emerald-300">
                          {deal.promoBanner}
                        </div>
                      )}

                      <p className="text-xs text-zinc-300 leading-relaxed">{deal.description}</p>

                      {deal.comboContents && (
                        <div className="text-xs text-zinc-200 space-y-1 pt-1">
                          <span className="block text-[11px] font-bold uppercase tracking-wider text-gold-400">
                            Included Items:
                          </span>
                          <ul className="list-disc list-inside space-y-0.5 text-zinc-200">
                            {deal.comboContents.map((content) => (
                              <li key={content}>{content}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Azadi Deal Free Loaded Fries Variety Selector */}
                      {isAzadi && deal.sizes && (
                        <div className="pt-2 border-t border-white/10">
                          <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2">
                            Choose Your FREE Loaded Fries Variety:
                          </span>
                          <div className="grid grid-cols-2 gap-1.5">
                            {deal.sizes.map((opt) => {
                              const selected = activeAzadiOption?.id === opt.id;
                              return (
                                <button
                                  key={opt.id}
                                  type="button"
                                  onClick={() => setAzadiSelectedVariety(opt.id)}
                                  className={`py-1.5 px-2.5 rounded-lg text-[11px] font-bold border text-left transition-all cursor-pointer ${
                                    selected
                                      ? 'bg-emerald-600 text-white border-emerald-400'
                                      : 'bg-white/5 text-zinc-300 border-white/10 hover:border-white/30'
                                  }`}
                                >
                                  {opt.label}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => onQuickAdd(deal, activeAzadiOption)}
                      className="py-2.5 px-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                      <span>Add to Bag</span>
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-white/15 transition-colors"
                    >
                      <span className="material-symbols-outlined text-base">chat</span>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. OFFICIAL COMBOS (Twin Zinger Rs. 1,200, Fantastic Four Rs. 2,490, Full House Feast Rs. 3,490, Double Treat Rs. 1,720, Wrap N Wing Rs. 1,790) */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 text-left">
            <h3 className="text-lg md:text-xl font-display font-extrabold text-white">
              Combos — Twin Zinger · Fantastic Four · Full House Feast · Double Treat · Wrap N Wing
            </h3>
            <span className="text-xs text-zinc-400">
              Each combo includes its exact menu items &amp; dedicated photograph
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {signatureCombos.map((combo) => (
              <div
                key={combo.id}
                className="rounded-2xl bg-zinc-900/90 border border-white/10 hover:border-brand-red/60 overflow-hidden flex flex-col justify-between transition-all duration-300 group text-left"
              >
                <div>
                  <div
                    onClick={() => onSelectDish(combo)}
                    className="relative aspect-[4/3] w-full bg-zinc-800 overflow-hidden cursor-pointer"
                  >
                    <SafeImage
                      src={combo.image}
                      alt={combo.alt}
                      fallbackTitle={combo.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h4
                        onClick={() => onSelectDish(combo)}
                        className="text-sm font-display font-extrabold text-white group-hover:text-gold-400 transition-colors cursor-pointer"
                      >
                        {combo.name}
                      </h4>
                      <span className="text-sm font-black text-gold-400 whitespace-nowrap tabular-nums">
                        Rs. {combo.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-300 leading-relaxed mb-2">
                      {combo.description}
                    </p>
                    {combo.comboContents && (
                      <div className="text-[11px] text-zinc-400 border-t border-white/10 pt-2">
                        {combo.comboContents.join(' · ')}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    type="button"
                    onClick={() => onQuickAdd(combo)}
                    className="w-full py-2 px-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">add</span>
                    <span>Add Combo (Rs. {combo.price.toLocaleString()})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. LUNCH COMBOS — 12 PM TO 4 PM & MIDNIGHT COMBOS — 11 PM TO 2 AM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lunch Combos — 12 PM to 4 PM */}
          <div className="p-6 rounded-3xl bg-zinc-900/80 border border-white/10 text-left">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-gold-400 text-2xl">wb_sunny</span>
                <div>
                  <h4 className="text-base sm:text-lg font-display font-extrabold text-white">
                    Lunch Combos — 12 PM to 4 PM
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Combo 1 (Rs. 550) · Combo 2 (Rs. 850) · Combo 3 (Rs. 890) · Combo 4 (Rs. 660)
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {lunchCombos.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between gap-3"
                >
                  <div>
                    <div
                      onClick={() => onSelectDish(item)}
                      className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-800 mb-2.5 cursor-pointer"
                    >
                      <SafeImage
                        src={item.image}
                        alt={item.alt}
                        fallbackTitle={item.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="text-sm font-bold text-white">{item.name}</h5>
                      <span className="text-sm font-extrabold text-gold-400 tabular-nums">
                        Rs. {item.price.toLocaleString()}
                      </span>
                    </div>
                    {item.verificationNote && (
                      <p className="text-[10px] text-amber-300/90 mt-1 leading-snug">
                        {item.verificationNote}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => onQuickAdd(item)}
                    className="w-full py-2 px-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold cursor-pointer"
                  >
                    + Add {item.name} (Rs. {item.price})
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Midnight Combos — 11 PM to 2 AM */}
          <div className="p-6 rounded-3xl bg-zinc-900/80 border border-white/10 text-left">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-brand-red text-2xl">dark_mode</span>
                <div>
                  <h4 className="text-base sm:text-lg font-display font-extrabold text-white">
                    Midnight Combos — 11 PM to 2 AM
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Combo 1 (Rs. 560) · Combo 2 (Rs. 720) · Combo 3 (Rs. 700)
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {midnightCombos.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between gap-3"
                >
                  <div>
                    <div
                      onClick={() => onSelectDish(item)}
                      className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-800 mb-2.5 cursor-pointer"
                    >
                      <SafeImage
                        src={item.image}
                        alt={item.alt}
                        fallbackTitle={item.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="text-sm font-bold text-white">{item.name}</h5>
                      <span className="text-sm font-extrabold text-gold-400 tabular-nums">
                        Rs. {item.price.toLocaleString()}
                      </span>
                    </div>
                    {item.verificationNote && (
                      <p className="text-[10px] text-amber-300/90 mt-1 leading-snug">
                        {item.verificationNote}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => onQuickAdd(item)}
                    className="w-full py-2 px-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold cursor-pointer"
                  >
                    + Add (Rs. {item.price})
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Official Menu Sheet Lightbox Modal */}
      {activeSheet && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setActiveSheet(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeSheet.title}
        >
          <div
            className="max-w-3xl w-full bg-zinc-900 rounded-3xl border border-white/15 overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="text-left">
                <h4 className="text-base font-display font-extrabold text-white">
                  {activeSheet.title}
                </h4>
                <p className="text-xs text-zinc-400">{activeSheet.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveSheet(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center cursor-pointer"
                aria-label="Close menu sheet viewer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1 flex justify-center bg-black">
              <img
                src={activeSheet.image}
                alt={activeSheet.title}
                className="max-w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
