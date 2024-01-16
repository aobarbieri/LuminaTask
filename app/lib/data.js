import { sql } from '@vercel/postgres'
// Library to interact with PostgreSQL
const { db } = require('@vercel/postgres')

export async function fetchLists() {
	try {
		const data = await sql`
      SELECT
        id,
        name
      FROM lists
      ORDER BY name ASC
    `

		const lists = data.rows
		return lists
	} catch (err) {
		console.error('Database Error:', err)
		throw new Error('Failed to fetch all lists.')
	}
}

export async function saveList(list) {
	const client = await db.connect()
	try {
		const query = {
			text: 'INSERT INTO lists (id, name, category, date_created) VALUES ($1, $2, $3, $4)',
			values: [list.id, list.name, list.category, list.date_created],
		}
		await client.query(query)
		console.log('Data added to Lists table successfully')
	} catch (error) {
		console.error('Error adding data to Lists table:', error)
	} finally {
		await client.end()
	}
}
