import * as actionTypes from '../actions/types';
import { combineReducers } from 'redux';
const initialUserState = {
  currentUser: null,
  isLoading: true,
};
const user_reducer = (state = initialUserState, action) => {

  switch (action.type) {
    case 'SET_USER':
     
      return {
      
        currentUser: action.payload.currentUser,
        isLoading: false,
      };
    case 'CLEAR_USER':
      return {
        currentUser: null,
        isLoading:false
      }
    default:
      return state;
  } 
};
const initialChannelState = {
currentChannel:null,
}
const channel_reducer = (state = initialChannelState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CHANNEL:
      return {
        ...state,
      currentChannel:action.payload.currentChannel
      }
    default:
      return state;
  }
} 
const rootReducer = combineReducers({
  user: user_reducer,
  channel:channel_reducer,
});
export default rootReducer;
