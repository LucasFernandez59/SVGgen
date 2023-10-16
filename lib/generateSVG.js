// function for generating svg
const shapes = require('./shapes');
const fs = require('fs');

function generateSVG(response) {
    return `<svg width='300' height='200'>
        ${response.render()}
        <text x='150' y='100' font-size='40' text-anchor='middle' alignement-baseline='middle' fill=${response.textColor}>${response.text}</text>
    </svg>`
};

function writeSVG(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('SVG file created'))
};

module.exports = {
    generateSVG,
    writeSVG
};