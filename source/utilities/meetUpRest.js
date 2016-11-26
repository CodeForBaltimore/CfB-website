require('es6-promise').polyfill();
require('isomorphic-fetch');


module.exports={

  fetchEvents:function(callback) {

    const options = {
      method: 'GET',
      mode:"no-cors",
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      }
    }

    fetch('https://api.meetup.com/Code-for-Baltimore/events', options)
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log("respose",response);
            return response.json()
        })
        .then(function(events) {
            console.log("events",events);
            callback(events)
        });

  }

}
