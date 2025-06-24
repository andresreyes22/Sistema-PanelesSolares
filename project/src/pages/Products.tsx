import { useState } from 'react';
import { Filter } from 'lucide-react';
import { PRODUCTS } from '../constants/products';
import type { Product } from '../types';

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-16">
      <div className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Nuestros Productos</h1>
          <p className="text-xl">Equipos de alta calidad para sistemas solares</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Filter className="h-5 w-5 text-gray-600" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md px-4 py-2"
          >
            <option value="all">Todas las categorías</option>
            <option value="panels">Paneles Solares</option>
            <option value="inverters">Inversores</option>
            <option value="batteries">Baterías</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product: Product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold">{product.power}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    Más información
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}