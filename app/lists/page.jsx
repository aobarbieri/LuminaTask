import { Suspense } from 'react'
import Lists from '@/app/lists/ui/lists'
import Link from 'next/link'

export default function ListsOverview() {
	return (
		<main>
			<h1>Welcome back!</h1>
			<div>
				<h3>Your shopping lists</h3>
				<Link href='/lists/new'>Create new list</Link>
			</div>
			<Suspense fallback={<p>Fetching lists ...</p>}>
				<Lists />
			</Suspense>
		</main>
	)
}
