import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import About from '~/pages/About';
import Products from '~/pages/Products';

export const publicRoutes = [
    {
        path: '/',
        component: Home,
        // layout: HeaderOnly,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/products',
        component: Products,
    },
];
export const privateRoutes = [];
