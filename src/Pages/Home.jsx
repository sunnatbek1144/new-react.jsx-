import { useEffect, useState } from 'react'

function Home() {
	const [users, setUsers] = useState([])

	const fetchUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => setUsers(json))
	}

	useEffect(fetchUsers, [])
	console.log(users)

	return (
		<>
			<h1>Home</h1>
		</>
	)
}
export default Home
