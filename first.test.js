const rectangle = require('./rectangle');
describe('RectangleArea', () => { 
    test('should return 20 for length 5 and width 4', () => {
        expect(rectangle.area(5, 4)).toBe(20);
    }
    );
    test (`trhrows an error for negative length`, () => {
        expect(() => rectangle.area(-5, 4)).toThrow('Length and width must be positive numbers');
    }   
    );
    test (`trhrows an error for negative width`, () => {
        expect(() => rectangle.area(5, -4)).toThrow('Length and width must be positive numbers');
    }   
    );  
    test (`trhrows an error for zero length`, () => {
        expect(() => rectangle.area(0, 4)).toThrow('Length and width must be positive numbers');
    }   
    );  
    test (`trhrows an error for zero width`, () => {
        expect(() => rectangle.area(5, 0)).toThrow('Length and width must be positive numbers');
    }   
    );
    test('should return 0 for length 0 and width 0', () => {
        expect(rectangle.area(0, 0)).toBe(0);
    });
})