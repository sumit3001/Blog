import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
// import Admin from './components/admin/Admin';
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import Home from "./components/Home";
import { LoadUser, logout } from "./redux/actions/auth";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadUser());
  }, []);
  return (
    <>
      <Toaster />
      <button
        onClick={(e) => {
          dispatch(logout());
          window.location.reload();
        }}
      >
        Logout
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path='/admin' element={<Admin/>} /> */}
      </Routes>
    </>
  );
}

export default App;
