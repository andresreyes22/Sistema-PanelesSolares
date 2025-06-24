import { Wrench, Battery, Settings, Shield } from 'lucide-react';
import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    icon: Wrench,
    title: "Instalación de Paneles Solares",
    description: "Instalación profesional de sistemas fotovoltaicos",
    features: [
      "Evaluación del sitio",
      "Diseño personalizado",
      "Instalación certificada",
      "Pruebas y puesta en marcha"
    ]
  },
  {
    icon: Battery,
    title: "Sistemas de Almacenamiento",
    description: "Soluciones de almacenamiento de energía",
    features: [
      "Baterías de alta capacidad",
      "Sistemas híbridos",
      "Respaldo de energía",
      "Monitoreo inteligente"
    ]
  },
  {
    icon: Settings,
    title: "Mantenimiento",
    description: "Servicios de mantenimiento preventivo y correctivo",
    features: [
      "Inspecciones regulares",
      "Limpieza de paneles",
      "Reparaciones",
      "Optimización de rendimiento"
    ]
  },
  {
    icon: Shield,
    title: "Garantía y Soporte",
    description: "Respaldo completo para tu sistema solar",
    features: [
      "Garantía extendida",
      "Soporte técnico 24/7",
      "Monitoreo remoto",
      "Servicio de emergencia"
    ]
  }
];