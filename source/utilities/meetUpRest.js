require('es6-promise').polyfill();
require('isomorphic-fetch');
var request = require('request');
var config = require("../../private/config.js")
require("meetup-api")


module.exports={

  fetchEvents:function(callback) {


     var parameters ={
       group_urlname:"Code-for-Baltimore",
       text_format:"plain"
     }


     meetup.getEvents(parameters, function(err, resp) {
        console.log(err, resp);
    });

   }

}
