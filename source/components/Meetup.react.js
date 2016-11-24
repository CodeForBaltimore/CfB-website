var React = require('react');
var meetUpActions = require("../actions/meetUp.actions.js")
var meetUpStore = require("../stores/meetUp.store.js")

var NAME = React.createClass({

  getEvents:function() {
    meetUpStore.getEvents(function(data) {
        console.log("events from store");
    })

  }

  //default API ----------------

  //getDefaultProps: function(){
  //    return null;
  //},

  getInitialState: function() {
    return ({
      events:{}
    })



  },
  //
  componentWillMount: function(){
    meetUpActions.fetchEvents()
  },
  //
  componentDidMount: function(){
    meetUpStore.addChangeListener(this.getEvents)
  },
  //
  //componentWillReceiveProps: function(){},

  //shouldComponentUpdate: function(){},

  //componentWillUpdate: function(){},

  render: function() {
    return (
      <div className="container-fluid">
        <center>
          Meetup stuff...
        </center>
      </div>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  componentWillUnmount: function(){
    meetUpStore.removeChangeListener(this.getEvents)
  }

});

module.exports = NAME;
