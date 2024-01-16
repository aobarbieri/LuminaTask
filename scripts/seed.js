const { db } = require('@vercel/postgres')
const { lists } = require('../app/lib/placeholder-data.js')

async function seedLists(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

		// Create the "lists" table if it doesn't exist
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS lists (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        date_created VARCHAR(255) NOT NULL
      );
    `

		console.log(`Created "lists" table`)

		// Insert data into the "lists" table
		const insertedLists = await Promise.all(
			lists.map(
				(list) => client.sql`
        INSERT INTO lists (id, name, category, date_created)
        VALUES (${list.id}, ${list.name}, ${list.category}, ${list.date_created})
        ON CONFLICT (id) DO NOTHING;
      `
			)
		)

		console.log(`Seeded ${insertedLists.length} lists`)

		return {
			createTable,
			lists: insertedLists,
		}
	} catch (error) {
		console.error('Error seeding lists:', error)
		throw error
	}
}

async function main() {
	const client = await db.connect()

	await seedLists(client)

	await client.end()
}

main().catch((err) => {
	console.error('An error occurred while attempting to seed the database:', err)
})
