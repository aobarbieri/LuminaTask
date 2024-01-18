import { deleteItem } from '@/app/lib/items-actions'

export function DeleteItem({ id }) {
	const deleteItemWithId = deleteItem.bind(null, id)

	return (
		<form action={deleteItemWithId}>
			<button>X</button>
		</form>
	)
}
