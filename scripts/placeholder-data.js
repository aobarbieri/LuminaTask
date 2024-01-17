const lists = [
	{
		// Ensure that the generated UUIDs follow the correct format.
		id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
		name: 'Groceries',
		category: 'Grocery',
		date_created: '10/11/12',
	},
	{
		id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
		name: 'Birthday Weekend',
		category: 'To-Do',
		date_created: '09/03/08',
	},
]

const items = [
	{
		id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
		list_id: lists[0].id,
		name: 'Bananas',
		quantity: 7,
		purchased: true,
	},
	{
		id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
		list_id: lists[0].id,
		name: 'Orange Juice',
		quantity: 9,
		purchased: false,
	},
	{
		id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
		list_id: lists[0].id,
		name: 'Milk',
		quantity: 2,
		purchased: true,
	},
	{
		id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
		list_id: lists[1].id,
		name: 'Pickup baloons',
		quantity: 12,
		purchased: false,
	},
	{
		id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
		list_id: lists[1].id,
		name: 'Call friends',
		quantity: 0,
		purchased: true,
	},
]

module.exports = {
	lists,
	items,
}
