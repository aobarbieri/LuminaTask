import { newItem, removeItem } from '@/app/lib/items-actions'
import DeleteButton from './buttons'

export function CreateItem({ listId }) {
	return (
		<form action={newItem}>
			<input type='hidden' name='list-id' value={listId} />
			<label htmlFor='name' id='name'>
				Item name
			</label>
			<input type='text' name='name' id='name' required />
			<label htmlFor='quantity' id='quantity'>
				Quantity
			</label>
			<input type='number' name='quantity' id='quantity' required />
			<button type='submit'>Add Item</button>
		</form>
	)
}

export function DeleteItem({ id }) {
	const deleteItemWithId = removeItem.bind(null, id)

	return (
		<form action={deleteItemWithId}>
			<DeleteButton />
		</form>
	)
}
