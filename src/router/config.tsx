import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ShopPage = lazy(() => import('../pages/shop/page'));
const ProductPage = lazy(() => import('../pages/product/page'));
const CheckoutPage = lazy(() => import('../pages/checkout/page'));
const SearchPage = lazy(() => import('../pages/search/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/shop/:category',
    element: <ShopPage />,
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;