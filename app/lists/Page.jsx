import { Suspense } from 'react'
import Lists from '../../components/Lists'

export default function ListsOverview() {
	return (
		<>
			<h1>all lists here</h1>
			<Suspense fallback={<p>Fetching lists ...</p>}>
				<Lists />
			</Suspense>
		</>
	)
}
