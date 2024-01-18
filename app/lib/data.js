'use server'
const { db } = require('@vercel/postgres')

async function listAction(action, arr) {
	// action -> query string
	// arr -> array of values
	const client = await db.connect()
	try {
		const query = {
			text: action,
			values: arr,
		}
		await client.query(query)
	} catch (error) {
		console.error('Database Error:', error)
		throw error
	} finally {
		if (client) {
			await client.end()
		}
	}
}

export async function fetchLists() {
	const client = await db.connect()
	try {
		const query = {
			text: 'SELECT * FROM lists ORDER BY name ASC',
		}
		const res = await client.query(query)
		const lists = res.rows
		return lists
	} catch (error) {
		console.error('Database Error:', error)
		throw error
	} finally {
		if (client) {
			await client.end()
		}
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
		throw error
	} finally {
		if (client) {
			await client.end()
		}
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
		throw error
	} finally {
		if (client) {
			await client.end()
		}
	}
}

// export async function deleteListById(id) {
// 	const client = await db.connect()
// 	try {
// 		const query = {
// 			text: 'DELETE FROM lists WHERE id = $1',
// 			values: [id],
// 		}
// 		await client.query(query)
// 	} catch (error) {
// 		console.error('Error deleting row from Lists table:', error)
// 		throw error
// 	} finally {
// 		if (client) {
// 			await client.end()
// 		}
// 	}
// }

export async function deleteListById(id) {
	const action = 'DELETE FROM lists WHERE id = $1'
	const arr = [id]
	listAction(action, arr)
}
