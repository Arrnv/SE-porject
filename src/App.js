import './App.css';
import AboutUs from './pages/AboutUs';
import Homepage from './pages/Homepage';
import Retrefpolicy from './pages/Retrefpolicy'
import { Routes,Route } from 'react-router';
import Navbar from '../src/components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Homepage}/>
        <Route path='/about' exact Component={AboutUs}/>
        <Route path='/Retrefpolicy' exact Component={Retrefpolicy}></Route>

        
      </Routes>
      
    </div>
  );
}

export default App;
