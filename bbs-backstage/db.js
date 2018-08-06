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
        message: []
    };

    for (var i = 0; i < 20; i++) {
        var tempObject = {
            content: chance.paragraph({ sentences: 1 }),
            start_time: randomDate(),
            end_time: '',
            state: randomNumberFun(0, 1),
            sort: i
        };
        tempObject.end_time = moment(tempObject.start_time).add(randomNumberFun(7, 30), 'days').format(formatString);

        data.message.push(tempObject);
    }

    return data;
};