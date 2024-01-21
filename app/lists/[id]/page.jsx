import { notFound } from 'next/navigation'
import { getListById } from '@/app/lib/lists-data'
import { getItems } from '@/app/lib/items-data'
import { CreateItem, DeleteItem } from '@/app/items/ui/forms'
import { DeleteList } from '../ui/forms'
import Link from 'next/link'
import Image from 'next/image'
import add from '@/assets/icons/add-dark.svg'
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
				<Link className='link-btn-default' href='/'>
					<Image src={add} alt='plus' width={14.351} height={14.351} />
					Add item
				</Link>
				{/* <CreateItem listId={listId} /> */}
				<div className={styles.wrapper}>
					{items?.map((item) => (
						<div className={styles.content} key={item.id}>
							<p>{item.name}</p>
							<span>{item.quantity}</span>
							<DeleteItem id={item.id} />
						</div>
					))}
				</div>
			</section>
			<DeleteList id={list[0].id} />
		</main>
	)
}
