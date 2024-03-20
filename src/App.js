import './App.css';
import AboutUs from './pages/AboutUs';
import Homepage from './pages/Homepage';
import { Routes,Route } from 'react-router';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Homepage}/>
        <Route path='/about' exact Component={AboutUs}/>

        
      </Routes>
      
    </div>
  );
}

export default App;
