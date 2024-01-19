import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import add from '@/assets/icons/add.svg'

export default function Home() {
	return (
		<main className={`outer-container`}>
			<section className={`${styles.container} inner-container`}>
				<h1>Create a new shopping list</h1>
				<Link className='link-btn-primary' href='lists/new/'>
					<Image src={add} alt='plus' width={17} height={17} />
					Create list
				</Link>
			</section>
		</main>
	)
}
