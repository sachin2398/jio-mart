// Initial state for authentication
const initialState = {
    user: null,
    isLoggedIn: false,
    // Other authentication-related states
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
          // Handle other login-related state changes
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isLoggedIn: false,
          // Reset other states on logout
        };
      // Add other action types and state changes as needed
      default:
        return state;
    }
  };
  
  export default authReducer;
  