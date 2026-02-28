// const data = [
// 	'Iphone 12',
// 	'Iphone 13',
// 	'Iphone 15 pro',
// 	'Iphone 17 pro max',
// 	'Galaxay S24',
// ]
const phones = [
	{
		brand: 'Iphone',
		model: '17 pro max',
		price: 300,
		image:
			'https://joybox.uz/wp-content/uploads/2025/11/3f1c6fef-f3d7-4e08-ba5c-16c5c15f5131_1-1.webp',
	},
	{
		brand: 'Redmi',
		model: 'Note 13',
		price: 250,
		image:
			'https://assets.asaxiy.uz/product/items/desktop/a86c450b76fb8c371afead6410d5553420240117145846554823R9HQkGben.png.webp',
	},
	{
		brand: 'Iphone ',
		model: '12',
		price: 350,
		image:
			'https://cdn.mediapark.uz/imgs/600x600_f6174042-738e-4467-9142-23dd2b5e7e9f_9.webp',
	},

	{
		brand: 'Samsung',
		model: 'A 24',
		price: 550,
		image:
			'https://cdn.asaxiy.uz/asaxiy-content/product/items/mobile/4ffce04d92a4d6cb21c1494cdfcd6dc12024012013362683201jqRctSTla2.png.webp',
	},

	{
		brand: 'Samsung',
		model: 'S 24',
		price: 550,
		image: 'https://images.uzum.uz/csolibj4nkdp9akelo8g/original.jpg',
	},
]

function Shop() {
	return (
		<>
			<div className='container'>
				<h1>Shop</h1>
				<div className='card-container d-flex gap-3'>
					{phones.map(({ brand, model, price, image }) => {
						return (
							<>
								<div class='card' style={{ width: '18rem' }}>
									<img
										className='img'
										src={image}
										class='card-img-top'
										alt='...'
									/>
									<div class='card-body'>
										<h5 class='card-title'> {brand} </h5>
										<p class='card-text'> {model}</p>
										<p class='card-text'> ${price}</p>
										<a href='#' class='btn btn-primary'>
											Buy please
										</a>
									</div>
								</div>
							</>
						)
					})}
				</div>
			</div>
			{/* {
			<li>
				{phones.map(({ brand, model, price }) => {
					return (
						<>
							<li>
								{brand} {model}: {price}$
							</li>
						</>
					)
				})}
			</li> */}
		</>
	)
}
export default Shop
