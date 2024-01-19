import { CreateList } from '@/app/lists/ui/forms'
import styles from './page.module.css'

export default function NewList() {
	return (
		<main className={`outer-container`}>
			<section className={`${styles.container} inner-container`}>
				<h1>What should we name this list?</h1>
				<CreateList />
			</section>
		</main>
	)
}
