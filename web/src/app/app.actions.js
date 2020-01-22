import ApiService from '../ApiService';
import ErrorService from '../ErrorService';
import {scrollToTop} from '../util';
import {
  normaliseStores,
} from '../data/data.transformers';
import {
  populateStores,
} from '../data/data.actions';


export const FETCH_STORES = 'FETCH_STORES';
export const CLEAR_APP_DATA = 'CLEAR_APP_DATA';

export const fetchStores = () => async (dispatch, getState) => {
    try {
      const {data} = await ApiService.fetchStores();
      const normalisedData = await normaliseStores(data.data || []);  
   
      dispatch(populateStores(normalisedData));
    } catch (e) {
      //const error = ErrorService.handle(e);
  
    //   dispatch(addErrorNotification(error));
    //   dispatch({
    //     type: CLEAR_UPLOAD_LIST_DATA,
    //   });
    }
    //dispatch(toggleUploadListLoading(false))
};

export const clearAppData = () => ({
    type: CLEAR_APP_DATA
})