import { getLists } from '@/app/lib/lists-data'
import { getItems } from '@/app/lib/items-data'
import Link from 'next/link'
import styles from './lists.module.css'

export default async function Lists() {
	const lists = await getLists()

	const fetchNumOfItems = async (list) => {
		const num = await getItems(list)
		return num.rowCount
	}

	if (lists) {
		return (
			<section className={styles.wrapper}>
				{lists.map(async (list) => (
					<div className={`${styles.container} lists-container`} key={list.id}>
						<Link className={styles.content} href={`/lists/${list.id}`}>
							<h4>{list.name}</h4>
							<span className={styles.date}>{list.date_created}</span>
							<p>
								Items: <span>{fetchNumOfItems(list.id)}</span>
							</p>
						</Link>
					</div>
				))}
			</section>
		)
	} else {
		return <p>No lists found</p>
	}
}
