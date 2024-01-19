'use server'
import { generateUUID, getTodayDate } from './utils'
import { create, deleteList } from './lists-data'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function newList(data) {
	const listId = generateUUID()
	const todayDateTime = getTodayDate()

	const list = {
		id: listId,
		name: data.get('name'),
		category: 'Grocery',
		date_created: todayDateTime,
	}

	await create(list)
	revalidatePath('/lists')
	redirect('/lists')
}

export async function removeList(id) {
	await deleteList(id)
	revalidatePath('/lists')
	redirect('/lists')
}
