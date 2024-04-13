import './App.css';
import AboutUs from './pages/AboutUs';
import Homepage from './pages/Homepage';
import Retrefpolicy from './pages/Retrefpolicy';
import { Routes,Route } from 'react-router';
import Navbar from '../src/components/Navbar'
import Contact from './pages/Contact';
import ProductList from './pages/Products';
import Product_view from './pages/ProductView';
import CheckoutPage from './pages/Cart';
import PrivateRoute from './PrivateRouting';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Homepage}/>
        <Route path='/about' exact Component={AboutUs}/>
        <Route path='/contact' exact Component={Contact}/>
        <Route path='/Retrefpolicy' exact Component={Retrefpolicy}></Route>
        <Route path='/signup' exact Component={SignUpPage} />
        <Route path='/login' exact Component={LoginPage} />
        <Route path='/products' exact Component={ProductList} />
        <Route path="/productview/:productCatagory/:ProductId" element={<Product_view />} />

        <Route path='/addcart' element={<PrivateRoute />}>
          <Route path='/addcart' exact Component={CheckoutPage} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
