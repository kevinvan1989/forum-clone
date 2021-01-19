import { API } from "../../libs/API";



export const fetchPost  = page => (dispatch) => {
     API.get("/api/posts?page="+page).then(response => {
      return dispatch({
        type: "FETCH_DATA",
        payload: response.data
      });
    })
}

export const addNewPost = (values) => dispatch =>{
  // Values are holding Formik values, based on key-value of initialValues
  API.post("/api/posts", {"title": values.POST_title, 'body': values.POST_editor}).then(response => {
    return dispatch({
      type: "ADD_NEW_POST",
      payload: response.data
    })
  })
}

export const showParticularPost = postId => dispatch => {
  API.get('/api/posts/'+postId).then(
    response => {
      return dispatch({
        type: "SHOW_DETAIL", 
        payload: response.data
      })
    }
  )
}

export const addComment = (values, postID) => dispatch => {
  // Needed data : body of comment + POST ID
  //API.post(/api/comments, {id: #, body: 'lorem'}
  API.post('/api/comments', {'blog_post_id': postID, 'body': values.ADD_COMMENT_editor}).then(
    response => {
      // reload to show new comment list
      window.location.reload()
      return dispatch({
        type: "ADD_COMMENT",
        payload: response.data
      })
    }
  )
}

export const editPost = (values, postId) => dispatch =>{
  API.put(`/api/posts/${postId}`, {
    "title": values.POST_title,
    "body": values.POST_editor
  }).then(response => {
    window.history.back()
    return dispatch({
      type: "EDIT_POST",
      payload: values
    })
  })
}



export const getUserProfile = userId => dispatch => {
  API.get(`/api/users/${userId}`).then(response => {
    return dispatch({
      type: "SET_USER_DETAILS",
      payload: response.data
    });
  })
}