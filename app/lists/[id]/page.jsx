import { notFound } from 'next/navigation'
import { getListById } from '@/app/lib/lists-data'
import { getItems } from '@/app/lib/items-data'
import Content from './content'

export default async function View({ params }) {
	// params.id -> { id: '###'}
	const listId = params.id
	const list = await getListById(listId)
	const itemsTable = await getItems(listId)
	const items = itemsTable.rows

	if (!list) {
		notFound()
	}
	return <Content listId={listId} list={list} items={items} />
}
