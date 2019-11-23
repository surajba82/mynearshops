import * as mockConfig from '../ProductListFilters/productFilters.config';
import * as fns from './workerFunctions';
import {filterValueCounts} from './workerFunctions';
import {
  SORT_OPTIONS_DESIGNER
} from '../ProductListSort/productSort.config';
import {PRODUCT_FILTER_STOCK_STATUS_OPTION_ONLINE} from '../ProductListFilters/productFilters.config';
import {PRODUCT_FILTER_STOCK_STATUS} from '../ProductListFilters/productFilters.config';
import {PRODUCT_FILTER_STOCK_STATUS_OPTION_ORDERED} from '../ProductListFilters/productFilters.config';
import {PRODUCT_FILTER_STOCK_STATUS_OPTION_DELIVERED} from '../ProductListFilters/productFilters.config';
import {FILTER_TYPES} from '../ProductListFilters/productFilters.config';

describe('worker functions', () => {

  describe('applyAllFilters', () => {

    it('should apply filtering functions to product array', () => {
      const filterA = () => product => product.isA;
      const filterB = () => product => product.isB;
      const filterC = () => product => product.isC;

      mockConfig.PRODUCT_FILTER_METHODS = {
        filterA,
        filterB,
        filterC,
      };

      const mockFilters = [
        {key: 'filterA', param: ''},
        {key: 'filterC', param: ''},
        ];
      const mockProducts = [
        {key: 1, isA: true, isB: true, isC: true},
        {key: 2, isA: true, isB: true, isC: false},
        {key: 3, isA: true, isB: false, isC: true},
        {key: 4, isA: true, isB: false, isC: false},
        {key: 5, isA: false, isB: false, isC: true},
        {key: 6, isA: false, isB: false, isC: false},
      ];

      const filtered = fns.applyAllFilters({
        productFilters: mockFilters,
        products: mockProducts,
        state: {}
      });
      const expectedKeys = [1, 3];

      expect(filtered.map(result => result.key)).toEqual(expectedKeys);
    });

    it('should handle OR conditions', () => {
      const filterA = (val) => product => product.value === val;
      const filterC = () => product => product.isC;

      mockConfig.PRODUCT_FILTER_METHODS = {
        filterA,
        filterC,
      };

      const mockFilters = [
        {key: 'filterA', param: ['foo', 'bar'], type: FILTER_TYPES.FILTER_TYPE_AUTO_SUGGEST},
        {key: 'filterC', param: ''},
      ];
      const mockProducts = [
        {key: 1, isC: true, value: 'foo'},
        {key: 2, isC: false, value: 'bar'},
        {key: 3, isC: true, value: 'baz'},
        {key: 4, isC: false, value: 'foo'},
        {key: 5, isC: true, value: 'bar'},
        {key: 6, isC: false, value: 'baz'},
      ];

      const filtered = fns.applyAllFilters({
        productFilters: mockFilters,
        products: mockProducts,
        state: {}
      });
      const expectedKeys = [1, 5];

      expect(filtered.map(result => result.key)).toEqual(expectedKeys);
    });

  });

  describe('normalise', () => {

    it('should normalise an array of objects by selected key', () => {

      const data = [
        {id: 1, name: 'Foo'},
        {id: 2, name: 'Bar'},
        {id: 3, name: 'Baz'}
      ];
      const expected = {
        byId: {
          1: {id: 1, name: 'Foo'},
          2: {id: 2, name: 'Bar'},
          3: {id: 3, name: 'Baz'},
        },
        all: [1, 2, 3],
      };

      expect(fns.normalise({
        uniqueKey: 'id',
        data
      })).toEqual(expected);

    });

  });

  describe('chunkArray', () => {

    it('should split the array into the indicated chunks', () => {
      const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const chunkSize = 3;
      const expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

      expect(fns.chunkArray({data, chunkSize})).toEqual(expected);
    });

  });

  describe('flatten', () => {

    it('should flatten array into one big array', () => {
      const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
      const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      expect(fns.flatten({data})).toEqual(expected);
    });

    it('should flatten array based on selector', () => {
      const data = [
        {foo: [1], bar: [1, 4]},
        {foo: [2, 3, 4], bar: [2, 8]},
        {foo: [6, 9, 10], bar: []},
      ];
      const selector = 'foo';
      const expected = [1, 2, 3, 4, 6, 9, 10];

      expect(fns.flatten({data, selector})).toEqual(expected);
    });

    it('should flatten array into indicated object', () => {
      const data = [
        {all: [1, 2], byId: {1: {id: 1}, 2: {id: 2}}},
        {all: [3], byId: {3: {id: 3}}},
        {all: [4, 5], byId: {4: {id: 4}, 5: {id: 5}}},
      ];
      const toObject = {
        all: [],
        byId: {}
      };
      const expected = {
        all: [1, 2, 3, 4, 5],
        byId: {
          1: {id: 1},
          2: {id: 2},
          3: {id: 3},
          4: {id: 4},
          5: {id: 5}
        }
      };

      expect(fns.flatten({data, toObject})).toEqual(expected);
    });

  });

  describe('unique', () => {

    it('should return an array of unique elements', () => {
      const data = [
        'foo',
        'bar',
        'foo',
        'baz',
        'bar',
      ];
      const expected = [
        'foo',
        'bar',
        'baz'
      ];

      expect(fns.unique({data})).toEqual(expected);
    });

  });

  describe('filterValueCounts', () => {

    it('should return count of matching items per filter value', () => {
      const testFilter = (value) => product => product.value.includes(value);

      mockConfig.PRODUCT_FILTER_METHODS = {
        testFilter,
      };

      const mockFilterValues = [
        'foo',
        'bar',
        'baz',
        'qux',
      ];
      const mockFilterKey = 'testFilter';
      const mockItems = [
        {key: 1, value: 'foo'},
        {key: 2, value: 'foobar'},
        {key: 3, value: 'foobarbaz'},
      ];

      const expected = {
        foo: 3,
        bar: 2,
        baz: 1,
        qux: 0,
      };

      expect(filterValueCounts({
        filterValues: mockFilterValues,
        filterKey: mockFilterKey,
        list: mockItems
      })).toEqual(expected);
    });

    it('should handle filter values of object type', () => {
      const testFilter = (value) => product => product.value.includes(value);

      mockConfig.PRODUCT_FILTER_METHODS = {
        testFilter,
      };

      const mockFilterValues = [
        {value: 'foo', key: 'foo'},
        {value: 'bar', key: 'bar'},
        {value: 'baz', key: 'baz'},
        {value: 'qux', key: 'qux'},
      ];
      const mockFilterKey = 'testFilter';
      const mockItems = [
        {key: 1, value: 'foo'},
        {key: 2, value: 'foobar'},
        {key: 3, value: 'foobarbaz'},
      ];

      const expected = {
        foo: 3,
        bar: 2,
        baz: 1,
        qux: 0,
      };

      expect(filterValueCounts({
        filterValues: mockFilterValues,
        filterKey: mockFilterKey,
        list: mockItems
      })).toEqual(expected);
    });

    it('should be able to count using filters that need other data', () => {
      const testFilter = (value, {brand}) => product => {
        if (brand.brandName === 'opposite') {
          return !product.value.includes(value);
        }
        return product.value.includes(value);
      };

      mockConfig.PRODUCT_FILTER_METHODS = {
        testFilter,
      };

      const mockFilterValues = [
        'foo',
        'bar',
        'baz',
        'qux',
      ];
      const mockFilterKey = 'testFilter';
      const mockItems = [
        {key: 1, value: 'foo'},
        {key: 2, value: 'foobar'},
        {key: 3, value: 'foobarbaz'},
      ];
      const mockOtherData = {
        brand: {brandName: 'opposite'},
      };
      const expected = {
        foo: 0,
        bar: 1,
        baz: 2,
        qux: 3,
      };

      expect(filterValueCounts({
        filterValues: mockFilterValues,
        filterKey: mockFilterKey,
        list: mockItems,
        otherData: mockOtherData
      })).toEqual(expected);
    });

  });

  describe('sortProducts', () => {

    const products = [
      {
        key: 1,
        designer: 'Foo',
        onlineTotalCost: {amount: 100},
        orderedTotalCost: {amount: 1000},
        deliveredTotalCost: {amount: 10},
      },
      {
        key: 2,
        designer: 'Bar',
        onlineTotalCost: {amount: 10},
        orderedTotalCost: {amount: 100},
        deliveredTotalCost: {amount: 1000},
      },
      {
        key: 3,
        designer: 'Baz',
        onlineTotalCost: {amount: 1000},
        orderedTotalCost: {amount: 10},
        deliveredTotalCost: {amount: 100},
      }
    ];

    it('should sort products by designer', () => {
      const expected = [2, 3, 1];

      expect(fns.sortProducts({
        products,
        sortKey: SORT_OPTIONS_DESIGNER.KEY,
        filterValues: {}
      }).map(({key}) => key)).toEqual(expected);
    });

  });

});
