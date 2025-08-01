import { Link, useNavigation } from 'react-router';
import type { Route } from './+types/posts';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to the posts route!' }];
}

export async function loader() {
	try {
		const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await posts.json();
		return { posts: data };
	} catch (error) {
		console.error('Error loading posts:', error);
		return { posts: [] };
	}
}

export default function Posts({ loaderData }: Route.ComponentProps) {
	const navigation = useNavigation();

	const isNavigating = Boolean(navigation.location);

	if (isNavigating) {
		return (
			<div>
				<span>Loading...</span>
			</div>
		);
	}
	return (
		<div>
			<h1 className='text-3xl font-bold mb-4'>Posts</h1>

			{/* Posts*/}
			<ul>
				{loaderData.posts.map((post: { id: number; title: string }, index: number) => (
					<li key={post.id} className='mb-2'>
						<Link to={`/posts/${post.id}`} className='text-blue-600 hover:underline '>
							{index + 1} - {post.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
