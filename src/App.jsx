import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Layouts/Navbar'
import About from './Pages/About'
import Footer from './Pages/Footer'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/footer' element={<Footer />}></Route>
				<Route path='/shop' element={<Shop />}></Route>
			</Routes>
		</>
	)
}

export default App
