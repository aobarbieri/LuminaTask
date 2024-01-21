import Modal from '@/components/modal'
import { CreateItem } from '@/app/items/ui/forms'

export default function NewItem({ listId, toggle }) {
	return (
		<Modal toggle={toggle}>
			<CreateItem toggle={toggle} listId={listId} />
		</Modal>
	)
}
