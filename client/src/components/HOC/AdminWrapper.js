import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import toast from "react-hot-toast";
// import Loader from "../../layout/Loader";

const AdminWrapper = (props) => {
  const {user:{role}, isLoaded} = useSelector(state=>state.auth);
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(isLoaded&&role<1) {
      navigate('/');
      toast.error('Access Denied');
    }
  },[isLoaded])

  return isLoaded?props.children:'Access Denied'
}

export default AdminWrapper;