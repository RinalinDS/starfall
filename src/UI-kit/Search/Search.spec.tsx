import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Search } from './Search';

describe('Search should rendered correctly', () => {
  it('default render state', () => {
    render(<Search onClick={vi.fn()} />);

    const input = screen.getByPlaceholderText('Search');

    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();

    expect(button).toBeInTheDocument();
  });
});
