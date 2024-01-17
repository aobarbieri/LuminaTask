import { fetchLists } from '@/app/lib/data'
import DeleteList from './DeleteList'

export default async function Lists() {
	const lists = await fetchLists()

	return (
		<ul>
			{lists?.map((list) => (
				<div key={list.id}>
					<li>{list.name}</li>
					<DeleteList id={list.id} />
				</div>
			))}
		</ul>
	)
}
