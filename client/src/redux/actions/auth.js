import axios from "axios";
import toast from "react-hot-toast";

export const LoginUser = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("https://pristine-hot-springs-70486.herokuapp.com/user/signin", {
      email,
      password,
    });
    const { data, success, message } = res.data;

    if (success) {
      localStorage.setItem("token", data.token);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data,
      });
      toast.success(message);
    } else {
      dispatch({
        type: "LOGIN_FAILED",
        payload: {},
      });
      toast.error(message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch({
      type: "LOGIN_FAILED",
      payload: {},
    });
  }
};

export const LoadUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const base64 = token.split(".")[1];
  const { email, id, role } = JSON.parse(atob(base64));

  if (token) {
    dispatch({
      type: "LOAD_USER",
      payload: { token, user: { email, id, role } },
    });
  } else {
    dispatch({
      type: "LOAD_USER",
      payload: {},
    });
  }
};

export const SignupUser =
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      const res = await axios.post("https://pristine-hot-springs-70486.herokuapp.com/user/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      const { data, success, message } = res.data;
      if (success) {
        dispatch({
          type: "SIGNUP_SUCCESS",
          payload: data,
        });
        toast.success(message);
      } else {
        dispatch({
          type: "SIGNUP_FAILED",
          payload: {},
        });
        toast.error(message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      dispatch({
        type: "SIGNUP_FAILED",
        payload: {},
      });
    }
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");

  dispatch({
    type: "LOGOUT",
  });
  toast.success("User logged out");
  window.location.reload();
};
