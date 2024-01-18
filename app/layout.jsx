import Header from '@/components/header'
import { Nunito } from 'next/font/google'
import './globals.css'

export const metadata = {
	title: 'Food&Stuff',
	description: 'Create and manage lists',
}

const nunito = Nunito({
	subsets: ['latin'],
})

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
