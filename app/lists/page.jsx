import { Suspense } from 'react'
import Lists from '@/app/lists/ui/lists'
import Link from 'next/link'
import styles from './page.module.css'

export default function ListsOverview() {
	return (
		<main className={styles.main}>
			<h1>Welcome back!</h1>
			<div className={styles.content}>
				<div className={styles.wrapper}>
					<h3>Your shopping lists</h3>
					<Link href='/lists/new'>Create new list</Link>
				</div>
				<Suspense fallback={<p>Fetching lists ...</p>}>
					<Lists />
				</Suspense>
			</div>
		</main>
	)
}
