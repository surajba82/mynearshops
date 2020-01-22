import ApiService from '../../ApiService';
import ErrorService from '../../ErrorService';
import {scrollToTop} from '../../util';
import {
  normaliseStores,
} from '../../data/data.transformers';
import {
    populateShopDetail,
} from '../../data/data.actions';

export const FETCH_STORES = 'FETCH_STORES';
export const CLEAR_APP_DATA = 'CLEAR_APP_DATA';
export const TOGGLE_SHOP_LOADING = 'TOGGLE_SHOP_LOADING';

export const toggleShopDetailLoading = (loadingStatus, message) => ({
  type: TOGGLE_SHOP_LOADING,
  loading: loadingStatus,
  message,
});


export const fetchShopDetail = () => async (dispatch, getState) => {
    
    dispatch(toggleShopDetailLoading(true, 'Loading Shop'));
    try {
      const shopId = window.location.pathname.substring(1).split('/')[0];
      ApiService.setParam('brand', shopId);
      
      const {data} = await ApiService.fetchShopDetail(shopId);
    //const normalisedData = await normaliseStores(data.data || []);  

    
      data.data.shopUrl = shopId;
   
      dispatch(populateShopDetail(data.data));
    } catch (e) {
      //const error = ErrorService.handle(e);
  
    //   dispatch(addErrorNotification(error));
    //   dispatch({
    //     type: CLEAR_UPLOAD_LIST_DATA,
    //   });
    }
    dispatch(toggleShopDetailLoading(false))
};



export const clearAppData = () => ({
    type: CLEAR_APP_DATA
})