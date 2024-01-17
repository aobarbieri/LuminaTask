import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'
import logo from '@/assets/logo.svg'

export default function Header() {
	return (
		<header>
			<nav>
				<Link href='/'>
					<Image src={logo} alt='Food and Stuff logo' width={131} height={31} priority />
				</Link>
				<ul>
					<li>
						<NavLink href='/lists'>My Lists</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
