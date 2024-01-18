import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.container}>
				<h1>Create a new shopping list</h1>
				<Link href='lists/new/'>Create List</Link>
			</section>
		</main>
	)
}
