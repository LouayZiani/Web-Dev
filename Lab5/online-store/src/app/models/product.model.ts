export interface Product {
  id: number;

  categoryId: number; // NEW
  likes: number;      // NEW (start at 0)

  name: string;
  description: string; // 2–3 sentences
  price: number;       // KZT
  rating: number;      // 1..5 (decimal ok)

  image: string;       // main image
  images: string[];    // min 3
  link: string;        // kaspi.kz product page
}