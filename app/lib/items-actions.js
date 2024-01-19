'use server'
import { generateUUID } from './utils'
import { deleteItem, create } from './items-data'
import { revalidatePath } from 'next/cache'

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

	await create(item)
	revalidatePath(`/lists/${listId}`)
}

export async function removeItem(id) {
	await deleteItem(id)
	revalidatePath(`/lists`)
}
