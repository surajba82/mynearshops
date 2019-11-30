

const normaliseData = (uniqueKey) => async (data) => {      
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


export const normaliseStores = normaliseData('_id');


