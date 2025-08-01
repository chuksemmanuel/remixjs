import { Outlet } from 'react-router';
import type { Route } from './+types/storefront';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'storefront Page' }, { name: 'description', content: 'The storefront page' }];
}

export default function Storefront() {
	return (
		<div>
			<h1>storefront</h1>
			<Outlet />
		</div>
	);
}
