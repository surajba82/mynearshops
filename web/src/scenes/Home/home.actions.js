import ApiService from '../../ApiService';
import ErrorService from '../../ErrorService';
import {scrollToTop} from '../../util';

export const FETCH_STORES = 'FETCH_STORES';

export const fetchStores = () => async (dispatch, getState) => {
    
    try {
       const {data} = await ApiService.fetchStores();
    //   const normalisedData = await normaliseUploads(data.uploads || []);
  
    //   dispatch(populateUploads(normalisedData));
    } catch (e) {
      //const error = ErrorService.handle(e);
  
    //   dispatch(addErrorNotification(error));
    //   dispatch({
    //     type: CLEAR_UPLOAD_LIST_DATA,
    //   });
    }
    //dispatch(toggleUploadListLoading(false))
  };
