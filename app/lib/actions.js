'use server'
import { generateUUID, getTodayDateTime } from './utils'
import { saveList, deleteListById, saveListItem } from './data'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

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
	revalidatePath('/lists')
	redirect('/lists')
}

export async function deleteList(id) {
	deleteListById(id)
	revalidatePath('/lists')
}

export async function newItem(data) {
	const itemId = generateUUID()

	const item = {
		id: itemId,
		list_id: data.get('list-id'),
		name: data.get('name'),
		quantity: data.get('quantity'),
		purchased: false,
	}

	console.log(item)
	// saveListItem(item)
	revalidatePath(`/lists/${list_id}`)
}
