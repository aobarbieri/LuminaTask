'use server'
import { generateUUID, getTodayDateTime } from './utils'
import { saveList, deleteListById } from './data'
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
