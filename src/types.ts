export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Dish {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  modelUrl: string; // URL for GLB file
  category: 'Appetizer' | 'Main Course' | 'Dessert' | 'Drinks';
}
