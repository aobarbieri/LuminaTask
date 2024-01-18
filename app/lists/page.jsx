import { Suspense } from 'react'
import Lists from '@/app/ui/lists/lists'

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
