import './App.css';
import { Route, Routes } from 'react-router-dom';
import PFHome from './Pages/PFHome';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import Auth from './Components/Auth';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<PFHome/>}/>
         <Route path='/login' element={<Auth/>}/>
         <Route path='/register' element={<Auth register/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path='/Dashboard' element={<Dashboard/>}/>
       </Routes>
      <Footer/>
    </div>
  );
}

export default App;
