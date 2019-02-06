import {
    REQUEST_COUNTIES, SET_SELECTED_COUNTY
} from '../types/actionTypes';

var countiesJson = require('../../data/fylker.json');

export const requestCounties = function () {
    var counties = [];
    for (var ob, i = 0; ob = countiesJson[i++];) {
        var name = ob.fylke;
       counties.push({key: i, name: name});
    }
    return ({
        type: REQUEST_COUNTIES,
        data: counties
    });
}

export const setSelectedCounty = function (county) {
    return (
        {
            type: SET_SELECTED_COUNTY,
            data: county
        }
    );
}