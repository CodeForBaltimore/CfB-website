var AppDispatcher = require('../dispatcher/AppDispatcher');
var exampleConstants = require('../constants/exampleConstants');


var ActionTypes = exampleConstants.ActionTypes;

var exampleActions = {

  functionName: function(data) {


    AppDispatcher.dispatch({
      type: ActionTypes.ACTIONNAME,
      data: data
    })
  }



};

module.exports = exampleActions;
