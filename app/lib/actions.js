'use server'
import { generateUUID, getTodayDateTime } from './utils'
import { saveList, deleteListById, createItem } from './data'
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
	// validations - check if data was provided before sending it to the DB
	const itemId = generateUUID()
	const listId = data.get('list-id')
	const quantity = parseInt(data.get('quantity'))

	const item = {
		id: itemId,
		list_id: listId,
		name: data.get('name').trim(),
		quantity: quantity,
		purchased: false,
	}

	createItem(item)
	revalidatePath(`/lists`)
}
