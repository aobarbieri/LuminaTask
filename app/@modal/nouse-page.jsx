import Modal from '@/components/modal'
import { CreateItem } from '@/app/items/ui/forms'

export default function NewItem({ params }) {
	console.log('accessing the modal!')
	const listId = params.id
	console.log(params.id)
	return (
		<Modal>
			<CreateItem listId={listId} />
		</Modal>
	)
}

//this will render right away when the app runs
