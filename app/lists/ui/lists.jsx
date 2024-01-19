import { getLists } from '@/app/lib/lists-data'
import Link from 'next/link'
import styles from './lists.module.css'

export default async function Lists() {
	const lists = await getLists()

	if (lists) {
		return (
			<section className={styles.listWrapper}>
				{lists.map((list) => (
					<div className={styles.listContainer} key={list.id}>
						<Link href={`/lists/${list.id}`}>
							<h4>{list.name}</h4>
							<span className={styles.date}>{list.date_created}</span>
							<p>
								Items: <span>0?</span>
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
