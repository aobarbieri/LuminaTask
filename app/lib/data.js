const { db } = require('@vercel/postgres')

export async function fetchLists() {
	const client = await db.connect()
	try {
		const query = {
			text: 'SELECT * FROM lists ORDER BY name ASC',
		}
		const res = await client.query(query)
		const lists = res.rows
		return lists
	} catch (err) {
		console.error('Database Error:', err)
		throw new Error('Failed to fetch all lists.')
	}
}

export async function fetchListById(id) {
	const client = await db.connect()
	try {
		const query = {
			text: 'SELECT * FROM lists WHERE lists.id = $1',
			values: [id],
		}
		const res = await client.query(query)
		const list = res.rows
		return list
	} catch (error) {
		console.error('Failed to fetch list:', error)
	} finally {
		await client.end()
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

export async function createItem(item) {
	const client = await db.connect()

	try {
		const query = {
			text: 'INSERT INTO items (id, list_id, name, quantity, purchased) VALUES ($1, $2, $3, $4, $5)',
			values: [item.id, item.list_id, item.name, item.quantity, item.purchased],
		}
		await client.query(query)
	} catch (error) {
		return {
			message: 'Database Error: Failed to Create Item.',
		}
	} finally {
		await client.end()
	}
}
