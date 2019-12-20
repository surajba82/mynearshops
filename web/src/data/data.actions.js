export const POPULATE_STORES = 'POPULATE_STORES';
export const POPULATE_SHOP_DETAIL = 'POPULATE_SHOP_DETAIL';

const populateDataObject = (type) => (data) => ({type, data});

export const populateStores = populateDataObject(POPULATE_STORES);

export const populateShopDetail = populateDataObject(POPULATE_SHOP_DETAIL);