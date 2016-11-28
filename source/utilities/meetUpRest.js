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

    var url = 'https://api.meetup.com/Code-for-Baltimore/events'

    fetch(url, options).then(function(response) {
      return response.body;
    }).then(function(data) {
      console.log(data);
      callback(data)
    }).catch(function(err) {
      console.log("Booo",err);
    });

  }

}
