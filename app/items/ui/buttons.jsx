import Image from 'next/image'
import trash from '@/assets/icons/trash.svg'

export default function DeleteButton() {
	return (
		<button type='submit'>
			<Image src={trash} alt='trash' width={20} height={20} />
		</button>
	)
}
