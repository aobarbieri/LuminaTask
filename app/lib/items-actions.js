'use server'
import { generateUUID, getTodayDateTime } from './utils'
import { deleteItemById } from './items-data'
import { revalidatePath } from 'next/cache'

export async function deleteItem(id) {
	deleteItemById(id)
	revalidatePath(`/lists`)
}
