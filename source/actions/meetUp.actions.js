var AppDispatcher = require('../dispatcher/AppDispatcher');
var meetUpConstants = require('../constants/meetUp.constants.js');
var meetUpRest = require('../utilities/meetUpRest.js')


var ActionTypes = meetUpConstants.ActionTypes;

var meetUpActions = {

  fetchEvents: function() {
      console.log("actions fetch events");
      meetUpRest.fetchEvents(function(data) {
      console.log(data);

      AppDispatcher.dispatch({
        type: ActionTypes.LOAD_EVENTS,
        data: data
      })

    });
  }



};

module.exports = meetUpActions;
