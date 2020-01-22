import {
    TOGGLE_SHOP_LOADING,
  } from './shop.actions';
  
  
  export const initialState = {
    loading: false,
    loadingText: '',
  };
  
  function shop(state = initialState, action) {
    switch(action.type) {
      case TOGGLE_SHOP_LOADING:
      return {
          ...state,
          loading: typeof action.loading === 'undefined'
            ? !state.loading
            : action.loading,
          loadingText: action.message,
        };
      default:
        return {
          ...state,
        };
    }
  }
  
  export default shop;
  