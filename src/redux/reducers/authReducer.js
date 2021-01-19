const initialState = {  user: 'not set', id: 0 }

const authReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch(type){
    case 'SET_USER':
        return { 
          payload 
        }
        
    default:
      return state
  }
}

export default authReducer;