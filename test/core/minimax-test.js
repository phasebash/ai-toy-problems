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

  describe('decider function contracts', () => {

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

    describe('minValue function contracts', () => {


      it('should provide a minValue function', () => {
        assert.typeOf(minimax.minValue, 'function');
      });

      it('should return a terminal action when a terminal state is detected', () => {
        actionsReturns([]);

        expect(minimax.minValue(state)).to.equal(state);

        stateMock.verify();
      });

      function makeActionWithTargetState(state) {
        const action     = new ActionInterface();
        const actionMock = sinon.mock(action);
        actionMock.expects('apply').returns(state);


        return actionMock;
      }

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

    describe('maxValue function contracts', () => {

      var minimax,
        actionApi,
        action,
        actionName,

        state, stateMock;

      beforeEach(() => {
        minimax = new Minimax();

        state = new StateInterface();

        stateMock = sinon.mock(state);

        stateMock.expects('actions').returns([]);
        stateMock.expects('utility').returns(100);
      });

      it('should return given state as max state since it is not yet implemented', () => {
        expect(minimax.maxValue(state)).to.equal(state);
      });

    });

  });



  describe('construction', () => {

    it('should provide constructor with no arguments', () => {
      const m = new Minimax();
    });

  });

});
