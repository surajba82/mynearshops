import {POPULATE_STORES} from './data.actions';
import { CLEAR_APP_DATA } from '../app/app.actions';

const initialState = {    
    stores: {
      byId: {},
      all: []
    },
};

export function data(state = initialState, action) {
    switch(action.type) {
      case POPULATE_STORES:
        return {
          ...state,
          stores: action.data,
        };

      case CLEAR_APP_DATA:
        return {
          ...initialState,
          stores: state.stores,
        };
      default:
        return state;
    }
  }