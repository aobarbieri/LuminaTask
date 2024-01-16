'use server'
import { generateUUID, getTodayDateTime } from '@/scripts/utils'
import { saveList } from '@/app/lib/data'

export async function newList(data) {
	const listId = generateUUID()
	const todayDateTime = getTodayDateTime()

	const list = {
		id: listId,
		name: data.get('name'),
		category: 'Grocery',
		date_created: todayDateTime,
	}

	saveList(list)
}
