const initialState = {
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_BLOGS_SUCCESS":
      return {...payload}
    case "FETCH_BLOGS_FAILED":
      return state;
    case "ADD_BLOG_SUCCESS":
      return state;
    case "ADD_BLOG_FAILED":
      return state;
    default:
      return state;
  }
};

export default blogReducer;