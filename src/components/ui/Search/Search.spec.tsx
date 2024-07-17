import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Search } from './Search';

describe('Search should rendered correctly', () => {
  it('default render state', () => {
    render(<Search />);

    const input = screen.getByPlaceholderText('Search');

    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();

    expect(button).toBeInTheDocument();
  });
});
