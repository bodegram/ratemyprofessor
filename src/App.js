import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';


function App() {
  return (
   <>
     <BrowserRouter>
      <Routes>
          <Route path='' index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
