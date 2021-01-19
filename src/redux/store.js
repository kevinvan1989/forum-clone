import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'
import postsReducer from './reducers/postsReducer'

const store = createStore(
  combineReducers({
    posts: postsReducer,
    auth: authReducer
  }),
  compose(
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store