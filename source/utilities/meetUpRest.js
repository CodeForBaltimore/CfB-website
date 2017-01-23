require('es6-promise').polyfill();
var fetch = require('isomorphic-fetch');
var config = require("../../private/config.js")


module.exports={

  fetchEvents:function(callback) {

    fetch('./meetups')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(json) {
        callback(json);
    });

  }
}
