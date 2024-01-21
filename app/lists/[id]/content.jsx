'use client'
import { useState } from 'react'
import { DeleteItem } from '@/app/items/ui/forms'
import { DeleteList } from '../ui/forms'
import Image from 'next/image'
import NewItem from './new-item'
import add from '@/assets/icons/add-dark.svg'
import styles from './content.module.css'

export default function Content({ listId, list, items }) {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		setIsVisible(!isVisible)
	}

	return (
		<>
			{isVisible && <NewItem toggle={toggleVisibility} listId={listId} />}

			<main className={styles.main}>
				<section className={styles.container}>
					<h2>{list[0].name}</h2>
					<button onClick={toggleVisibility} className='link-btn-default'>
						<Image src={add} alt='plus' width={14.351} height={14.351} />
						Add item
					</button>

					<div className={styles.wrapper}>
						{items?.map((item) => (
							<div className={styles.content} key={item.id}>
								<p>{item.name}</p>
								<span>{item.quantity}</span>
								<DeleteItem id={item.id} />
							</div>
						))}
					</div>
				</section>

				<DeleteList id={list[0].id} />
			</main>
		</>
	)
}
