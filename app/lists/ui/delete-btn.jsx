'use client'
import { useFormStatus } from 'react-dom'

export default function DeleteButton() {
	const { pending } = useFormStatus()

	return (
		<button type='submit' aria-disabled={pending}>
			{pending ? 'Deleting list ...' : 'Delete list'}
		</button>
	)
}
