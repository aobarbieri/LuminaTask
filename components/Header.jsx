import Image from 'next/image'
import Nav from './nav'
import logo from '@/assets/logo.svg'

export default function Header() {
	return (
		<header>
			<Image src={logo} alt='Food and Stuff logo' width={131} height={31} priority />
			<Nav />
		</header>
	)
}
