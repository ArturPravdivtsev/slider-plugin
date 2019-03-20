import subtract from '../src/subtract';

describe('Substract function', () => {
    it('should be a function', () => {
        expect(typeof subtract).toBe('function');
    });

    it('should return correct result', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    it('should return NaN if called without arguments', () => {
        expect(subtract()).toBeNaN();
    });
});