import { generateRandomId, getTodayDateTime } from '../lib/utils'

export default function NewList() {
	async function newList(data) {
		'use server'

		const listId = generateRandomId()
		const todayDateTime = getTodayDateTime()

		const list = {
			id: listId,
			name: data.get('name'),
			category: 'Grocery',
			date_created: todayDateTime,
		}

		console.log(list)
	}
	return (
		<div>
			<h1>What should we name this list?</h1>
			<form action={newList}>
				<input type='text' name='name' id='name' required />
				<button type='submit'>Save</button>
			</form>
			{/* <button>Skip</button> */}
		</div>
	)
}
