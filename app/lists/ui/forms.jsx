import DeleteButton from './delete-btn'
import { removeList, newList } from '@/app/lib/lists-actions'
import styles from './forms.module.css'

export function CreateList() {
	return (
		<form className={styles.createForm} action={newList}>
			<input className='input-secondary' placeholder='List name' type='text' name='name' id='name' required />
			<button className='btn-primary' type='submit'>
				Save
			</button>
		</form>
	)
}

export function DeleteList({ id }) {
	const deleteListWithId = removeList.bind(null, id)
	return (
		<form action={deleteListWithId} className={styles.deleteList}>
			<DeleteButton />
		</form>
	)
}
