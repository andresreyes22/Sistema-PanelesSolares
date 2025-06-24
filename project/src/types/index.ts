// Add to existing types
export interface Content {
  id: string;
  section: 'home' | 'services' | 'products' | 'about';
  type: 'text' | 'image';
  title: string;
  content?: string;
  imageUrl?: string;
  order: number;
  updatedAt: Date;
  updatedBy: string;
}