import { Outlet } from 'react-router';
import type { Route } from '../layouts/+types/dashboard';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'Dashboard Page' }, { name: 'description', content: 'The dashboard page' }];
}

export default function Dashboard() {
	return (
		<div>
			<Outlet />
		</div>
	);
}
