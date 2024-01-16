import { newList } from '@/scripts/actions'

export default function NewList() {
	return (
		<div>
			<h1>What should we name this list?</h1>
			<form action={newList}>
				<input type='text' name='name' id='name' required />
				<button type='submit'>Save</button>
			</form>
			{/* <button>Skip</button> */}
		</div>
	)
}
