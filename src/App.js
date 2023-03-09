import './App.css';
import Home from './components/homePage/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>

		</div>
	);
}

export default App;
