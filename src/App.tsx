/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { CartOrderEntry, ItemModal } from './components/ItemModal';
import { LocationSection } from './components/LocationSection';
import { MenuSection } from './components/MenuSection';
import { Navbar } from './components/Navbar';
import { QualityPromise } from './components/QualityPromise';
import { MenuItem } from './data/menuData';

const CART_STORAGE_KEY = 'fry_day_fsd_cart_v1';

export default function App() {
  // Theme state with localStorage & system preference detection
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Cart state persisted to localStorage
  const [cartEntries, setCartEntries] = useState<CartOrderEntry[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('menu');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync dark class on <html>
  useEffect(() => {
    const htmlEl = document.documentElement;
    if (isDark) {
      htmlEl.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlEl.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Persist cart entries
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartEntries));
    } catch {
      // Ignore storage quota errors
    }
  }, [cartEntries]);

  // Scroll spy for navigation links
  useEffect(() => {
    const sectionIds = ['menu', 'craft', 'about', 'location'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2600);
  };

  const handleAddToCart = (newEntry: Omit<CartOrderEntry, 'cartItemId'>) => {
    const addonSignature = newEntry.selectedAddons
      .map((a) => a.id)
      .sort()
      .join(',');
    const signature = `${newEntry.item.id}__${newEntry.spiceLevel || ''}__${addonSignature}__${
      newEntry.notes
    }`;

    setCartEntries((prev) => {
      const existingIndex = prev.findIndex((e) => e.cartItemId === signature);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + newEntry.quantity,
        };
        return updated;
      }
      return [...prev, { ...newEntry, cartItemId: signature }];
    });

    showToast(`Added ${newEntry.quantity}x ${newEntry.item.name} to Order Bag`);
  };

  const handleQuickAdd = (item: MenuItem) => {
    handleAddToCart({
      item,
      quantity: 1,
      spiceLevel: item.spiceOptions ? 'Classic Fry Day' : undefined,
      selectedAddons: [],
      notes: '',
    });
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCartEntries((prev) =>
      prev
        .map((entry) =>
          entry.cartItemId === cartItemId
            ? { ...entry, quantity: entry.quantity + delta }
            : entry
        )
        .filter((entry) => entry.quantity > 0)
    );
  };

  const handleRemoveEntry = (cartItemId: string) => {
    setCartEntries((prev) => prev.filter((e) => e.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartEntries([]);
  };

  const getItemQuantity = (itemId: string) => {
    return cartEntries
      .filter((e) => e.item.id === itemId)
      .reduce((sum, e) => sum + e.quantity, 0);
  };

  const totalCartCount = cartEntries.reduce((sum, e) => sum + e.quantity, 0);
  const cartSubtotal = cartEntries.reduce((sum, entry) => {
    const addonsPrice = entry.selectedAddons.reduce((aSum, a) => aSum + a.price, 0);
    return sum + (entry.item.price + addonsPrice) * entry.quantity;
  }, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-[#121214] text-on-surface dark:text-[#f4f4f5] transition-colors duration-300">
      <Navbar
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        <Hero onSelectDish={(item) => setSelectedDish(item)} />
        <MenuSection
          onSelectDish={(item) => setSelectedDish(item)}
          onQuickAdd={handleQuickAdd}
          getItemQuantity={getItemQuantity}
        />
        <QualityPromise />
        <AboutSection />
        <LocationSection />
      </main>

      <Footer
        cartCount={totalCartCount}
        cartSubtotal={cartSubtotal}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Dish Customization Modal */}
      <ItemModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Order Bag & WhatsApp Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        entries={cartEntries}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveEntry={handleRemoveEntry}
        onClearCart={handleClearCart}
      />

      {/* Subtle Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-primary dark:bg-zinc-800 text-white px-5 py-3 rounded-full shadow-xl border border-white/15 flex items-center gap-2.5 text-xs font-bold whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-base text-gold-400">check_circle</span>
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="ml-2 underline text-gold-400 hover:text-gold-300 cursor-pointer"
          >
            View Bag
          </button>
        </div>
      )}
    </div>
  );
}
