import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Colleges from "./pages/Colleges/Colleges";
import Ratings from "./pages/Ratings/Ratings";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import NotFound from "./pages/NotFound/NotFound";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/school" element={<Colleges />} />
          <Route path="*" element={<NotFound />} />
            <Route path="/account/ratings" element={<ProtectedRoutes><Ratings/></ProtectedRoutes>} />
            <Route path="/account/profile" element={<ProtectedRoutes><Profile/></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
