const { db } = require('@vercel/postgres')

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
	} catch (err) {
		console.error('Database Error:', err)
		throw new Error('Failed to fetch all items.')
	}
}
