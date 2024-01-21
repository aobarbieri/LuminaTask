import Modal from '@/components/modal'
import { CreateItem } from '@/app/items/ui/forms'

export default function NewItem({ params }) {
	const listId = params.id
	console.log('modal params: ' + params.id)
	return (
		<Modal>
			<CreateItem listId={listId} />
		</Modal>
	)
}
