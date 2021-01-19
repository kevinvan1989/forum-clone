import { API } from "../../libs/API";


// Een type dispatchen en een payload
// Checken en of inloggen
export const getUser = dispatch => {
    API.get("/api/user").then(response => {
      return dispatch({
        type: "SET_USER",
        payload: response.data
      });
    })
}

export const logUserOut = dispatch => {
  return dispatch({
    type: "LOGOUT_USER"
  })
}

