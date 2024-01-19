const { v4: uuidv4 } = require('uuid')

function generateUUID() {
	const validUUID = uuidv4()
	return validUUID
}

function getTodayDate() {
	const today = new Date()
	const year = today.getFullYear()
	const month = String(today.getMonth() + 1).padStart(2, '0')
	const day = String(today.getDate()).padStart(2, '0')

	const todayDate = `${month}/${day}/${year}`
	return todayDate
}

module.exports = {
	generateUUID,
	getTodayDate,
}
