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

  describe('construction', () => {
    
    var f;

    beforeEach(() => {
      f = function() {}; 
    });

    it('should provide action function as first argument', () => {
      const m = new Minimax(f);
      
      assert.equal(m._actionFn, f); 
    });

    it('should provide transition function as second argument', () => {
      const m = new Minimax(null, f);
      
      assert.equal(m._transitionFn, f); 
    });

    it('should provide termination function as third argument', () => {
      const m = new Minimax(null, null, f);
      
      assert.equal(m._terminationFn, f); 
    });

    it('should provide utility function as fourth argument', () => {
      const m = new Minimax(null, null, null, f);
      
      assert.equal(m._utilityFn, f); 
    });
  });

});
