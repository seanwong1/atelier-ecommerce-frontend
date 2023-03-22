import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import RelatedProducts from '../client/src/components/RelatedProducts.jsx';
import RelatedProduct from '../client/src/components/RelatedProduct.jsx';
import getHandler from '../client/src/lib/getHandler.js';

jest.mock('axios');

test('should equal 3', () => {
  expect(1 + 2).toBe(3);
});