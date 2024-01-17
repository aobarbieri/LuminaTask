import Link from 'next/link'
import { deleteList } from '@/app/lib/actions'

export function ViewList({ id }) {
	return <Link href={`/lists/${id}`}>View</Link>
}

export function DeleteList({ id }) {
	const deleteListWithId = deleteList.bind(null, id)
	return (
		<form action={deleteListWithId}>
			<button>X</button>
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
