var AppDispatcher = require('../dispatcher/AppDispatcher');
var meetUpConstants = require('../constants/meetUp.constants.js');
var EventEmitter = require('events').EventEmitter;
var React = require('react');
var assign = require('object-assign');

var ActionTypes = meetUpConstants.ActionTypes;

// Internal object of fields
var  _store ={};
_store.events = []


function loadEvents(data) {
  console.log("store loadEvents", data.results);
  // events from meeet up sort in ascending order by defualt
  if (data.results.length > 0){
    _store.events = data.results
  }else{
    _store.events = []
  }



}

// Merge our store with Node's Event Emitter
var meetUpStore = assign({}, EventEmitter.prototype, {

  getEvents: function() {
    return _store.events;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register dispatcher callback
AppDispatcher.register(function(action) {
  // var text;
  // Define what to do for certain actions
  // console.log(action.data);
  switch(action.type) {

    case ActionTypes.LOAD_EVENTS:
      loadEvents(action.data);
      break;

    default:
      return true;
  }

  // If action was acted upon, emit change event
  console.log("time to emit a change");
  meetUpStore.emitChange();
  return true;


});

module.exports = meetUpStore;
