'use server'
import { generateUUID, getTodayDateTime } from './utils'
import { saveList, deleteListById } from './data'
import { createItem } from './items-data'
import { revalidatePath } from 'next/cache'
import { redirect, useRouter } from 'next/navigation'

export async function newList(data) {
	const listId = generateUUID()
	const todayDateTime = getTodayDateTime()

	const list = {
		id: listId,
		name: data.get('name'),
		category: 'Grocery',
		date_created: todayDateTime,
	}

	await saveList(list)
	revalidatePath('/lists')
	redirect('/lists')
}

export async function deleteList(id) {
	await deleteListById(id)
	revalidatePath('/lists')
}

export async function newItem(data) {
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

	await createItem(item)
	revalidatePath(`/lists/${listId}`)
}
