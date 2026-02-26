import { Link } from 'react-router'
function Navbar() {
	return (
		<div className='navbar'>
			<h3>Sunnatbek</h3>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/About'>About</Link>
				</li>
				<li>
					<Link to='/footer'>Footer</Link>
				</li>
			</ul>
		</div>
	)
}
export default Navbar
