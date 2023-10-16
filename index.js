// where you will call all the functions you've written to generate the svg file
const {generateSVG, writeSVG} = require('./lib/generateSVG');
const {getInput} = require('./lib/prompt');
const {Circle, Triangle, Square} = require('./lib/shapes');

function shapeSelect(response) {
    const {text, textColor, shape, shapeColor} = response;
    if (shape === "Circle") {
        return new Circle(text, textColor, shape, shapeColor);
    };
    if (shape === "Triangle") {
        return new Triangle(text, textColor, shape, shapeColor);
    };
    if (shape === "Square") {
        return new Square(text, textColor, shape, shapeColor)
    };
};

function init() {
    getInput()
        .then((response) => shapeSelect(response))
        .then((selectedShape) => {
            writeSVG('./examples/logo.svg', generateSVG(selectedShape))
        });
};

init();