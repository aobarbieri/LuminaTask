const { v4: uuidv4 } = require('uuid')

/*
UUIDs vs. Auto-incrementing Keys
We use UUIDs instead of incrementing keys (e.g., 1, 2, 3, etc.). This makes the URL longer; however, UUIDs eliminate the risk of ID collision, are globally unique, and reduce the risk of enumeration attacks - making them ideal for large databases.
However, if you prefer cleaner URLs, you might prefer to use auto-incrementing keys.
*/

function generateUUID() {
	const validUUID = uuidv4()
	return validUUID
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
	generateUUID,
	getTodayDateTime,
}
