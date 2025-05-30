import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './pages/Products';
import ProductDetail from './pages/Product';

const App = () => {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Products' element={<Products />}/>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App
