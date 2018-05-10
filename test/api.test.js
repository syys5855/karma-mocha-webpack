import { foo, no, add } from '../src/api.js'


describe('import from module', () => {
    it('equal deep', () => {
        expect(foo).eql({ bar: 'bar', baz: 'baz' });
    });
    it('1+1 should be 2', () => {
        expect(add(1, 1)).to.equal(2);
    })
})