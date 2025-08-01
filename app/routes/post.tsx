import { Link, redirect, useFetcher, useNavigate } from 'react-router';
import type { Route } from './+types/post';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to the posts route!' }];
}

// We usually use the loader to fetch data on the server side
// This is useful for data that needs to be pre-rendered on the server
// For example, fetching a post by its ID from a database
//  export async function loader({ params }: Route.LoaderArgs) {
// 	const post = await db.post.findFirst({
// 		where: { id: params.postId },
// 	});
//  }

// We usually use the clientLoader to fetch data on the client side
// This is useful for data that doesn't need to be pre-rendered on the server
// For example, fetching a post by its ID from an API
export async function clientLoader({ params }: Route.ClientActionArgs) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
	const data = await res.json();
	return { title: data.title, body: data.body, userId: data.userId, id: data.id };
}

// We usually use the action to handle form submissions
// This is useful for actions like creating, updating, or deleting a post
export async function action({ params }: Route.ActionArgs) {
	try {
		await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
			method: 'DELETE',
		});

		return { isDeleted: true };
	} catch (error) {
		console.log('Error deleting post:', error);
		return { isDeleted: false };
	}
}

export default function Post({ loaderData }: Route.ComponentProps) {
	const fetcher = useFetcher();
	const navigate = useNavigate();
	const isDeletd = fetcher.data?.isDeleted;
	const isDeleting = fetcher.state !== 'idle';

	if (isDeleting) {
		return (
			<div>
				<span>Deleting Post...</span>
			</div>
		);
	}
	return (
		<div>
			{isDeletd ?
				<div>
					<p className='text-red-500'>Post deleted successfully!</p>
					<div className='flex gap-4 mt-8'>
						<Link to='/posts' className='bg-zinc-100 text-sm px-4 py-2 cursor-pointer  rounded-md text-gray-800'>
							See All Posts
						</Link>

						<button onClick={() => navigate('/')} className='bg-zinc-100 text-sm px-4 py-2  cursor-pointer rounded-md text-gray-800'>
							Navigate to Home
						</button>
					</div>
				</div>
			:	<div className='space-y-4'>
					<h1 className='text-3xl text-balance'>{loaderData.title}</h1>
					<p className='text-balance'>{loaderData.body}</p>
					{/* We are user <fetcher.Form> over just <Form> because fetcher to avoid navigation redirects when form submits  */}
					<fetcher.Form method='delete'>
						<button type='submit' className='bg-red-600 px-4 py-2 rounded-md text-gray-100 cursor-pointer'>
							Delete Post
						</button>
					</fetcher.Form>
				</div>
			}
		</div>
	);
}
