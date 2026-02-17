"use client";

import React from 'react';
import { ShoppingCart, Moon, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const Navbar = ({ onCartClick }: { onCartClick: () => void }) => {
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-lg" />
          <span className="text-xl font-bold tracking-tighter text-white">SERAPH NOIR</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Colecciones</a>
          <a href="#" className="hover:text-white transition-colors">Novedades</a>
          <a href="#" className="hover:text-white transition-colors">Ofertas</a>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button 
            onClick={onCartClick} 
            className="relative text-gray-300 hover:text-white transition-colors"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
          <div className="h-6 w-[1px] bg-white/10 mx-1" />
          <button className="text-gray-300 hover:text-white transition-colors">
            <Moon size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};
