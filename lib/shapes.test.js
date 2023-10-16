// tests for comparing expected look of svg to user input
const {Circle, Triangle, Square} = require('./shapes');

describe('Shapes', () => {

    describe('Circle', () => {
        it('Should return true if shape that would be rendered is a cirlce', () => {
            const shape = new Circle();
            shape.shapeColor = 'blue';
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue"/>');
        });
    });

    describe('Triangle', () => {
        it('Should return true if shape that would be rendered is a triangle', () => {
            const shape = new Triangle();
            shape.shapeColor = 'blue';
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        });
    });

    describe('Square', () => {
        it('Should return true if shape that would be rendered is a square', () => {
            const shape = new Square();
            shape.shapeColor = 'blue';
            expect(shape.render()).toEqual('<rect x="80" y="10" width="150" height="150" fill="blue"/>');
        });
    });
});