'use client';

import React, { useState } from 'react';
import { SectionContainer, Button, Card, CardImage, CardContent, CardTitle, CardDescription } from '../ui';

interface MerchItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes?: string[];
  new?: boolean;
  limited?: boolean;
}

const merchItems: MerchItem[] = [
  {
    id: 'hoodie-tour',
    name: 'Hoodie World Tour 2026',
    price: 180,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    category: 'Ropa',
    description: 'Hoodie oficial del World Tour 2026 con diseño exclusivo',
    sizes: ['S', 'M', 'L', 'XL'],
    new: true,
  },
  {
    id: 'lightstick',
    name: 'ARMY Bomb Ver. 5',
    price: 220,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
    category: 'Accesorios',
    description: 'Lightstick oficial con conectividad Bluetooth',
    limited: true,
  },
  {
    id: 'tshirt-logo',
    name: 'Camiseta BTS Logo',
    price: 85,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'Ropa',
    description: 'Camiseta de algodón premium con logo bordado',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'poster-set',
    name: 'Set de Pósters Colección',
    price: 65,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    category: 'Coleccionables',
    description: 'Set de 7 pósters A3 de alta calidad',
  },
  {
    id: 'cap-army',
    name: 'Gorra ARMY Edition',
    price: 55,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
    category: 'Accesorios',
    description: 'Gorra ajustable con logo ARMY bordado',
    new: true,
  },
  {
    id: 'photobook',
    name: 'Photobook Tour Edition',
    price: 120,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
    category: 'Coleccionables',
    description: 'Photobook de 200 páginas con fotos exclusivas del tour',
    limited: true,
  },
];

const categories = ['Todos', 'Ropa', 'Accesorios', 'Coleccionables'];

const MerchSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [cart, setCart] = useState<{ id: string; quantity: number }[]>([]);

  const filteredItems = activeCategory === 'Todos'
    ? merchItems
    : merchItems.filter(item => item.category === activeCategory);

  const addToCart = (id: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <SectionContainer
      id="merch"
      title="Merchandising Oficial"
      subtitle="Llévate un recuerdo exclusivo del World Tour 2026"
    >
      {/* Cart indicator */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary-dark transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="font-semibold">{cartCount} items</span>
          </button>
        </div>
      )}

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-5 py-2 rounded-full font-medium transition-all duration-300
              ${activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-secondary text-gray-400 hover:text-white hover:bg-gray-700'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="group">
            <div className="relative">
              <CardImage src={item.image} alt={item.name} className="h-64" />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                {item.new && (
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NUEVO
                  </span>
                )}
                {item.limited && (
                  <span className="bg-accent text-black text-xs font-bold px-2 py-1 rounded">
                    LIMITADO
                  </span>
                )}
              </div>

              {/* Quick add button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => addToCart(item.id)}
                >
                  Añadir al carrito
                </Button>
              </div>
            </div>

            <CardContent>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {item.name}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
                <span className="text-primary font-bold text-lg whitespace-nowrap">
                  S/ {item.price}
                </span>
              </div>

              {item.sizes && (
                <div className="mt-4 flex gap-2">
                  {item.sizes.map((size) => (
                    <span
                      key={size}
                      className="w-8 h-8 flex items-center justify-center text-xs text-gray-400 border border-gray-600 rounded hover:border-primary hover:text-primary cursor-pointer transition-colors"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View all button */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Ver todo el catálogo
        </Button>
      </div>
    </SectionContainer>
  );
};

export default MerchSection;
