import { notFound } from 'next/navigation'
import { getListById } from '@/app/lib/lists-data'
import { getItems } from '@/app/lib/items-data'
import { newItem } from '@/app/lib/items-actions'
import { DeleteItem } from '@/app/ui/items/buttons'

export default async function View({ params }) {
	const listId = params.id
	const list = await getListById(listId)
	const items = await getItems(listId)

	if (!list) {
		notFound()
	}

	return (
		<main>
			<br />
			<hr />
			<h1>Add items to {list[0].name}&apos;s list</h1>

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
			<br />
			<hr />
			<div>
				<h2>List items here</h2>
				{items?.map((item) => (
					<div key={item.id}>
						<p>{item.name}</p>
						<p>{item.quantity}</p>
						<DeleteItem id={item.id} />
					</div>
				))}
			</div>
		</main>
	)
}
