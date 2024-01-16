import { Suspense } from 'react'
import { fetchLists } from '@/app/lib/data'

async function AllLists() {
	const lists = await fetchLists()
	return (
		<ul>
			{lists.map((list) => (
				<li key={list.id}>{list.name}</li>
			))}
		</ul>
	)
}

export default function Lists() {
	return (
		<>
			<h1>all lists here</h1>
			<Suspense fallback={<p>Fetching lists ...</p>}>
				<AllLists />
			</Suspense>
		</>
	)
}
