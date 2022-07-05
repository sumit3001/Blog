import { toast } from "react-hot-toast";
import axios from "axios";

export const addCategory = (name, description) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.post("https://pristine-hot-springs-70486.herokuapp.com/category/add", {
      name,
      description,
    },
    {
      headers: {
        'authorization': `bearer ${token}`
      }
    });
    const { data, message, success } = res.data;

    if (success) {
      dispatch({
        type: "ADD_CATEGORY_SUCCESS",
        payload: data,
      });
      toast.success(message);
    } else {
      dispatch({
        type: "ADD_CATEGORY_FAILED",
        payload: {},
      });
      toast.error(message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch({
      type: "ADD_CATEGORY_FAILED",
      payload: {},
    });
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("https://pristine-hot-springs-70486.herokuapp.com/category/all");
    const { data, message, success } = res.data;

    if (success) {
      dispatch({
        type: "FETCH_CATEGORIES_SUCCESS",
        payload: data,
      });
      toast.success(message);
    } else {
      dispatch({
        type: "FETCH_CATEGORIES_FAILED",
        payload: {},
      });
      toast.error(message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch({
      type: "FETCH_CATEGORIES_FAILED",
      payload: {},
    });
  }
};