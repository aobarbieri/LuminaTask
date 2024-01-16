function generateRandomId() {
	const timestamp = new Date().getTime()
	const randomNum = Math.floor(Math.random() * 1000)
	const randomId = `${timestamp}-${randomNum}`
	return randomId
}

function getTodayDateTime() {
	const today = new Date()
	const year = today.getFullYear()
	const month = String(today.getMonth() + 1).padStart(2, '0')
	const day = String(today.getDate()).padStart(2, '0')
	const hours = String(today.getHours()).padStart(2, '0')
	const minutes = String(today.getMinutes()).padStart(2, '0')
	const seconds = String(today.getSeconds()).padStart(2, '0')

	const todayDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
	return todayDateTime
}

module.exports = {
	generateRandomId,
	getTodayDateTime,
}
