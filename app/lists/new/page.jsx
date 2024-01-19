import { CreateList } from '@/app/ui/lists/forms'
import styles from './page.module.css'

export default function NewList() {
	return (
		<main className={styles.main}>
			<section className={styles.container}>
				<h1>What should we name this list?</h1>
				<CreateList />
			</section>
		</main>
	)
}
