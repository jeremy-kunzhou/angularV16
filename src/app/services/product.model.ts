export interface ProductAPI {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  category?: string;
  image?: string;
  rating?: { rate: number; count: number };
}
