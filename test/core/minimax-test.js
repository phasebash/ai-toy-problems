'use strict';

const Minimax = require('../../src/core/minimax');
const chai    = require('chai');
const assert  = chai.assert;
const expect  = chai.expect;
const sinon   = require('sinon');

const StateInterface  = require('../../src/core/state');
const ActionInterface = require('../../src/core/action');

describe('minimax', () => {

  describe('module contracts', () => {

    it('should export function from module declaration', () => {
      assert.typeOf(Minimax, 'function');
    });

  });

  describe('decider', () => {

    it('should provide a decider function', () => {
      assert.typeOf(new Minimax().decide, 'function');
    });

    it('should return an object when invoked', () => {
      assert.typeOf(new Minimax().decide({}), 'object');
    });

  });

  describe('support functions', () => {

      var minimax,
        actionApi,
        action,

        state,
        minState, maxState,
        minAction, maxAction,

        stateMock,
        minStateMock, maxStateMock,
        minActionMock, maxActionMock;

      beforeEach(() => {
        minimax = new Minimax();

        state = new StateInterface('root state');
        minState = new StateInterface('minimum child');
        maxState = new StateInterface('maximum child');
        minAction = new ActionInterface();
        maxAction = new ActionInterface();

        stateMock = sinon.mock(state);
        minStateMock = sinon.mock(minState);
        maxStateMock = sinon.mock(maxState);
        minActionMock = sinon.mock(minAction);
        maxActionMock = sinon.mock(maxAction);

        minStateMock.expects('utility').atLeast(1).returns(1);
        maxStateMock.expects('utility').atLeast(1).returns(100);
      });

      function actionsReturns(actions) {
        stateMock.expects('actions').returns(actions);
      }

    describe('minValue', () => {

      beforeEach(() => {
        minimax.maxValue = function(state) { return state };
      });

      it('should provide a minValue function', () => {
        assert.typeOf(minimax.minValue, 'function');
      });

      it('should return a terminal action when a terminal state is detected', () => {
        actionsReturns([]);

        expect(minimax.minValue(state)).to.equal(state);

        stateMock.verify();
      });

      it('should select the minimum of all maximized opponent states', () => {
        minActionMock.expects('apply').returns(minState);
        maxActionMock.expects('apply').returns(maxState);

        actionsReturns([maxAction, minAction]);

        expect(minimax.minValue(state)).to.equal(minState);

        minActionMock.verify();
        maxActionMock.verify();
        stateMock.verify();
        minStateMock.verify();
        maxStateMock.verify();
      });

    });

    describe('maxValue', () => {

      beforeEach(() => {
        minimax.minValue = function(state) { return state };
      });

      it('should return a terminal action when a terminal state is detected', () => {
        actionsReturns([]);

        expect(minimax.maxValue(state)).to.equal(state);

        stateMock.verify();
      });

      it('should select the maximum of all minimized opponent states', () => {
        minActionMock.expects('apply').returns(minState);
        maxActionMock.expects('apply').returns(maxState);

        actionsReturns([minAction, maxAction]);

        expect(minimax.maxValue(state)).to.equal(maxState);

        minActionMock.verify();
        maxActionMock.verify();
        stateMock.verify();
        minStateMock.verify();
        maxStateMock.verify();
      });

    });
  });



  describe('construction', () => {

    it('should provide constructor with no arguments', () => {
      const m = new Minimax();
    });

  });

});
