import type { Route } from './+types/settings';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'settings Page' }, { name: 'description', content: 'The settings page' }];
}

export default function Settings() {
	return <h1>This is the settings page of the New React Router App!</h1>;
}
