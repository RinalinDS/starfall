export type Book = {
  image: string;
  previewImage: string;
  title: string;
  description: string;
  author: string;
  id: string;
  rating: number;
  ratingCount: number;
  currentUserRating: number | null;
  year: number;
  tags: string[];
};
