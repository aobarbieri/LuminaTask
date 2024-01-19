import { removeItem } from '@/app/lib/items-actions'

export function DeleteItem({ id }) {
	const deleteItemWithId = removeItem.bind(null, id)

	return (
		<form action={deleteItemWithId}>
			<button>X</button>
		</form>
	)
}
