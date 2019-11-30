export const POPULATE_STORES = 'POPULATE_STORES';

const populateDataObject = (type) => (data) => ({type, data});

export const populateStores = populateDataObject(POPULATE_STORES);