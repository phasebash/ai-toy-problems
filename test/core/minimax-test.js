'use strict';

const Minimax = require('../../src/core/minimax');
const assert  = require('chai').assert;

describe('minimax', () => {

  describe('decider function contracts', () => {

    it('should export function from module declaration', () => {
      assert.typeOf(Minimax, 'function');
    });

    it('should provide a decider function', () => {
      assert.typeOf(new Minimax().decide, 'function');
    });

    it('should return an object when invoked', () => {
      assert.typeOf(new Minimax().decide({}), 'object');
    });

  });

});
