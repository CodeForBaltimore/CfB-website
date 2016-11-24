require('es6-promise').polyfill();
require('isomorphic-fetch');


module.exports={

getEvents:function(callback) {

  fetch('https://api.meetup.com/Code-for-Baltimore/events')
      .then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
      .then(function(events) {
          console.log(events);
          // callback(events)
      });

}




}
