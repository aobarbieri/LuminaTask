import { deleteList } from '@/scripts/actions'

export default function DeleteList({ id }) {
	const deleteListWithId = deleteList.bind(null, id)

	return (
		<form action={deleteListWithId}>
			<button>X</button>
		</form>
	)
}
