import type { Route } from './+types/store';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'store page' }, { name: 'description', content: 'Welcome to the store page' }];
}

export default function Store() {
	return <h1>Welcome to the store page</h1>;
}
