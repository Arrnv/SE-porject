import './App.css';
import AboutUs from './pages/AboutUs';
import Homepage from './pages/Homepage';
import { Routes,Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Homepage}/>
        <Route path='/about' exact Component={AboutUs}/>
        <Route path='/contact' exact Component={Contact}/>
      </Routes>
      
    </div>
  );
}

export default App;
