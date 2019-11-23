import {POPULATE_STORES,} from './data.actions';
import { CLEAR_APP_DATA } from '../app/app.actions';
  
  
const initialState = {
    salesCatalogs: {
        byId: {},
        all: []
    },
    unauthenticatedCatalogs: {
        byId: {},
        all: []
    },
    stores: {
        byId: {},
        all: []
    },
    activeUploadsByCatalog: {
        byId: {},
        all: [],
        catalogId: '',
    },
    foldersByCatalog: {
        byId: {},
        all: [],
        catalogId: '',
    },
    activeUpload: {},
    products: {
        byId: {},
        all: []
    },
    skus: {
        byId: {},
        all: [],
    },
    activeWatch: {},
    watchProducts: {
        byId: {},
        all: []
    },
    watchSkus: {
        byId: {},
        all: [],
    },
    folders: {
        byId: {},
        all: [],
        timeFetched: '',
    },
    activeFolder: {},
    libraryProducts: {
        byId: {},
        all: []
    },
    finderProducts: {
        byId: {},
        all: []
    },
    brands: {
        byId: {},
        all: [],
    },
    userDetails: {
        userName: '',
        brand: {
            brandId: '',
            brandName: '',
            brandShortName: '',
            accessType: '',
        }
    }
    };

    export function data(state = initialState, action) {
    switch(action.type) {
        case POPULATE_SALES_CATALOGS:
        return {
            ...state,
            salesCatalogs: action.data,
        };
        case POPULATE_TON_SALES_CATALOGS:
        return {
            ...state,
            unauthenticatedCatalogs: action.data,
        };
        case POPULATE_UPLOADS:
        return {
            ...state,
            uploads: action.data,
        };
        case CLEAR_UPLOAD_LIST_DATA:
        return {
            ...state,
            uploads: initialState.uploads,
        };
        case POPULATE_UPLOAD_DETAIL:
        case POPULATE_FOLDER_DETAIL:
        case POPULATE_WATCH_DATA:
        case POPULATE_FINDER_DATA:
        return {
            ...state,
            ...(action.data),
        };
        case POPULATE_FILTER_DATA:
        return {
            ...state,
            [action.dataKey]: action.data,
        };
        case POPULATE_UPLOADS_BY_CATALOG:
        return {
            ...state,
            activeUploadsByCatalog: {
            ...action.data,
            catalogId: action.catalogId,
            }
        };
        case POPULATE_FOLDERS_BY_CATALOG:
        return {
            ...state,
            foldersByCatalog: {
            ...action.data,
            catalogId: action.catalogId,
            }
        };
        case POPULATE_FOLDERS:
        return {
            ...state,
            folders: action.data,
        };
        case POPULATE_BRANDS:
        return {
            ...state,
            brands: action.data,
        };
        case POPULATE_USER:
        return {
            ...state,
            userDetails: {
            ...state.userDetails,
            userName: action.data,
            }
        };
        case POPULATE_CHOSEN_BRAND:
        return {
            ...state,
            userDetails: {
            ...state.userDetails,
            brand: action.brand,
            },
        };
        case UPDATE_UPLOAD_NAME:
        return {
            ...state,
            activeUpload: {
            ...state.activeUpload,
            name: action.value
            }
        };
        case UPDATE_UPLOAD_DATE:
        return {
            ...state,
            activeUpload: {
            ...state.activeUpload,
            uploadDate: action.value
            }
        };
        case UPDATE_EDIT_FOLDER_NAME:
        return {
            ...state,
            activeFolder: {
            ...state.activeFolder,
            name: action.name,
            }
        };
        case CLEAR_UPLOAD_DETAIL_DATA:
        const {
            activeUpload,
            products,
            skus,
        } = initialState;

        return {
            ...state,
            activeUpload,
            products,
            skus,
        };
        case CLEAR_APP_DATA:
        return {
            ...initialState,
            salesCatalogs: state.salesCatalogs,
            brands: state.brands,
            userDetails: {
            ...state.userDetails,
            userName: state.userDetails.userName
            }
        };
        default:
        return state;
    }
}
