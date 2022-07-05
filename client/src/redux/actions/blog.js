import { toast } from "react-hot-toast";
import axios from "axios";

export const addBlog = (heading, description, image) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.post("https://pristine-hot-springs-70486.herokuapp.com/blog/add", {
      heading,
      description,
      image
    },
    {
      headers: {
        'authorization': `bearer ${token}`
      }
    });
    const { data, message, success } = res.data;

    if (success) {
      dispatch({
        type: "ADD_BLOG_SUCCESS",
        payload: data,
      });
      toast.success(message);
    } else {
      dispatch({
        type: "ADD_BLOG_FAILED",
        payload: {},
      });
      toast.error(message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch({
      type: "ADD_BLOG_FAILED",
      payload: {},
    });
  }
};

export const getBlogs = () => async (dispatch) => {
  try {
    const res = await axios.get("https://pristine-hot-springs-70486.herokuapp.com/blog/all");
    const { data, message, success } = res.data;

    if (success) {
      dispatch({
        type: "FETCH_BLOGS_SUCCESS",
        payload: data,
      });
      toast.success(message);
    } else {
      dispatch({
        type: "FETCH_BLOGS_FAILED",
        payload: {},
      });
      toast.error(message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch({
      type: "FETCH_BLOGS_FAILED",
      payload: {},
    });
  }
};