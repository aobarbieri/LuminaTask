import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import add from '@/assets/icons/add-dark.svg'
import Lists from '@/app/lists/ui/lists'
import styles from './page.module.css'

export default function ListsOverview() {
	return (
		<main className={styles.main}>
			<h1>Welcome back!</h1>
			<div className={styles.content}>
				<div className={styles.wrapper}>
					<h3>Your shopping lists</h3>
					<Link className='link-btn-default' href='/lists/new'>
						<Image src={add} alt='plus' width={14.351} height={14.351} />
						Create new list
					</Link>
				</div>
				<Suspense fallback={<p>Fetching lists ...</p>}>
					<Lists />
				</Suspense>
			</div>
		</main>
	)
}
