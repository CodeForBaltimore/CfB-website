require('es6-promise').polyfill();
var fetch = require('isomorphic-fetch');
var config = require("../../private/config.js")


module.exports={

  postNewEmail:function(emailAddr, callback) {
    console.log("postNewEmail", emailAddr);

    var options ={
      method: "POST",
      body: JSON.stringify({email:emailAddr}),
      headers: {
        "Content-Type": "application/json"
      }
    }

    fetch('./slackinvite', options)
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
