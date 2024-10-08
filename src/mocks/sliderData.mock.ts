import ryiria from './../assets/riyria.png';
import lotr from './../assets/lotr.png';
import previewLotr from './../assets/lotr_preview.jpg';
import eyeoftheworld_preview from './../assets/eyeoftheworld_preview.png';
import theftOfSwords from './../assets/theft_of_swords_preview.jpg';
import previewWayOfKings from './../assets/preview_wayofkings.jpg';
import wot from './../assets/wot.png';
import wayOfKings from './../assets/way_of_kings.png';
import got from './../assets/got.jpg';
import gotPreview from './../assets/got_preview.jpg';
import { Book } from '../types/book';

export const booksData: Book[] = [
  {
    author: 'Michael J. Sullivan',
    description:
      'The Riyria Revelations is a series of high fantasy novels written by Michael J. Sullivan',
    id: '1',
    image: ryiria,
    previewImage: theftOfSwords,
    title: 'The Riyria Revelations',
    rating: 9.17,
    howManyTimeWereRated: 5,
    currentUserRating: null,
    year: 2008,
    tags: ['action', 'adventure', 'fantasy', 'mystery'],
  },
  {
    author: 'J. R. R. Tolkien',
    description:
      'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien',
    id: '2',
    image: lotr,
    previewImage: previewLotr,
    title: 'The Lord of the Rings',
    rating: 9.5,
    howManyTimeWereRated: 6,
    currentUserRating: null,
    year: 1954,
    tags: ['action', 'adventure', 'fantasy', 'mythology'],
  },
  {
    author: 'Brandon Sanderson',
    id: '3',
    image: wayOfKings,
    previewImage: previewWayOfKings,
    title: 'The Way of Kings',
    description:
      'The Way of Kings is an epic high fantasy novel written by American author Brandon Sanderson and the first book in The Stormlight Archive series',
    rating: 9.0,
    howManyTimeWereRated: 5,
    currentUserRating: null,
    year: 2010,
    tags: ['action', 'adventure', 'fantasy', 'kosmere'],
  },

  {
    author: 'Robert Jordan',
    description:
      'The Eye of the World is a high fantasy novel by American writer Robert Jordan, the first book of The Wheel of Time series. ',
    id: '4',
    image: wot,
    title: 'The Eye of the World',
    previewImage: eyeoftheworld_preview,
    rating: 7.6,
    howManyTimeWereRated: 5,
    currentUserRating: null,
    year: 1990,
    tags: ['action', 'adventure', 'fantasy', 'wheeloftime'],
  },
  {
    author: 'George R. R. Martin',
    description:
      'A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin.',
    id: '5',
    image: got,
    previewImage: gotPreview,
    title: 'A Game of Thrones',
    rating: 8.6,
    howManyTimeWereRated: 5,
    currentUserRating: null,
    year: 1996,
    tags: ['action', 'adventure', 'fantasy', 'history', 'politics'],
  },
];
