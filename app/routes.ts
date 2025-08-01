import { type RouteConfig, index, layout, prefix, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('about', 'routes/about.tsx'),
	route('posts', 'routes/posts.tsx'),
	route('posts/:postId', 'routes/post.tsx'),

	// Nested Routes
	route('dashboard', 'layouts/dashboard.tsx', [index('routes/overview.tsx'), route('settings', 'routes/settings.tsx')]),
	// In React Router v7, nested routes can be defined using `layout` and `index`
	layout('layouts/storefront.tsx', [...prefix('store', [index('routes/store.tsx'), route('products', 'routes/products.tsx')])]),
] satisfies RouteConfig;
