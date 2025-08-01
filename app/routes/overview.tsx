import type { Route } from './+types/overview';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'overview Page' }, { name: 'description', content: 'The overview page' }];
}

export default function Overview() {
	return <h1>This is the overview page of the New React Router App!</h1>;
}
