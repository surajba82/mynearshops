import ApiService from '../ApiService';

export const POPULATE_STORES = 'POPULATE_STORES';
export const POPULATE_SHOP_DETAIL = 'POPULATE_SHOP_DETAIL';
export const POPULATE_PRODUCTS = 'POPULATE_PRODUCTS';
export const TOGGLE_PRODUCTS_LOADING = 'TOGGLE_PRODUCTS_LOADING';
export const UPDATE_CART = 'UPDATE_CART';

const populateDataObject = (type) => (data) => ({type, data});

export const populateStores = populateDataObject(POPULATE_STORES);
export const populateShopDetail = populateDataObject(POPULATE_SHOP_DETAIL);
export const populateProducts = populateDataObject(POPULATE_PRODUCTS);

export const toggleProductsLoading = (loadingStatus, message) => ({
  type: TOGGLE_PRODUCTS_LOADING,
  loading: loadingStatus,
  message,
});

export const updateCart = (product) => ({
  type: UPDATE_CART,
  product
});

export const fetchProducts = () => async (dispatch, getState) => {
    
    dispatch(toggleProductsLoading(true, 'Fetching Products'));
    try {
    //   const shopId = window.location.pathname.substring(1).split('/')[0];
    //   ApiService.setParam('brand', shopId);
      
      const {data} = await ApiService.fetchProducts();

    
   
      dispatch(populateProducts(data.data));
    } catch (e) {
      console.error(e);
    }
    dispatch(toggleProductsLoading(false))
};