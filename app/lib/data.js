import { sql } from '@vercel/postgres'

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
