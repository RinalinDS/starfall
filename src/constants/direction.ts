export const directions = {
  next: 'next',
  prev: 'prev',
} as const;

export type Direction = keyof typeof directions;
