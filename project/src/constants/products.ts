import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Panel Solar Premium",
    description: "Panel solar monocristalino de alta eficiencia",
    power: "400W",
    category: "panels",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Inversor Solar Inteligente",
    description: "Inversor híbrido con conectividad WiFi",
    power: "5kW",
    category: "inverters",
    image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Batería de Litio",
    description: "Sistema de almacenamiento de energía de alta capacidad",
    power: "10kWh",
    category: "batteries",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80"
  }
];