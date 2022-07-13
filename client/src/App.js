import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import Admin from './components/admin/Admin';
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import Home from "./components/Home";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { LoadUser } from "./redux/actions/auth";
import AdminWrapper from "./components/HOC/AdminWrapper";
import Blogs from "./components/blog/Blogs";
import Blog from "./components/blog/Blog";
import { getBlogs } from "./redux/actions/blog";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadUser());
    dispatch(getBlogs());
  });

  return (
    <>
      <Toaster />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path='/admin' element={<AdminWrapper> <Admin/></AdminWrapper>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
