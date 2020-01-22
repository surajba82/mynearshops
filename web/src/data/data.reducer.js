import {
  POPULATE_STORES,
  POPULATE_SHOP_DETAIL,
  TOGGLE_PRODUCTS_LOADING,
  POPULATE_PRODUCTS,
  UPDATE_CART,
} from './data.actions';
import { CLEAR_APP_DATA } from '../app/app.actions';

const initialState = {    
    stores: {
      byId: {},
      all: []
    },
    shopDetail: {},
    categories: {},
    loading: false,
    loadingText: '',
    cartItems:[],
};

export function data(state = initialState, action) {
    switch(action.type) {
      case POPULATE_STORES:
        return {
          ...state,
          stores: action.data,
        };
      case POPULATE_SHOP_DETAIL:
        return {
          ...state,
          shopDetail: action.data,
        };
      case POPULATE_PRODUCTS:
        return {
          ...state,
          categories: action.data,
        };
      case UPDATE_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, action.product],
        };
      case CLEAR_APP_DATA:
        return {
          ...initialState,
          stores: state.stores,
        };
      case TOGGLE_PRODUCTS_LOADING:
        return {
          ...state,
          loading: typeof action.loading === 'undefined'
            ? !state.loading
            : action.loading,
          loadingText: action.message,
        };
      default:
        return state;
    }
  }