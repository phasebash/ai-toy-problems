'use strict';

const Minimax = require('../../src/core/minimax');
const chai    = require('chai');
const assert  = chai.assert;
const expect  = chai.expect;
const sinon   = require('sinon');

describe('minimax', () => {

  describe('module contracts', () => {

    it('should export function from module declaration', () => {
      assert.typeOf(Minimax, 'function');
    });

  });

  describe('decider function contracts', () => {

    it('should provide a decider function', () => {
      assert.typeOf(new Minimax().decide, 'function');
    });

    it('should return an object when invoked', () => {
      assert.typeOf(new Minimax().decide({}), 'object');
    });

  });

  describe('minValue function contracts', () => {

    var minimax,
        actionFn,
        transitionFn,
        terminationFn,
        utilityFn,

        state;

    beforeEach(() => {
      terminationFn = sinon.expectation.create('terminatonFn');
      utilityFn = sinon.expectation.create('utilityFn');

      minimax = new Minimax(actionFn, transitionFn, terminationFn, utilityFn);
      
      state = {};
    });

    it('should provide a minValue function', () => {
      assert.typeOf(minimax.minValue, 'function');
    });

    it('should return an object when invoked', () => {
      assert.typeOf(minimax.minValue({}), 'object');
    });

    it('should return an object with property "action" when invoked', () => {
      assert.typeOf(minimax.minValue({}).action, 'object');
    });

    it('should return an object with property "utility" when invoked', () => {
      assert.typeOf(minimax.minValue({}).utility, 'object');
    });

    it('should return a terminal action when a terminal state is detected', () => {
      terminationFn.withArgs(state).returns(true);
      utilityFn.withArgs(state).returns(100);

      expect(minimax.minValue(state)).to.deep.equal({ action: null, utility: 100 });

      terminationFn.verify();
      utilityFn.verify();
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
