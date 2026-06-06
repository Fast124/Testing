import { Dish, Review } from './types';

export const MENU_ITEMS: Dish[] = [
  {
    id: '1',
    name: 'Classic Margherita Pizza',
    price: '$15.00',
    description: 'A delicious, photorealistic 3D view of our authentic Margherita pizza, featuring fresh melted mozzarella, rich tomato sauce, and fresh basil leaves on a white plate.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop',
    modelUrl: 'https://raw.githubusercontent.com/Fast124/Testing/main/pizza.glb', // Direct GitHub model URL
    category: 'Main Course',
  },
  {
    id: '2',
    name: 'Wagyu Ribeye',
    price: '$85.00',
    description: 'A5 Miyazki Wagyu steak, scorched leeks, bone marrow butter, and red wine reduction.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', // Placeholder model
    category: 'Main Course',
  },
  {
    id: '3',
    name: 'Deconstructed Tiramisu',
    price: '$20.00',
    description: 'Espresso-soaked sponge, mascarpone foam, cocoa soil, and gold leaf.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1000&auto=format&fit=crop',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', // Placeholder model
    category: 'Dessert',
  },
  {
    id: '4',
    name: 'Scallop Crudité',
    price: '$23.50',
    description: 'Hokkaido scallops, yuzu kosho, pickled radish, and cilantro oil.',
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=1000&auto=format&fit=crop',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', // Placeholder model
    category: 'Appetizer',
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    user: 'Alex Rivera',
    rating: 5,
    comment: 'The 3D preview is genius! It helped me decide exactly what to order. The Wagyu was melt-in-your-mouth perfection.',
    date: '2024-03-15',
  },
  {
    id: '2',
    user: 'Sarah Chen',
    rating: 4,
    comment: 'Beautiful atmosphere and very creative dishes. The deconstructed tiramisu was a highlight.',
    date: '2024-03-10',
  },
  {
    id: '3',
    user: 'Michael Ross',
    rating: 5,
    comment: 'Best fine dining experience in months. The attention to detail in the presentation is unmatched.',
    date: '2024-03-05',
  }
];
