import WorkerPool from '../app/Worker/WorkerPool';
import {
  ARRAY_CHUNK_SIZE,
} from '../app/app.config';

const normaliseData = (uniqueKey) => async (data) => {
  if (data.length > 2 * ARRAY_CHUNK_SIZE) {
    // split data into chunks
    const chunkedData = await WorkerPool.exec({
      type: 'CHUNK_ARRAY',
      payload: {
        data,
      }
    });
    const normalisedChunks = await Promise.all(chunkedData.map(chunk => {
      return WorkerPool.exec({
        type: 'NORMALISE',
        payload: {
          uniqueKey,
          data: chunk,
        }
      })
    }));

    // flatten the results
    return WorkerPool.exec({
      type: 'FLATTEN',
      payload: {
        data: normalisedChunks,
        toObject: {
          all: [],
          byId: {}
        }
      }
    });
  }

  // dataset is too small -- do not chunk
  return WorkerPool.exec({
    type: 'NORMALISE',
    payload: {
      uniqueKey,
      data,
    }
  });
};

export const normaliseSalesCatalogs = normaliseData('catalogId');
export const normaliseTonSalesCatalogs = normaliseData('catalogId');
export const normaliseStores = normaliseData('_id');
export const normaliseProducts = normaliseData('variantId');
export const normaliseSkus = normaliseData('gtin');
export const normaliseFolders = normaliseData('folderId');
export const normaliseBrands = normaliseData('brandId');


const extractUniqueString = async (data) => {
  let flattened;
  if (data.some(datum => Array.isArray(datum))) {
    flattened = await WorkerPool.exec({
      type: 'FLATTEN',
      payload: {
        data,
      }
    })
  } else {
    flattened = data;
  }

  return WorkerPool.exec({
    type: 'UNIQUE',
    payload: {
      data: flattened,
    }
  });
};


export const flattenThenNormaliseSkus = (products) => WorkerPool.exec({
  type: 'FLATTEN',
  payload: {
    data: products,
    selector: 'skus'
  }
}).then(normaliseSkus);

const asyncTransformFn = (filterData, filterType) => WorkerPool.exec({
  type: 'FILTER_DATA_TRANSFORM',
  payload: {
    filterData,
    filterType,
  }
});

const getTransformFn = filter => typeof filter.dataTransform === 'function'
  ? filterData => asyncTransformFn(filterData, filter.filterKey)
  : extractUniqueString;





export const transformUserProfileData = (data) => {
  const {
    roles = [],
    ...rest
  } = data;

  const user = {...rest};
  const brands = roles.map(brand => {
    const {
      brandShortName: brandUrl,
      ...brandProps
    } = brand;

    return {
      ...brandProps,
      brandUrl
    };
  });

  return {
    user,
    brands,
  }
}
