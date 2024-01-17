import { fetchListById } from '@/app/lib/data'
import { fetchListItems } from '@/app/lib/item-data'
import { newItem } from '@/app/lib/actions'

export default async function View({ params }) {
	const id = params.id
	const list = await fetchListById(id)
	const items = await fetchListItems(id)
	console.log(items)

	if (!list) {
		console.log('list not found')
	}

	return (
		<main>
			<br />
			<hr />
			<h1>Add items to {list[0].name}&apos;s list</h1>

			<form action={newItem}>
				<input type='hidden' name='list-id' value={id} />
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
					<p key={item.id}>{item.name}</p>
				))}
			</div>
		</main>
	)
}
