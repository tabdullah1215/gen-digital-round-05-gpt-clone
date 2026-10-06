import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { commerceProducts, productContent } from '@/data/seed';
import { toProduct } from '@/data/storefront';
import { ProductView } from './ProductView';

const product = toProduct(commerceProducts[1], productContent[1]);

describe('product page', () => {
  it('shows the product details and price', () => {
    render(<ProductView product={product} />);
    expect(screen.getByRole('heading', { name: 'Storm Shell' })).toBeInTheDocument();
    expect(screen.getByText('$189.00')).toBeInTheDocument();
    expect(screen.getByText(/Three-layer waterproof fabric/)).toBeInTheDocument();
  });

  it('keeps the trip-list action available without changing the product link contract', () => {
    render(<ProductView product={product} />);
    expect(screen.getByRole('button', { name: 'Add to trip list' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Back to all products' })).toHaveAttribute('href', '/');
  });
});
