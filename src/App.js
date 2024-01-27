import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Colleges from './pages/Colleges/Colleges';


function App() {
  return (
   <>
     <BrowserRouter>
      <Routes>
          <Route path='' index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/colleges/:id' element={<Colleges/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
