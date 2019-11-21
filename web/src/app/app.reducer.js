import { combineReducers } from 'redux';
import home from '../scenes/Home/home.reducer';
// import createhost from '../scenes/CreateHost/createhost.reducer';
// import hostdetail from '../scenes/HostDetail/hostdetail.reducer';
// import registeruser from '../scenes/RegisterUser/registeruser.reducer';
// import data from '../data/data.reducer';

const initialState = {
  
};

export function app(state = initialState, action) {
  switch(action.type) {
    default:
      return {
        ...state,
      };
  }
}

export default combineReducers({
  app,
  home,
//   createhost,
//   hostdetail,
//   registeruser,
//   data,
});
