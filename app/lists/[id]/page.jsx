import { notFound } from 'next/navigation'
import { getListById } from '@/app/lib/lists-data'
import { getItems } from '@/app/lib/items-data'
import { DeleteItem } from '@/app/items/ui/buttons'
import { CreateItem } from '@/app/items/ui/forms'
import { DeleteList } from '../ui/forms'
import styles from './page.module.css'

export default async function View({ params }) {
	// params.id -> { id: '###'}
	// listId -> ####
	const listId = params.id

	// list -> [{ list props }]
	const list = await getListById(listId)

	// items -> [{ item props}]
	const items = await getItems(listId)
	console.log(items.length)

	if (!list) {
		notFound()
	}

	return (
		<main className={styles.main}>
			<section>
				<h2>{list[0].name}</h2>
				Link
				{/* <CreateItem listId={listId} /> */}
				<div>
					{items?.map((item) => (
						<div className={styles.content} key={item.id}>
							<p>{item.name}</p>
							<p>{item.quantity}</p>
							<DeleteItem id={item.id} />
						</div>
					))}
				</div>
			</section>
			<DeleteList id={list[0].id} />
		</main>
	)
}
