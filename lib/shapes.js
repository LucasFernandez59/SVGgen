// Classes for generating svg based on user input, depending on shape they choose
class Shapes {
    constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
    };
};

class Circle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor)};
    render () {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`
    };
};

class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor)};
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
    };
};

class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor)};
    render () {
        return `<rect x="80" y="10" width="150" height="150" fill="${this.shapeColor}"/>`
    };
};


module.exports = {
    Shapes,
    Circle,
    Square,
    Triangle
};