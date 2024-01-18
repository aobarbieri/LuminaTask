import Header from '@/components/header'
import './globals.css'

export const metadata = {
	title: 'Food&Stuff',
	description: 'Create and manage lists',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
