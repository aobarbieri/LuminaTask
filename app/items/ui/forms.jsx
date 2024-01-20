import { newItem } from '@/app/lib/items-actions'

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
