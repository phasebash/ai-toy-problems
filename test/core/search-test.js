'use strict';

const Search = require('../../src/core/search');
const assert  = require('chai').assert;

describe('search', () => {

  describe('function contracts', () => {

    it('should export function from module declaration', () => {
      assert.typeOf(Search, 'function');
    });

    it('should provide a search function', () => {
      assert.typeOf(new Search().search, 'function');
    });

    it('should provide a static dfs function', () => {
      assert.typeOf(Search.dfs, 'function');
    });

  });

  describe('depth-first search', () => {
    
  });

});
