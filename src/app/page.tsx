"use client";

import React, { useState } from 'react';
import Galaxy from '@/components/Galaxy';
import { Navbar } from '@/components/Navbar';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { motion } from 'framer-motion';

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Seraph Houndstooth Shirt',
    price: 145,
    image: '/products/premium/houndstooth_shirt.png',
    description: 'Camisa con patrón pata de gallo de corte relajado, inspirada en la estética urbana contemporánea.'
  },
  {
    id: '2',
    name: 'Nebula Oversized Hoodie',
    price: 180,
    image: '/products/premium/nebula_hoodie.png',
    description: 'Sudadera de alto gramaje con caída perfecta. El básico definitivo elevado al infinito.'
  },
  {
    id: '3',
    name: 'Void Tech Jacket',
    price: 295,
    image: '/products/premium/tech_jacket.png',
    description: 'Chaqueta técnica impermeable con detalles minimalistas y acabados de precisión.'
  },
  {
    id: '4',
    name: 'Stellar Cargo Pants',
    price: 220,
    image: '/products/premium/cargo_pants.png',
    description: 'Pantalones cargo de alta funcionalidad con silueta contemporánea y múltiples bolsillos.'
  },
  {
    id: '5',
    name: 'Orbit Graphic Tee',
    price: 85,
    image: '/products/premium/graphic_tee.png',
    description: 'Camiseta de algodón orgánico con gráfico exclusivo inspirado en la mecánica orbital.'
  },
  {
    id: '6',
    name: 'Midnight Bomber',
    price: 260,
    image: '/products/premium/bomber_jacket.png',
    description: 'Chaqueta bomber de satén premium con forro personalizado y cremalleras selladas.'
  },
  {
    id: '7',
    name: 'Eclipse Knit Sweater',
    price: 195,
    image: '/products/premium/knit_sweater.png',
    description: 'Jersey de punto grueso con texturas deconstruidas y ajuste sobredimensionado.'
  },
  {
    id: '8',
    name: 'Void Crossbody Bag',
    price: 120,
    image: '/products/premium/crossbody_bag.png',
    description: 'Accesorio modular de piel sintética premium para el nómada urbano.'
  },
  {
    id: '9',
    name: 'Void Denim Jacket',
    price: 240,
    image: '/products/premium/denim_jacket.png',
    description: 'Chaqueta vaquera de edición limitada con detalles galácticos en el reverso.'
  }
];

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main className="min-h-screen relative font-sans">
      {/* requested Galaxy component with exact props */}
      <div className="fixed inset-0 z-[-1]">
        <Galaxy
          starSpeed={0.5}
          density={1}
          hueShift={140}
          speed={1}
          glowIntensity={0.3}
          saturation={0}
          mouseRepulsion
          repulsionStrength={0.5}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          transparent
        />
      </div>

      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Seraph Noir Clothing
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            STREETWEAR <br /> FROM THE VOID
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Minimalismo, oscuridad y patrones estelares. Nuestra colección está diseñada para quienes caminan entre las sombras de la ciudad y el brillo de las galaxias.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform">
              Ver Colección
            </button>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors">
              Nuestra Estética
            </button>
          </div>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white">Últimos Drops</h2>
            <p className="text-gray-500">Diseñados para trascender</p>
          </div>
          <button className="text-purple-400 font-medium hover:underline underline-offset-4">
            Ver todo el drop →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-center text-gray-600 text-xs">
        <p>© 2026 SERAPH NOIR CLOTHING. Estética sin límites.</p>
      </footer>
    </main>
  );
}
