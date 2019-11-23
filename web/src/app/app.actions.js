import ApiService from '../ApiService';
import ErrorService from '../ErrorService';
import {scrollToTop} from '../util';
import {
  populateStores,
} from '../data/data.actions';

import {normaliseStores} from '../data/data.transformers';

export const FETCH_STORES = 'FETCH_STORES';
export const CLEAR_APP_DATA = 'CLEAR_APP_DATA';

export const fetchStores = () => async (dispatch, getState) => {
    try {
       const {data} = await ApiService.fetchStores();

       console.log(data);
    //   const normalisedData = await normaliseUploads(data.uploads || []);
  
    //   dispatch(populateStores(data));
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