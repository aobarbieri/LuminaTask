import { newList } from '@/app/lib/lists-actions'

export default function NewList() {
	return (
		<div>
			<h1>What should we name this list?</h1>
			{/* hidden field */}
			<form action={newList}>
				<input type='text' name='name' id='name' required />
				<button type='submit'>Save</button>
			</form>
			{/* <button>Skip</button> */}
		</div>
	)
}
