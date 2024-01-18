import Header from '@/components/header'
import { Lato } from 'next/font/google'
import './globals.css'

export const metadata = {
	title: 'Food&Stuff',
	description: 'Create and manage lists',
}

const lato = Lato({
	weight: ['400', '700', '900'],
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={lato.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
