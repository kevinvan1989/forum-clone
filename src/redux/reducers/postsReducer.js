const initialState = {
  current_page: 1,
  posts: [],
  postDetail: {},
  particularComment: "",
  // Init values to prevent destructure probs
  userDetails: {
    avatar: " ",
    blog_posts: [],
    comments: " ",
    created_at: " ",
    favorite_color: " ",
    first_name: " ",
    last_name: " ",
    last_login_at: " ",
  },
  loading: true,
  updated: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        // Get the 'current_page' element out of data/payload
        current_page: action.payload.current_page,
        // Last page
        last_page: action.payload.last_page,
        // Get the list of posts out of data/payload
        posts: action.payload.data,
        updated: false,
      };

    case "ADD_COMMENT": {
      return {
        ...state,
        particularComment: action.payload,
        updated: true,
      };
    }

    case "ADD_NEW_POST":
      return action.payload;

    case "SHOW_DETAIL":
      return { ...state, postDetail: action.payload, updated: false };

    case "SET_USER_DETAILS":
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
      };

    // TODO fix redux actions / reducers
    case "DELETE":
      const posts = { ...state.posts };
      const postId = action.payload;

      // return{}

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default postsReducer;
