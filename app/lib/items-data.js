'use server'
const { db } = require('@vercel/postgres')

async function itemAction(action, arr) {
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

export async function fetchListItems(id) {
	const client = await db.connect()
	try {
		const query = {
			text: 'SELECT items.* FROM items JOIN lists ON items.list_id = lists.id WHERE lists.id = $1;',
			values: [id],
		}
		const res = await client.query(query)
		const items = res.rows
		return items
	} catch (error) {
		console.error('Database Error:', error)
		throw error
	} finally {
		if (client) {
			await client.end()
		}
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
		console.error('Database Error:', error)
		throw error
	} finally {
		if (client) {
			await client.end()
		}
	}
}

export async function deleteItemById(id) {
	const action = 'DELETE FROM items WHERE id = $1'
	const arr = [id]
	itemAction(action, arr)
}

export async function updateItem(id) {
	// update item quantity
}
