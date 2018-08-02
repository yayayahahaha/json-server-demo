var Chance = require('chance');
var moment = require('moment');
var _ = require('lodash');
var chance = new Chance();
var formatString = 'YYYY-MM-DD HH:mm:ss';

var countTotal = function(array, key) {
    array = array ? array : [];
    key = key ? key : 'number';
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += parseFloat(array[i][key], 10);
    }
    console.log(total);
    return total;
};

var randomDateRange = function(hour) {
    var startTime = randomDate(),
        curremtTime = moment(startTime).format(formatString),
        startTimeArray = [];

    hour = hour ? hour : 144;

    for (var i = 0; i < hour; i++) {
        curremtTime = moment(curremtTime).add(1, 'h').format(formatString);
        startTimeArray.push({
            time: moment(curremtTime).format(formatString)
        });
    }
    return startTimeArray;
};
var randomName = function() {
    return chance.name();
};
var messArray = function(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};
var article = function(number) {
    number = number ? number : 10;
    var str = '';
    for (var i = 0; i < number; i++) {
        str += chance.paragraph();
    }
    return str;
};
var randomDate = function() {
    return moment(chance.hammertime()).format('YYYY-MM-DD HH:mm:ss');
};
var randomNumberFun = function(min, max) {
    return chance.integer({
        min: min,
        max: max
    });
};

module.exports = {
    randomDateRange: randomDateRange,
    randomName: randomName,
    messArray: messArray,
    article: article,
    randomDate: randomDate,
    randomNumberFun: randomNumberFun,
    countTotal: countTotal
};