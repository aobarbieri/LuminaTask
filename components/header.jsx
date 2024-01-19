import Image from 'next/image'
import Link from 'next/link'
import NavLink from './nav-link'
import logo from '@/assets/logo.svg'
import styles from './header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<nav>
				<Link href='/'>
					<Image src={logo} alt='Food and Stuff logo' width={131} height={31} priority />
				</Link>
				<ul>
					<li className={styles.item}>
						<NavLink href='/'>Home</NavLink>
					</li>
					<li className={styles.item}>
						<NavLink href='/lists'>My Lists</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
