export type Book = {
  image: string;
  previewImage: string;
  title: string;
  description: string;
  author: string;
  id: string;
  rating: number;
  howManyTimeWereRated: number;
  currentUserRating: number | null;
  year: number;
  tags: string[];
};
