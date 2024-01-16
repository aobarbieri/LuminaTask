'use server'
import { generateRandomId, getTodayDateTime } from '@/scripts/utils'

export async function newList(data) {
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
