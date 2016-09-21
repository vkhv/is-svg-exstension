var isSvg = require('./index');
var assert = require('assert');

var svgFileNameExample = '/vladislav/khvostov.svg';
var inCorrectFile = '/svg/isnt-svg.png'


describe('Check file ending should be .svg', function() {
	it('Check string /vladislav/khvostov.svg', function () {
		assert(isSvg(svgFileNameExample))
	});
});

describe('Check string which contain svg, but it isnt in end', function() {
	it('Check incorrect string /svg/isnt-svg.png', function () {
		isSvg(inCorrectFile) === false
	})
});
