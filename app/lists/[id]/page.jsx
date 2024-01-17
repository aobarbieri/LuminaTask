import { fetchListById } from '@/app/lib/data'
import { newItem } from '@/app/lib/actions'

export default async function View({ params }) {
	const id = params.id
	const list = await fetchListById(id)

	if (!list) {
		console.log('list not found')
	}

	return (
		<main>
			<br />
			<hr />
			<h1>Add items to {list[0].name}&apos;s list</h1>
			{/* fetch the properties of this list, we need to name to display here */}

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
				{/* fetch all the items related to this list and display here */}
			</div>
		</main>
	)
}
