import { notFound } from 'next/navigation'
import { getListById } from '@/app/lib/lists-data'
import { getItems } from '@/app/lib/items-data'
import Content from './content'

export default async function View({ params }) {
	// params.id -> { id: '###'}
	// listId -> ####
	const listId = params.id

	// list -> [{ list props }]
	const list = await getListById(listId)

	// items -> [{ item props}]
	const items = await getItems(listId)
	// console.log(items.length)

	if (!list) {
		notFound()
	}

	return <Content listId={listId} list={list} items={items} />
}
