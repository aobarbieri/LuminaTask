import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Create a new shopping list</h1>
			<button>Create List</button>
		</main>
	)
}
