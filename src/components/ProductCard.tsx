"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Heart } from 'lucide-react';
import { Product, useCart } from '@/context/CartContext';

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-xl transition-all hover:shadow-2xl hover:border-purple-500/50"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ 
            filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))' 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <button 
            onClick={() => addToCart(product)}
            className="w-full py-3 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            <Plus size={18} />
            Añadir al carrito
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors uppercase tracking-tight line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xl font-black text-white italic">
            ${product.price}
          </p>
        </div>
        <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
};
