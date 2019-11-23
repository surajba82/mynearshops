import {ARRAY_CHUNK_SIZE} from '../app.config';


export const normalise = ({uniqueKey, data}) => {
  const normalisedEntries = data
    .reduce((normalised, entry) => {
      return {
        byId: {
          ...normalised.byId,
          [entry[uniqueKey]]: {
            ...entry,
          }
        },
        all: [
          ...normalised.all,
          entry[uniqueKey],
        ]
      }
    }, {
      byId: {},
      all: [],
    });

  return {
    ...normalisedEntries
  }
};

export const chunkArray = ({data: arr, chunkSize = ARRAY_CHUNK_SIZE}) => {
  let results = [];

  while (arr.length) {
    results.push(arr.splice(0, chunkSize));
  }

  return results;
};

export const flatten = ({data, selector = false, toObject = false}) => {
  if (toObject === false) {
    return data.reduce((flattened, chunk) => {
      const toPush = selector === false ? chunk : (chunk[selector] || []);

      return [
        ...flattened,
        ...toPush,
      ]
    }, []);
  }

  return data.reduce((flattened, chunk) => {
    return Object.entries(toObject).reduce((combined, [key, value]) => {
      const toPush = selector === false ? chunk[key] : chunk[selector][key];

      return {
        ...combined,
        [key]: Array.isArray(value) ? [
          ...flattened[key],
          ...toPush
        ] : {
          ...flattened[key],
          ...toPush
        }
      }
    }, flattened);
  }, {...toObject});
};

export const unique = ({data}) => {
  if (!Array.isArray(data)) {
    throw Error('Expecting array data type');
  }
  return [...new Set(data)];
};



export default {
  NORMALISE: normalise,
  CHUNK_ARRAY: chunkArray,
  FLATTEN: flatten,
  UNIQUE: unique,
}
