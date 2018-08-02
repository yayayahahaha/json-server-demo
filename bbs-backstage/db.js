// db.js
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
    api1: [],
    api2: {}
  };

  for (var i = 0; i < 20; i++) {
    data.api1.push({
      randomNumber: Math.random()
    });
  }
  data.api2.key = 'value';

  return data;
};