import { combineReducers } from 'redux';
import {data} from '../data/data.reducer';
import home from '../scenes/Home/home.reducer';
import shop from '../scenes/Shop/shop.reducer';

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
  data,
  home,
  shop,
});
