import { fetchLists } from '@/app/lib/data'
import { ViewList, DeleteList } from './buttons'

export default async function Lists() {
	const lists = await fetchLists()
	if (lists) {
		return (
			<ul>
				{lists.map((list) => (
					<div key={list.id}>
						<ViewList id={list.id} />
						<li>{list.name}</li>
						<DeleteList id={list.id} />
					</div>
				))}
			</ul>
		)
	} else {
		return <p>No lists found</p>
	}
}
