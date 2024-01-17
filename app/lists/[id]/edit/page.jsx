import { fetchListById } from '@/app/lib/data'

export default async function Edit({ params }) {
	const id = params.id
	const list = await fetchListById(id)

	if (!list) {
		console.log('list not found')
	}
	return (
		<main>
			<h1>Add items to the list here</h1>
			<label htmlFor='name'>Item name</label>
			<input type='text' name='name' />
			<label htmlFor='quantity'>Quantity</label>
			<input type='number' name='quantity' />
		</main>
	)
}
