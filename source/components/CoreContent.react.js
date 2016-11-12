var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;
var ContentCard = require('./ContentCard.react');

var NAME = React.createClass({

  //default API ----------------

  //getDefaultProps: function(){
  //    return null;
  //},

  //getInitialState: function() {},
  //
  //componentWillMount: function(){},
  //
  //componentDidMount: function(){},
  //
  //componentWillReceiveProps: function(){},

  //shouldComponentUpdate: function(){},

  //componentWillUpdate: function(){},

  render: function() {
    return (
      <div className='container-fluid'>
      <Row>
        <ContentCard
          headerText="Join Us"
        />
        <ContentCard
          headerText="Next Meetup"
        />
        <ContentCard
          headerText="Featured Projects"
          footerText="...Coming Soon"
        />
      </Row>

      <Row>
        <ContentCard
          headerText="Event Photos"
          footerText="...Coming Soon"
        />
      </Row>
      </div>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = NAME;
