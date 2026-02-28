const data = [
	'Iphone 12',
	'Iphone 13',
	'Iphone 15 pro',
	'Iphone 17 pro max',
	'Galaxay S24',
]

function Shop() {
	return (
		<>
			<h1>Shop</h1>
			<li>
				{data.map(phone => {
					return (
						<>
							<li> {phone} </li>
						</>
					)
				})}
			</li>
		</>
	)
}
export default Shop
