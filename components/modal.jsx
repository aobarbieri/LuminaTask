import Image from 'next/image'
import close from '@/assets/icons/close.svg'
import styles from './modal.module.css'

export default function Modal({ children, toggle }) {
	return (
		<section className={styles.modal}>
			<div>
				{children}
				<button onClick={toggle}>
					<Image src={close} alt='close' width={20} height={20} />
				</button>
			</div>
		</section>
	)
}
