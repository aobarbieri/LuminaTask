// Library to interact with PostgresSQL
const { db } = require('@vercel/postgres')

export async function fetchLists() {
	const client = await db.connect()
	try {
		const query = {
			text: 'SELECT * FROM Lists ORDER BY name ASC',
		}
		const res = await client.query(query)

		const lists = res.rows
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

export async function deleteListById(id) {
	const client = await db.connect()
	try {
		const query = {
			text: 'DELETE FROM lists WHERE id = $1',
			values: [id],
		}
		const res = await client.query(query)
		return res
	} catch (error) {
		console.error('Error deleting row from Lists table:', error)
	} finally {
		await client.end()
	}
}
