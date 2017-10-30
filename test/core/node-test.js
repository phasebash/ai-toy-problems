'use strict';

const Node = require('../../src/core/node');
const assert  = require('chai').assert;
const expect  = require('chai').expect;

describe('node', () => {

  describe('function contracts', () => {

    it('should export function from module declaration', () => {
      assert.typeOf(Node, 'function');
    });

    it('it should provide a children function that is a generator', () => {
      const gen = new Node([]).children();

      expect(gen.next).to.be.an('function');
      expect(gen.next()).to.have.property('done');
      expect(gen.next()).to.have.property('value');
    });

  });

  describe('.children', () => {
    
    it('should provide each item of the given children', () => {
      const n = new Node(['1', '2']);

      const children = n.children();

      expect(children.next().value).to.be.eq('1');
      expect(children.next().value).to.be.eq('2');

      expect(children.next().done).to.be.eq(true);
    });

    it('should provide children with ids', () => {
      const n = new Node([]);
      const m = new Node([]);

      expect(n.id).to.be.lt(m.id);
    });

  });

});
