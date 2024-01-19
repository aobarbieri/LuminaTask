'use server'
import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from 'next/cache'

export async function getLists() {
	noStore()
	try {
		const data = await sql`SELECT * FROM lists ORDER BY name ASC`
		return data.rows
	} catch (err) {
		console.error('Database Error:', err)
		throw new Error('Failed to fetch lists.')
	}
}

export async function getListById(id) {
	noStore()
	try {
		const data = await sql`SELECT * FROM lists WHERE lists.id = ${id}`
		return data.rows
	} catch (err) {
		console.error('Database Error:', err)
		throw new Error('Failed to fetch list.')
	}
}

export async function create(list) {
	try {
		await sql`INSERT INTO lists (id, name, category, date_created)
		VALUES (${list.id}, ${list.name}, ${list.category}, ${list.date_created})
		ON CONFLICT (id) DO NOTHING`
	} catch (err) {
		console.error('Error adding data to lists', err)
		throw new Error('Failed to add item to the list.')
	}
}

export async function deleteList(id) {
	try {
		await sql`DELETE FROM lists WHERE id = ${id}`
	} catch (err) {
		console.error('Database Error:', err)
		throw new Error('Failed to delete list.')
	}
}
