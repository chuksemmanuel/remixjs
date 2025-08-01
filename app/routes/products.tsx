import type { Route } from './+types/products';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'products page' }, { name: 'description', content: 'Welcome to the products page' }];
}

export default function Products() {
	return <h1>Welcome to the products page</h1>;
}
