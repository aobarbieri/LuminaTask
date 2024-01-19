import Link from 'next/link'
import DeleteButton from './delete-btn'
import { removeList } from '@/app/lib/lists-actions'

export function ViewList({ id }) {
	return <Link href={`/lists/${id}`}>View</Link>
}

export function DeleteList({ id }) {
	const deleteListWithId = removeList.bind(null, id)
	return (
		<form action={deleteListWithId}>
			<DeleteButton />
		</form>
	)
}

export function CreateList() {
	// WIP
	return <></>
}

export function UpdateList({ id }) {
	//WIP
	return <></>
}
