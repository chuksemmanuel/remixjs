import type { Route } from './+types/about';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'About page' }, { name: 'description', content: 'Welcome to the about page' }];
}

export default function About() {
	return <h1>Welcome to the about page</h1>;
}
