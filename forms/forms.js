var Chance = require('chance');
var moment = require('moment');
var _ = require('lodash');
var chance = new Chance();
var formatString = 'YYYY-MM-DD HH:mm:ss';
var lib = require('../lib.js');

var messArray = lib.messArray;
var article = lib.article;
var randomDate = lib.randomDate;
var randomNumberFun = lib.randomNumberFun;
var randomName = lib.randomName;
var randomDateRange = lib.randomDateRange;
var countTotal = lib.countTotal;

module.exports = function() {
    var data = {
        multiSelectFunction: []
    };

    for (var i = 0; i < 20; i++) {
        data.multiSelectFunction.push({
            name: randomName(),
            checkedKey: Math.random() > 0.5 ? true : false,
            useValue: i
        });
    }

    return data;
};