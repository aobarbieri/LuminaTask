import { fetchLists } from '@/app/lib/data'

export default async function Lists() {
	const lists = await fetchLists()

	return (
		<>
			<h1>all lists here</h1>
			{lists.map((list) => (
				<li key={list.id}>{list.name}</li>
			))}
		</>
	)
}
