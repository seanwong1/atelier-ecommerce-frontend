import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import RelatedProducts from '../src/client/src/components/RelatedProducts.jsx';
import RelatedProduct from '../src/client/src/components/RelatedProduct.jsx';

test('Related Products component should exist', () => {
  const { container } = render(<RelatedProducts />);
  expect(container.firstChild).toHaveClass('related-products');
});

test('Product rating should render to page', () => {
  const { getByTestId } = render(<RelatedProduct />);
  const productRatings = getByTestId('product-rating');
  const relatedProduct = getByTestId('related-product');
  expect(relatedProduct).toContainElement(productRatings)
});
