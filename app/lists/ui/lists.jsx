import { getLists } from '@/app/lib/lists-data'
import Link from 'next/link'
import styles from './lists.module.css'

export default async function Lists() {
	const lists = await getLists()

	if (lists) {
		// retrieve the amount of items that this
		//console.log(lists.length)
		return (
			<section className={styles.wrapper}>
				{lists.map((list) => (
					<div className={styles.container} key={list.id}>
						<Link className={styles.content} href={`/lists/${list.id}`}>
							<h4>{list.name}</h4>
							<span className={styles.date}>{list.date_created}</span>
							<p>
								Items: <span>?</span>
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
