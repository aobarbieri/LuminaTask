'use server'
import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from 'next/cache'

export async function getItems(listId) {
	noStore()
	try {
		const data = await sql`SELECT items.* FROM items JOIN lists ON items.list_id = lists.id WHERE lists.id = ${listId}`
		return data.rows
	} catch (err) {
		console.error('Database Error:', err)
		throw new Error('Failed to fetch list items.')
	}
}

export async function create(item) {
	try {
		await sql`INSERT INTO items (id, list_id, name, quantity, purchased) 
		VALUES (${item.id}, ${item.list_id}, ${item.name}, ${item.quantity}, ${item.purchased})
		ON CONFLICT (id) DO NOTHING`
	} catch (err) {
		console.error('Database Error:', err)
		throw new Error('Failed to add item to the list.')
	}
}

export async function deleteItem(id) {
	try {
		await sql`DELETE FROM items WHERE id = ${id}`
	} catch (err) {
		console.error('Database Error:', err)
		throw new Error('Failed to delete item from the list.')
	}
}
