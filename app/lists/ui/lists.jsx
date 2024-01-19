import { getLists } from '@/app/lib/lists-data'
import { DeleteList } from './forms'
import Link from 'next/link'

export default async function Lists() {
	const lists = await getLists()

	if (lists) {
		return (
			<section>
				{lists.map((list) => (
					<div key={list.id}>
						<Link href={`/lists/${list.id}`}>
							<h4>{list.name}</h4>
							<span>{list.date_created}</span>
							<p>
								Items: <span>0?</span>
							</p>

							<DeleteList id={list.id} />
						</Link>
					</div>
				))}
			</section>
		)
	} else {
		return <p>No lists found</p>
	}
}
