import { newItem, removeItem } from '@/app/lib/items-actions'
import DeleteButton from './buttons'
import styles from './forms.module.css'

export function CreateItem({ listId, toggle }) {
	const handleSubmit = () => {
		toggle()
	}

	return (
		<form action={newItem} onSubmit={handleSubmit}>
			<input type='hidden' name='list-id' value={listId} />

			<label htmlFor='name' id='name'>
				Name
			</label>
			<input type='text' name='name' id='name' placeholder='Item name' required />

			<label htmlFor='quantity' id='quantity'>
				Quantity
			</label>
			<input type='number' name='quantity' id='quantity' placeholder='0' required />

			<button className={`btn-default ${styles.saveBtn}`} type='submit'>
				Save
			</button>
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
