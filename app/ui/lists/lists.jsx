import { getLists } from '@/app/lib/lists-data'
import { ViewList, DeleteList } from './forms'

export default async function Lists() {
	const lists = await getLists()

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
